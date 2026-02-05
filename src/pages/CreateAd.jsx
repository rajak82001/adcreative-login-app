// step - 4

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function CreateAd() {
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("Traffic");
  const [adText, setAdText] = useState("");
  const [cta, setCta] = useState("");
  const [musicType, setMusicType] = useState("existing"); // existing | upload | none
  const [musicId, setMusicId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    // Clear app auth token and OAuth state tokens
    localStorage.removeItem("token");
    localStorage.removeItem("tt_state");
    localStorage.removeItem("tiktok_oauth_state");
    logout();
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (campaignName.length < 3) {
      setError("Campaign name must be at least 3 characters");
      return;
    }

    if (!adText || adText.length > 100) {
      setError("Ad text is required and must be under 100 characters");
      return;
    }

    if (!cta) {
      setError("CTA is required");
      return;
    }

    let finalMusicId = musicId;

    if (musicType === "none" && objective === "Conversions") {
      setError("Music is required for Conversion campaigns");
      return;
    }

    if (musicType === "existing" && !musicId) {
      setError("Please enter a Music ID");
      return;
    }

    if (musicType === "upload") {
      finalMusicId = "mock_music_" + Date.now();
    }

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
    <div
      className="
        min-h-screen 
        bg-gradient-to-br from-blue-50 to-indigo-100 
        py-6 sm:py-10 lg:py-12 
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="max-w-2xl sm:max-w-3xl mx-auto">

        {/* Header with Logout */}
        <div
          className="
            flex flex-col sm:flex-row 
            sm:justify-between sm:items-center 
            gap-4 mb-8
          "
        >
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              TikTok Ad Creator
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="
              w-full sm:w-auto
              px-4 py-2 
              bg-red-500 hover:bg-red-600 
              text-white font-semibold 
              rounded-lg transition duration-200
            "
          >
            Logout
          </button>
        </div>

        {/* Card */}
        <div
          className="
            bg-white rounded-2xl shadow-xl 
            p-4 sm:p-6 lg:p-8
          "
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-sm text-center sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
              Create Your Ad Campaign
            </h2>
            <p className="text-gray-600 text-center text-xs sm:text-base">
              Build an engaging TikTok ad with our simple form
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <p className="text-red-700 font-medium text-sm sm:text-base">
                {error}
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Campaign Name *
              </label>
              <input
                placeholder="e.g., Summer Sale 2025"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="
                  w-full px-4 py-3 
                  text-sm sm:text-base
                  border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              />
            </div>

            {/* Objective */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Campaign Objective *
              </label>
              <select
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="
                  w-full px-4 py-3 
                  text-sm sm:text-base
                  border border-gray-300 rounded-lg bg-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              >
                <option>Traffic</option>
                <option>Conversions</option>
              </select>
            </div>

            {/* Ad Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ad Text *
              </label>
              <textarea
                rows={4}
                maxLength={100}
                value={adText}
                onChange={(e) => setAdText(e.target.value)}
                className="
                  w-full px-4 py-3 
                  text-sm sm:text-base
                  border border-gray-300 rounded-lg
                  resize-none focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              />
              <p className="text-xs text-gray-500 mt-1">
                {adText.length}/100 characters
              </p>
            </div>

            {/* CTA */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CTA *
              </label>
              <input
                placeholder="e.g., Shop Now"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                className="
                  w-full px-4 py-3 
                  text-sm sm:text-base
                  border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              />
            </div>

            {/* Music */}
            <div className="pt-4 border-t">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Music Selection
              </label>

              <div className="space-y-2">
                {["existing", "upload", "none"].map((type) => (
                  <label
                    key={type}
                    className="
                      flex items-center gap-3
                      p-3 border rounded-lg
                      cursor-pointer
                    "
                  >
                    <input
                      type="radio"
                      checked={musicType === type}
                      onChange={() => setMusicType(type)}
                    />
                    <span className="text-sm sm:text-base capitalize">
                      {type} music
                    </span>
                  </label>
                ))}
              </div>

              {musicType === "existing" && (
                <input
                  placeholder="Enter Music ID"
                  value={musicId}
                  onChange={(e) => setMusicId(e.target.value)}
                  className="
                    w-full mt-3 px-4 py-2
                    text-sm sm:text-base
                    border border-gray-300 rounded-lg
                  "
                />
              )}

              {musicType === "upload" && (
                <p className="text-sm text-green-600 mt-3">
                  Music upload feature ready
                </p>
              )}

              {objective === "Conversions" && musicType === "none" && (
                <p className="text-xs text-orange-600 mt-2">
                  Music is required for Conversion campaigns
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full mt-6 sm:mt-8
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold
                py-3 rounded-lg
                hover:from-blue-700 hover:to-indigo-700
                transition duration-300
              "
            >
              Create Ad Campaign
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Your ad campaign will be saved securely
          </p>
        </div>
      </div>
    </div>
  );
}