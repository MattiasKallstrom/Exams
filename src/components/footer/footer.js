import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="bg-gray-100 my-0 md:ml-40 flex justify-center">
      <div className="max-w-6xl text-gray-800 flex flex-wrap justify-center">
        <div className="p-10 w-100%">
          <div className="text-m uppercase text-gray-500 font-medium">
            Kontakt
          </div>
          <a className="my-3 block">
            <span className="text-gray-500 text-m p-1"> Mälarö el AB</span>
          </a>
          <a className="my-3 block">
            <span className="text-gray-500 text-m p-1">
              Exempel 208, 179 81 Ekerö
            </span>
          </a>
          <a className="my-3 block">
            <span className="text-gray-500 text-m p-1">Tel: 073-999-99 99</span>
          </a>
          <a className="my-3 block">
            <span className="text-gray-500 hover:none text-m p-1">
              {" "}
              E-post: info@mälaröel
            </span>
          </a>
        </div>
        <div className="p-10 w-100%">
          <div className="text-m uppercase text-gray-500 font-medium">
            Navigering
          </div>
          <a className="my-3 block">
            {" "}
            <span className="text-m p-1">
              <Link className="text-gray-500 hover:text-gray-800" to="/Exams">
                Startsida
              </Link>{" "}
            </span>
          </a>
          <a className="my-3 block">
            <span className="text-m p-1">
              <Link className="text-gray-500 hover:text-gray-800" to="/about">
                Om oss
              </Link>{" "}
            </span>
          </a>
          <a className="my-3 block">
            <span className="text-m p-1">
              <Link className="text-gray-500 hover:text-gray-800" to="/contact">
                Support
              </Link>
            </span>
          </a>
          <a className="my-3 block">
            <span className="text-m p-1">
              {" "}
              <Link className="text-gray-500 hover:text-gray-800" to="/login">
                Logga in
              </Link>{" "}
            </span>
          </a>
        </div>
        <div className="p-10 w-100%">
          <div className="text-m uppercase text-gray-500 font-medium">
            Sociala medier
          </div>
          <div className="flex flex-row w-32">
            <a href="https://instagram.com">
              <Image src="https://img.icons8.com/glyph-neue/100/000000/instagram-new.png"></Image>
            </a>
            <a href="https://facebook.com">
              <Image src="https://img.icons8.com/material-rounded/100/000000/facebook-new.png"></Image>
            </a>
            <a href="https://linkedin.com">
              <Image src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
