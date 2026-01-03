function Popup({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>X</button>

        <h2>{project.name}</h2>

        {project.screenshot && (
          <img src={project.screenshot} alt={project.name} />
        )}

        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>What I Learned:</strong> {project.learned}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>

        <a href={project.github} target="_blank" rel="noreferrer">
          View Github Repo
        </a>
      </div>
    </div>
  );
}

export default Popup;
