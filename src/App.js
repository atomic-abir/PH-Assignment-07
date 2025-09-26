import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ticketsData from './data/tickets';
import { toast } from 'react-toastify';
import './App.css';

/**
 * Root component of the Customer Support Zone application. It holds
 * application state for available tickets, tasks currently in progress
 * and resolved tasks. Provides handlers for moving tickets between
 * these states and renders the overall page layout.
 */
function App() {
  // Maintain a single collection of tickets in state. Each ticket has a
  // status field that can be 'OPEN', 'IN_PROGRESS', or 'RESOLVED'.
  const [tickets, setTickets] = useState(ticketsData);

  // Mark a ticket as in progress. If the ticket is already in progress or
  // resolved, show an informational toast. Otherwise update its status.
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

  // Mark a task as resolved by updating its status. Once resolved, it will
  // no longer appear in the customer tickets list and will be shown in
  // the resolved section of the TaskStatus component.
  const handleCompleteTask = (taskId) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: 'RESOLVED' } : t
      )
    );
    toast.success('Task marked as resolved');
  };

  // Creates a new dummy ticket and adds it to the tickets collection.
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