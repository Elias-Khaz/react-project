function Popup({ project, onClose }) {
  return (
    <>
      {project && (
        <div className="popup-overlay">
          <div className="popup">
            <button onClick={onClose}>Close</button>

            <h2>{project.name}</h2>

            <img
              src={project.screenshot}
              alt={project.name}
            />

            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>What I learned:</strong> {project.learned}
            </p>
            <p>
              <strong>Challenges:</strong> {project.challenges}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
