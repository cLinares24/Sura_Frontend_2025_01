import MainCarrousel from "@/components/organisms/MainCarrousel";
import CaringYourHealth from "@/components/organisms/CaringYourHealth";
import Image from "next/image";
import Appointment from "@/components/organisms/Appointment";
import Bulletin from "@/components/organisms/Bulletin";

import DontMissIt from "@/components/organisms/DontMissItLinio";
import RenewYourHome from "@/components/organisms/RenewYourHome";
import DownCategories from "@/components/organisms/DownCategoriesLinio";
import FollowUs from "@/components/organisms/FollowUsLinio";
import CreditsLinio from "@/components/organisms/CreditsLinio";
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
