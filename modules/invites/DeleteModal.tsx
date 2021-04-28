import { CSSProperties, FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMutation } from "@apollo/client";
import { deleteInvite } from "../queries/inviteeQueries";

interface DeleteModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  itemToDeletedId: Number | undefined;
}

export const Delete: FC<DeleteModalProps> = (props): JSX.Element => {
  const [mutate, { data }] = useMutation(deleteInvite());

  const deleteInviteFunction = () => {
    mutate({
      variables: { id: props.itemToDeletedId },
    });
  };

  const zIndexOpen : CSSProperties = {zIndex:'-10'};
  const zIndexClose : CSSProperties = {zIndex:'0'};
  
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={!props.isOpen ? zIndexOpen: zIndexClose}
      ></div>

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
                  Delete Invitee
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you wish to delete this person from the Invite
                    List?
                  </p>
                </div>
                <div className="px-4 py-3 mt-3 text-right sm:px-6">
                  <button
                    className="inline-flex justify-center px-4 py-2 mx-1 w-20 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={(e) => {
                      props.closeModal();
                      e.preventDefault();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="inline-flex justify-center py-2 px-4 mx-1 w-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      deleteInviteFunction();
                      data && props.closeModal();
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
