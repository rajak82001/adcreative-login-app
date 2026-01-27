import { useEffect } from "react";
import { validateMusicId } from "../api/music.api";

const MusicSelector = ({ form, setForm, objective, setError }) => {
  const handleExistingMusic = async (id) => {
    try {
      await validateMusicId(id);
      setForm({ ...form, musicId: id });
      setError("");
    } catch {
      setError("Invalid music ID");
    }
  };

  const handleNoMusic = () => {
    if (objective === "Conversions") {
      setError("Music is required for Conversions objective");
      return;
    }
    setForm({ ...form, musicId: null });
    setError("");
  };

  useEffect(() => {
    if (form.musicOption === "none") {
      handleNoMusic();
    }
  }, [form.musicOption, objective]);

  return (
    <div className="space-y-4">
      <div>
        <select
          value={form.musicOption}
          onChange={(e) =>
            setForm({ ...form, musicOption: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Music Option</option>
          <option value="existing">Existing Music</option>
          <option value="upload">Upload Music</option>
          <option value="none">No Music</option>
        </select>
      </div>

      {form.musicOption === "existing" && (
        <div>
          <input
            type="text"
            placeholder="Music ID"
            onBlur={(e) => handleExistingMusic(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {form.musicOption === "upload" && (
        <div>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setForm({ ...form, musicFile: e.target.files[0] })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default MusicSelector;
