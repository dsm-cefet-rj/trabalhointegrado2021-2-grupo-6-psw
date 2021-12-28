import React from "react";
import './EventList.css';
import './EventItem';
import { EventItem } from "./EventItem";

export function EventList() {    
    return (
        <>
        <section className="Eventos">
            <h2>Eventos</h2>
        </section>
        
        <div>
            <ul>
               <EventItem />
               <EventItem />
               <EventItem />
            </ul>
        </div>
    </>
    );
}