import React from 'react';

export const Navbar = () => {
  return (
    <div className="flex">
      <div className="m-4 bg-gradient-to-r from-purple-300 to-purple-400 flex flex-col md:flex-row justify-between flex-1 rounded-2xl p-3 sticky">
        <div className="font-titlee text-black text-4xl flex items-center cursor-pointer">
          SIGKDD
        </div>
        <div className="text-black flex flex-col md:flex-row justify-between md:gap-8 text-2xl items-center font-oswald font-normal mt-4 md:mt-0">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Agenda</NavItem>
          <NavItem href="#">Schedule</NavItem>
          <NavItem href="#">FAQs</NavItem>
          <NavItem href="#">Contact</NavItem>
        </div>
        <div className="text-black mt-4 md:mt-0">
          <button className="border-2 border-black rounded-xl text-2xl font-semibold p-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <a
      href={href}
      className="cursor-pointer hover:scale-110 transition duration-700 ease-out relative group p-1.5 block md:inline-block"
    >
      {children}
      <span
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition duration-700 ease-out group-hover:w-full"
        style={{ transitionProperty: 'width' }}
      />
    </a>
  );
};
