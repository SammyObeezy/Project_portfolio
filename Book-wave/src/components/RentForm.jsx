import React, { useState } from "react";

const RentForm = () => {
  // Form state
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

  // Validation state
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Available genres matching the display component
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

  // Book conditions
  const conditions = ["Like New", "Very Good", "Good", "Fair"];

  // Styled components
  const FormGroup = ({ children }) => <div className="mb-4">{children}</div>;

  const Label = ({ htmlFor, children }) => (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {children}
    </label>
  );

  const Input = ({ type = "text", id, value, onChange, error, ...props }) => (
    <>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:border-blue-500
          ${error ? "border-red-500" : "border-gray-300"}
          transition duration-200
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </>
  );

  const Select = ({ id, value, onChange, options, error, ...props }) => (
    <>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:border-blue-500
          ${error ? "border-red-500" : "border-gray-300"}
          transition duration-200
        `}
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
    </>
  );

  const TextArea = ({ id, value, onChange, error, ...props }) => (
    <>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:border-blue-500
          ${error ? "border-red-500" : "border-gray-300"}
          transition duration-200 min-h-[120px]
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </>
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
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
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/upload-rental", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup>
            <Label htmlFor="rentalTitle">Book Title</Label>
            <Input
              id="rentalTitle"
              value={formData.rentalTitle}
              onChange={handleChange}
              error={errors.rentalTitle}
              placeholder="Enter book title"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="renterName">Your Name</Label>
            <Input
              id="renterName"
              value={formData.renterName}
              onChange={handleChange}
              error={errors.renterName}
              placeholder="Enter your name"
            />
          </FormGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup>
            <Label htmlFor="rentalPrice">Daily Rental Price ($)</Label>
            <Input
              type="number"
              id="rentalPrice"
              value={formData.rentalPrice}
              onChange={handleChange}
              error={errors.rentalPrice}
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
              placeholder="Enter your location"
            />
          </FormGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <Label htmlFor="condition">Book Condition</Label>
            <Select
              id="condition"
              value={formData.condition}
              onChange={handleChange}
              options={conditions}
              error={errors.condition}
            />
          </FormGroup>
        </div>

        <FormGroup>
          <Label htmlFor="imageURL">Book Image URL</Label>
          <Input
            id="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            error={errors.imageURL}
            placeholder="Enter image URL"
          />
        </FormGroup>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <Label htmlFor="availableTo">Available Until</Label>
            <Input
              type="date"
              id="availableTo"
              value={formData.availableTo}
              onChange={handleChange}
              error={errors.availableTo}
            />
          </FormGroup>
        </div>

        <FormGroup>
          <Label htmlFor="rentalDescription">Book Description</Label>
          <TextArea
            id="rentalDescription"
            value={formData.rentalDescription}
            onChange={handleChange}
            error={errors.rentalDescription}
            placeholder="Describe the book's condition, content, and any special notes..."
          />
        </FormGroup>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:ring-offset-2 transition duration-200"
        >
          List Book for Rent
        </button>
      </form>
    </div>
  );
};

export default RentForm;
