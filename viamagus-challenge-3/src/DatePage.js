import React, { useState } from 'react';
import moment from 'moment';
import './App.css'

const DatePage = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
  
    const handleFromDateChange = (event) => {
      const selectedFromDate = event.target.value;
      setFromDate(selectedFromDate);
  
      // Calculate and set the default 'To Date' based on duration
      if (selectedFromDate && toDate === '') {
        const defaultToDate = moment(selectedFromDate)
          .add(1, 'hours')
          .format('YYYY-MM-DDTHH:mm');
        setToDate(defaultToDate);
      }
    };
  
    const handleDurationChange = (event) => {
      const duration = event.target.value;
      if (duration && fromDate) {
        const calculatedToDate = moment(fromDate)
          .add(parseInt(duration, 10), 'hours')
          .format('YYYY-MM-DDTHH:mm');
        setToDate(calculatedToDate);
      }
    };
  
    const handleToDateChange = (event) => {
      const selectedToDate = event.target.value;
      setToDate(selectedToDate);
    };
  
    return (
      <div className='container'>
        <h1>Date Page</h1>
        <label htmlFor="from-date">From Date:</label>
        <input
        className="input-style"
          id="from-date"
          type="datetime-local"
          value={fromDate}
          onChange={handleFromDateChange}
        />
        <br />
  
        <label htmlFor="duration">Duration (in hours):</label>
        <input
        className="input-style"
          id="duration"
          type="number"
          value={toDate && fromDate ? moment.duration(moment(toDate).diff(moment(fromDate))).asHours().toString() : ''}
          onChange={handleDurationChange}
        />
        <br />
  
        <label htmlFor="to-date">To Date:</label>
        <input
        className="input-style"
          id="to-date"
          type="datetime-local"
          value={toDate}
          onChange={handleToDateChange}
        />
      </div>
    );
}

export default DatePage