import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="h-12 sm:h-14 lg:h-16 flex flex-col items-center bg-gradient-to-t from-indigo-400 to-indigo-800 text-white">
      <div className="w-full border-t-indigo-900 border-t-8 sm:border-t-[10px] lg:border-t-[13px]"></div>
      <div className="w-full mt-2 px-4 text-lg  sm:text-xl md:text-2xl lg:text-3xl font-extrabold flex justify-around">
        <NavLink
          to="/menu"
          className={(navData) =>
            navData.isActive ? "text-indigo-900" : "hover:text-indigo-200"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? "text-indigo-900" : "hover:text-indigo-200"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) =>
            navData.isActive ? "text-indigo-900" : "hover:text-indigo-200"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
