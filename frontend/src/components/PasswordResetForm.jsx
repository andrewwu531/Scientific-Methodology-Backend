import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function PasswordResetForm({ uidb64, token }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `/reset-password/${uidb64}/${token}/`,
        {
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setMessage(response.data.message);
        setError("");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Reset Password
        </h2>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-bold text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-1 text-sm font-bold text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

PasswordResetForm.propTypes = {
  uidb64: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default PasswordResetForm;
