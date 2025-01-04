import React, { useState, useCallback } from "react";
import { backendUrl } from "../App";

const RentForm = () => {
  const [formData, setFormData] = useState({
    rentalTitle: "",
    renterName: "",
    rentalPrice: "",
    location: "",
    genre: "",
    imageURL: "",
    rentalDescription: "",
    condition: "",
    availableFrom: "",
    availableTo: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Romance",
    "Mystery",
    "Fantasy",
    "Self Development",
    "Finance",
    "Health",
    "Biography",
    "Children's Books",
  ];

  const conditions = ["Like New", "Very Good", "Good", "Fair"];

  // Function to get currency information based on country code
  const getCurrencyFromCountry = async (countryCode) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      const [data] = await response.json();
      const currencyCode = Object.keys(data.currencies)[0];
      const symbol = data.currencies[currencyCode].symbol;
      setCurrency(currencyCode);
      setCurrencySymbol(symbol);
    } catch (error) {
      console.error("Failed to fetch currency:", error);
      setCurrency("USD");
      setCurrencySymbol("$");
    }
  };

  const fetchLocationName = useCallback(async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      const data = await response.json();

      const subcounty =
        data.address.suburb ||
        data.address.town ||
        data.address.city_district ||
        data.address.neighbourhood;
      const county = data.address.city || data.address.county;

      if (data.address.country_code) {
        await getCurrencyFromCountry(data.address.country_code.toUpperCase());
      }

      return subcounty && county
        ? `${subcounty}, ${county}`
        : "Location not available";
    } catch (error) {
      console.error("Failed to fetch location name:", error);
      return "Location not available";
    }
  }, []);

  const getCurrentLocation = useCallback(async () => {
    setIsLoadingLocation(true);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      });

      const { latitude, longitude } = position.coords;
      const locationName = await fetchLocationName(latitude, longitude);

      setFormData((prev) => ({
        ...prev,
        location: locationName,
      }));
    } catch (error) {
      console.error("Location error:", error);
      setErrors((prev) => ({
        ...prev,
        location: "Failed to get location. Please enter manually.",
      }));
    } finally {
      setIsLoadingLocation(false);
    }
  }, [fetchLocationName]);

  const FormGroup = useCallback(
    ({ children }) => <div className="mb-4">{children}</div>,
    []
  );

  const Label = useCallback(
    ({ htmlFor, children }) => (
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {children}
      </label>
    ),
    []
  );

  const Input = useCallback(
    ({ type = "text", id, value, onChange, error, ...props }) => (
      <div>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } transition duration-200`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    ),
    []
  );

  const Select = useCallback(
    ({ id, value, onChange, options, error, ...props }) => (
      <div>
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } transition duration-200`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    ),
    []
  );

  const TextArea = useCallback(
    ({ id, value, onChange, error, ...props }) => (
      <div>
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } transition duration-200 min-h-[120px]`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    ),
    []
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.rentalTitle.trim())
      newErrors.rentalTitle = "Book title is required";
    if (!formData.renterName.trim())
      newErrors.renterName = "Your name is required";
    if (!formData.rentalPrice || formData.rentalPrice <= 0)
      newErrors.rentalPrice = "Please enter a valid price";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.genre) newErrors.genre = "Please select a genre";
    if (!formData.imageURL.trim()) newErrors.imageURL = "Image URL is required";
    if (!formData.condition)
      newErrors.condition = "Please select book condition";
    if (!formData.availableFrom)
      newErrors.availableFrom = "Start date is required";
    if (!formData.availableTo) newErrors.availableTo = "End date is required";
    if (!formData.rentalDescription.trim())
      newErrors.rentalDescription = "Description is required";

    return newErrors;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch( backendUrl + "/upload-rental", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          currency,
          currencySymbol,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload rental details");
      }

      setSuccessMessage("Book rental listing created successfully!");
      setFormData({
        rentalTitle: "",
        renterName: "",
        rentalPrice: "",
        location: "",
        genre: "",
        imageURL: "",
        rentalDescription: "",
        condition: "",
        availableFrom: "",
        availableTo: "",
      });

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  // Location icon component
  const LocationIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="w-4 h-4 animate-spin"
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
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  React.useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        List Your Book for Rent
      </h1>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormGroup>
          <Label htmlFor="rentalTitle">Book Title</Label>
          <Input
            id="rentalTitle"
            value={formData.rentalTitle}
            onChange={handleChange}
            error={errors.rentalTitle}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="renterName">Your Name</Label>
          <Input
            id="renterName"
            value={formData.renterName}
            onChange={handleChange}
            error={errors.renterName}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="rentalPrice">Rental Price ({currencySymbol})</Label>
          <Input
            type="number"
            id="rentalPrice"
            value={formData.rentalPrice}
            onChange={handleChange}
            error={errors.rentalPrice}
            placeholder={`Enter amount in ${currency}`}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="location">Location</Label>
          <div className="flex gap-2">
            <Input
              id="location"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
            />
            <button
              type="button"
              onClick={getCurrentLocation}
              disabled={isLoadingLocation}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[140px] justify-center text-gray-700 font-medium shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLoadingLocation ? (
                <>
                  <LoadingSpinner />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <LocationIcon />
                  <span>Get Location</span>
                </>
              )}
            </button>
          </div>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="genre">Genre</Label>
          <Select
            id="genre"
            value={formData.genre}
            onChange={handleChange}
            options={genres}
            error={errors.genre}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="imageURL">Image URL</Label>
          <Input
            id="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            error={errors.imageURL}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="rentalDescription">Description</Label>
          <TextArea
            id="rentalDescription"
            value={formData.rentalDescription}
            onChange={handleChange}
            error={errors.rentalDescription}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="condition">Book Condition</Label>
          <Select
            id="condition"
            value={formData.condition}
            onChange={handleChange}
            options={conditions}
            error={errors.condition}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="availableFrom">Available From</Label>
          <Input
            type="date"
            id="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            error={errors.availableFrom}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="availableTo">Available To</Label>
          <Input
            type="date"
            id="availableTo"
            value={formData.availableTo}
            onChange={handleChange}
            error={errors.availableTo}
          />
        </FormGroup>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 active:shadow-inner transition duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          List Book for Rent
        </button>
      </form>
    </div>
  );
};

export default RentForm;