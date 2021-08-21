import { FC, useState } from "react";
import { EventModal } from "../EventModal/EventModal";

interface EventEditButtonProps {
    id : number
}
export const Button :FC<EventEditButtonProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="flex flex-col w-full items-end  my-4 ">
        <button
          className={`inline-flex mr-28 xl:mr-72 justify-center py-1 px-5 mx-1 w-18 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" ${isOpen ? null : 'z-10'}`}
          onClick={openModal}
        >
          Edit Event
        </button>
      </div>

      <EventModal
        id={props.id}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};
