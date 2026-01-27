export const validateMusicId = async (musicId) => {
  if (musicId === "invalid") {
    throw new Error("INVALID_MUSIC");
  }
  return true;
};
