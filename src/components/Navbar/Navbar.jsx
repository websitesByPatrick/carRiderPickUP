
import NavItem from "./NavItem";
 
const Navbar = () => {
    

  return (
    <nav className="bg-slate-900 flex justify-between text-slate-100 h-16 text-center">

      <div className="flex justify-start items-center w-1/2 ml-10">
        <NavItem text="Home" route="/" />
        <NavItem text="Student" route="/student" />
        <NavItem text="Teacher" route="/teacher" />
        <NavItem text="Car Id" route="/carID" />
        <NavItem text="Driveway" route="/driveway" />
      </div>

      <div className="flex justify-end items-center w-1/2 mr-10">
        <NavItem text="Login" route="/login" />
        <NavItem text="Contact" route="/contact" />
      </div>

    </nav>
  );
};

export default Navbar;
