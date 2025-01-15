import Container from "../../../Components/Container/Container";
import "./About.css"

const About = () => {
    return (
        <div id="about-part">
            <Container>
                <div className="about-main grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                    <div className="left bg-orange-500 h-[300px]"></div>
                    <div className="right bg-green-800 h-[300px]"></div>
                </div>
            </Container>
            
        </div>
    );
};

export default About;