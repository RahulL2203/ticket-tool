// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import Header from './components/Header';
import Footer from './components/Footer';
import TicketForm from './components/TicketForm';
import TicketView from './components/TicketView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderJs from './components/HeaderJs';
import Projects from './components/Projects';
import MDTicketBoard from './components/MDTicketBoard';
//import './styles.css'; // assuming your external CSS file is named styles.css

const App = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (

      <Router>
      <div className="container-fluid bg-success">
        {/* <Header /> */}
        <HeaderJs/>
        <main>
          <Routes>
            <Route path="/" element = { <TicketForm onSubmit={addTicket} />}/>
            
            <Route path="/tickets" element= { <TicketView tickets={tickets} />}/>
            <Route path="/projects" element= { <Projects/>}/>
            <Route path="/projects/:projectName" element= {<MDTicketBoard/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
