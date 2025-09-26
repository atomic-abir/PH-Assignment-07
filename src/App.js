import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ticketsData from './data/tickets';
import { toast } from 'react-toastify';
import './App.css';


function App() {
 
  const [tickets, setTickets] = useState(ticketsData);


  const handleSelectTicket = (ticket) => {
    if (ticket.status === 'IN_PROGRESS') {
      toast.info('Ticket is already in progress.');
      return;
    }
    if (ticket.status === 'RESOLVED') {
      toast.info('Ticket is already resolved.');
      return;
    }
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticket.id ? { ...t, status: 'IN_PROGRESS' } : t
      )
    );
    toast.success('Ticket added to Task Status');
  };

  
  const handleCompleteTask = (taskId) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: 'RESOLVED' } : t
      )
    );
    toast.success('Task marked as resolved');
  };


  const handleNewTicket = () => {
    // Compute next id from all existing ticket IDs
    const allIds = tickets.map((t) => Number(t.id));
    const nextId = (Math.max(0, ...allIds) + 1).toString();
    const newTicket = {
      id: nextId,
      title: 'New Ticket',
      description: 'This is a newly created ticket. Edit it as needed.',
      customer: 'Anonymous',
      priority: 'LOW',
      status: 'OPEN',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setTickets((prev) => [newTicket, ...prev]);
    toast.success('New ticket created');
  };

  return (
    <div className="app">
      <Navbar onNewTicket={handleNewTicket} />
      <Banner
        inProgressCount={tickets.filter((t) => t.status === 'IN_PROGRESS').length}
        resolvedCount={tickets.filter((t) => t.status === 'RESOLVED').length}
      />
      <main className="app__main">
        <section className="tickets">
          <h3 className="tickets__heading">Customer Tickets</h3>
          <div className="tickets__grid">
            {tickets.filter((t) => t.status !== 'RESOLVED').length === 0 ? (
              <p className="tickets__empty">No available tickets.</p>
            ) : (
              tickets
                .filter((t) => t.status !== 'RESOLVED')
                .map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onSelect={handleSelectTicket}
                  />
                ))
            )}
          </div>
        </section>
        <TaskStatus
          tasks={tickets.filter((t) => t.status === 'IN_PROGRESS')}
          resolved={tickets.filter((t) => t.status === 'RESOLVED')}
          onComplete={handleCompleteTask}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;