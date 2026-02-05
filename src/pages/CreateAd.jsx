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
    // Clear all OAuth and auth tokens
    localStorage.removeItem("tt_access_token");
    localStorage.removeItem("token");
    localStorage.removeItem("tt_state");
    localStorage.removeItem("tiktok_oauth_state");
    
    // Update AuthContext
    logout();
    
    // Redirect to home
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // 1 Campaign name validation
    if (campaignName.length < 3) {
      setError("Campaign name must be at least 3 characters");
      return;
    }

    // 2 Ad text validation
    if (!adText || adText.length > 100) {
      setError("Ad text is required and must be under 100 characters");
      return;
    }

    // 3 CTA validation
    if (!cta) {
      setError("CTA is required");
      return;
    }

    // 4 Music rules
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

    // 5 Store in localStorage
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header with Logout Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">TikTok Ad Creator</h1>
            <p className="text-gray-600 mt-1">Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Ad Campaign</h2>
            <p className="text-gray-600">Build an engaging TikTok ad with our simple form</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="e.g., Summer Sale 2025"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 3 characters</p>
            </div>

            {/* Objective */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Objective <span className="text-red-500">*</span>
              </label>
              <select
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
              >
                <option>Traffic</option>
                <option>Conversions</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Choose based on your marketing goal</p>
            </div>

            {/* Ad Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Text <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write an engaging ad copy..."
                maxLength={100}
                value={adText}
                onChange={(e) => setAdText(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">{adText.length}/100 characters</p>
            </div>

            {/* CTA */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Call-To-Action (CTA) <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="e.g., Shop Now, Learn More, Sign Up"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Music Options */}
            <div className="border-t pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Music Selection
              </label>

              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition duration-200">
                  <input
                    type="radio"
                    checked={musicType === "existing"}
                    onChange={() => setMusicType("existing")}
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Use Existing Music ID</span>
                </label>

                <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition duration-200">
                  <input
                    type="radio"
                    checked={musicType === "upload"}
                    onChange={() => setMusicType("upload")}
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Upload Your Music</span>
                </label>

                <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition duration-200">
                  <input
                    type="radio"
                    checked={musicType === "none"}
                    onChange={() => setMusicType("none")}
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700 font-medium">No Music</span>
                </label>
              </div>

              {musicType === "existing" && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <input
                    placeholder="Enter Music ID"
                    value={musicId}
                    onChange={(e) => setMusicId(e.target.value)}
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                  />
                </div>
              )}

              {musicType === "upload" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium"> Music upload feature ready</p>
                </div>
              )}

              {objective === "Conversions" && musicType === "none" && (
                <p className="text-xs text-orange-600 mt-2 font-medium"> Music is required for Conversion campaigns</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg mt-8"
            >
              Create Ad Campaign
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Your ad campaign will be saved securely and ready to launch
          </p>
        </div>
      </div>
    </div>
  );
}
