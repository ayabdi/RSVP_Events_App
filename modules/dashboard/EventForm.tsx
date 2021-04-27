import { FC, useState, useEffect, FormEvent } from "react";
import DatePicker from "react-datepicker";
import useForm from "./useForm";
import "react-datepicker/dist/react-datepicker.css";
import { Session } from "next-auth/index";

interface EventFormProps {
  closeModal: () => void;
  session: Session | null | undefined
  
}
export const EventForm: FC<EventFormProps> = (props): JSX.Element => {
    
  const { handleChange, onSubmit, eventData, setEventData ,handleSelectChange, submitted} = useForm(props.session);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setEventData(eventData => ({...eventData, event_date : startDate}))
  }, [startDate]);

  useEffect(() => {
    if(submitted) {
        props.closeModal()
    }
  }, [submitted])

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
                    Event Name *
                  </label>
                  <input
                    type="text"
                    name="event_name"
                    value={eventData.event_name}
                    id="event_name"
                    autoComplete="given-name"
                    onChange={handleChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="event_desc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description*
                    </label>
                    <input
                      type="text"
                      name="event_desc"
                      value={eventData.event_desc}
                      id="event_desc"
                      autoComplete="given-name"
                      onChange={handleChange}
                      className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="event_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Type *
                  </label>
                  <select
                    name="event_type"
                    value={eventData.event_type}
                    id="event_type"
                    autoComplete="country"
                    onChange={handleSelectChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
                <br />
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="event_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Date *
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm flex"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="duration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Duration*
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={eventData.duration}
                    id="duration"
                    autoComplete="given-name"
                    onChange={handleChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={eventData.country}
                    autoComplete="country"
                    onChange={handleSelectChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={eventData.address}
                    autoComplete="street-address"
                    onChange={handleChange}
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={eventData.city}
                    onChange={handleChange}
                    id="city"
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={eventData.state}
                    onChange={handleChange}
                    id="state"
                    className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={eventData.zip}
                    id="zip"
                    autoComplete="postal-code"
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
