import Header from "@/components/Header";
import Download from "@/components/Download";

const DownloadPage = () => {
  return (
    <div className="flex w-full h-screen justify-start items-center bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 w-full h-[687px]"
          style={{
            backgroundImage: 'url("/img/download-bg.png")',
            imageRendering: "pixelated",
            opacity: 0.08, // Option 1: This will make the entire div and its contents 8% opacity
          }}
        />
      </div>
      <Header />
      <Download />
    </div>
  );
};

export default DownloadPage;
