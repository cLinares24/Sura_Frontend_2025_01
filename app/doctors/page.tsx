import DoctorComponent from "../../components/organisms/DoctorComponent";
import Footer from "../../components/organisms/Footer"
import AdminBarComponent from "../../components/organisms/AdminBarComponent";

export default function Doctors() {
  return (
    <>
      <AdminBarComponent />
      <DoctorComponent />
      <Footer />
    </>
  );
}