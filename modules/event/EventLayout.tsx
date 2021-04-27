import { FC, useState } from "react";
import { EventsQueryType } from "../queries/eventQueries";
import { EventDetails } from "./EventDetails";
import { InviteeList } from "../invites/InviteeList";
import { SidebarNav } from "./SidebarNav";

interface InviteeListProps {
  event: EventsQueryType;
}

export const EventLayout: FC<InviteeListProps> = (props): JSX.Element => {
  const [navCount, setNavCount] = useState(2);
  
  return (
    <>
      <SidebarNav navCount={navCount} setNavCount={setNavCount} />
      {navCount === 2 ? (
        <EventDetails event= {props.event}/>
      ) : navCount === 3 ? (
        <InviteeList event={props.event} />
      ) : null}
    </>
  );
};
