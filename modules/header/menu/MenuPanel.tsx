import React from 'react'
import {FC, Fragment} from 'react'
import { Disclosure} from "@headlessui/react";
import { BellIcon} from "@heroicons/react/outline";
import { NavType } from '../navbar';
interface MenuPanelProps {
  navigation : NavType,
  profile : string[],
  isWhite : Boolean
}
export const MenuPanel:FC<MenuPanelProps> = (props) => {
    return (
        <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {props.navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={itemIdx}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.title}
                    </a>
                  </Fragment>
                ) : (
                  <a
                    key={itemIdx}
                    href="#"
                    className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                      props.isWhite ? "text-white" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                )
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {props.profile.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
    )
}


