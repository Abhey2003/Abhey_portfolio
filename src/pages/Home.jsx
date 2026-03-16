import { useState } from "react";

import DeveloperHero from "../components/DeveloperHero";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import PageWrapper from "../components/PageWrapper";

function Home() {

    const [showPortfolio, setShowPortfolio] = useState(false);

    // show intro screen only
    if (!showPortfolio) {
        return (
            <DeveloperHero onExplore={() => setShowPortfolio(true)} />
        );
    }

    // show portfolio after clicking explore
    return (
        <PageWrapper>

            <Hero />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />

        </PageWrapper>
    );
}

export default Home;