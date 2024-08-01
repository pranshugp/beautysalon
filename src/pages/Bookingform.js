import React, { useState } from 'react';
import '../styles/bookingform.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !date || !time || !service) {
      setError('Please fill in all fields.');
      return;
    }

    // Clear the error message
    setError('');

    // Simulate form submission
    setTimeout(() => {
      alert('Appointment booked successfully!');
      setSubmitted(true);

      // Clear form fields
      setName('');
      setEmail('');
      setDate('');
      setTime('');
      setService('');
    }, 500);
  };

  return (
    <div className='book'>
    <div className="booking-form-container">
      <h2>Book an Appointment</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service:</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="coloring">Coloring</option>
            <option value="manicure">Manicure</option>
            <option value="facial">Facial</option>
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
      {submitted && <p className="success-message">Thank you! Your appointment has been booked.</p>}
    </div>
    </div>
  );
};

export default BookingForm;
