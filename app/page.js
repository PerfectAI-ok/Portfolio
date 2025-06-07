"use client";
// import Navbar from "@/components/Navbar";
import { Navbar } from "@/components/Navbar";
import { Contact, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { TypingText } from "@/components/TypingText";
// import ContactSectionGreen from "@/components/ContactSectionGreen";
import { ContactSectionGreen } from "@/components/ContactSectionGreen";
import { WordRotate } from "@/components/magicui/word-rotate";



export default function Home() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const projects = [
    {
      title: "IntelliQuiz",
      description:
        "Elevate your learning with IntelliQuiz, an AI-powered quiz app that adapts to your knowledge level.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Gemini AI",
        "WebSockets",
        "Tailwind CSS",
      ],
      image: "/IntelliQuiz.png",
      liveLink: "https://intelliquiz-main-4v98.vercel.app/",
      githubLink: "https://github.com/OmkarKathile007/Intelliquiz_Main",
    },
    {
      title: "GenX AI",
      description:
        "A next-generation AI platform offering 6+ productivity tools and accurate, on-demand insights powered by top trending AI models",
      tags: ["NextJs", "SpringBoot", "Gemini AI", "Tailwind CSS"],
      image: "/Genxai.png",
      liveLink: "https://genxai-psi.vercel.app/",
      githubLink: "https://github.com/OmkarKathile007/GenXai",
    },
    {
      title: "HealthCare AI Assistant",
      description:
        "A voice-driven patient assistant using IBM Watsonx for hands-free interaction, inspired by healthcare challenges during the COVID-19 pandemic.",
      tags: [
        "TypeScript",
        "IBM Watson Assistant",
        "IBM Cloud DB",
        "Tailwind CSS",
      ],
      image: "/AiHealthCare.png",
      liveLink: "https://health-care-ai-assistant-main.vercel.app/",
      githubLink:
        "https://github.com/OmkarKathile007/HealthCare_AI_Assistant_MAIN",
    },
    {
      title: "Surplus Shift",
      description:
        "Realtime Platform platform for connecting surplus food with local NGO's, Reduce Waste, Fight Hunger",
      tags: [
        "NextJs",
        "NodeJs",
        "MongoDB",
        "IBM Watsonx Assistant",
        "Deeplearning",
        "Image Recongnition",
        "Tailwind CSS",
      ],
      image: "/surplus.png",
      liveLink: "#",
      githubLink: "https://github.com/OmkarKathile007/Techathon_Main",
    },
    {
      title: "Inventory Management System",
      description:
        "Inventory Management, streamlining the process of stocking new products, refreshing product details, showcasing current inventory using REST APIs",
      tags: ["ReactJs", "SpringBoot", "H2 Db", "Css"],
      image: "/adminEcom.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Urban Threads",
      description:
        "UrbanThreads: A React e-commerce app to browse products, Add to cart and checkout",
      tags: ["ReactJs", "Html", "Css"],
      image: "/Ecommerce.png",
      liveLink: "https://mern-orpin-beta.vercel.app/",
      githubLink: "https://github.com/OmkarKathile007/MERN",
    },
  ];

  const techstackIcons = [
    { name: "Java", icon: "/java.svg" },
    { name: "Spring Boot", icon: "/spring-boot-1.svg" },
    { name: "Next.js", icon: "/next-js.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "HTML", icon: "/html.svg" },
    { name: "CSS", icon: "/css.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "MySQL", icon: "/mysql.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },

    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "React", icon: "/react.svg" },

    { name: "Python", icon: "/python.svg" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      {/* Hero Section */}
      <main className="w-full min-h-screen relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/MainSection.mp4"
          autoPlay
          loop
          muted
          playsInline
        />


        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center bg-black/50">
          <div className="w-full  lg:w-1/2 px-4 py-8 space-y-4  sm:justify-center flex flex-col  md:relative md:left-24  lg:text-left">
            <span className="md:text-2xl justify-start   sm:text-3xl text-yellow-200 font-bold">
              Hello, I’m
            </span>

            <TypingText
              text="Omkar Kathile"
              speed={120}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent"
            />

            <p
              className="text-base sm:text-lg  bg-gradient-to-r from-yellow-200 to-lime-400 
        bg-clip-text text-transparent "
            >
              A passionate developer focused on crafting innovative solutions.
            </p>
          </div>

          {/* Hidden on small screens; visible from lg and up */}
          <div className="hidden lg:block w-3/4 lg:w-1/2 p-4">
            <div className="relative w-full h-auto">
              <Image
                src="/monitor1.png"
                alt="Monitor"
                width={600}
                height={350}
                className="w-full h-full md:mx-16 md:w-5/6 object-cover rounded-lg shadow-lg"
              />
              <WordRotate
                className="absolute top-2/5 md:ml-3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-4xl sm:text-xl   font-extrabold bg-gradient-to-r from-yellow-200 to-lime-400 
        bg-clip-text text-transparent "
                words={[
                  "TechEnthusiast",
                  "FullStackDeveloper",
                  "BackendDeveloper",
                  "FrontendDeveloper",
                  "AI Enthusiast",
                ]}
              />
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12 px-4">
          <h2
            className="text-4xl sm:text-5xl font-semibold
                   bg-gradient-to-l from-lime-400 to-green-600
                   bg-clip-text text-transparent"
          >
            My Projects
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                  gap-8 w-full max-w-6xl mx-auto px-4"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden group
                   transition-all duration-300 hover:shadow-xl 
                   hover:-translate-y-2"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative h-56 overflow-hidden border border-blue-100 rounded-md">
                <Image
                  src={project.image} // ← use dynamic src
                  alt={project.title}
                  fill
                  className="absolute inset-0 object-cover object-center
                       transition-transform duration-700 ease-in-out"
                />
                {/* dark overlay on hover */}
                <div
                  className="absolute inset-0 bg-black/40
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
                >
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      className="p-3 rounded-full bg-white text-gray-900
                           hover:bg-gray-100 transition-colors duration-200"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="p-3 rounded-full bg-white text-gray-900
                           hover:bg-gray-100 transition-colors duration-200"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-3 py-1 rounded-full
                           text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center px-4">
          <a
            href="https://github.com/OmkarKathile007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full
                 border border-foreground/20 hover:bg-secondary/50
                 transition-all focus:focus-ring"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-16 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-l from-lime-400 to-green-600 bg-clip-text text-transparent mb-8 text-center px-4">
          Technologies I Work On
        </h1>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl px-4">
          {techstackIcons.map((icon, idx) => (
            <div
              key={idx}
              className="w-20 h-20 flex items-center justify-center bg-white p-3 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(144,238,144,0.5)]"
            >
              <Image
                src={icon.icon}
                width={100}
                height={100}
                alt={`${icon.name} icon`}
              />
            </div>
          ))}
        </div>
      </section>

      <ContactSectionGreen />
    </div>
  );
}
