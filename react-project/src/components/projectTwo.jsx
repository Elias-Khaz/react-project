import Project from "./project";
import screenshot from "../assets/screenshot2.png";

function projectTwo({ onClick }) {
    return (
        <div onClick={onClick}>
            <Project
                name="A clean form"
                screenshot= {screenshot}
                github="https://github.com/Elias-Khaz/Form-assignment"
                description="My first time making a form that can be used for logging using html and css."
                learned="I learned how to use input and keywords such as type, placeholder and required."
                challenges="I'd like to say this was not too much of a challenge."
            />
        </div>
    );
}

export default projectTwo;