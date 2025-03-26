(function () {
  try {
    const domain = window.location.hostname;
    if (domain.endsWith(".local") || domain.endsWith('.test')) {
      document.title = `[DEV] ${document.title}`;

      const banner = document.createElement("div");
      banner.textContent = "DEVELOPMENT";

      Object.assign(banner.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "25px",
        backgroundColor: "orange",
        color: "black",
        fontWeight: "bold",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "sans-serif"
      });

      document.body.appendChild(banner);
      document.body.style.setProperty("margin-top", "20px", "important");
    }
  } catch (e) {
    console.error("Failed to check .local domain:", e);
  }
})();