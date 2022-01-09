import { useMutation } from "@apollo/client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  EventsQueryType,
 UPDATE_EVENT
} from "../../../graphql/eventQueries";


const useForm = ( eventData: EventsQueryType) => {
  
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
  const [formData, setFormData] = useState<EventsQueryType>(initialState);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    const {User, __typename, Invitees, host_id, created_at, ...rest} = eventData
    setFormData(rest);
    if(eventData){
      setloading(false)
    }
  }, [eventData]);

  const [mutate] = useMutation(UPDATE_EVENT);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    try {
      mutate({
        variables: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    handleChange,
    handleSelectChange,
    onSubmit,
    setFormData,
    formData,
    submitted,
    loading
  };
};

export default useForm;
