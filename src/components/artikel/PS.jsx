import React, { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useEffect } from "react";

export default function PS() {
  const [btnViewCursor, setBtnViewCursor] = useState("cursor-not-allowed");
  const [btnViewText, setBtnViewText] = useState("Please wait..");
  const [btnViewState, setBtnViewState] = useState(true);

  const [btnvisitCursor, setBtnVisitCursor] = useState("cursor-not-allowed");
  const [btnvisitText, setBtnVisitText] = useState("Please wait..");
  const [btnvisitState, setBtnVisitState] = useState(true);
  const [btnvisitDisplay, setBtnVisitDisplay] = useState(" hidden");

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
        Desain PlayStation 5 Jadi Bahan Candaan
      </div>
      <div>Jumat, 12 Jun 2020 09:32 WIB</div>
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
        src="https://akcdn.detik.net.id/community/media/visual/2020/06/12/playstation-5_169.jpeg?w=700&q=90"
        alt="New design PS5"
      />
      <div className="text-left">
        Tak lama setelah Sony mengungkap desain PS5, netizen pun langsung
        membuat bermacam olok-olok terhadap desain konsol terbaru Sony itu. Sony
        menggunakan desain bertema warna sama dengan kontroler Dual Sense yang
        mereka rilis pada 7 April lalu, yaitu hitam dan putih. Tema inilah yang
        menjadi bahan ejekan utama para netizen. Contohnya adalah @GGhandi_ yang
        'membuat' PS5 dari router miliknya yang berwarna hitam dan menutup
        bagian sampingnya dengan kertas berwarna putih.
        <TwitterTweetEmbed tweetId="1271190635127681024" />
        <div className="my-10">
          Hal serupa juga dilakukan oleh @glacear_ yang menutup routernya dengan
          semacam kertas tisu berwarna putih dan menaruhnya dalam posisi
          horizontal.
        </div>
        <TwitterTweetEmbed tweetId="1271195286124167168" />
        <div className="my-10" id="scrollTarget">
          Sementara @ParkerOrtolani membuat gambarnya terlihat sedikit lebih
          resmi dengan mengedit poster milik Linksys, perusahaan pembuat
          perangkat jaringan -- salah satunya router.
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
        <TwitterTweetEmbed tweetId="1271194815204675593" />
        <div className="my-10">
          Tak cuma router yang jadi 'korban' untuk dimiripkan dengan PS5,
          melainkan juga casing PC jadul yang punya warna sama, yaitu hitam dan
          putih.
        </div>
        <TwitterTweetEmbed tweetId="1271199052781309956" />
        <div className="my-10">
          Bahkan ada yang menyamakan PS5 dengan kapal induk yang bisa dijadikan
          sebagai tempat pesawat take off dan landing.
        </div>
        <TwitterTweetEmbed tweetId="1271198780516335617" />
        <div className="my-10">
          PS5 juga disamakan dengan desain beberapa bangunan yang memang
          terlihat mirip. Seperti di bawah ini.
        </div>
        <TwitterTweetEmbed tweetId="1271190703356497931" />
      </div>
    </>
  );
}
