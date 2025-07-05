import { NavPage } from "../../AltrixDataModels";
import { DocumentChartBarIcon } from "@heroicons/react/24/solid";
import {
  HomeIcon,
  SparklesIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

import { useAppData } from "../../hooks/useAppData";
import { useUserData } from "../../hooks/useUserData";

import NavbarHeader from "./NavbarHeader";
import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";
const AltrixNavBar = () => {
  const {
    navBarOpen,
    setNavBarOpen,
    selectedPages,
    selectedPatient, 
    setSelectedPages,
    patients,
  } = useAppData();

  const { setSelectedPatient } = useAppData();

  const { lastName, hospital, unit } = useUserData();

  const navigate = useNavigate();

  const patientPages: NavPage[] = patients.map((patient) => ({
    name: patient.first + " " + patient.last,
    onNavigate: () => {
      setSelectedPatient(patient);
      setSelectedPages({ Flowsheets: true, [patient.first + " " + patient.last]: true });
      if (window.location.pathname !== "/flowsheets") {
        navigate("/flowsheets");
      }
    },
    icon: <TableCellsIcon className="text-navbar-text" />,
  }));

  const pages: NavPage[] = [
    {
      name: "Home",
      onNavigate: () => {
        setSelectedPages({ Home: true });
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      },
      icon: <HomeIcon className="text-navbar-text" />,
    },
    {
      name: "Altrix AI",
      onNavigate: () => {
        setSelectedPages({ "Altrix AI": true });
        if (window.location.pathname !== "/altrix-ai") {
          navigate("/altrix-ai");
        }
      },
      icon: <SparklesIcon className="text-navbar-text" />,
    },
    {
      name: "Flowsheets",
      onNavigate: () => {
        
        setSelectedPages({ Flowsheets: true, [selectedPatient.first + " " + selectedPatient.last]: true });
        if (window.location.pathname !== "/flowsheets") {
          navigate("/flowsheets");
        }
      },
      icon: <DocumentChartBarIcon className="text-navbar-text" />,
      subPages: patientPages,
    },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden text-nowrap flex flex-col h-full border-r-3 justify-start gap-4 border-separator bg-background-2 px-4 py-10 ${
        navBarOpen ? "w-1/4" : "w-1/16"
      }`}
    >
      <NavbarHeader
        navBarOpen={navBarOpen}
        setNavBarOpen={setNavBarOpen}
        lastName={lastName}
        hospital={hospital}
        unit={unit}
      />

      <div className="flex flex-col">
        {pages.map((page) => (
          <NavbarItem
            key={page.name}
            page={page}
            navBarOpen={navBarOpen}
            selectedPages={selectedPages}
            onNavigate={page.onNavigate}
          />
        ))}
      </div>
    </div>
  );
};

export default AltrixNavBar;
