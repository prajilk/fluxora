import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Faq from "@/components/faq/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LogoFull from "@/components/icons/logo-full";
import Navbar from "@/components/navbar/navbar";
import Offer from "@/components/offer/offer";
import Team from "@/components/team/team";
import Work from "@/components/work/work";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Team />
            <Offer />
            <div className="relative overflow-x-hidden">
                <Faq />
                <Contact />
                <LogoFull className="absolute -right-72 top-1/4" />
            </div>
            <Footer />
        </>
    );
}
