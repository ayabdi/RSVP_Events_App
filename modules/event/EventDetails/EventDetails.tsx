import { useSubscription } from "@apollo/client";
import { CircularProgress} from "@material-ui/core";
import { format } from "date-fns";
import { FC, useState } from "react";
import { EventsQueryType, GET_EVENT_BY_ID } from "../../../graphql/eventQueries";
import { Modal } from "../../shared_components";
import { EventForm } from "../EventForm/EventForm";

interface EventDetailsProps {
  event_id: number;
  router: any;
}
export const EventDetails: FC<EventDetailsProps> = (props) => {
  const { data, loading} = useSubscription(GET_EVENT_BY_ID, {
    variables: { id: props.event_id },
  });

  const eventData : EventsQueryType = data?.RSVP_Events[0]
  const time = eventData?.event_date
    .toString()
    .split("T")[1]
    .slice(0, 5);

  const details = [
    { title: "Event Name:", content: eventData?.event_name },
    { title: "Event Description:", content: eventData?.event_desc },
    {
      title: "Event Date:",
      content:
      eventData?.event_date &&
        format(new Date(eventData?.event_date), "dd/MM/yyyy"),
    },
    { title: "Event Time:", content: time },
    { title: "Event Type:", content: eventData?.event_type },
    { title: "Event Address:", content: eventData?.address },
    { title: "Hosted By:", content: eventData?.User?.name },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  return (
    <div className="bg-white overflow-hidden sm:rounded-lg flex flex-col z-100 justify-around ml-60 md:ml-64 ">
      <div className="flex grid grid-cols-2 px-4 py-5 sm:px-6">
        <div className="flex flex-col w-1/2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Event Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Event information and location
          </p>
        </div>
        <div className="flex flex-col w-full items-end  my-4 ">
          <button
            className={`inline-flex mr-28 xl:mr-72 justify-center py-1 px-5 mx-1 w-18 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" ${
              isOpen ? null : "z-10"
            }`}
            onClick={handleModal}
          >
            Edit Event
          </button>
         { eventData?.id && <Modal isOpen={isOpen} handleModal={handleModal}><EventForm id={eventData.id} eventData={eventData} closeModal={handleModal} /></Modal> }
        </div>
      </div>

      <div className="border-t border-gray-200 ">
        {!loading ? (
          <dl className="">
            {details.map((detail, itemIdx) => (
              <div
                key={itemIdx}
                className={` px-4 py-5   sm:grid sm:grid-cols-3 sm:gap-4 sm:px-12 ${
                  itemIdx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <dt className="text-sm font-medium  text-gray-500">
                  {detail.title}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail.content}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="w-full text-center h-40 mt-36 mb-60 -ml-20">
            <CircularProgress size={110} className="" />
          </div>
        )}
      </div>
    </div>
  );
};
