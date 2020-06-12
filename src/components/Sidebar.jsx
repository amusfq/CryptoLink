import React from "react";

export default function Sidebar() {
  const sidebar = [
    {
      text: "Lima Fitur Android 11 yang 'Nyontek' iOS",
      link: "lima-fitur-android-11-yang-nyontek-ios",
    },
    {
      text: "Mi Band 5 Dirilis. Layar Lebih Lebar Harga Masih Murah",
      link: "mi-band-5-dirilis-layar-lebih-lebar-harga-masih-murah",
    },
    {
      text: "Realme Narzo Tak Gentar Saingan Dengan Redmi Note 9",
      link: "realme-narzo-tak-gentar-saingan-dengan-redmi-note-9",
    },
    {
      text: "Terjun ke Bisnis IoT, Realme Akan Hadirkan TV Pintar di Indonesia",
      link: "terjun-ke-bisnis-iot-realme-akan-hadirkan-tv-pintar-di-indonesia",
    },
    {
      text: "Makin Kencang! Ada Bocoran Fitur Oppo 80W SuperVOOC",
      link: "makin-kenceng-ada-bocoran-fitur-oppo-80w-supervooc",
    },
    {
      text: "Desain PlayStation 5 Jadi Bahan Candaan",
      link: "desain-playStation-5-jadi-bahan-candaan",
    },
  ];
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  return (
    <>
      {shuffle(sidebar).map((key, index) => (
        <SidebarComponent
          key={index}
          index={index + 1}
          text={key.text}
          link={key.link}
        />
      ))}
    </>
  );
}

function SidebarComponent({ index, text, link }) {
  return (
    <a
      href={link}
      className="font-bold text-xl flex mb-4 hover:text-orange-500"
    >
      <div className="text-gray-600 mr-4">#{index}</div>
      <div>{text}</div>
    </a>
  );
}
