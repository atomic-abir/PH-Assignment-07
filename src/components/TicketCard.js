import React from 'react';
import './TicketCard.css';


function TicketCard({ ticket, onSelect }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  // Helper functions to convert codes to human‑friendly labels and classes.
  const formatStatus = (s) => {
    switch (s) {
      case 'IN_PROGRESS':
        return 'In‑Progress';
      case 'OPEN':
        return 'Open';
      case 'RESOLVED':
        return 'Resolved';
      default:
        return s;
    }
  };


  const getPriorityLabel = (p) => {
    switch (p) {
      case 'HIGH':
        return 'HIGH PRIORITY';
      case 'MEDIUM':
        return 'MEDIUM PRIORITY';
      case 'LOW':
        return 'LOW PRIORITY';
      default:
        return '';
    }
  };

  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="ticketCard" onClick={() => onSelect(ticket)}>
      <div className="ticketCard__header">
        <h4 className="ticketCard__title">{title}</h4>
        <span className={`ticketCard__status ticketCard__status--${status.toLowerCase()}`}>
          {formatStatus(status)}
        </span>
      </div>
      <p className="ticketCard__description">{description}</p>
      <div className="ticketCard__footer">
        <div className="ticketCard__metaRow">
          <span className="ticketCard__id">#{id}</span>
          <span
            className={`ticketCard__priority ticketCard__priority--${priority.toLowerCase()}`}
          >
            {getPriorityLabel(priority)}
          </span>
        </div>
        <div className="ticketCard__metaRow">
          <span className="ticketCard__customer">{customer}</span>
          <span className="ticketCard__date">
            <span className="ticketCard__dateIcon" role="img" aria-label="calendar">
              📅
            </span>
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;