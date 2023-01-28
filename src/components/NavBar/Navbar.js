import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Nav = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getLinkClassName = (navData) => {
    return navData.isActive ? "linkActive" : "link";
  };

  return (
    <nav className="navBar">
      <h1 className="logo">MEMES</h1>

      <div className="links">
        <NavLink to="/user/home" className={getLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/user/randomMemes" className={getLinkClassName}>
          Random Memes
        </NavLink>
      </div>

      <div className="user">
        <label className="usename">{user.name}</label>
        <button className="logout">Logout</button>
      </div>
    </nav>
  );
};
export default Nav;

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         MEMESAPP
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               MEMES<span className="sr-only">(LIST)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               MEMELIST
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">

//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownMenuLink"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >

//             </a>
//             <div
//               className="dropdown-menu"
//               aria-labelledby="navbarDropdownMenuLink"
//             >
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
