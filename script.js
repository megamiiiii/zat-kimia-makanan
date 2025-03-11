const pertanyaanList = [
    { kode: "C1", teks: "Apakah makanan bertekstur kenyal?" },
    { kode: "C2", teks: "Apakah makanan tidak mudah lengket?" },
    { kode: "C3", teks: "Apakah makanan berwarna mencolok?" },
    { kode: "C4", teks: "Apakah makanan beraroma mencurigakan?" },
    { kode: "C5", teks: "Apakah makanan tidak rusak dalam 3 hari?" },
    { kode: "C6", teks: "Apakah makanan tidak rusak dalam 15 hari?" },
    { kode: "C7", teks: "Apakah makanan memiliki bau menyengat?" },
    { kode: "C8", teks: "Apakah mi berwarna mengkilap?" },
    { kode: "C9", teks: "Apakah tahu lebih keras dan kenyal?" },
    { kode: "C10", teks: "Apakah ayam lebih padat dan keras?" },
    { kode: "C11", teks: "Apakah insang ikan berwarna merah tua?" },
    { kode: "C12", teks: "Apakah daging berwarna putih pucat?" },
    { kode: "C13", teks: "Apakah makanan berwarna merah cerah?" },
    { kode: "C14", teks: "Apakah warna makanan tidak merata?" },
    { kode: "C15", teks: "Apakah makanan terasa pahit?" }
];

let jawaban = [];
let indexPertanyaan = 0;

function tampilkanPertanyaan() {
    if (indexPertanyaan < pertanyaanList.length) {
        document.getElementById("pertanyaan").innerText = pertanyaanList[indexPertanyaan].teks;
        document.getElementById("progress-bar").style.width = ((indexPertanyaan + 1) / pertanyaanList.length) * 100 + "%";
        document.getElementById("progress-bar").innerText = `${Math.round(((indexPertanyaan + 1) / pertanyaanList.length) * 100)}%`;
        document.getElementById("progress-text").innerText = `Pertanyaan ${indexPertanyaan + 1} dari ${pertanyaanList.length}`;
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
