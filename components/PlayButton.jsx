"use client";
export default function PlayButton() {
  const handleVideoClick = () => {
    window.open("https://www.adsterra.com/your-ad-link", "_blank");
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"; // Replace with actual video link
    }, 1000);
  };

  return (
    <div className="w-full max-w-[860px] text-center">
      <div
        className="relative w-full lg:w-[800px] sm:max-w-[860px] lg:h-[480px] h-[200px] bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer flex items-center justify-center lg:-ml-40"
        onClick={handleVideoClick}
      >
        <img
          src="https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg" // Replace with actual video thumbnail
          alt="Movie Thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-red-600 opacity-80"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.5 4.5v11l9-5.5-9-5.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
