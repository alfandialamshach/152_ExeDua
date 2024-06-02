function showAlert(event) {
    event.preventDefault(); // Mencegah form dari pengiriman

    // Mengambil nilai dari input formulir
    var nama = document.getElementById('nama').value;
    var tanggalLahir = document.getElementById('tanggal_lahir').value;
    var jenisKelamin = document.getElementById('jenis_kelamin').value;
    var peran = document.querySelector('input[name="peran"]:checked').value;
    var alamat = document.getElementById('alamat').value;
    var email = document.getElementById('email').value;
    var telepon = document.getElementById('telepon').value;

    // Menampilkan alert dengan data input
    alert("Formulir berhasil dikirim!\n\nNama: " + nama +
          "\nTanggal Lahir: " + tanggalLahir +
          "\nJenis Kelamin: " + jenisKelamin +
          "\nPeran dalam Komunitas: " + peran +
          "\nAlamat: " + alamat +
          "\nEmail: " + email +
          "\nNomor WhatsApp: " + telepon);
}
