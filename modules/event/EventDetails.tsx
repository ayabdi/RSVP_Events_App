import { useSubscription } from "@apollo/client";
import { PaperClipIcon } from "@heroicons/react/solid";
import { CircularProgress } from "@material-ui/core";
import { format, getTime } from "date-fns";
import { FC, useState } from "react";
import { EventsQueryType, getEventsByID } from "../queries/eventQueries";
import { Button } from "./Button";
import { EventModal } from "./EventModal";
import useForm from "./useForm";

interface EventDetailsProps {
  event: EventsQueryType;
}
export const EventDetails: FC<EventDetailsProps> = (props) => {
  const { data, loading } = useSubscription(getEventsByID(7));
  //   const eventData = data.RSVP_Events[0]
  const time = data?.RSVP_Events[0].event_date
    .toString()
    .split("T")[1]
    .slice(0, 5);
  
  const details = [
    { title: "Event Name:", content: data?.RSVP_Events[0].event_name },
    { title: "Event Description:", content: data?.RSVP_Events[0].event_desc },
    {
      title: "Event Date:",
      content: format(data?.RSVP_Events[0].event_date, "DD/MM/YYYY"),
    },
    { title: "Event Time:", content: time },
    { title: "Event Type:", content: data?.RSVP_Events[0].event_type },
    { title: "Event Address:", content: data?.RSVP_Events[0].address },
    { title: "Hosted By:", content: data?.RSVP_Events[0].User?.name },
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg flex flex-col z-100 justify-around ml-60 md:ml-64 ">
      <div className="flex grid grid-cols-2 px-4 py-5 sm:px-6">
        <div className="flex flex-col w-1/2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Event Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <Button id={data?.RSVP_Events[0].id} />
      </div>
      {!loading ? (
        <div className="border-t border-gray-200 ">
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
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};