// Event listener untuk menangani pengiriman formulir
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari input formulir
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const menu = document.getElementById("menu").value;

    let message = document.getElementById("message");
    message.innerHTML = ""; // Reset pesan sebelumnya

    // Validasi formulir
    if (name === "" || phone === "" || menu === "") {
      message.innerHTML =
        '<p class="error-message">Semua bidang harus diisi!</p>';
    } else {
      message.innerHTML =
        '<p class="success-message">Pemesanan berhasil dikirim! Terima kasih telah memesan di Restoran Lezat.</p>';
      // Reset form setelah submit
      document.getElementById("orderForm").reset();
    }
  });
