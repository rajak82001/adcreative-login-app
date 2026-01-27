export const submitAd = async (token, payload) => {
  if (!token) throw new Error("AUTH_EXPIRED");
  if (payload.musicId === "invalid")
    throw new Error("INVALID_MUSIC");

  return { success: true };
};
