function Project({ name, screenshot, github, description, learned, challenges }) {
    return (
        <div className="project">
            <h2>{name}</h2>

            {screenshot && <img src="" alt="" width="300" />}

            <p><strong>Description:</strong> {description}</p>
            <p><strong>What I Learned:</strong> {learned}</p>
            <p><strong>Challenges Solved:</strong> {challenges}</p>

            <a href={github} target="_blank" rel="noreferrer">
                Github Repo
            </a>
        </div>
    );
}