
import { TrashIcon } from "@heroicons/react/solid";
import { FC, useState } from "react";
import { Delete } from "./DeleteModal";


interface DeleteButtonProps {
  invitee_id: Number | undefined
}
export const DeleteButton : FC<DeleteButtonProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      
      <TrashIcon className="h-6 text-purple-900 hover:text-purple-800 cursor-pointer mx-1" onClick={openModal} />
                     

      <Delete
        itemToDeletedId={props.invitee_id}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};
