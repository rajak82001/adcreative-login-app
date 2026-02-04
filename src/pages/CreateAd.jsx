// step - 4

import { useState } from "react";
import { mapTikTokError } from "../utils/errorMapper";

export default function CreateAd() {
  const [form, setForm] = useState({
    name: "",
    objective: "Traffic",
    musicId: ""
  });
  const [error, setError] = useState(null);

  function handleSubmit() {
    setError(null);

    if (form.name.length < 3) {
      setError("Campaign name must be at least 3 characters.");
      return;
    }

    if (form.objective === "Conversions" && !form.musicId) {
      setError("Music is required for Conversion campaigns.");
      return;
    }

    // Simulate geo restriction
    if (form.name.toLowerCase().includes("geo")) {
      setError(mapTikTokError(null, 403));
      return;
    }

    localStorage.setItem("campaign_data", JSON.stringify(form));
    alert("Ad submitted successfully!");
  }

  return (
    <div>
      <h2>Create Ad</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Campaign Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        onChange={(e) => setForm({ ...form, objective: e.target.value })}
      >
        <option>Traffic</option>
        <option>Conversions</option>
      </select>

      <input
        placeholder="Music ID (optional)"
        onChange={(e) => setForm({ ...form, musicId: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
