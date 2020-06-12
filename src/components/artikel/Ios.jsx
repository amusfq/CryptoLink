import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Ios() {
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
        Lima Fitur Android 11 yang 'Nyontek' iOS
      </div>
      <div>Jumat, 12 Jun 2020 10:02 WIB</div>
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
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/06/android-11_169.jpeg?w=700&q=90"
        alt="New design PS5"
      />
      <div className="text-left mb-4">
        Google mulai menyebar pembaruan Android 11 versi public beta, dan
        pembaruan tersebut punya sejumlah fitur baru, beberapa di antaranya
        sudah di iOS.
      </div>
      <div className="text-left mb-4">
        Di Android 11 public beta, ada lima fitur yang sebelumnya sudah ada di
        iOS. Apa saja?
      </div>
      <div className="text-left mb-4">
        <ul className="list-disc">
          <li className="font-bold text-xl">Kontrol smart home</li>
          Pengguna Android 11 bisa melakukan sejumlah pengaturan smart home
          dengan menekan tombol power selama beberapa detik. Ini artinya
          pengaturan tersebut sudah masuk ke level OS. Fitur ini sudah dimiliki
          iOS, tepatnya di iOS 10 saat Apple menambahkan fitur HomeKit device
          control di Control Center Apple.
          <li className="font-bold text-xl">One-Time Permission</li>
          Setelah hadir di iOS 13 yang dirilis 2019 lalu, kini Android 11 juga
          punya fitur one-time permission, yaitu pengguna punya opsi untuk
          memberi izin ke aplikasi untuk mengakses fitur tertentu ponsel sesuai
          kebutuhan. Maksudnya sesuai kebutuhan, akses ini hanya diberikan satu
          kali dan aplikasi tak terus menerus mendapat izin ke fitur tersebut.
          Tak cuma itu, jika aplikasinya sudah lama tak digunakan, izin ini juga
          otomatis akan terhapus.
          <li className="font-bold text-xl">
            Mempermudah Perpindahan Perangkat Media
          </li>
          Google mempermudah perpindahan antara satu perangkat media dengan
          perangkat yang lain, seperti dari speaker bluetooth ke earphone
          bluetooth lewat menu notifikasi di Android 11. Fitur semacam ini
          sebelumnya sudah ada di Control Center iOS lewat ikon AirPlay.
          <li className="font-bold text-xl">Antarmuka Screenshot</li>
          Antarmuka untuk melakukan screenshot di Android 11 mengalami
          perubahan, di mana setelah melakukan screenshot, gambarnya akan
          ditampilkan di bagian kiri bawah layar. Kemudian pengguna bisa memilih
          untuk mengedit gambar tersebut ataupun membagikannya ke layanan lain.
          Fitur ini sebelumnya sudah ada di iOS 11.
          <li className="font-bold text-xl" id="scrollTarget">
            Screen Recording
          </li>
          Google akhirnya memberikan fitur untuk melakukan rekaman layar atau
          screen recording secara native di Android. Dan di Android 11,
          implementasi fitur ini mirip dengan yang ada di iOS, yaitu diakses
          lewat menu Quick Setting (Control Center di iOS).
        </ul>
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
