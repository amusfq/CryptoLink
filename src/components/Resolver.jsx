import React from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function Resolver() {
  const [cookie, , removeCookie] = useCookies();
  useEffect(() => {
    const target = cookie["target"];
    if (target !== undefined) {
      removeCookie("target");
      window.location.href = target;
    } else {
      window.location.href = "/";
    }
  }, []);
  return <div className="text-center text-4xl">Please wait..</div>;
}

export default Resolver;
