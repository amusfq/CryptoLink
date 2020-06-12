import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Iot() {
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
        Terjun ke Bisnis IoT, Realme Akan Hadirkan TV Pintar di Indonesia
      </div>
      <div>Jumat, 12 Jun 2020 14:48 WIB</div>
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
        src="https://akcdn.detik.net.id/community/media/visual/2020/05/26/45d69eef-f45a-4384-82ef-da33a1d13e01_43.webp?w=700&q=90"
        alt="New design PS5"
      />
      <div className="text-left mb-4">
        Menyambut tahun 2020, Realme mulai menjajaki bisnis Internet of Things
        (IoT) di Indonesia. Pada Januari lalu, vendor asal China ini meluncurkan
        Buds Air, earphone true wireless system pertamanya, di Indonesia.
      </div>
      <div className="text-left mb-4">
        Mereka kemudian melanjutkannya dengan meluncurkan gelang pintar Realme
        Band di bulan April. Rupanya kesuksesan dua produk ini membuat Realme
        ingin lebih serius menggarap pasar IoT di Indonesia.
      </div>
      <div className="text-left mb-4">
        Sebagai brand yang terbilang baru dan menggarap bisnis smartphone dan
        IoT dalam waktu bersamaan dianggap sebagai hal yang menantang bagi
        Marketing Director Realme Indonesia Palson Yi. Tapi ia tidak menganggap
        IoT sebagai bisnis sampingan bagi Realme.
      </div>
      <div className="text-left mb-4">
        "Kami tidak menganggap IoT sebagai bisnis sampingan. Kami percaya IoT
        akan berkontribusi cukup banyak terhadap perkembangan bisnis kami," kata
        Palson dalam wawancara dengan detikINET, Kamis (11/6/2020).
      </div>
      <div className="text-left mb-4">
        Palson tidak mengatakan kapan TV pintar ini akan diboyong ke Indonesia,
        tapi ia menjanjikan produk ini akan datang dalam waktu dekat.
      </div>
      <div className="text-left mb-4">
        Keberanian Realme untuk membawa lebih banyak produk IoT ke Indonesia
        juga didasari oleh kesuksesan Realme Buds Air dan Realme Band di Tanah
        Air.
      </div>
      <div className="text-left mb-4" id="scrollTarget">
        "Saya sudah melihat beberapa data, Realme Band kami tidak mengira
        sewaktu meluncur di platform ecommerce kami melihat 4.000 orang
        mengantri untuk membeli produk ini tapi kami membatasi jumlahnya hanya
        500," kata Palson.
      </div>
      <div className="text-left mb-4" id="scrollTarget">
        "Orang-orang sangat tertarik dengan produk IoT yang kami kenalkan dan
        mereka masih menunggu lebih banyak produk dari kami. Ini kenapa fase
        peluncuran kami agak cepat," pungkasnya.
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
