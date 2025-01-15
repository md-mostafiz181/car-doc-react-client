import Container from "../../../Components/Container/Container";
import footerLogo from "../../../assets/footerLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-part">
      <Container>
        <footer className="footer text-white ">
          <aside className="ps-2 flex flex-col items-center md:items-start  w-full">
            <img src={footerLogo} alt="" />
            <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
            </p>
          </aside>
          <nav className="flex flex-col items-center md:items-start  w-full">
            <h6 className="text-2xl font-bold text-white ">About</h6>
            <a className="link link-hover mt-4">Home</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Contact</a>
         
          </nav>
          <nav className="flex flex-col items-center md:items-start  w-full">
            <h6 className="text-2xl font-bold text-white">Company</h6>
            <a className="link link-hover mt-4">Why Doctor</a>
            <a className="link link-hover">About</a>
          
          </nav >
          <nav className="flex flex-col items-center md:items-start  w-full">
            <h6 className="text-2xl font-bold text-white">Support</h6>
            <a className="link link-hover mt-4">Support center</a>
            <a className="link link-hover">Feedback</a>
            <a className="link link-hover">Accesbility</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
