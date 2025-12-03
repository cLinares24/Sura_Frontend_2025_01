import SpecialitiesComponent from "../../components/organisms/SpecialitiesComponent";
import Footer from "../../components/organisms/Footer"
import AdminBarComponent from "../../components/organisms/AdminBarComponent";
import { MedicosProvider } from "@/context/DoctorsContext";

export default function Specialities() {
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