import Image from "next/image";
import appStore from "@/public/appstore.jpeg";
import GooglePlay from "@/public/GooglePlay.png";
import microsoft from "@/public/microsoft.png";

export default function Contact() {
  return (
     <div className="flex justify-center items-center">
       <h2 className="text-xl text-center font-semibold">
          Get App from
        </h2>
          <div className="flex gap-4 mt-10 mb-20">
            <a href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99">
              <Image src={GooglePlay} alt="" width={30} />
            </a>
            <a href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99">
              <Image src={appStore} alt="" width={30} />
            </a>
            <a
              href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99"
              className=""
            >
              <Image src={microsoft} alt="" width={120} />
            </a>
          </div>
        </div>
  );
}
