import Script from "next/script";

export default function PopunderAndSocialBar() {
  return (
    <>
      {/* পপআন্ডার অ্যাড */}
      <Script
        id="adsterra-popunder"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var popunderScript = document.createElement("script");
              popunderScript.src = "//pl25986333.effectiveratecpm.com/36/69/eb/3669eb2fa42aafb271e1d52404627576.js"; // এখানে আপনার আসল Adsterra পপআন্ডার স্ক্রিপ্ট দিন
              popunderScript.async = true;
              document.body.appendChild(popunderScript);
            })();
          `,
        }}
      />

      {/* সোশ্যাল বার অ্যাড */}
      <Script
        id="adsterra-socialbar"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var socialBarScript = document.createElement("script");
              socialBarScript.src = "https://www.adsterra.com/your-socialbar-code.js"; // এখানে আপনার আসল Adsterra সোশ্যাল বার স্ক্রিপ্ট দিন
              socialBarScript.async = true;
              document.body.appendChild(socialBarScript);
            })();
          `,
        }}
      />
    </>
  );
}
