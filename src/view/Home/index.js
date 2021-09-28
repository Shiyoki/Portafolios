import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Aboutme from "../../components/About";
import Tech from "../../components/Tech";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
    return(
        <div>
        <Navbar/>
        <Presentation />
        <Aboutme />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
        </div>
    );
}