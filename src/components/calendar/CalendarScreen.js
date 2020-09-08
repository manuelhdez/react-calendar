import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";

import { Navbar } from "components/ui/Navbar";
import { messages } from "helpers/calendar-messages";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "actions/ui";

moment.locale("es");

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Event #1",
    start: moment().toDate(),
    end: moment().add(2, "hour").toDate(),
    name: "HOLAA",
  },
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("LAST_VIEW") || "month"
  );

  const dispatch = useDispatch();

  const onDblClick = (e) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    console.log("e===>", e);
  };

  const onViewChange = (e) => {
    localStorage.setItem("LAST_VIEW", e);
    setLastView(e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367cf7",
      borderRadius: "0px",
      opacity: "0.8",
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDblClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
      />

      <CalendarModal isOpen={false} />
    </div>
  );
};
