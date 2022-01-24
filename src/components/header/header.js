import React, { useState } from "react";
import { Link } from "react-router-dom";
import lamp from "./../../assets/lamp.png";
import { Image } from "react-bootstrap";
import { auth } from "../../firebase/utils";
import HamburgerMenu from "./hamburger";

export default function Header(props) {
  const { loggedIn } = props;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <div className="min-h-screen md:bg-white navigation drop-shadow-2xl flex position-fixed z-40 flex-row">
        <div className=" flex flex-col w-40 overflow-hidden">
          {" "}
          <div className="flex md:hidden" onClick={toggleHamburger}>
            <HamburgerMenu isOpen={hamburgerOpen} />
          </div>{" "}
          <ul className="flex flex-col py-4">
            {" "}
            <div className="flex items-center flex-col justify-center h-20 shadow-md pb-2">
              {" "}
              <Link to="/Exams">
                <Image src={lamp}></Image>
              </Link>
              <div className="text-uppercase font-semibold">Mälarö El</div>
            </div>
            <li>
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-home"></i>{" "}
                </span>
                <Link
                  className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                  to="/Exams"
                >
                  Startsida
                </Link>{" "}
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-info-square"></i>{" "}
                </span>
                <Link
                  className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                  to="/about"
                >
                  Om oss
                </Link>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-message-rounded-dots"></i>{" "}
                </span>
                <Link
                  className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                  to="/contact"
                >
                  Kontakta oss
                </Link>{" "}
              </a>
            </li>
            {!loggedIn && (
              <li>
             
                <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-shopping-bag"></i>
                  </span>
                  <Link
                  className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                  to="/register"
                >
                  Registrera
                </Link>
                </a>
              </li>
            )}{" "}
            {!loggedIn && (
              <li>
                <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i class="bx bx-log-in"></i>{" "}
                  </span>
                  <Link
                    className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                    to="/login"
                  >
                    Logga in
                  </Link>
                </a>
              </li>
            )}{" "}
                        {loggedIn && (

            <li>
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <li onClick={() => auth.signOut()}>
                  <Link
                    className="text-gray-500 hover:text-gray-800 text-sm font-medium"
                    to="/Exams"
                  >
                    Logga ut
                  </Link>
                </li>
              </a>
            </li>
                        )}{" "}

          </ul>
        </div>
      </div>{" "}
      <style jsx>{`
        @media (max-width: 767px) {
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: white;
          }
        }
      `}</style>
    </div>
  );
}

Header.defaultProps = {
  loggedIn: null,
};
