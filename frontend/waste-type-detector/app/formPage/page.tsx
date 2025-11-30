import Footer from "@/components/footer";
import FormPage from "@/components/formPage/formPage";
import Header from "@/components/header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      
      <Header />


      <main className="flex-1 w-full flex flex-col">
        <FormPage />
      </main>

      <Footer />
      
    </div>
  );
}