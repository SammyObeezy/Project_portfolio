import React, { useState } from "react";

const BookingDetails = ({ book, onClose, onConfirm }) => {
  const [rentalDays, setRentalDays] = useState(1);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  // Calculate total cost
  const calculateTotal = () => {
    const subtotal = book?.rentalPrice * rentalDays || 0;
    const serviceFee = subtotal * 0.1; // 10% service fee
    const total = subtotal + serviceFee;
    return {
      subtotal: subtotal.toFixed(2),
      serviceFee: serviceFee.toFixed(2),
      total: total.toFixed(2),
    };
  };

  // Handle date changes
  const handlePickupDateChange = (e) => {
    const selected = e.target.value;
    setPickupDate(selected);

    // Calculate return date based on rental days
    if (selected) {
      const returnDate = new Date(selected);
      returnDate.setDate(returnDate.getDate() + parseInt(rentalDays));
      setReturnDate(returnDate.toISOString().split("T")[0]);
    }
  };

  // Handle rental days change
  const handleRentalDaysChange = (e) => {
    const days = parseInt(e.target.value);
    setRentalDays(days);

    // Update return date
    if (pickupDate) {
      const returnDate = new Date(pickupDate);
      returnDate.setDate(returnDate.getDate() + days);
      setReturnDate(returnDate.toISOString().split("T")[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!agreeToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    if (!pickupDate || !returnDate) {
      setError("Please select valid dates");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Move to confirmation step
      setStep(2);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum and maximum dates
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split("T")[0];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {step === 1 ? (
          // Booking Details Form
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900">
                Booking Details
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Book Summary */}
            <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
              <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={book?.imageURL || "/api/placeholder/96/96"}
                  alt={book?.rentalTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {book?.rentalTitle}
                </h3>
                <p className="text-sm text-gray-600">by {book?.renterName}</p>
                <p className="text-sm text-gray-600">{book?.location}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  Ksh {book?.rentalPrice}/day
                </p>
              </div>
            </div>

            {/* Rental Period */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Rental Period</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    min={getMinDate()}
                    max={getMaxDate()}
                    value={pickupDate}
                    onChange={handlePickupDateChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="90"
                    value={rentalDays}
                    onChange={handleRentalDaysChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  disabled
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    checked={paymentMethod === "mpesa"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <span className="font-medium text-gray-900">M-Pesa</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <span className="font-medium text-gray-900">
                    Cash on Pickup
                  </span>
                </label>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  Ksh {calculateTotal().subtotal}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-medium">
                  Ksh {calculateTotal().serviceFee}
                </span>
              </div>
              <div className="flex justify-between text-base font-medium pt-2 border-t">
                <span>Total</span>
                <span>Ksh {calculateTotal().total}</span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to the terms and conditions, including returning the
                  book in its original condition and paying any applicable late
                  fees or damage charges.
                </span>
              </label>
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </div>
        ) : (
          // Confirmation Screen
          <div className="p-6 text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600">
                Your booking reference number is: #
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl text-left space-y-3">
              <h3 className="font-medium text-gray-900">Booking Details:</h3>
              <div className="text-sm space-y-2">
                <p>
                  <span className="text-gray-600">Pickup Date:</span>{" "}
                  {pickupDate}
                </p>
                <p>
                  <span className="text-gray-600">Return Date:</span>{" "}
                  {returnDate}
                </p>
                <p>
                  <span className="text-gray-600">Total Amount:</span> Ksh{" "}
                  {calculateTotal().total}
                </p>
                <p>
                  <span className="text-gray-600">Payment Method:</span>{" "}
                  {paymentMethod === "mpesa" ? "M-Pesa" : "Cash on Pickup"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                We've sent a confirmation email with all the details to your
                registered email address.
              </p>
              <button
                onClick={onClose}
                className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-xl transition-all duration-200"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
