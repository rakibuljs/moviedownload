import Script from "next/script";

export default function PopunderAndSocialBar() {
  return (
    <>
      {/* Popunder Ad */}
      <Script id="adsterra-popunder" strategy="lazyOnload">
        {`
          (function() {
            var popunderScript = document.createElement("script");
            popunderScript.src = "https://www.adsterra.com/your-popunder-code.js"; // Replace with actual Adsterra Popunder script
            popunderScript.async = true;
            document.body.appendChild(popunderScript);
          })();
        `}
      </Script>

      {/* SocialBar Ad */}
      <Script id="adsterra-socialbar" strategy="lazyOnload">
        {`
          (function() {
            var socialBarScript = document.createElement("script");
            socialBarScript.src = "https://www.adsterra.com/your-socialbar-code.js"; // Replace with actual Adsterra SocialBar script
            socialBarScript.async = true;
            document.body.appendChild(socialBarScript);
          })();
        `}
      </Script>
    </>
  );
}
