import Footer from "@/components/Footer";
import GameBoard from "@/components/GameBoard";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center w-full h-full py-4 px-0.5 gap-y-6 bg-gray-100">
      <GameBoard />
      <Footer />
    </div>
  );
}
