import MainCarrousel from "@/components/organisms/MainCarrousel";
import CaringYourHealth from "@/components/organisms/CaringYourHealth";
import Image from "next/image";
import Appointment from "@/components/organisms/Appointment";
import Bulletin from "@/components/organisms/Bulletin";

import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <MainCarrousel />
      <Appointment />
      <CaringYourHealth />
      <Bulletin />
      <Footer />
    </>
  );
}
