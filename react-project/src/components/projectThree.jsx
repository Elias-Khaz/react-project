import Project from "./project";
import screenshot from "../assets/screenshot3.png";

function projectThree() {
    return (
        <Project
            name="Typing Game"
            screenshot= {screenshot}
            github="https://github.com/Elias-Khaz/js7"
            description="Here I made a word typing game with a point system and timer."
            learned="I learned plenty about the different functions needed for the game to work and also adding addEventListener."
            challenges="The biggest challenge was probably getting the game to function as whole without error"
        />
    );
}

export default projectThree;