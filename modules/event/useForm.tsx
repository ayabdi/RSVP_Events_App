import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  EventsQueryType,
  getEventsByID,
  updateEvent,
} from "../queries/eventQueries";

const useForm = (id: number) => {
  const { data } = useSubscription(getEventsByID(id));
 

  var initialState: EventsQueryType = {
    event_name: " ",
    event_date: new Date(),
    event_type: " ",
    event_desc: " ",
    country: " ",
    duration: " ",
    address: " ",
    zip: " ",
    state: " ",
    city: " ",
    name: "",
    email: "",
  };
  const [eventData, setEventData] = useState<EventsQueryType>(initialState);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    initialState = {
      event_name: data?.RSVP_Events[0].event_name,
      event_date: data?.RSVP_Events[0].event_date,
      event_type: data?.RSVP_Events[0].event_type,
      event_desc: data?.RSVP_Events[0].event_desc,
      country: data?.RSVP_Events[0].country,
      address: data?.RSVP_Events[0].address,
      zip: data?.RSVP_Events[0].zip,
      state: data?.RSVP_Events[0].state,
      city: data?.RSVP_Events[0].city,
      id: data?.RSVP_Events[0].id,
      duration: data?.RSVP_Events[0].duration
    };
    setEventData(initialState);
    if(data){
      setloading(false)
    }
  }, [data]);

  const [mutate] = useMutation(updateEvent());

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    try {
      mutate({
        variables: eventData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return {
    handleChange,
    handleSelectChange,
    onSubmit,
    eventData,
    setEventData,
    submitted,
    loading
  };
};

export default useForm;
