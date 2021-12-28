import React from 'react';
import './EventCard.css';


export function EventCard({ title, imageurl, body }) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageurl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a>
                        Entrar
                    </a>
                </button>
            </div>

        </div>
    )
}
