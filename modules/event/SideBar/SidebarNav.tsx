import { CalendarIcon, ClipboardListIcon, FolderIcon, LogoutIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { Dispatch, FC, SetStateAction } from "react";


interface SidBarProps {
  navCount: number;
  setNavCount: Dispatch<SetStateAction<number>>;
}

type SidBarType = {
    title : string,
    href : string,
    icon ?: JSX.Element,
    onClick? : ()=>void;
}

export const SidebarNav: FC<SidBarProps> = (props) => {
  const navigation: SidBarType[] = [
    {icon: <HomeIcon className ='h-6'/>, title: "Home", href: "../" },
    { icon: <FolderIcon className ='h-6'/>, title: "Dashboard", href: "../dashboard" },
    {icon: <ClipboardListIcon className ='h-6'/>,  title: "Event Details", href: "/", onClick: () => props.setNavCount(2) },
    {icon: <CalendarIcon className ='h-6'/>,  title: "Invite List", href: "/" , onClick:()=>props.setNavCount(3)},
    { icon: <LogoutIcon className ='h-6'/>, title: "Sign Out", href: "../" },
  ];
  
  return (
    <div className="flex flex-col w-1/4 h-screen md:w-64 text-white bg-gray-800 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 l-0 fixed z-10">
      <div className="flex-shrink-0 px-4 py-4 flex flex-row items-center justify-between">
        <div className="flex items-center mt-8">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
        </div>
      </div>
      <nav className="flex-grow md:block  pb-4 md:pb-0 md:overflow-y-auto">
        {navigation.map((nav, itemIdx) =>
          props.navCount === itemIdx? (
            <div className="flex w-full  items-center  border-l-4 cursor-pointer transition duration-150 ease-in-out bg-violet-600 text-white ">
              <a
                key={itemIdx}
                className="bg-gray-700 flex w-full hover:text-white block px-2 py-3 rounded-md text-base font-medium "
               
              >
                <div className= 'flex flex-col mr-2'>{nav.icon}</div>
               <div className='flex flex-col'>{nav.title}</div>
              </a>
            </div>
          ) : (
            <div className="flex w-full items-center hover:bg-gray-700 border-sm transition duration-150 ease-in-out text-white ">
              <a
                key={itemIdx}
                className=" w-full flex block px-3 py-3 rounded-md text-base font-medium cursor-pointer "
                onClick = {nav.onClick}
                href = {nav.href}
              > <div className= 'flex flex-col mr-2'>{nav.icon}</div>
               <div className='flex flex-col'>{nav.title}</div>
              </a>
            </div>
          )
        )}
      </nav>
    </div>
  );
};
