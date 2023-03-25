import {
  FaBriefcase,
  FaConnectdevelop,
  FaTerminal,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { GiHelp } from "react-icons/gi";
import { BiLibrary } from "react-icons/bi";
import { BsCreditCardFill, BsPlugin, BsInfoCircleFill } from "react-icons/bs";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <BsCreditCardFill />, url: "/products" },
      { label: "terminal", icon: <FaTerminal />, url: "/products" },
      { label: "connect", icon: <FaConnectdevelop />, url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <BsPlugin />, url: "/products" },
      { label: "libraries", icon: <BiLibrary />, url: "/products" },
      { label: "help", icon: <GiHelp />, url: "/products" },
      { label: "billing", icon: <FaMoneyCheckAlt />, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <BsInfoCircleFill />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
