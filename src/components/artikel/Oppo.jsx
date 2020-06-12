import React, { useState, useEffect } from "react";

export default function Oppo() {
  const [btnViewCursor, setBtnViewCursor] = useState("cursor-not-allowed");
  const [btnViewText, setBtnViewText] = useState("Please wait..");
  const [btnViewState, setBtnViewState] = useState(true);

  const [btnvisitCursor, setBtnVisitCursor] = useState("cursor-not-allowed");
  const [btnvisitText, setBtnVisitText] = useState("Please wait..");
  const [btnvisitState, setBtnVisitState] = useState(true);
  const [btnvisitDisplay, setBtnVisitDisplay] = useState(" hidden");

  useEffect(() => {
    setTimeout(() => {
      setBtnViewCursor("");
      setBtnViewText("View Link");
      setBtnViewState(false);
    }, 5000);
  }, []);

  function startCount() {
    const elm = document.getElementById("scrollTarget");
    window.scrollTo({
      behavior: elm ? "smooth" : "auto",
      top: elm ? elm.offsetTop : 0,
    });
    setBtnVisitDisplay("");

    setTimeout(() => {
      setBtnVisitCursor("");
      setBtnVisitText("VISIT LINK");
      setBtnVisitState(false);
    }, 5000);
  }

  function visit() {
    window.location.href = "/resolver";
  }

  return (
    <>
      <div className="text-4xl font-bold ">
        Makin Kenceng! Ada Bocoran Fitur Oppo 80W SuperVOOC
      </div>
      <div>Jumat, 12 Jun 2020 12:11 WIB</div>
      <div className="my-10 text-center font-bold text-blue-500">
        <button
          className={
            "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " +
            btnViewCursor
          }
          onClick={() => startCount()}
          disabled={btnViewState}
        >
          {btnViewText}
        </button>
      </div>
      <img
        className="w-full h-auto my-10"
        src="https://akcdn.detik.net.id/community/media/visual/2019/05/16/9f16df05-9214-418c-bc57-15270a5185f9_169.jpeg?w=700&q=90"
        alt="New design PS5"
      />
      <div className="text-left mb-4">
        Oppo sudah memberikan teknologi 66W fast-charging di perangkat Oppo Reno
        Ace. Kini ada bocoran fitur 80W SuperVOOC yang akan meluncur pada ponsel
        selanjutnya.
      </div>
      <div className="text-left mb-4">
        Mengandalkan fitur pengisian cepat berdaya 65W, Oppo mengklaim Reno Ace
        dapat terisi penuh (4.000 mAh) dalam 30 menit. Otomatis, 80W akan
        membuat pengisian daya semakin hemat waktu.
      </div>
      <div className="text-left mb-4">
        Laporan itu muncul di internet pertama kali oleh seseorang asal China
        yang menggunakan nama Digital Chat Station. Bocoran itu disertai gambar
        smartphone Oppo yang diisi daya pada kecepatan pengisian 80W,
        sebagaimana melansir My Smart Price.
      </div>
      <div className="text-left mb-4">
        Lebih lanjut, Oppo punya pesaing yakni Nubia Red Magic 5G yang
        dikabarkan akan membawa 100W fast-charging. Bahkan akun resmi AnTuTu
        Weibo baru-baru ini mengomentari tentang pengisian cepat 100W oleh
        Nubia.
      </div>
      <img
        className="w-full h-auto mb-4"
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/11/makin-kenceng-ada-bocoran-fitur-oppo-80w-supervooc.jpeg?w=1920"
        alt="New design PS5"
      />
      <div className="text-left mb-4">
        Perusahaan juga telah mulai menggoda perangkat lewat unggahan di Weibo
        dengan tulisan yang bila diartikan kira-kira seperti ini: "Sudah 7 hari
        di rumah, dan sudah waktunya untuk mengisi ulang. Apakah menurut Anda
        kecepatan ini OK?".
      </div>
      <div className="text-left mb-4">
        Nah, dalam gambar yang dilampirkan menunjukkan perangkat sedang diisi
        daya. Kita dapat dengan mudah melihat bahwa tegangannya adalah 8,4V dan
        arusnya adalah 9,6A dan dengan hitungan sederhana, ini menunjukkan bahwa
        watt efektif menjadi 100W.
      </div>
      <div className="text-left mb-4" id="scrollTarget">
        Sejauh ini, detail seputar pengisian daya OPPO 80W dan pengisian daya
        Nubia Red Magic 5G 100W cukup keren terdengar. Kita lihat
        perkembangannya nanti.
      </div>
      <div className="mb-10 text-center">
        <button
          className={
            "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " +
            btnvisitCursor +
            btnvisitDisplay
          }
          onClick={() => visit()}
          disabled={btnvisitState}
        >
          {btnvisitText}
        </button>
      </div>
    </>
  );
}
