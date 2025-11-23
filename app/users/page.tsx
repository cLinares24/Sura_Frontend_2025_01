import UsersComponent from "@/components/organisms/UsersComponent";
import Footer from "@/components/organisms/Footer"
import AdminBarComponent from "@/components/organisms/AdminBarComponent";

export default function Home() {
  return (
    <>
      <AdminBarComponent />
      <UsersComponent />
      <Footer />
    </>
  );
}