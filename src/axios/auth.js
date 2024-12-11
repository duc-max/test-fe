export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  const newAccessToken = refreshToken;
  localStorage.setItem("access_token", newAccessToken);
  return newAccessToken;
};
