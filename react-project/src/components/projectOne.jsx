import Project from "./project";
import screenshot from "../assets/screenshot.png";

function projectOne({ onClick }) {
    return (
        <div onClick={onClick}>
            <Project
                name="Design made from Figma"
                screenshot={screenshot}
                github="https://github.com/Elias-Khaz/productly-assignment"
                description="This design was made using html and css. It was a solo project made for an assignment and gave a feel for what work could feel like in the future."
                learned="I got a much better understanding of css and using flex for it to look correct."
                challenges="Getting the design and layout correct and adding small details for interactivity."
            />
        </div>
    );
}

export default projectOne;