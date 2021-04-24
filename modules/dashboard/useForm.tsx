import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useState, ChangeEvent, FormEvent } from "react";
import { EventsQueryType, insertEvent } from "../queries/eventQueries";
import { getUser } from "../queries/userQueries";

const useForm = (session :any ) => {
   
    const { data} = useQuery(getUser(session && session.user.email));
    console.log(session)
  const initialState: EventsQueryType = {
    event_name: " ",
    event_date: new Date(),
    event_type: " ",
    country: " ",
    address: " ",
    zip: " ",
    state:  " ",
    city: ' ',
    host_id: data?.RSVP_Users[0]?.id,
    name: session.user.name,
    email: session.user.email
  };

  const [eventData, setEventData] = useState<EventsQueryType>(initialState);
  console.log(eventData)
  const [mutate] = useMutation(insertEvent());

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

  const [submitted, setSubmitted] = useState(false)
  const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false)
    try {
      mutate({
        variables: eventData,
      });
      setSubmitted(true)
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return {
      handleChange,
      handleSelectChange,
      onSubmit,
      eventData,
      setEventData, submitted
  };
};

export default useForm;
