import "@/public/css/navbar.css";
import NavItem from "./NavItem";
 
const Navbar = () => {
    

  return (
    <nav className="navbar">
      <div className="navLeft">
        <NavItem text="Home" route="/" />
        <NavItem text="Student" route="/student" />
        <NavItem text="Teacher" route="/teacher" />
        <NavItem text="Car Id" route="/carID" />
        <NavItem text="Driveway" route="/driveway" />
        

      </div>
      <div className="navRight">
        <NavItem text="Login" route="/login" />
        <NavItem text="Contact" route="/contact" />
      </div>
    </nav>
  );
};

export default Navbar;
