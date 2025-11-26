import Project from "./project";
import screenshot from "../assets/screenshot.png";

function projectOne() {
    return (
        <Project
            name="Design made from Figma"
            screenshot={screenshot}
            github="https://github.com/Elias-Khaz/productly-assignment"
            description="This design was made using html and css."
            learned="I got a taste of what work could feel like in the future and got a better understanding of css."
            challenges="Getting the design and layout correct."
        />
    );
}

export default projectOne;