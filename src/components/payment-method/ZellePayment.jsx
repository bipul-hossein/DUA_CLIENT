import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ZellePayment({ formDataContext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const playerInfo = formDataContext?.personalInfo;

  const bodyData = useMemo(
    () => ({
      teamName: playerInfo?.teamName,
      division: playerInfo?.division?.toUpperCase(),
      player1Name: playerInfo?.player1FullName,
      player2Name: playerInfo?.player2FullName,
      player1Email: playerInfo?.player1Email,
      player2Email: playerInfo?.player2Email,
      player1Phone: playerInfo?.player1PhoneNumber || "",
      player2Phone: playerInfo?.player2PhoneNumber || "",
      player1Image: playerInfo?.player1Image,
      player2Image: playerInfo?.player2Image,
      eventName: "Badminton Registration",
    }),
    [playerInfo, formDataContext]
  );

  const onSubmit = (data) => {
    const zelleRegData = { ...data, ...bodyData };
    navigate("/badminton/registration/payment-method/zelle-qrcode", {
      state: { data: zelleRegData },
    });
  };

  useEffect(() => {
    if (
      !playerInfo?.division ||
      !playerInfo?.teamName ||
      !playerInfo?.player1FullName ||
      !playerInfo?.player2FullName ||
      !playerInfo?.player1Email ||
      !playerInfo?.player2Email ||
      !playerInfo?.player1PhoneNumber ||
      !playerInfo?.player2PhoneNumber
    ) {
      navigate("/badminton/registration");
      return;
    }
  }, [playerInfo, navigate]);

  return (
    <div className="min-w-full">
      <div className="w-full md:w-[492px] space-y-3 md:space-y-6 p-4 md:p-6 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="pt-4 w-full">
          <div className="mb-2">
            <label className="block text-base mb-1 font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
            />
            {errors.fullName && (
              <div className="mt-1 flex items-center text-sm text-red-500">
                {errors.fullName.message}
              </div>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-base mb-1 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
            />
            {errors.email && (
              <div className="mt-1 flex items-center text-sm text-red-500">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-base mb-1 font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+-]+$/,
                  message: "Invalid Phone number",
                },
              })}
              className="border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
            />
            {errors.phone && (
              <div className="mt-1 flex items-center text-sm text-red-500">
                {errors.phone.message}
              </div>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-base mb-1 font-medium text-gray-700">
              Memo
            </label>
            <textarea
              {...register("memo")}
              className="border border-gray-300 focus:ring-[#13679f] focus:border-[#13679f] p-2 md:p-3 w-full rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-gray-600"
            />
            {errors.memo && (
              <div className="mt-1 flex items-center text-sm text-red-500">
                {errors.memo.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors duration-200 mt-6"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
