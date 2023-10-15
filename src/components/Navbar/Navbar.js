import { NavLink, Route, Routes } from "react-router-dom";
import noteContext from "../../Context/noteContext";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";

const Navbar = () => {
  const a = useContext(noteContext);
  console.log(a.state.status)
  const shownav = () => {
    document.getElementById("navitems").classList.toggle("hidden");
  };
  return (
    <>
      <header className="flex justify-between my-1 mx-3">
        <div className="">
          <NavLink to="/">
            <img src={logo} className="w-[100px] sm:w-[150px]" alt="" />
          </NavLink>
        </div>
        <div className="sm:flex sm:justify-around hidden  items-center w-[80%]">
          <NavLink to="/">
            <span>HOME</span>
          </NavLink>
          <NavLink to="/products">
            <span>PRODUCTS</span>
          </NavLink>
          <NavLink to="/contact">
            <span>CONTACT</span>
          </NavLink>
          <NavLink to="/shop">
            <span>SHOP</span>
          </NavLink>
          {!a.state.status&&
            <NavLink to="/signin">
            <span>SIGNIN</span>
          </NavLink>
          }
          {a.state.status&&
            <NavLink to="/signout">
            <span>SIGN OUT</span>
          </NavLink>
          }
        </div>
        <div
          className="space-y-2 flex fixed right-2 top-3 flex-col cursor-pointer justify-center sm:hidden"
          onClick={shownav}
        >
          <span className="block h-[2.5px]  w-8 bg-black"></span>
          <span className="block h-[2.5px]  w-8 bg-black"></span>
          <span className="block h-[2.5px]  w-8 bg-black"></span>
        </div>
        <div className="hidden" id="navitems">
          <div className="flex mt-[2rem] mr-0 flex-col">
            <NavLink to="/">
              <span>HOME</span>
            </NavLink>
            <NavLink to="/products">
              <span>PRODUCTS</span>
            </NavLink>
            <NavLink to="/contact">
              <span>CONTACT</span>
            </NavLink>
            <NavLink to="/shop">
              <span>SHOP</span>
            </NavLink>
            <NavLink to="/signin">
              <span>SIGNIN</span>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
