import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Me from "../components/Me";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import house from "../assets/house.png";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0">
      <Head>
        <title>Braydens Protfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Me */}
      <section id="me">
        <Me />
      </section>
      {/* About */}
      <section id="about">
        <About />
      </section>
      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact">
        <Contact />
      </section>
      <Link href="#me">
        <footer className="invisible md:visible md:sticky md:bottom-5 md:w-full md:cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-line.svg"
            ></img>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
