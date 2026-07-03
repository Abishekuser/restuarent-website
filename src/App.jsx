import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PopularDishes from "./components/PopularDishes.jsx";
import AboutUs from "./components/AboutUs.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative bg-espresso text-ivory font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PopularDishes />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
