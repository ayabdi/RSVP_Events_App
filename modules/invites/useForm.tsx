import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { useSession } from "next-auth/client";
import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { InviteeObjectType, insertInvitee } from "../queries/inviteeQueries";
import { sub } from "date-fns";

const useForm = (event_id: number) => {
  var initialState: InviteeObjectType = {
    name: " ",
    email_address: " ",
    phone: " ",
    status: "sent",
    event_id: event_id,
  };
  const [inviteData, setInviteData] = useState<InviteeObjectType>(initialState);

  const [mutate, { data, loading }] = useMutation(insertInvitee());

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInviteData({
      ...inviteData,
      [name]: value,
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    try {
      await mutate({
        variables: inviteData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  //triggering Api Gateway to labda function for sending invitation emails

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


  const sendEmail = async (inviteeData: InviteeObjectType) => {
    const url =
      "https://adgfi7mtoa.execute-api.us-east-2.amazonaws.com/default/send_email";
    const body = JSON.stringify({
      subject: `Invite to ${inviteeData.Event?.event_name} `,
      invite_id: inviteeData.id,
      email: inviteeData.email_address,
      name: inviteeData.name,
    });
    await axios.post(url, body, config);
  };
  useEffect(() => {
    if (submitted && !loading) {
      sendEmail(data.insert_RSVP_Invitees_one);
    }
    console.log(data);
  }, [submitted, loading]);

  return {
    handleChange,
    onSubmit,
    inviteData,
    setInviteData,
    submitted,
  };
};

export default useForm;
