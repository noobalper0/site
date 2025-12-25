const params = new URLSearchParams(window.location.search);
const isimler = params.getAll("isim");
const kodlar = params.getAll("kod");

const liste = document.getElementById("liste");

if (isimler.length === 0) {
    liste.innerHTML = "<li>Gönderilen paket yok</li>";
}

isimler.forEach((isim, index) => {
    const kod = kodlar[index] || "—";
    const li = document.createElement("li");
    li.textContent = `${isim} - ${kod}`;
    liste.appendChild(li);
});
