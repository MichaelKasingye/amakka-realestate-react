import { AiOutlineHome, AiFillContacts } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
   icon: <AiOutlineHome/>
  },
  {
    title: "About",
    path: "/about",
   icon: <FcAbout/>
  },
  {
    title: "Contact",
    path: "/contact",
   icon: <AiFillContacts/>
  },
];
