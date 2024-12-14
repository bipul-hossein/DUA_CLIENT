import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Camera, CircleX, AlertCircle } from "lucide-react";
import { RegistrationContext } from "../../contextsApi/RegistrationContext";
import { useNavigate } from "react-router-dom";
import ButtonPayment from "../share/button/ButtonPayment";
import axios from "axios"; // We will use axios to make requests to Cloudinary.

export default function BadmintonRegistrationForm() {
  const navigate = useNavigate();
  const [formDataContext, setFormDataContext] = useContext(RegistrationContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false); // Simulate registration status

  const [player1Image, setPlayer1Image] = useState(null);
  const [player2Image, setPlayer2Image] = useState(null);
  const [player1UploadError, setPlayer1UploadError] = useState(null);
  const [player2UploadError, setPlayer2UploadError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    defaultValues: formDataContext.personalInfo || {},
  });

  const divisionPrices = {
    beginner: 120,
    intermediate: 150,
    open: 200,
  };

  const selectedDivision = watch("division");
  const teamFee = divisionPrices[selectedDivision] || 0;

  useEffect(() => {
    if (formDataContext.personalInfo) {
      reset(formDataContext.personalInfo);
    }
  }, [formDataContext, reset]);

  // Helper function to handle Cloudinary image upload on form submit
  const handleCloudinaryUpload = async (file) => {
    const cloudinaryUploadPreset = "foodgrain_image_upload"; // Make sure this is correct
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/deblnr6mq/image/upload`; // Replace with your cloud name
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);

    try {
      const response = await axios.post(cloudinaryUrl, formData);
      return response.data.secure_url; // Return the uploaded image URL
    } catch (err) {
      console.error("Error uploading image:", err);
      throw new Error("Image upload failed. Please try again.");
    }
  };

  const handleImageRemove = (setImage, setError) => {
    setImage(null);
    setError(null);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Start loading state
    let image1 = "";
    let image2 = "";

    try {
      if (player1Image) {
        image1 = await handleCloudinaryUpload(player1Image);
      }
      if (player2Image) {
        image2 = await handleCloudinaryUpload(player2Image);
      }

      // without image data
      setFormDataContext((prevData) => ({
        ...prevData,
        personalInfo: { ...data, player1Image: image1, player2Image: image2 },
        teamFee,
      }));

      // // Simulate a check for existing user registration
      // if (isUserRegistered) {
      //     setIsModalOpen(true); // Open modal
      //     setIsSubmitting(false);
      //     return;
      // }

      // navigate('/badminton/registration/payment-method'); // Proceed to next page

      // Simulate registration check or actual logic
      setTimeout(() => {
        // After 2 seconds, stop loading
        setIsSubmitting(false); // Reset loading state
        if (isUserRegistered) {
          setIsModalOpen(true); // Show modal if user is already registered
        } else {
          navigate("/badminton/registration/payment-method"); // Proceed to next page if user is not registered
        }
      }, 2000); // Simulate delay (2 seconds)
    } catch (err) {
      alert("There was an error uploading the images. Please try again.");
      setIsSubmitting(false); // Handle error
    }
  };

  const handleInputChange = (field, value) => {
    setValue(field, value);
    clearErrors(field);
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center md:my-12 bg-gradient-to-tr from-white via-blue-100 to-[#9fbed1] md:rounded-lg">
      <div className="md:py-12">
        <div className="max-w-xl md:mx-auto mb-4 mx-2 mt-2 md:px-5">
          <h1 className="text-xl font-bold text-gray-700 mb-2">
            Welcome to the Dulles United Association's Badminton Registration
          </h1>
          <p className="text-sm text-gray-600">
            We are a 501(c)(3) nonprofit organization and we welcome everyone in
            our organization. Please complete your 2024 yearly membership.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto p-2 md:p-5 rounded-lg shadow"
        >
          <fieldset className="border-2 border-[#13679f] rounded mb-5 py-2.5 px-3 md:px-5">
            <legend className="bg-[#13679f] text-gray-100 py-1 px-2.5 rounded font-bold w-full md:text-2xl">
              Player Information
            </legend>

            <div className="flex justify-between md:gap-3 flex-col md:flex-row">
              {/* Team Name */}
              <div className="mb-2 w-full md:w-1/2">
                <label className="block text-base mb-1 font-medium text-gray-700">
                  Team Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("teamName", {
                    required: "Team Name is required",
                  })}
                  onChange={(e) =>
                    handleInputChange("teamName", e.target.value)
                  }
                  className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                />
                {errors.teamName && (
                  <div className="mt-1 flex items-center text-sm text-red-500">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.teamName.message}
                  </div>
                )}
              </div>

              {/* Division */}
              <div className="mb-2 w-full md:w-1/2">
                <label className="block text-base mb-1 font-medium text-gray-700">
                  Division <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("division", {
                    required: "Division is required",
                  })}
                  onChange={(e) =>
                    handleInputChange("division", e.target.value)
                  }
                  defaultValue=""
                  className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                >
                  <option value="" disabled>
                    Select your division
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="open">Open</option>
                </select>
                {errors.division && (
                  <div className="mt-1 flex items-center text-sm text-red-500">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.division.message}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between flex-col md:flex-row">
              <div className="flex-1 md:pr-2">
                {/* Player 1 */}
                <div>
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Player 1
                  </label>
                  <hr className="border-gray-400 mb-2" />
                </div>
                <div className="mb-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("player1FullName", {
                      required: "Full Name is required",
                    })}
                    onChange={(e) =>
                      handleInputChange("player1FullName", e.target.value)
                    }
                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                  />
                  {errors.player1FullName && (
                    <div className="mt-1 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.player1FullName.message}
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("player1Email", {
                      required: "Email is required",
                    })}
                    onChange={(e) =>
                      handleInputChange("player1Email", e.target.value)
                    }
                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                  />
                  {errors.player1Email && (
                    <div className="mt-1 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.player1Email.message}
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("player1PhoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9+-]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                    onChange={(e) =>
                      handleInputChange("player1PhoneNumber", e.target.value)
                    }
                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                  />
                  {errors.player1PhoneNumber && (
                    <div className="mt-1 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.player1PhoneNumber.message}
                    </div>
                  )}
                </div>
                <div className="w-full relative mt-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Image
                  </label>
                  {player1Image ? (
                    <div className="mt-4 w-full flex justify-center relative">
                      <img
                        src={URL.createObjectURL(player1Image)} // Preview the image
                        alt="Preview"
                        className="max-w-full max-h-56 object-cover rounded-lg border-2 border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleImageRemove(
                            setPlayer1Image,
                            setPlayer1UploadError
                          )
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-500 hover:text-gray-700"
                      >
                        <CircleX className="text-xl" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-4 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={(e) => setPlayer1Image(e.target.files[0])}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center text-center">
                        <Camera className="text-gray-500 text-3xl mb-2" />
                        <span className="text-sm text-gray-500">
                          Click or Drag to Upload
                        </span>
                      </div>
                    </div>
                  )}
                  {player1UploadError && (
                    <span className="text-xs text-red-500">
                      {player1UploadError}
                    </span>
                  )}
                </div>
              </div>
              <div className="md:border-l flex-1 md:pl-2  md:border-gray-100">
                {/* Player 2 */}
                <div>
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Player 2
                  </label>
                  <hr className="border-gray-400 mb-2" />
                </div>
                <div className="mb-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("player2FullName", {
                      required: "Full Name is required",
                    })}
                    onChange={(e) =>
                      handleInputChange("player2FullName", e.target.value)
                    }
                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                  />
                  {errors.player2FullName && (
                    <div className="mt-1 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.player2FullName.message}
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("player2Email", {
                      required: "Email is required",
                    })}
                    onChange={(e) =>
                      handleInputChange("player2Email", e.target.value)
                    }
                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                  />
                  {errors.player2Email && (
                    <div className="mt-1 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.player2Email.message}
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("player2PhoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9+-]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                    onChange={(e) =>
                      handleInputChange("player2PhoneNumber", e.target.value)
                    }
                    className="flex-grow border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
                  />
                  {errors.player2PhoneNumber && (
                    <div className="mt-1 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.player2PhoneNumber.message}
                    </div>
                  )}
                </div>
                <div className="w-full relative mt-2">
                  <label className="block text-base mb-1 font-medium text-gray-700">
                    Image
                  </label>
                  {player2Image ? (
                    <div className="mt-4 w-full flex justify-center relative">
                      <img
                        src={URL.createObjectURL(player2Image)} // Preview the image
                        alt="Preview"
                        className="max-w-full max-h-56 object-cover rounded-lg border-2 border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleImageRemove(
                            setPlayer2Image,
                            setPlayer2UploadError
                          )
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-500 hover:text-gray-700"
                      >
                        <CircleX className="text-xl" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-4 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={(e) => setPlayer2Image(e.target.files[0])}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center text-center">
                        <Camera className="text-gray-500 text-3xl mb-2" />
                        <span className="text-sm text-gray-500">
                          Click or Drag to Upload
                        </span>
                      </div>
                    </div>
                  )}
                  {player2UploadError && (
                    <span className="text-xs text-red-500">
                      {player2UploadError}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Team Fee */}
            <div className="mb-2">
              <label className="block text-base mb-1 font-medium text-gray-700">
                Team Fee
              </label>
              <input
                type="text"
                value={`$${teamFee}`}
                readOnly
                className="flex-grow border border-gray-300 p-2 md:p-3 w-full rounded-md shadow-sm bg-gray-100 text-gray-600"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 md:pt-4 flex justify-end">
              <ButtonPayment
                title={isSubmitting ? "Loading..." : "Next"}
                disabled={isSubmitting}
                className="w-full md:w-auto"
              />
            </div>
          </fieldset>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-xl font-semibold text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User Already Registered
            </h2>
            <p className="text-lg text-gray-600">
              You are already registered. Please check your details or contact
              support.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
