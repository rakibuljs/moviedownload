import Image from "next/image";
import appStore from "@/public/appstore.jpeg";
import GooglePlay from "@/public/GooglePlay.png";
import microsoft from "@/public/microsoft.png";

export default function Contact() {
  return (
    <div>
      <h2 className="text-xl text-center font-semibold mt-10">Get App from</h2>
      <div className="flex gap-4 mt-10 mb-20">
        <Image src={GooglePlay} alt="" width={50} />
        <Image src={appStore} alt="" width={50} />

        <Image src={microsoft} alt="" width={180} />
      </div>
    </div>
  );
}
