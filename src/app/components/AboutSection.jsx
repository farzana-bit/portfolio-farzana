"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image"
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      // list-disc
      <div class="flex flex-wrap space-x-6 items-center ">
        <div class="flex flex-col items-center group">
          <img src="./images/others/html5.svg" alt="html5" class="h-10 w-12 mb-2 group-hover:scale-110 transition-transform duration-300"/>
          <span class="text-white mt-2 text-sm font-semibold group-hover:text-green-400">HTML5</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/css.svg" alt="css3" class="h-10"/>
          <span class="text-white mt-2">CSS3</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/javascript.svg" alt="javascript" class="h-10"/>
          <span class="text-white mt-2">JavaScript</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/express.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Express Js</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/react.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">React js</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/tailwind.svg" alt="HTML5" class="h-12"/>
          <span class="text-white mt-2">Tailwind CSS</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/react-router.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">React Router</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="./images/others/light-redux.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">React Redux</span>
        </div>

        <div class="flex flex-col items-center">
          <img src="./images/others/next-js.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Next js</span>
        </div>

        {/* python */}

        <div class="flex flex-col items-center">
          <img src="./images/others/python.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Python</span>
        </div>
         {/* sass */}
         <div class="flex flex-col items-center">
          <img src="./images/others/light-sass.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">SASS</span>
        </div>

        {/* typescript */}
        <div class="flex flex-col items-center">
          <img src="./images/others/typescript.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">TypeScript</span>
        </div>

        {/* linux */}
        <div class="flex flex-col items-center">
          <img src="./images/others/linux.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Linux</span>
        </div>
        {/* gatsby */}

        <div class="flex flex-col items-center">
          <img src="./images/others/gatsby.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Gatsby</span>
        </div>
        
        {/* api */}
        <div class="flex flex-col items-center">
          <img src="./images/others/api.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">RESTApi</span>
        </div>

         
        {/* postgresql */}
        <div class="flex flex-col items-center">
          <img src="./images/others/postgresql.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">PostSQL</span>
        </div>
         
           {/* npm */}
         <div class="flex flex-col items-center">
          <img src="./images/others/npm-icon.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">npm</span>
        </div>
        {/* Node js */}

        <div class="flex flex-col items-center">
          <img src="./images/others/node-js.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Node Js</span>
        </div>
        {/* Java */}

        <div class="flex flex-col items-center">
          <img src="./images/others/java.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Java</span>
        </div>

        {/* github */}

        <div class="flex flex-col items-center">
          <img src="./images/others/github-color.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">GitHub</span>
        </div>

        <div class="flex flex-col items-center">
          <img src="./images/others/django.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Django</span>
        </div>

        <div class="flex flex-col items-center">
          <img src="./images/others/mysql.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">MySQL</span>
        </div>

         <div class="flex flex-col items-center">
          <img src="./images/others/bash.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Bash</span>
        </div>

         <div class="flex flex-col items-center">
          <img src="./images/others/mongodb.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">MongoDB</span>
        </div>

         <div class="flex flex-col items-center">
          <img src="./images/others/git.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Git</span>
        </div>

         <div class="flex flex-col items-center">
          <img src="./images/others/less.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">LESS</span>
        </div>

         <div class="flex flex-col items-center">
          <img src="./images/others/bootstrap.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Bootstrap</span>
        </div>

         <div class="flex flex-col items-center">
          <img src="./images/others/c.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">C</span>
        </div>
         <div class="flex flex-col items-center">
          <img src="./images/others/c++.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">C++</span>
        </div>

        <div class="flex flex-col items-center">
          <img src="./images/others/jquery.svg" alt="HTML5" class="h-10"/>
          <span class="text-white mt-2">Jquery</span>
        </div>

      </div>
      // <ul className=" pl-2"> 
      //   <li>Node.js</li>
      //   <li>Express</li>
      //   <li>PostgreSQL</li>
      //   <li>Sequelize</li>
      //   <li>JavaScript</li>
      //   <li>React</li>
      // </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
    //  <ul className="list-disc pl-2">
    //   <li>Bsc in Computer Science and Engineering</li>
    //   <li>Daffodil International University, </li>
    //  </ul>

    <>

    <div class="text-white p-6 rounded-lg ">
    {/* <h2 class="text-2xl font-bold mb-4">EDUCATION</h2> */}
    <div class="flex items-start mb-4">
        <img src="./images/others/daffodil.svg" alt="Daffodil International University Logo" class="h-16 w-16 mr-4 bg-white"/>
        <div>
            <h3 class="text-green-400 text-xl font-semibold">Daffodil International University</h3>
            <p class="italic">BSc in Computer Science and Engineering</p>
            <p class="text-gray-300">September 2014 - September 2018</p>
            <p class="text-gray-300 italic">Dhaka, Bangladesh</p>
        </div>
    </div>
    <p class="text-lg font-semibold">Field of Specialization:</p>
    <p class="mb-4">
        <ul className="list-disc list-inside ml-4">
          <li>Software Engineering</li>
          <li>Data Science and Big Data Analytics</li>
          <li>Artificial Intelligence and Machine Learning (AI/ML)</li>
          <li>Cybersecurity</li>
          <li>Embedded Systems and IoT (Internet of Things)</li>
         
        </ul>
      </p>
    {/* <p class="text-lg font-semibold">Senior Design Project:</p> */}
    {/* <p class="mb-4">Keyword Search for Sign Language</p>
    <p class="text-lg font-semibold">High Honors Degree:</p>
    <p class="mb-4">Awarded to Bachelor alumni who have graduated with a GPA greater than or equal to 3.50. (July 2023)</p>
    <p class="text-lg font-semibold">National University Admission Exam (YKS):</p>
    <p class="mb-4">Ranked 75<sup>th</sup> in Mathematics and Science among ca. 2.3 million candidates with a test score of 489.92/500. (July 2018)</p> */}
    <p class="text-lg font-semibold">Relevant Coursework:</p>
    <ul class="list-disc list-inside ml-4">
         <li>Computer Fundamentals</li>
          <li>Engineering Mathematics</li>
          <li>Algorithms</li>
          <li>Digital Logic Design</li>
          <li>Database Management System</li>
          <li>Programming and Problem Solving</li>
          <li>Software Engineering</li>
          <li>Object Oriented Programming</li>
          <li>Data Communication</li>
          <li>Compiler Design</li>
    </ul>





   </div>


   <div class="text-white p-6 rounded-lg">
    <div class="flex items-start mb-4">
        <img src="./images/others/daffodil.svg" alt="Boğaziçi University Logo" class="h-16 w-16 mr-4 bg-white"/>
        <div>
            <h3 class="text-green-400 text-xl font-semibold">Daffodil International University</h3>
            <p class="italic">Bachelor of Science in Electrical and Electronics Engineering; <span class="font-bold">GPA: 3.62/4.00</span></p>
            <p class="text-gray-300">September 2014 - September 2019</p>
            <p class="text-gray-300 italic">Dhaka, Bangladesh</p>
        </div>
    </div>
    <p class="text-lg font-semibold">Field of Specialization:</p>
    <p class="mb-4">
        <ul className="list-disc list-inside ml-4">
          <li>Communication Systems and Signal Processing</li>
        </ul>
      </p>
  
    <p class="text-lg font-semibold">Relevant Coursework:</p>
    <ul class="list-disc flex list-inside ml-4">
        <li>Materials Science</li>
        <li>Electrical Circuits I-II</li>
        <li>Digital System Design</li>
        <li>System Dynamics and Control</li>
        <li>Communication Engineering</li>
        <li>Pattern Recognition</li>
    </ul>

   </div>
