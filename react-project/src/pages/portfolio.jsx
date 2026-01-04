import { useState } from "react";

import ProjectOne from "../components/projectOne";
import ProjectTwo from "../components/projectTwo";
import ProjectThree from "../components/projectThree";
import Popup from "../components/Popup";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjects, setShowProjects] = useState(false);

  function openPopup(projectData) {
    setSelectedProject(() => projectData); 
  }

  function closePopup() {
    setSelectedProject(null);
  }

  return (
    <div>
      <h1>My Projects</h1>

      <button onClick={() => setShowProjects(prev => !prev)}>
        {showProjects ? "Hide Projects" : "Preview Projects"}
      </button>

      {showProjects && (
        <>
          <ProjectOne
            onClick={() =>
              openPopup({
                name: "Design made from Figma",
                screenshot: "/src/assets/screenshot.png",
                github: "https://github.com/Elias-Khaz/productly-assignment",
                description:
                  "This design was made using html and css. It was a solo project made for an assignment and gave a feel for what work could feel like in the future.",
                learned:
                  "I got a much better understanding of css and using flex for it to look correct.",
                challenges:
                  "Getting the design and layout correct and adding small details for interactivity.",
              })
            }
          />

          <ProjectTwo
            onClick={() =>
              openPopup({
                name: "A clean form",
                screenshot: "/src/assets/screenshot2.png",
                github: "https://github.com/Elias-Khaz/Form-assignment",
                description:
                  "My first time making a form that can be used for logging using html and css.",
                learned:
                  "I learned how to use input and keywords such as type, placeholder and required.",
                challenges:
                  "I'd like to say this was not too much of a challenge.",
              })
            }
          />

          <ProjectThree
            onClick={() =>
              openPopup({
                name: "Typing Game",
                screenshot: "/src/assets/screenshot3.png",
                github: "https://github.com/Elias-Khaz/js7",
                description:
                  "Here I made a word typing game with a point system and timer.",
                learned:
                  "I learned plenty about the different functions needed for the game to work and also adding addEventListener.",
                challenges:
                  "The biggest challenge was probably getting the game to function as a whole without error",
              })
            }
          />
        </>
      )}

      <Popup project={selectedProject} onClose={closePopup} />
    </div>
  );
}

export default Portfolio;
