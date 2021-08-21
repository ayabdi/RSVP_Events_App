import { FC, useEffect, FormEvent } from "react";
import useForm from "./useForm";
import "react-datepicker/dist/react-datepicker.css";


interface EventFormProps {
  closeModal: () => void;
  event_id: number;
}
export const InviteForm: FC<EventFormProps> = (props): JSX.Element => {
  const { handleChange, onSubmit, inviteData, submitted } = useForm(
    props.event_id
  );

  useEffect(() => {
    if (submitted) {
      props.closeModal();
    }
  }, [submitted]);

  return (
    <div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}
          method="POST"
        >
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="event_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inviteData.name}
                    id="name"
                    autoComplete="given-name"
                    onChange={handleChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address*
                  </label>
                  <input
                    name="email_address"
                    value={inviteData.email_address}
                    id="email_address"
                    onChange={handleChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="event_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone no. *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={inviteData.phone}
                    id="phone"
                    autoComplete="given-phone"
                    onChange={handleChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
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
              type="submit"
              className="inline-flex justify-center py-2 px-4 mx-1 w-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
