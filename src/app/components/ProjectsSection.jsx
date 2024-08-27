// "use client"
// import React, {useState} from "react";
// import ProjectCard from "./ProjectCard"
// import ProjectTag from "./ProjectTag";

// const projectsData = [
//   {
//     id: 1,
//     title: "React Portfolio Website",
//     description: "Project 1 description",
//     image: "/images/projects/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "Potography Portfolio Website",
//     description: "Project 2 description",
//     image: "/images/projects/2.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "E-commerce Application",
//     description: "Project 3 description",
//     image: "/images/projects/3.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];

// const ProjectsSection = () => {
//     const [tag, setTag] = useState("All");

//     const handleTagChange = (newTag) =>{
//        setTag(newTag);
//     }
//   return (
//     <>
//       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//         My Projects
//       </h2>
//       <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
//         <ProjectTag 
//            onClick={handleTagChange} 
//            name="All" 
//            isSelected={tag === "All"} 
//         />

//         <ProjectTag 
//            onClick={handleTagChange} 
//            name="Web" 
//            isSelected={tag === "Web"} 
//         />
//       </div>
//       <div className="grid md:grid-col-3 gap-8 md:gap-12">
//         {projectsData.map((project) => (
//           <ProjectCard 
//             key={project.id} 
//             title={project.title} 
//             description={project.description} 
//             imgUrl = {project.image}
//             gitUrl={project.gitUrl}
//             previewUrl={project.previewUrl}
//             />
//             ))}</div>
//     </>
//   )
// }

// export default ProjectsSection












"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Quiz App Website",
    // description: "Developed a responsive and interactive Quiz App Website that allows users to take quizzes on various topics.",
    image: "/images/projects/quiz-app.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farzana-bit/quizz-app",
    previewUrl: "https://quizz-app-liard.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Api-Call",
    // description: "Created a dynamic Movie API Website that provides users with detailed information about movies, including ratings, reviews, and trailers.",
    image: "/images/projects/movi-app.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farzana-bit/Movie-",
    previewUrl: "https://movie-tan-rho.vercel.app/",
  },
  {
    id: 3,
    title: "Supreme panda",
    // description: "Project 3 description",
    image: "/images/projects/panda-game.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farzana-bit/supreme-panda",
    previewUrl: "https://supreme-panda.vercel.app/",
  },
  {
    id: 4,
    title: "Expense Tracker ",
    // description: "Project 4 description",
    image: "/images/projects/expense.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/farzana-bit/expense_tracker",
    previewUrl: "https://expense-tracker-one-blush.vercel.app/",
  },
  {
    id: 5,
    title: "Pokemon Card",
    // description: "Authentication and CRUD operations",
    image: "/images/projects/pokemon-card.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farzana-bit/pokemon-js-view",
    previewUrl: "https://pokemon-js-view.vercel.app/",
  },
  {
    id: 6,
    title: "Random Quotes Api",
    // description: "Project 5 description",
    image: "/images/projects/random-quotes.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farzana-bit/random-quotes",
    previewUrl: "https://random-quotes-ruddy-psi.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