</>

      //  others

      

    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
    //  <ul className="list-disc pl-2">
    //   <li>Bsc in Computer Science and Engineering</li>
    //   <li>Daffodil International University, </li>
    //  </ul>

  <>
     {/* //certification one */}
    <div class=" text-white p-6 rounded-lg">

    <div class="flex items-start mb-4">
        <img src="./images/others/ict-division-logo.svg" alt="top-up-it" class="h-16 w-16 mr-4"/>
        <div>
            <h3 class="text-green-400 text-xl font-semibold">TOP-UP IT Training</h3>
            <p class="italic">Bangladesh information and communications technology </p>
            {/* <p class="text-gray-300">Month Year</p> */}
        </div>
    </div>
    <p class="text-lg font-semibold">Description:</p>
    <p class="mb-4">Completed an extensive Java programming course that covered a range of technologies from basic to advanced levels, including Java, JDBC, Java Swing, and Spring Boot. The course provided hands-on experience in building full-stack applications, integrating databases, and developing both desktop and web applications.</p>
    <p class="text-lg font-semibold">Key Technologies:</p>
    <ul class="list-disc list-inside ml-4">
        <li>Java: Learned core concepts such as OOP, collections, multithreading, and memory management.</li>
        <li>Java Database Connectivity (JDBC): Connected Java applications to databases, executed SQL queries, managed transactions, and handled advanced JDBC topics like Prepared Statements and batch processing.</li>
        <li>Java Swing: Developed graphical user interfaces (GUIs) using Swing components, handled events, and designed complex UIs for desktop applications.</li>
        <li>Spring Boot: Built and deployed RESTful web services, implemented dependency injection, integrated databases using Spring Data JPA, and secured applications with Spring Security.</li>
    </ul>
   </div>


 {/* //certification two */}
    <div class=" text-white p-6 rounded-lg">

    <div class="flex items-start mb-4">
        <img src="./images/others/ict-division-logo.svg" alt="app monetization" class="h-16 w-16 mr-4"/>
        <div>
            <h3 class="text-green-400 text-xl font-semibold">App Monetization & App Management</h3>
            <p class="italic">Bangladesh information and communications technology</p>
            {/* <p class="text-gray-300">Month Year</p> */}
        </div>
    </div>
    <p class="text-lg font-semibold">Description:</p>
    <p class="mb-4">Completed a specialized course in App Monetization & App Management, focusing on strategies to maximize app revenue and effectively manage the lifecycle of mobile applications. The course provided practical insights into various monetization models, user engagement techniques, and app analytics, equipping me with the skills to optimize app performance and profitability.</p>
    <p class="text-lg font-semibold">Key Areas of Focus:</p>
    <ul class="list-disc list-inside ml-4">
        <li>Monetization Strategies: Explored different app monetization models, including in-app purchases, ads, freemium, and subscription-based services. Learned how to select and implement the most effective strategy based on app type and target audience.</li>
        <li>User Engagement & Retention: Developed techniques to increase user engagement and retention through personalized content, push notifications, and loyalty programs. Emphasized the importance of user experience in driving revenue.</li>
        <li>App Store Optimization (ASO): Gained expertise in optimizing app store listings to improve visibility and downloads. Covered keyword optimization, A/B testing of app icons and descriptions, and leveraging user reviews and ratings.</li>
        <li>App Analytics & Performance Monitoring: Utilized analytics tools to track user behavior, monitor app performance, and measure the effectiveness of monetization strategies. Applied data-driven decisions to enhance app profitability.</li>
        <li>Lifecycle Management: Learned best practices for managing app updates, version control, and customer support to ensure long-term success and user satisfaction.</li>
    </ul>
   </div>

   {/* //certification three */}
    <div class=" text-white p-6 rounded-lg">

    <div class="flex items-start mb-4">
        <img src="./images/others/Udemy-1.svg" alt="web development" class="h-16 w-16 mr-4"/>
        <div>
            <h3 class="text-green-400 text-xl font-semibold">The Complete Web Developer
