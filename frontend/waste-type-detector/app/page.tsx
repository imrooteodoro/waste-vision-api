import ContentPage from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    
    <div className="flex min-h-screen flex-col bg-gray-50">
      
      <Header />

      <main className="flex-1 flex flex-col w-full">
        <ContentPage />
      </main>

      <Footer />
      
    </div>
  );
}