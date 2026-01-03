import { useState } from "react";

import ProjectOne from "../components/projectOne";
import ProjectTwo from "../components/projectTwo";
import ProjectThree from "../components/projectThree";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
      <h1>My Projects</h1>

      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Preview Projects"}
      </button>

      {showProjects && (
        <>
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
        </>
      )}
    </div>
  );
}

export default Portfolio;
