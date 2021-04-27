import {FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EventForm } from "./EventForm";


interface EventModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  id:number
}

export const EventModal: FC<EventModalProps> = (props): JSX.Element => {
  
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center"></div>
      <Transition show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0  overflow-y-auto"
          static
          open={props.isOpen}
          onClose={props.closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0   bg-black bg-opacity-70 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4 ml-2"
                >
                  Edit Event
                </Dialog.Title>
                <EventForm id ={props.id}  closeModal ={props.closeModal} />

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
