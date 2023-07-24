function generateShortLink() {
  const originalUrl = document.getElementById("originalUrl").value;
  const apiUrl = "https://api.s.id/url/add";
  const apiKey = "YOUR_S.ID_API_KEY"; // Ganti dengan API Key Anda dari s.id

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ url: originalUrl }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        const shortLink = data.short;
        document.getElementById(
          "shortLinkResult"
        ).innerHTML = `Short Link: <a href="${shortLink}" target="_blank">${shortLink}</a>`;
      } else {
        document.getElementById("shortLinkResult").innerHTML =
          "Gagal membuat short link. Silakan coba lagi.";
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
      document.getElementById("shortLinkResult").innerHTML =
        "Terjadi kesalahan. Silakan coba lagi.";
    });
}
