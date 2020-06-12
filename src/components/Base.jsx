import React from "react";
import { useParams } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const Sidebar = React.lazy(() => import("./Sidebar"));
const Oppo = React.lazy(() => import("./artikel/Oppo"));
const PS = React.lazy(() => import("./artikel/PS"));
const Realme = React.lazy(() => import("./artikel/Realme"));
const Ios = React.lazy(() => import("./artikel/Ios"));
const Iot = React.lazy(() => import("./artikel/Iot"));
const Band = React.lazy(() => import("./artikel/Band"));

function Base() {
  let { link } = useParams();
  function include() {
    switch (link) {
      case "mi-band-5-dirilis-layar-lebih-lebar-harga-masih-murah":
        return <Band />;
      case "lima-fitur-android-11-yang-nyontek-ios":
        return <Ios />;
      case "realme-narzo-tak-gentar-saingan-dengan-redmi-note-9":
        return <Realme />;
      case "terjun-ke-bisnis-iot-realme-akan-hadirkan-tv-pintar-di-indonesia":
        return <Iot />;
      case "makin-kenceng-ada-bocoran-fitur-oppo-80w-supervooc":
        return <Oppo />;
      case "desain-playStation-5-jadi-bahan-candaan":
        return <PS />;
      default:
        return <Home />;
    }
  }
  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/5 p-2 text-center ">{include()}</div>
        {/* Sidebar */}
        <div className="w-full lg:w-2/5 p-2 px-10">
          <div className="text-blue-600 font-bold text-2xl border-t-2 border-gray-400 py-2">
            Artikel Lainnya
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Base;
