const pertanyaanList = [
    { kode: "C1", teks: "Apakah makanan bertekstur kenyal?" },
    { kode: "C2", teks: "Apakah makanan tidak mudah lengket?" },
    { kode: "C3", teks: "Apakah makanan berwarna mencolok?" },
    { kode: "C4", teks: "Apakah makanan beraroma mencurigakan?" }
];

let jawaban = [];
let indexPertanyaan = 0;

function tampilkanPertanyaan() {
    if (indexPertanyaan < pertanyaanList.length) {
        document.getElementById("pertanyaan").innerText = pertanyaanList[indexPertanyaan].teks;
        document.getElementById("progress").style.width = ((indexPertanyaan + 1) / pertanyaanList.length) * 100 + "%";
    } else {
        diagnosa();
    }
}

function jawab(respon) {
    if (respon === "ya") {
        jawaban.push(pertanyaanList[indexPertanyaan].kode);
    }
    indexPertanyaan++;
    tampilkanPertanyaan();
}

function diagnosa() {
    let hasilDiagnosa = jawaban.includes("C3") ? "⚠️ Makanan ini kemungkinan mengandung zat berbahaya!" : "✅ Tidak ditemukan indikasi zat berbahaya.";
    localStorage.setItem("hasilDiagnosa", hasilDiagnosa);
    window.location.href = "hasil.html";
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

if (window.location.pathname.includes("deteksi.html")) {
    tampilkanPertanyaan();
}
