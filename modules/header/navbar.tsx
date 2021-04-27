import React, { FC } from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import DesktopMenu from "./menu/DesktopMenu";
import MobileMenu from "./menu/MobileMenu";
import { MenuPanel } from "./menu/MenuPanel";
import { Session } from "next-auth";

export type NavType = {
  title: string;
  href: string;
}[];

interface NavProps {
  isWhite: Boolean;
  navigation: NavType;
  session? : Session | null,
  isLoading? : Boolean
}

const Navbar: FC<NavProps> = (props): JSX.Element => {
  
  const profile = ["Your Profile", "Settings", "Sign out"];
  
  return (
    <Disclosure
      as="nav"
      className={props.isWhite ? "bg-white border-b-2" : "bg-gray-800"}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {props.navigation.map((item, itemIdx) =>
                      itemIdx === 0 ? (
                        <Fragment key={itemIdx}>
                          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                          <a
                            href={item.href}
                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.title}
                          </a>
                        </Fragment>
                      ) : (
                        <a
                          key={itemIdx}
                          href={item.href}
                          className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                            props.isWhite ? "text-black" : "text-gray-300"
                          }`}
                        >
                          {item.title}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              <DesktopMenu
                profile={profile}
                isWhite={props.isWhite}
                session={props.session}
                loading = {props.isLoading}
              />
              <MobileMenu open={open} />
            </div>
          </div>
          <MenuPanel
            navigation={props.navigation}
            profile={profile}
            isWhite={props.isWhite}
          />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
