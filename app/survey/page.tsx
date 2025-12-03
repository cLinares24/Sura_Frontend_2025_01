import SurveyComponent from "@/components/organisms/SurveyComponent";
import AdminBarComponent from "@/components/organisms/AdminBarComponent";
import Footer from "@/components/organisms/Footer";
export default function Home() {
  return (
    <>
      <AdminBarComponent />
      <SurveyComponent />
      <Footer />
    </>
  );
}
