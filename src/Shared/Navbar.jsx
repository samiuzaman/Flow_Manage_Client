import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
} from "keep-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../public/logo.png";
import { MdPerson2 } from "react-icons/md";
import useAuth from "../Hook/useAuth";
import { IoMdExit } from "react-icons/io";
import { useTheme } from "../Context/Theme-provider";
import { MoonStars, SunDim } from "phosphor-react";

const NavbarComponent = () => {
  const location = useLocation();

  const { user, handleSignOut } = useAuth();
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  return (
    <Navbar
      className={`absulute bg-opacity-5 fixed w-full top-0 z-30 px-[2%] lg:px-[7%] rounded-none border-none`}
    >
      <NavbarContainer className="mx-auto p-2 md:p-0 ">
        <NavbarBrand>
          <Link
            to="/"
            className={`flex justify-center gap-1 items-center text-2xl  font-semibold`}
          >
            <img className="w-18 h-8" src={Logo} />
            <span className="text-[#F4AA25]">Flow</span>{" "}
            <span className="text-[#4bb8e7]">Manage</span>
          </Link>
        </NavbarBrand>
        <NavbarList className="space-x-5 dark:text-white">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </NavbarList>
        <Dropdown placement="bottom-start">
          <DropdownAction asChild>
            <button className="rounded-lg bg-primary-25 p-2.5 dark:bg-white">
              <MoonStars
                size={20}
                color="#1C222B"
                className="hidden dark:block"
              />
              <SunDim size={20} color="#444" className="block dark:hidden" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </DropdownAction>
          <DropdownContent
            align="start"
            className="w-[180px] border border-metal-100 dark:border-metal-800 dark:bg-metal-900"
          >
            <DropdownItem onClick={() => setTheme("light")}>Light</DropdownItem>
            <DropdownItem onClick={() => setTheme("dark")}>Dark</DropdownItem>
            <DropdownItem onClick={() => setTheme("system")}>
              System
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
        <NavbarList>
          <div>
            {user && user.email ? (
              <div className="flex gap-3 items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipAction asChild>
                      <Avatar>
                        <img
                          referrerPolicy="no-referrer"
                          src={user?.photoURL}
                        />
                        <AvatarFallback>
                          <MdPerson2 className="text-3xl" />
                        </AvatarFallback>
                      </Avatar>
                    </TooltipAction>
                    <TooltipContent
                      side="top"
                      className="bg-primary-500 space-y-4 text-center"
                    >
                      <h2>{user && user.displayName}</h2>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  onClick={handleSignOut}
                  className="text-metal-800 border-metal-800 hover:text-warning-600 dark:border-metal-200 dark:text-metal-200"
                  variant="outline"
                >
                  <IoMdExit className="mr-1 text-xl" /> Log Out
                </Button>
              </div>
            ) : (
              <div className="space-x-4">
                <Button
                  variant="outline"
                  onClick={() => navigate("/login")}
                  color="primary"
                  className="text-metal-800 border-metal-800 hover:text-warning-600 dark:border-metal-200 dark:text-metal-200 "
                >
                  Log In
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/register")}
                  color="primary"
                  className="text-metal-800 border-metal-800 hover:text-warning-600 dark:border-metal-200 dark:text-metal-200"
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </NavbarList>
        <NavbarCollapseBtn />

        <NavbarCollapse className="bg-primary-25 dark:text-white">
          <div>
            {user && (
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                  <AvatarFallback>
                    <MdPerson2 className="text-3xl" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <div>
            {user && user.email ? (
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="text-metal-800 border-metal-800 dark:border-metal-300 dark:text-metal-300"
              >
                Log Out
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="text-metal-800 border-metal-800 dark:border-metal-300 dark:text-metal-300"
              >
                Log In
              </Button>
            )}
          </div>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
