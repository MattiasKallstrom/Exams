import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="bg-gray-100 w-full mb-0 position-absolute">
      <div className="text-gray-800 flex flex-wrap justify-center">
        <div className="p-10">
          <div className="uppercase text-gray-500 font-medium">Kontakt</div>
          <a className="my-3 block">
            <span className="text-gray-500 p-1"> Mälarö el AB</span>
          </a>
          <a className="my-3 block">
            <span className="text-gray-500 p-1">Exempel 208, 179 81 Ekerö</span>
          </a>
          <a className="my-3 block">
            <span className="text-gray-500 p-1">Tel: 000-999-99 99</span>
          </a>
          <a className="my-3 block">
            <span className="text-gray-500 hover:none p-1">
              {" "}
              E-post: info@mälaröel
            </span>
          </a>
        </div>
        <div className="p-10">
          <div className="uppercase text-gray-500 font-medium">Navigering</div>
          <a className="my-3 block">
            {" "}
            <span className="p-1">
              <Link className="text-gray-500 hover:text-gray-800" to="/Exams">
                Startsida
              </Link>{" "}
            </span>
          </a>
          <a className="my-3 block">
            <span className="p-1">
              <Link className="text-gray-500 hover:text-gray-800" to="/about">
                Om oss
              </Link>{" "}
            </span>
          </a>
          <a className="my-3 block">
            <span className="p-1">
              <Link className="text-gray-500 hover:text-gray-800" to="/contact">
                Support
              </Link>
            </span>
          </a>
          <a className="my-3 block">
            <span className="p-1">
              {" "}
              <Link className="text-gray-500 hover:text-gray-800" to="/login">
                Logga in
              </Link>{" "}
            </span>
          </a>
        </div>
        <div className="p-10 w-100%">
          <div className="uppercase text-gray-500 font-medium">
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
