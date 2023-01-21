import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import NavMobile from "../components/Nav/NavMobile";
import NavDesktop from "../components/Nav/NavDesktop";
import useIsMobile from "../hooks/useIsMobile";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useIsMobile(930);

  return (
    <header className="bg-white text-darkPrimary px-7 py-5 relative shadow-md">
      <div className="mx-auto flex items-center justify-between md:justify-start md:gap-10">
        <Link className="font-clashDisplay text-700 text-left" to="/">
          Avion
        </Link>

        {isMobile ? <NavMobile isOpen={isOpen} /> : <NavDesktop />}

        <div className="flex items-center gap-3 text-500 md:ml-auto">
          <TbSearch className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <IoCartOutline className="cursor-pointer hover:text-primary transition-colors duration-300" />
          <HiOutlineUserCircle className="cursor-pointer hover:text-primary transition-colors duration-300" />
          {isMobile ? (
            isOpen ? (
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <GrMenu
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
