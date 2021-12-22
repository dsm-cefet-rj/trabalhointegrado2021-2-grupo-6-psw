import React from "react";
import './EventCard'
import { EventCard } from "./EventCard";
import './EventItem.css';
import Imagem from "../../Assets/enem-exemplo.jpeg";

export function EventItem() {
    return (
        <li>
            
            <EventCard
            title='Título do Evento'
            imageurl={Imagem}
            body='lorem ipsum dorem forem mesorem tolorem poporem vozorem'
            />
        </li>
    );
}