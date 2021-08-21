import { PlusCircleIcon } from "@heroicons/react/solid";
import { Session } from "next-auth";
import { FC, useState, useContext } from "react";
import { EventModal } from "../EventModal/EventModal";

export const CreateButton: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <>
      <div className="flex justify-end">
        <PlusCircleIcon
          role="plus-icon"
          className=" cursor-pointer h-10 text-purple-900 hover:text-opacity-80 z-10"
          onClick={handleOpen}
        ></PlusCircleIcon>
      </div>

      <EventModal isOpen={isOpen} handleModal={handleOpen} />
    </>
  );
};
