// step - 4

import { useState } from "react";

export default function CreateAd() {
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("Traffic");
  const [adText, setAdText] = useState("");
  const [cta, setCta] = useState("");
  const [musicType, setMusicType] = useState("existing"); // existing | upload | none
  const [musicId, setMusicId] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // 1️⃣ Campaign name validation
    if (campaignName.length < 3) {
      setError("Campaign name must be at least 3 characters");
      return;
    }

    // 2️⃣ Ad text validation
    if (!adText || adText.length > 100) {
      setError("Ad text is required and must be under 100 characters");
      return;
    }

    // 3️⃣ CTA validation
    if (!cta) {
      setError("CTA is required");
      return;
    }

    // 4️⃣ Music rules
    let finalMusicId = musicId;

    if (musicType === "none" && objective === "Conversions") {
      setError("Music is required for Conversion campaigns");
      return;
    }

    if (musicType === "existing") {
      if (!musicId) {
        setError("Please enter a Music ID");
        return;
      }
    }

    if (musicType === "upload") {
      finalMusicId = "mock_music_" + Date.now(); // fake upload
    }

    // 5️⃣ Store in localStorage
    const adData = {
      campaignName,
      objective,
      adText,
      cta,
      musicType,
      musicId: finalMusicId
    };

    localStorage.setItem("ad_campaign", JSON.stringify(adData));

    alert("Ad created and saved!");
  }

  return (
    <div>
      <h2>Create Ad</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Campaign Name"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />

        <select
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        >
          <option>Traffic</option>
          <option>Conversions</option>
        </select>

        <textarea
          placeholder="Ad Text (max 100 chars)"
          maxLength={100}
          value={adText}
          onChange={(e) => setAdText(e.target.value)}
        />

        <input
          placeholder="CTA"
          value={cta}
          onChange={(e) => setCta(e.target.value)}
        />

        <p>Music Option</p>

        <label>
          <input
            type="radio"
            checked={musicType === "existing"}
            onChange={() => setMusicType("existing")}
          />
          Existing Music ID
        </label>

        <label>
          <input
            type="radio"
            checked={musicType === "upload"}
            onChange={() => setMusicType("upload")}
          />
          Upload Music
        </label>

        <label>
          <input
            type="radio"
            checked={musicType === "none"}
            onChange={() => setMusicType("none")}
          />
          No Music
        </label>

        {musicType === "existing" && (
          <input
            placeholder="Music ID"
            value={musicId}
            onChange={(e) => setMusicId(e.target.value)}
          />
        )}

        {musicType === "upload" && <p>Uploading music...</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


// import { useState, useContext } from "react";
// import { useAdForm } from "../hooks/useAdForm";
// import { validateForm } from "../utils/validators";
// import { submitAd } from "../api/ads.api";
// import { AuthContext } from "../context/AuthContext";
// import MusicSelector from "./MusicSelector";
// import ErrorBanner from "../components/ErrorBanner";

// const AdForm = () => {
//   const { token } = useContext(AuthContext);
//   const { form, setForm } = useAdForm();
//   const [errors, setErrors] = useState({});
//   const [systemError, setSystemError] = useState("");

//   const handleSubmit = async () => {
//     // Ask for confirmation before submitting
//     const confirmed = window.confirm("Are you sure you want to submit this ad?");
//     if (!confirmed) return;

//     const validationErrors = validateForm(form);
//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       await submitAd(token, form);
//       alert("Ad submitted successfully!");
//     } catch (err) {
//       setSystemError("Something went wrong. Please retry.");
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       {systemError && <ErrorBanner message={systemError} />}

//       <div className="space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Campaign Name"
//             value={form.campaignName}
//             onChange={(e) =>
//               setForm({ ...form, campaignName: e.target.value })
//             }
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.campaignName && <p className="text-red-500 text-sm mt-1">{errors.campaignName}</p>}
//         </div>

//         <div>
//           <select
//             value={form.objective}
//             onChange={(e) =>
//               setForm({ ...form, objective: e.target.value })
//             }
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Objective</option>
//             <option value="Traffic">Traffic</option>
//             <option value="Conversions">Conversions</option>
//           </select>
//         </div>

//         <div>
//           <textarea
//             placeholder="Ad Text"
//             value={form.adText}
//             onChange={(e) =>
//               setForm({ ...form, adText: e.target.value })
//             }
//             rows={4}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.adText && <p className="text-red-500 text-sm mt-1">{errors.adText}</p>}
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="CTA"
//             value={form.cta}
//             onChange={(e) =>
//               setForm({ ...form, cta: e.target.value })
//             }
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.cta && <p className="text-red-500 text-sm mt-1">{errors.cta}</p>}
//         </div>

//         <MusicSelector
//           form={form}
//           setForm={setForm}
//           objective={form.objective}
//           setError={setSystemError}
//         />

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
//         >
//           Submit Ad
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdForm;
