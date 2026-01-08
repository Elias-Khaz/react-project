import { useState } from "react";
import Popup from "../components/Popup";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      name: "Design made from Figma",
      screenshot: "/src/assets/screenshot.png",
      github: "https://github.com/Elias-Khaz/productly-assignment",
      tech: ["HTML, CSS"],
      description:
        "This design was made using html and css. It was a solo project made for an assignment and gave a feel for what work could feel like in the future.",
      learned:
        "I got a much better understanding of css and using flex for it to look correct.",
      challenges:
        "Getting the design and layout correct and adding small details for interactivity.",
    },
    {
      id: 2,
      name: "A clean form",
      screenshot: "/src/assets/screenshot2.png",
      github: "https://github.com/Elias-Khaz/Form-assignment",
      tech: ["HTML, CSS"],
      description:
        "My first time making a form that can be used for logging using html and css.",
      learned:
        "I learned how to use input and keywords such as type, placeholder and required.",
      challenges: "This project did not have many challenges.",
    },
    {
      id: 3,
      name: "Typing Game",
      screenshot: "/src/assets/screenshot3.png",
      github: "https://github.com/Elias-Khaz/js7",
      tech: ["Javascript"],
      description:
        "Here I made a word typing game with a point system and timer.",
      learned:
        "I learned plenty about the different functions needed for the game to work and also adding addEventListener.",
      challenges:
        "The biggest challenge was getting the game to function as a whole without error.",
    },
  ];

  function openPopup(project) {
    setSelectedProject(() => ({ ...project }));
  }

  function closePopup() {
    setSelectedProject(null);
  }

{/* highlighter */}
  function highlightMatch(text, search) {
    if (!search) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, index) => 
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      <h1>My Projects</h1>

{/* search bar */}
    <input 
      className="search-input"
      type="text" 
      placeholder="Search by name or tech..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setShowProjects(true);
      }}
    />

{/* preview button */}
      <button onClick={() => setShowProjects(prev => !prev)}>
        {showProjects ? "Hide Projects" : "Preview Projects"}
      </button>

{/* project buttons */}
      {showProjects && (
        <div className="project-buttons">
          {filteredProjects.map(project => 
            <button
              key={project.id}
              onClick={() => openPopup(project)}
            >
              {highlightMatch(project.name, search)}
            </button>
          )} 
        </div>
      )}

{/* popup */}
      {selectedProject && (
        <Popup 
          project={selectedProject} 
          onClose={closePopup} 
        />
      )}
    </div>
  );
}

export default Portfolio;
