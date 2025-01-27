'use client'
import React, { EffectCallback, useEffect } from "react";

const isReadyStateMatch = (expected) => {
  if (!expected) {
    return true;
  }
  if (expected === "string" && document.readyState === expected) {
    return true;
  }
  return expected !== -1;
};

const useReadyStateEffect = (
  effect,
  deps = [],
  onState = "complete"
) => {
  useEffect(() => {
    const destructors = [
      () => document.removeEventListener("readystatechange", listener),
    ];

    const listener = () => {
      if (!isReadyStateMatch(onState)) {
        return;
      }
      const destructor = effect();
      if (destructor) {
        destructors.push(destructor);
      }
    };

    listener();
    document.addEventListener("readystatechange", listener);

    return () => destructors.forEach((d) => d());
  }, deps);
};

function VLibras(forceOnload) {
  useReadyStateEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      const widgetUrl = `https://vlibras.gov.br/app`;
      script.onload = () => {
        // @ts-ignore
        new window.VLibras.Widget(widgetUrl);
        if (forceOnload) {
          // @ts-ignore
          window.onload();
        }
      };
      document.head.appendChild(script);
    },
    [forceOnload],
    "complete"
  );

  return (
    // @ts-ignore
    <div vw="true" className="enabled rounded-full">
      <div vw-access-button="true" className="active rounded-full" />
      <div vw-plugin-wrapper="true rounded-full">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}

export default VLibras;