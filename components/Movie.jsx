import Script from "next/script";
import PlayButton from "./PlayButton";
import Contact from "./Contact";

export default function MovieLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Video Embed */}
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mt-4">Play Your Favorite movie</h1>
        <p className="text-gray-300 mt-2">
          Click to Play or Download movie here
        </p>
        <div className="mt-4">
          <PlayButton />
          {/* <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with actual video ID
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe> */}
        </div>
      </div>

      {/* Redirect to Adsterra Link */}
      <div className="mt-6">
        <a
          href="https://www.adsterra.com/your-ad-link" // Replace with Adsterra link
          className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg shadow-md"
        >
          Download
        </a>
      </div>

      {/* Download Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:gap-4 gap-2 items-center justify-center">
        <a
          href="https://your-download-link1.com"
          className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md text-center"
        >
          Download 720p
        </a>
        <a
          href="https://your-download-link2.com"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md text-center"
        >
          Download 1080p
        </a>
      </div>
      <Contact />
      {/* Adsterra Ads - Client Side */}
    </div>
  );
}
