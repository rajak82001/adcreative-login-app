// step - 4

import { useState, useContext } from "react";
import { useAdForm } from "../hooks/useAdForm";
import { validateForm } from "../utils/validators";
import { submitAd } from "../api/ads.api";
import { AuthContext } from "../context/AuthContext";
import MusicSelector from "./MusicSelector";
import ErrorBanner from "./ErrorBanner";

const AdForm = () => {
  const { token } = useContext(AuthContext);
  const { form, setForm } = useAdForm();
  const [errors, setErrors] = useState({});
  const [systemError, setSystemError] = useState("");

  const handleSubmit = async () => {
    // Ask for confirmation before submitting
    const confirmed = window.confirm("Are you sure you want to submit this ad?");
    if (!confirmed) return;

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      await submitAd(token, form);
      alert("Ad submitted successfully!");
    } catch (err) {
      setSystemError("Something went wrong. Please retry.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {systemError && <ErrorBanner message={systemError} />}

      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Campaign Name"
            value={form.campaignName}
            onChange={(e) =>
              setForm({ ...form, campaignName: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.campaignName && <p className="text-red-500 text-sm mt-1">{errors.campaignName}</p>}
        </div>

        <div>
          <select
            value={form.objective}
            onChange={(e) =>
              setForm({ ...form, objective: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Objective</option>
            <option value="Traffic">Traffic</option>
            <option value="Conversions">Conversions</option>
          </select>
        </div>

        <div>
          <textarea
            placeholder="Ad Text"
            value={form.adText}
            onChange={(e) =>
              setForm({ ...form, adText: e.target.value })
            }
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.adText && <p className="text-red-500 text-sm mt-1">{errors.adText}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="CTA"
            value={form.cta}
            onChange={(e) =>
              setForm({ ...form, cta: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.cta && <p className="text-red-500 text-sm mt-1">{errors.cta}</p>}
        </div>

        <MusicSelector
          form={form}
          setForm={setForm}
          objective={form.objective}
          setError={setSystemError}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Submit Ad
        </button>
      </div>
    </div>
  );
};

export default AdForm;
