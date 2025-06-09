import Footer from "@/components/Footer";
import GameBoard from "@/components/GameBoard";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center w-full h-full p-8 gap-16 sm:p-20 bg-gray-100">
      <GameBoard />
      <Footer />
    </div>
  );
}
