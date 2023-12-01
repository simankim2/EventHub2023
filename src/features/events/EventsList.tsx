import { AppEvent } from "../../app/types/events";
import EventListItem from "./dashboard/EventListItem";

type Props = {
  events: AppEvent[]
}

export default function EventList({events}: Props) {
  return (
    <>
      {events.map((event: any) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  )
}
