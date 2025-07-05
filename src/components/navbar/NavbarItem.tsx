import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { NavPage } from "../../AltrixDataModels";
import { useEffect, useState } from "react";

interface NavbarItemProps {
  page: NavPage;
  navBarOpen: boolean;
  selectedPages: Record<string, boolean>;
  onNavigate: () => void;
}

const NavbarItem = ({
  page,
  navBarOpen,
  selectedPages,
  onNavigate,
}: NavbarItemProps) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(selectedPages[page.name]);
  }, []);

  return (
    <>
      <div
        className={`flex flex-row h-10 rounded-2xl justify-center items-center mb-6 ${
          selectedPages[page.name]
            ? "bg-primary-light border-primary border-2"
            : ""
        } ${navBarOpen ? "px-4" : "px-2 mx-2 w-fit"}`}
        onClick={() => {
          setIsOpen(!isOpen);
          onNavigate();
        }}
      >
        <div className="flex flex-row w-full items-center py-2">
          <div className="w-6 h-6">{page.icon}</div>
          {navBarOpen && (
            <div className="text-navbar-text text-xl ml-2 font-navbar-text">
              {page.name}
            </div>
          )}
        </div>
        {page.subPages && navBarOpen && (
          <div className="mr-2 w-6 h-6">
            <ChevronUpIcon
              className={`transition-all duration-300 ease-in-out text-navbar-text ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        )}
      </div>
      {page.subPages && navBarOpen && (
        <div
          className={`flex flex-col ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-full" : "max-h-0"
          }`}
        >
          {page.subPages.map((subPage) => (
            <div
              key={subPage.name}
              className={`flex flex-row items-center h-10 px-4 mb-6 rounded-2xl ${
                selectedPages[subPage.name]
                  ? "bg-primary-light border-primary border-2"
                  : ""
              }`}
              onClick={subPage.onNavigate}
            >
              <div className="w-6 h-6">{subPage.icon}</div>
              <div className="text-navbar-text text-xl ml-2 font-navbar-text">
                {subPage.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarItem;
