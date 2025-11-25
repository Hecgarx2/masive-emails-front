import Header from "./components/Header";
import Footer from "./components/Footer";
import MassUpload from "./pages/MassUpload";

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex flex-col items-center mb-6 flex-1">
          <MassUpload />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
