// TicketForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeStamp = new Date().toISOString();
    onSubmit({ title, description, timeStamp });
    setTitle('');
    setDescription('');
   // navigate('/tickets'); // Navigate after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <h2>Create Ticket</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="description"></textarea>
      </div>
      <button type="submit" className="btn btn-primary p-2 m-2 border border-dark rounded-lg">Submit</button>
      <button type="submit" className="btn btn-danger" onClick={()=>navigate('/tickets')}>View Tickets</button>
      
    </form>
  );
};

export default TicketForm;