const kalimat = [
	"Apa Kabar",
	"Di sini awal kita bertemu",
	"Seiring berjalannya waktu",
	"Aku punya rasa terhadapmu",
	"Aku mengungkapkan Dan kita jadian",
	"Pada Akhirnya",
	"Kamu memilih pergi",
	"Belum selesai dengan masa lalu",
	"Dan melanjutkan kisah",
	"Dan disini Ku bisa bersabar Dan menunggu mu",
	"Dalam kebingungan",
	"Yang tetap mencintaimu Dan sayang kepadamu",
	"Kamu tidak jujur tentang itu",
	"Semoga bahagia",
	"Dan seandainya air jatuh kembali",
	"Aku tetap di sini Dan akan mengusap kembali air mata itu",
	"Karena di sini aku tulus mencintaimu"
];

const gambar = [
	"1.gif",
	"2.gif",
	"3.gif",
	"4.gif",
	"5.gif",
	"6.gif",
	"7.gif",
	"8.gif",
	"9.gif",
	"10.gif",
	"11.gif",
	"12.gif",
	"13.gif",
	"14.gif",
	"15.gif",
	"16.gif",
	"17.gif",
	"18.gif"
];

const audio = document.getElementById("audio");
const kalimatElem = document.getElementById("kalimat");
const gambarElem = document.getElementById("gambar");

let currentIndex = 0;

kalimatElem.addEventListener("click", function() {
	currentIndex++;
	if (currentIndex === kalimat.length) {
		currentIndex = 0;
	}

	kalimatElem.innerText = kalimat[currentIndex];
	gambarElem.src = gambar[currentIndex];
	audio.play();
});
