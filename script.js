const kalimat = [
    "&ldquo; Aduh Maaf  &rdquo;",
    "&ldquo; Hi Apa Kabar &rdquo;",
    "&ldquo; Di sini awal kita bertemu &rdquo;",
    "&ldquo; Seiring berjalannya waktu &rdquo;",
    "&ldquo; Aku punya rasa terhadapmu &rdquo;",
    "&ldquo; Aku mengungkapkan Dan kita jadian &rdquo;",
    "&ldquo; Pada Akhirnya &rdquo;",
    "&ldquo; Kamu memilih pergi &rdquo;",
    "&ldquo; Karena Belum selesai dengan masa lalumu &rdquo;",
    "&ldquo; Dan kembali melanjutkan kisah &rdquo;",
    "&ldquo; Kamu tidak jujur tentang itu &rdquo;",
    "&ldquo; Dan disini ku bisa sabar dan menunggumu &rdquo;",
    "&ldquo; Dalam kebingungan &rdquo;",
    "&ldquo; Yang tetap mencintaimu dan sayang padamu &rdquo;",
    "&ldquo; Semoga bahagia &rdquo;",
    "&ldquo; Dan seandainya air matamu jatuh kembali &rdquo;",
    "&ldquo; Aku tetap di sini Dan akan mengusap kembali air mata itu &rdquo;",
    "&ldquo; Karena di sini aku tulus mencintaimu &rdquo;"
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
    "11.gif",
    "10.gif",
    "12.gif",
    "13.gif",
    "14.gif",
    "15.gif",
    "16.gif",
    "17.gif",
    "18.gif"
  ];
  let index = 0;
  const kalimatElement = document.getElementById("kalimat");
  const gambarElement = document.getElementById("gambar");
  const body = document.body;
  const audioElement = document.getElementById("audio");
  
  gambarElement.addEventListener("click", function() {
    if (index >= kalimat.length) {
      index = 0;
    }
  
    kalimatElement.innerHTML = kalimat[index];
    gambarElement.src = gambar[index];
    index++;
  
    body.style.backgroundColor = "black";
    audioElement.play();
  });