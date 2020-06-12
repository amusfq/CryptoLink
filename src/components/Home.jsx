import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

function Home() {
  const artikel = [
    {
      title: "Desain PlayStation 5 Jadi Bahan Candaan",
      img:
        "https://akcdn.detik.net.id/community/media/visual/2020/06/12/playstation-5_169.jpeg?w=700&q=90",
      time: "Jumat, 12 Jun 2020 09:32 WIB",
      desc:
        "Tak lama setelah Sony mengungkap desain PS5, netizen pun langsung membuat bermacam olok-olok terhadap desain konsol terbaru Sony itu..",
      link: "desain-playStation-5-jadi-bahan-candaan",
    },
    {
      title:
        "Terjun ke Bisnis IoT, Realme Akan Hadirkan TV Pintar di Indonesia",
      img:
        "https://akcdn.detik.net.id/community/media/visual/2020/05/26/45d69eef-f45a-4384-82ef-da33a1d13e01_43.webp?w=700&q=90",
      time: "Jumat, 12 Jun 2020 14:48 WIB",
      desc:
        "Menyambut tahun 2020, Realme mulai menjajaki bisnis Internet of Things (IoT) di Indonesia. Pada Januari lalu, vendor asal..",
      link: "terjun-ke-bisnis-iot-realme-akan-hadirkan-tv-pintar-di-indonesia",
    },
    {
      title: "Realme Narzo Tak Gentar Saingan dengan Redmi Note 9",
      img:
        "https://akcdn.detik.net.id/community/media/visual/2020/06/12/realme-narzo-23_43.jpeg?w=700&q=90",
      time: "Jumat, 12 Jun 2020 16:58 WIB",
      desc:
        "Realme akan meluncurkan lini ponsel terbarunya, Realme Narzo, di Indonesia pada 16 Juni mendatang. Melihat spesifikasi dan perkiraan..",
      link: "realme-narzo-tak-gentar-saingan-dengan-redmi-note-9",
    },
    {
      title: "Lima Fitur Android 11 yang 'Nyontek' iOS",
      img:
        "https://akcdn.detik.net.id/community/media/visual/2020/06/06/android-11_169.jpeg?w=700&q=90",
      time: "Jumat, 12 Jun 2020 10:02 WIB",
      desc:
        "Google mulai menyebar pembaruan Android 11 versi public beta, dan pembaruan tersebut punya sejumlah fitur baru, beberapa di antaranya..",
      link: "lima-fitur-android-11-yang-nyontek-ios",
    },
    {
      title: "Makin Kenceng! Ada Bocoran Fitur Oppo 80W SuperVOOC",
      img:
        "https://akcdn.detik.net.id/community/media/visual/2019/05/16/9f16df05-9214-418c-bc57-15270a5185f9_169.jpeg?w=700&q=90",
      time: "Jumat, 12 Jun 2020 12:11 WIB",
      desc:
        "Oppo sudah memberikan teknologi 66W fast-charging di perangkat Oppo Reno Ace. Kini ada bocoran fitur 80W SuperVOOC yang akan melun..",
      link: "makin-kenceng-ada-bocoran-fitur-oppo-80w-supervooc",
    },
    {
      title: "Mi Band 5 Dirilis, Layar Lebih Lebar Harga Masih Murah",
      img:
        "https://akcdn.detik.net.id/community/media/visual/2020/06/12/mi-band-5_169.jpeg?w=700&q=90",
      time: "Jumat, 12 Jun 2020 12:11 WIB",
      desc:
        "Xiaomi memperbarui gelang pintarnya. Mi Band 5 resmi hadir dengan layar lebih lebar, tapi harga masih murah..",
      link: "mi-band-5-dirilis-layar-lebih-lebar-harga-masih-murah",
    },
  ];
  let query = useQuery();

  const [, setCookie] = useCookies();

  const link = [
    "mi-band-5-dirilis-layar-lebih-lebar-harga-masih-murah",
    "lima-fitur-android-11-yang-nyontek-ios",
    "realme-narzo-tak-gentar-saingan-dengan-redmi-note-9",
    "terjun-ke-bisnis-iot-realme-akan-hadirkan-tv-pintar-di-indonesia",
    "makin-kenceng-ada-bocoran-fitur-oppo-80w-supervooc",
    "desain-playStation-5-jadi-bahan-candaan",
  ];

  useEffect(() => {
    if (query.get("ref") != null) {
      try {
        const target = atob(query.get("ref"));
        const item = link[Math.floor(Math.random() * link.length)];
        setCookie("target", target, { path: "/" });
        window.location.replace(item);
      } catch (e) {
        alert("Invalid link");
      }
    }
  }, []);
  return (
    <>
      {artikel.map((key, index) => (
        <ArtikelComponent
          key={index}
          title={key.title}
          img={key.img}
          time={key.time}
          desc={key.desc}
          link={key.link}
        />
      ))}
    </>
  );
}

function ArtikelComponent({ title, img, time, desc, link }) {
  return (
    <div className="mb-10">
      <div className="text-4xl font-bold ">{title}</div>
      <div>{time}</div>
      <img className="w-full h-auto my-10" src={img} />
      <div className="text-left">{desc}</div>
      <div className="text-left">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4"
          onClick={() => (window.location.href = link)}
        >
          Lanjutkan Membaca
        </button>
      </div>
    </div>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default Home;
