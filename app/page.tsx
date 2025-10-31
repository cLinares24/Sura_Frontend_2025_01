import SuraMainCarrousel from "@/components/organisms/SuraMainCarrousel";
import SuraPlataform from "@/components/organisms/SuraPlataform";
import Image from "next/image";
import Appointment from "@/components/organisms/Appointment";
import Affiliations from "@/components/organisms/Affiliations";
import DontMissIt from "@/components/organisms/DontMissItLinio";
import RenewYourHome from "@/components/organisms/RenewYourHome";
import DownCategories from "@/components/organisms/DownCategoriesLinio";
import FollowUs from "@/components/organisms/FollowUsLinio";
import CreditsLinio from "@/components/organisms/CreditsLinio";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <SuraMainCarrousel />

      <Appointment />
      <SuraPlataform />
      <Affiliations />
      <Footer />
    </>
  );
}
