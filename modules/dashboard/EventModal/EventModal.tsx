import { CSSProperties, FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EventForm } from "../EventForm/EventForm";
import { Session } from "next-auth";

interface EventModalProps {
  isOpen: boolean;
  handleModal : ()=> void;
}

export const EventModal: FC<EventModalProps> = (props): JSX.Element => {
  const zIndexOpen : CSSProperties = {zIndex:-10};
  const zIndexClose : CSSProperties = {zIndex:0};
  
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center"  style={!props.isOpen ? zIndexOpen: zIndexClose}></div>
      <Transition show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          static
          open={props.isOpen}
          onClose={props.handleModal}
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
                  Add an Event
                </Dialog.Title>
                <EventForm   closeModal ={props.handleModal} />

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
