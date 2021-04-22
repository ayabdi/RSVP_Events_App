import { PlusCircleIcon } from "@heroicons/react/outline";
import { Session } from "next-auth";
import { FC, useState } from "react";
import { EventModal } from "./EventModal";

interface CreatButtonProps  {
  session : Session | null | undefined
}
export const CreateButton: FC<CreatButtonProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  
  return (
      <>
    <div className="flex justify-end">
      <PlusCircleIcon
        className=" cursor-pointer h-10 text-purple-900 hover:text-opacity-80 z-10"
        onClick={openModal}
      />
    </div>
     <EventModal session= {props.session} isOpen={isOpen} openModal={openModal} closeModal = {closeModal}/>
     </>
  );
};
