import Image from "next/image";
import LOGO from "@/public/logo.png";
import BACKGROUND from "@/public/zaragoza.png";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${BACKGROUND.src})`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl backdrop-blur-md max-w-2xl w-full">
        <Image
          src={LOGO}
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Página en Construcción
        </h1>
        <p className="text-lg md:text-sm">
          Estamos trabajando para traerte una experiencia increíble.
        </p>
        <p className="text-md md:text-sm">
          Agradecemos tu paciencia y comprensión.
        </p>
      </div>
    </div>
  );
}
