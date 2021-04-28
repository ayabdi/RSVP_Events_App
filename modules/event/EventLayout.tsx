import { FC, useState, useEffect } from "react";
import { EventDetails } from "./EventDetails";
import { InviteeList } from "../invites/InviteeList";
import { SidebarNav } from "./SidebarNav";
import { useRouter } from "next/dist/client/router";


interface EventLayoutProps{
    event_id : number,
    isAuthorisedUser : boolean
}
export const EventLayout: FC<EventLayoutProps> = (props): JSX.Element => {
  const [navCount, setNavCount] = useState(2);
  const router = useRouter();
  
  useEffect(() => {
    if (!props.isAuthorisedUser) router.push('/404')
  }, [])
 
  console.log(props.event_id)
  return (
    <>
      {props.isAuthorisedUser ? (
        <>
          <SidebarNav navCount={navCount} setNavCount={setNavCount} />
          {navCount === 2 && props.event_id ? (
            <EventDetails event_id={props.event_id} router={router} />
          ) : navCount === 3 ? (
            <InviteeList event_id={props.event_id} />
          ) : null}
        </>
      ) : null}
    </>
  );
};
