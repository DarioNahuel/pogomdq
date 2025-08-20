import React from "react";

import events from './events.json';
import "./Event.css";

import leekduck from '/leekduck.png';

function getEventsThisWeek(events) {
  const now = new Date();
  
  const dayOfWeek = now.getDay();
  const diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return events.filter(event => {
    const startDate = new Date(event.start);
    return startDate >= monday && startDate <= sunday;
  });
}

function getDayName(fechaStr) {
  const fecha = new Date(fechaStr);
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias[fecha.getDay()];
}

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className={"event-header event-gray"}>
        <span className="event-heading">{event.heading}</span>
        <span className="event-day">{getDayName(event.start)}</span>
      </div>

      <div className="event-body">
        <h2 className="event-title">{event.name}</h2>


        <div className="event-content">
            <img src={event.image} alt={event.name} className="event-image" />
          <p className="event-date">
            {new Date(event.start).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const EventList = () => {
 const list = getEventsThisWeek(events);

  return (
    <div className="event-list">
      <h1 className="event-list-title">Eventos de la semana</h1>
      {list.map((event) => (
        <EventCard key={event.eventID} event={event} />
      ))}
      <div className='event-list-footer'>
        <span className="event-list-subtitle">Data provided by</span>
        <img src={leekduck} alt={'data'} />
      </div>
    </div>
  );
};

export default EventList;
