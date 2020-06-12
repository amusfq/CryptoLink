import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Band() {
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
        Mi Band 5 Dirilis, Layar Lebih Lebar Harga Masih Murah
      </div>
      <div>Jumat, 12 Jun 2020 09:02 WIB</div>
      <div className="my-10 text-center font-bold text-blue-500">
        <button
          className={
            "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " +
            btnViewCursor + btnviewDisplay
          }
          onClick={() => startCount()}
          disabled={btnViewState}
        >
          {btnViewText}
        </button>
      </div>
      <img
        className="w-full h-auto my-10"
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/12/mi-band-5_169.jpeg?w=700&q=90"
        alt="New design PS5"
      />
      <div className="text-left mb-4">
        Xiaomi memperbarui gelang pintarnya. Mi Band 5 resmi hadir dengan layar
        lebih lebar, tapi harga masih murah.
      </div>
      <div className="text-left mb-4">
        Penerus Mi Band 4 ini masih mengusung layar AMOLED. Namun ukurannya
        meningkat dari 0,95 inch menjadi 1,1 inch.
      </div>
      <div className="text-left mb-4">
        Sehingga apa yang ditampilkan di layar lebih kaya, termasuk animasinya.
        Sensornya tidak berubah, masih ada accelerometer, heart rate monitor,
        barometer and gyroscope.
      </div>
      <div className="text-left mb-4">
        Mi Band 5 dapat mengenali lima gerakan renang secara otomatis. Skor
        Personal Activity Intelligence kini tersedia memberi pengguna sedikit
        gambaran tentang seberapa besar dampak latihan terhadap kebugaran.
      </div>
      <img
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/12/mi-band-5-1_169.jpeg?w=620"
        className="h-auto w-full mb-4"
      />
      <div className="text-left mb-4">
        Pemantauan jantung telah ditingkatkan dan sekarang dapat mendeteksi
        kelainan dan memberi tahu ke pengguna. Kemampuan ini mirip Apple Watch.
      </div>
      <div className="text-left mb-4">
        Selain itu, sensor PPG baru 50% lebih akurat daripada pendahulunya.
        Dalam pelacakan tidur, Mi Band 5 sekarang dapat mengekstrak data yang
        terkait dengan tidur REM penggunanya.
      </div>
      <div className="text-left mb-4">
        Ada juga versi NFC yang dapat digunakan untuk pembayaran. Seorang
        asisten suara turut dihadirkan, tetapi tidak diketahui apakah keduanya
        akan bekerja di luar China.
      </div>
      <img
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/12/mi-band-5-3_169.jpeg?w=620"
        className="h-auto w-full mb-4"
        id="scrollTarget"
      />
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
      <div className="text-left mb-4">
        Gelang pintar ini dapat dibawa di kedalaman hingga di 50 meter. Baterai
        bisa bertahan hingga 14 hari pemakaian. Menariknya kini pengisian
        menggunakan magnet, jadi tidak perlu lagi mengeluarkan Mi Band 5 dari
        strapnya.
      </div>
      <div className="text-left mb-4">
        Xiaomi mulai akan menjualnya pada 18 Juni mendatang. Dibanderol i89 yuan
        atau Rp 380 ribu untuk varian standar dan 229 yuan atau Rp 461 ribu
        untuk NFC.
      </div>
    </>
  );
}
