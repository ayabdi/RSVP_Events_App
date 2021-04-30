import { FC, Fragment } from "react";
import {signIn, signOut } from "next-auth/client";
import { Menu, Transition } from "@headlessui/react";
import { Session } from "next-auth";
import {UserCircleIcon} from "@heroicons/react/solid";

interface DesktopMenuProps {
  profile: String[];
  isWhite: Boolean;
  session?: Session | null | undefined;
  loading?: Boolean;
}
const DesktopMenu: FC<DesktopMenuProps> = (props ): JSX.Element => {
 const classNames = (...classes: String[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        {/* Profile dropdown */}

        {!props.session ? (
          <a
            href={`/auth/signin`}
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Log in
          </a>
        ) : (
          <Menu as="div" className="ml-3 relative">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 rounded-full bg-gray-300" />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    {props.profile.map((item, itemIdx) => (
                      <Menu.Item key={itemIdx}>
                        {({ active }) =>
                          item == "Sign out" ? (
                            <a
                              href={`/api/auth/signout`}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={(e) => {
                                e.preventDefault();
                                signOut();
                              }}
                            >
                              {item}
                            </a>
                          ) : (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item}
                            </a>
                          )
                        }
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        )}
      </div>
    </div>
  );
};

export default DesktopMenu;
