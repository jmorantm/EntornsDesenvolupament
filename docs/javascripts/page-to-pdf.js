document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("download-pdf");
    if (btn) {
        btn.addEventListener("click", () => {
            window.open("pdf/ApuntsEntornsDesenvolupament.pdf", "_blank");
        });
    }
});
