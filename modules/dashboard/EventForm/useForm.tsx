import { useMutation} from "@apollo/client";
import { useState, ChangeEvent, FormEvent, useContext} from "react";
import { EventsQueryType, INSERT_EVENT} from "../../../graphql/eventQueries";
import { UserContext } from "../Index";

const useForm = () => {
  const data : any  = useContext(UserContext)
 
  const initialState: EventsQueryType = {
    event_name: " ",
    event_date: new Date(),
    event_type: " ",
    event_desc: " ",
    country: " ",
    address: " ",
    duration: " ",
    zip: " ",
    state: " ",
    city: " ",
    host_id: data.userID,
    name: data.session.user.name,
    email: data.session.user.email,
  };
  
  const [eventData, setEventData] = useState<EventsQueryType>(initialState);
 
  const [mutate] = useMutation(INSERT_EVENT);

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
  };
};

export default useForm;