</h3>
            <p class="italic">Udemy</p>
            {/* <p class="text-gray-300">Month Year</p> */}
        </div>
    </div>
    <p class="text-lg font-semibold">Description:</p>
    <p class="mb-4">Completed "The Complete Web Developer" course, a comprehensive program covering both front-end and back-end web development. The course provided in-depth knowledge of web technologies and frameworks, enabling the development of responsive, dynamic websites and web applications from start to finish.</p>
    <p class="text-lg font-semibold">Key Technologies and Skills:</p>
    <ul class="list-disc list-inside ml-4">
        <li>HTML, CSS, & JavaScript: Mastered the fundamentals of web development, including semantic HTML, responsive design with CSS, and interactive web features using JavaScript. Developed skills in creating user-friendly and visually appealing web pages.</li>
        <li>Front-End Frameworks: Gained proficiency in popular front-end libraries and frameworks like React, Angular, and Bootstrap. Learned to build dynamic, single-page applications (SPAs) with state management and component-based architecture.</li>
        <li>Back-End Development: Acquired knowledge in server-side programming with Node.js and Express.js. Covered RESTful API development, server management, and database integration with MongoDB and SQL.</li>
        <li>Version Control & Collaboration: Learned to manage codebases using Git and GitHub, collaborating with other developers on projects. Gained experience in version control, branching, and merging.</li>
        <li>Deployment & Hosting: Explored various methods of deploying web applications, including cloud platforms like AWS and Heroku. Covered best practices for making applications live and accessible to users.</li>
    </ul>
   </div>


   {/* //certification four */}
    <div class=" text-white p-6 rounded-lg">

    <div class="flex items-start mb-4">
        <img src="./images/others/Udemy-1.svg" alt="Certification Logo" class="h-16 w-16 mr-4"/>
        <div>
            <h3 class="text-green-400 text-xl font-semibold">The Complete SQL Bootcamp: Go
