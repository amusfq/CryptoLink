import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Realme() {
  const [btnViewCursor, setBtnViewCursor] = useState("cursor-not-allowed");
  const [btnViewText, setBtnViewText] = useState("Please wait..");
  const [btnViewState, setBtnViewState] = useState(true);
  const [btnviewDisplay, setBtnViewDisplay] = useState(" hidden");

  const [btnvisitCursor, setBtnVisitCursor] = useState("cursor-not-allowed");
  const [btnvisitText, setBtnVisitText] = useState("Please wait..");
  const [btnvisitState, setBtnVisitState] = useState(true);
  const [btnvisitDisplay, setBtnVisitDisplay] = useState(" hidden");
  const [cookie, , removeCookie] = useCookies();

  useEffect(() => {
    if (cookie["target"] !== undefined) {
      setBtnViewDisplay("");
      setTimeout(() => {
        setBtnViewCursor("");
        setBtnViewText("View Link");
        setBtnViewState(false);
      }, 5000);
    }
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
        Realme Narzo Tak Gentar Saingan dengan Redmi Note 9
      </div>
      <div>Jumat, 12 Jun 2020 16:58 WIB</div>
      <div className="my-10 text-center font-bold text-blue-500">
        <button
          className={
            "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " +
            btnViewCursor +
            btnviewDisplay
          }
          onClick={() => startCount()}
          disabled={btnViewState}
        >
          {btnViewText}
        </button>
      </div>
      <img
        className="w-full h-auto my-10"
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/12/realme-narzo-23_43.jpeg?w=700&q=90"
        alt="New design PS5"
      />
      <div className="text-left mb-4">
        Realme akan meluncurkan lini ponsel terbarunya, Realme Narzo, di
        Indonesia pada 16 Juni mendatang. Melihat spesifikasi dan perkiraan
        harganya, ponsel ini akan memiliki pesaing yang cukup berat yaitu Redmi
        Note 9 yang baru meluncur.
      </div>
      <div className="text-left mb-4">
        Tapi Realme tidak gentar menghadapi pesaingnya tersebut. Marketing
        Director Realme Indonesia Palson Yi mengatakan ia optimis ponsel ini
        akan sukses di pasar Indonesia.
      </div>
      <div className="text-left mb-4">
        "Secara internal kami percaya ponsel ini akan menjadi yang terbaik di
        segmen Rp 2 jutaan, tapi kami menunggu konsumen untuk menilainya
        langsung," kata Palson dalam wawancara dengan detikINET, Kamis
        (11/6/2020).
      </div>
      <div className="text-left mb-4">
        Palson mengatakan kompetisi dengan vendor lain justru merupakan hal yang
        bagus bagi masyarakat karena mereka akan memiliki banyak pilihan ponsel
        dengan harga terjangkau tapi spesifikasinya tidak tanggung.
      </div>
      <div className="text-left mb-4">
        Bahkan menurut Palson, jika seri ini sukses di pasar bukan tidak mungkin
        Realme akan menjadikan Narzo sebagai sub-brand baru. Hal ini sudah
        direncanakan dalam strategi internal Realme untuk seri terbaru ini.
      </div>
      <div className="text-left mb-4">
        Tapi untuk saat ini, Narzo baru dikenalkan Realme sebagai seri baru yang
        menemani seri C, seri number dan seri X yang telah hadir di Indonesia.
      </div>
      <div className="text-left mb-4">
        "Kalau kita langsung kenalkan ini sebagai sub brand, dikhawatirkan akan
        mengalihkan perhatian dari produknya," jelas Palson
      </div>
      <div className="text-left mb-4">
        "Kami harap generasi pertama Realme Narzo orang-orang akan fokus pada
        produknya. Apakah produknya bisa memenuhi permintaan mereka, setelah itu
        baru secara perlahan kita kenalkan Narzo sebagai sub-brand," pungkasnya.
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
