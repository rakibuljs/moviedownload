import Script from "next/script";

export default function PopunderAndSocialBar() {
  return (
    <>
      {/* পপআন্ডার অ্যাড */}
      <Script
        id="adsterra-popunder"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var popunderScript = document.createElement("script");
              popunderScript.src = "//pl25986333.effectiveratecpm.com/36/69/eb/3669eb2fa42aafb271e1d52404627576.js"; 
              popunderScript.async = true;
              document.body.appendChild(popunderScript);
            })();
          `,
        }}
      />

      {/* সোশ্যাল বার অ্যাড */}
      <Script
        id="adsterra-socialbar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var socialBarScript = document.createElement("script");
              socialBarScript.src = "//pl25986440.effectiveratecpm.com/ee/16/e7/ee16e7c727afa791be6431b83a771db6.js"; 
              socialBarScript.async = true;
              document.body.appendChild(socialBarScript);
            })();
          `,
        }}
      />
    </>
  );
}