from Zero to Hero
</h3>
            <p class="italic">Udemy</p>
            {/* <p class="text-gray-300">Month Year</p> */}
        </div>
    </div>
    <p class="text-lg font-semibold">Description:</p>
    <p class="mb-4">Completed "The Complete SQL Bootcamp: Go from Zero to Hero," an intensive course designed to build proficiency in SQL, from fundamental concepts to advanced querying techniques. The course covered a wide range of topics, enabling the effective management and analysis of data in relational databases.</p>
    <p class="text-lg font-semibold">Key Skills and Topics:</p>
    <ul class="list-disc list-inside ml-4">
        <li>SQL Basics: Mastered the foundational concepts of SQL, including SELECT statements, filtering data with WHERE clauses, and working with different data types. Gained a solid understanding of how to interact with databases using SQL.</li>
        <li>Advanced Querying Techniques: Developed advanced skills in SQL, including JOIN operations, subqueries, and complex aggregations using GROUP BY and HAVING clauses. Learned to write efficient queries for data retrieval and manipulation.</li>
        <li>Database Design: Acquired knowledge of database normalization and the principles of relational database design. Learned to create and manage tables, define primary and foreign keys, and establish relationships between tables.</li>
        <li>Data Analysis: Gained expertise in using SQL for data analysis, including writing queries to summarize, analyze, and report on data. Learned to use functions like COUNT, SUM, AVG, and CASE statements for deeper insights.</li>
        <li>Performance Optimization: Explored techniques for optimizing SQL queries for better performance, including indexing and query execution plans. Covered best practices for writing efficient and scalable queries.</li>
        <li>Real-World Projects: Applied SQL knowledge to real-world projects, working with large datasets and solving complex data challenges.</li>
    </ul>
   </div>

   </>

    )
  }
]



function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
     startTransition(() => {
       setTab(id);
     });
  }
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
       
         <Image src="/images/about-image.png" width={500} height={500}/>

         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg text-justify">I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.</p>  
            
         </div>

       </div>
       <div className="flex flex-column mt-8 justify-center bg-green-100 p-6 rounded-lg my-8 text-green-800  mb-6">
              <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
              >
                   {" "}
                   Skills {""}
                   
              </TabButton>

              <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
              >
                   {" "}
                   Education {" "}
                   
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange("certifications")} 
                active={tab === "certifications"}
              >
                   {" "}
                   Certifications{" "}
                   
              </TabButton>
            </div>

            <div className="mt-8 ">{TAB_DATA.find((t) => t.id === tab).content}</div>
      <div>

      </div>
    </section>
  )
}

export default AboutSection
