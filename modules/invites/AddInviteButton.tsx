import { PlusCircleIcon } from "@heroicons/react/outline";
import { FC, useState } from "react";
import { InviteModal } from "./InviteModal";

interface InviteButtonProps {
  event_id: Number | undefined
}
export const Button : FC<InviteButtonProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      
      <button className=" flex mt-2 ml-0 md:mt-0 md:ml-4 mb-8 px-3 py-2 border-transparent shadow-sm text-sm font-medium h-9 rounded-md text-white bg-purple-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-20" onClick={openModal}>
                <PlusCircleIcon className="h-5 mr-2" />
                Add Invite
      </button>

      <InviteModal
        event_id={props.event_id}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};
