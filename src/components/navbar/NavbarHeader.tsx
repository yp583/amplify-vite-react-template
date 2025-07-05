import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface NavbarHeaderProps {
  navBarOpen: boolean;
  setNavBarOpen: (open: boolean) => void;
  lastName: string;
  hospital: string;
  unit: string;
}

const NavbarHeader = ({
  navBarOpen,
  setNavBarOpen,
  lastName,
  hospital,
  unit,
}: NavbarHeaderProps) => {
  return (
    <div className="mb-16">
      <div className="flex flex-row w-full justify-between pl-4">
        {navBarOpen && (
          <div className="h-10 text-dark-text text-3xl font-semibold border-b-2 border-primary">
            Hi, {lastName}
          </div>
        )}
        <div>
          <div
            className="flex items-center justify-center bg-background-1 rounded-lg w-8 h-8"
            onClick={() => setNavBarOpen(!navBarOpen)}
          >
            <ChevronRightIcon
              className={`transition-all w-6 duration-300 ease-in-out text-navbar-text ${navBarOpen ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>
      {navBarOpen ? (
        <div className="flex flex-col h-10 pl-4">
          <div className="text-navbar-text text-base mt-8">{hospital}</div>
          <div className="text-navbar-text text-base">{unit}</div>
        </div>
      ) : (
        <div className="h-10"></div>
      )}
    </div>
  );
};

export default NavbarHeader;
