import React from 'react';
import './Portfolio.css'; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header>
        <div className="logo">Software Developer Portfolio</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#reflection">Reflection</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="image-container">
          <img src="./image.png" alt="Jude Alvarez" className="profile-image" />
        </div>
        <div className="content">
          <h1>Hello, I'm Jude Alvarez</h1>
          <div className="typewriter">I'm an Aspiring <span>Software Developer</span></div>
          <p>Driven by the challenge of creating clean code and intuitive user experiences.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a dedicated IT student specializing in software engineering and full-stack development. 
          While I have a strong foundation in how data travels across networks, my true passion lies in 
          writing the logic that makes that data meaningful. I am constantly exploring the intersections 
          of efficient algorithms, responsive design, and robust backend systems.
          <br /><br />
          My goal is to build software that is as powerful as it is user-friendly. When I'm not debugging 
          complex functions or learning new frameworks, I'm staying updated on modern DevOps practices 
          and the evolving landscape of mobile and web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Full-Stack Development (React.js, JavaScript, HTML5/CSS3)</li>
          <li>API Integration & Data Management</li>
          <li>Back-end Logic & Server Environments (XAMPP/Node.js)</li>
          <li>Version Control & Software Troubleshooting</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="project">
        <h2>Key Projects</h2>
        <ul>
          <li><strong>React Professional Portfolio:</strong> Architected a dynamic, component-based web application to showcase my development journey.</li>
          <li><strong>Performance Optimization Tool:</strong> Utilized J-Meter to conduct stress tests and optimize web application response times.</li>
          <li><strong>Real-time Weather Dashboard:</strong> Developed a functional web app that pulls and renders live data from external REST APIs.</li>
          <li><strong>Architecture Visualization:</strong> Built simulations to model complex system logic and data flow between users and servers.</li>
        </ul>
      </section>

      {/* Reflection Section */}
      <section id="reflection">
        <h2>Professional Reflection</h2>
        
        <h3>a. What technologies did you use and why?</h3>
        <p>I prioritize modern JavaScript frameworks like React and server-side tools to build scalable, high-performance web applications.</p>
        
        <h3>b. Which parts of the portfolio were easiest for you?</h3>
        <p>Structuring the logic of the application and designing the UI components felt the most intuitive and rewarding.</p>

        <h3>c. Which parts were most challenging?</h3>
        <p>The most challenging aspect was narrowing my focus from general IT to software development and ensuring my code followed industry best practices.</p>

        <h3>d. What technologies are you most interested in learning?</h3>
        <p>I am eager to master Advanced Backend Architecture and Mobile App Development (React Native) to build cross-platform solutions.</p>

        <h3>e. What kind of applications do you want to build in the future?</h3>
        <p>I aim to develop secure, high-impact software such as fintech platforms or healthcare management systems that solve real-world problems through automation.</p>
      </section>

      <footer>
        <p>© 2026 • Jude Alvarez</p>
      </footer>
    </div>
  );
};

export default Portfolio;