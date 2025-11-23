import SpecialitiesComponent from "@/components/organisms/SpecialitiesComponent";
import Footer from "@/components/organisms/Footer"
import AdminBarComponent from "@/components/organisms/AdminBarComponent";

export default function Home() {
  return (
    <>
      <AdminBarComponent />
      <SpecialitiesComponent />
      <Footer />
    </>
  );
}