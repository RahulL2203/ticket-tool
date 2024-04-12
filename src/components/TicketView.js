// TicketView.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
const TicketView = ({tickets}) => {

    const navigate = useNavigate(); 
  return (
    <div className="p-3">
      <h2>View Tickets Page</h2>
      <ul className="list-group">
        
        {tickets.map((ticket, index) => (
          <li key={index} className="list-group-item">
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>{ticket.timeStamp}</p>
          </li>
          
        ))}
      </ul>
      
      <button type="submit" className="btn btn-danger" onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  );
}

export default TicketView;
