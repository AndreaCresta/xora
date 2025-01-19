import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Pricing from "./sections/Pricing"
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <Testimonials />
            <Download />
            <Footer />
        </main>
    )
}
export default App