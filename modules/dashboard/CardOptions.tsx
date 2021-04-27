import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { FetchResult, useMutation } from "@apollo/client";
import { deleteEvent } from "../queries/eventQueries";

interface CardOptionsProps {
  event_id: number | undefined;
}
export const CardOptions: FC<CardOptionsProps> = (props): JSX.Element => {
  const classNames = (...classes: String[]) => {
    return classes.filter(Boolean).join(" ");
  };

  const [mutate] = useMutation(deleteEvent());
  type OptionsType = {
    title: string;
    href: string;
  
  };

  const options:OptionsType[]= [
    { title: "Delete", href: "", },
    {
      title: "Details",
      href: "",
    },
  ];
  return (
    <div className="absolute z-10 top-0 right-0 mt-4 mr-4 cursor-pointer">
      <Menu as="div" className="ml-3 relative">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="">
                <DotsVerticalIcon className="w-7 h-8 text-white text-opacity-70 hover:text-opacity-100 transition ease-in-out duration-150 " />
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
                {options.map((item, itemIdx) => (
                  <Menu.Item key={itemIdx}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                        onClick = {(e)=>{mutate({
                            variables: { id: props.event_id }, 
                          }); e.preventDefault()}}
                      >
                        {item.title}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};
