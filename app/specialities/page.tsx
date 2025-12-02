import SpecialitiesComponent from "@/components/organisms/SpecialitiesComponent";
import Footer from "@/components/organisms/Footer"
import AdminBarComponent from "@/components/organisms/AdminBarComponent";
import { MedicosProvider } from "@/context/DoctorsContext";

export default function Home() {
  return (
    <>
      <AdminBarComponent />
      <MedicosProvider>
      <SpecialitiesComponent />
      </MedicosProvider>
      <Footer />
    </>
  );
}