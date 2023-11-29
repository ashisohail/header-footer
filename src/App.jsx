import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubscriptionForm from "./components/SubscriptionForm";

function App() {
  return (
    <>
      <Header />
      <p className="main-heading">This is my header and footer project!</p>
      <SubscriptionForm />
      <Footer />
    </>
  );
}

export default App;
