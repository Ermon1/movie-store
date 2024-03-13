import AllRoutes from "./routes/AllRoute";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
