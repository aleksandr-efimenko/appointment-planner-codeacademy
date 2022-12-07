import React from 'react'
import ContactPicker from '../contactPicker/ContactPicker'

export default function AppointmentForm({ title, setTitle, date, setDate, time, setTime, contacts, contact, setContact, handleSubmit }) {
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const onDateChange = (e) => {
    setDate(e.target.value);
  }
  const onTimeChange = (e) => {
    setTime(e.target.value);
  }
  const onContactChange = (contact) => {
    setContact(contact);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label><p>Contact</p>
          <ContactPicker contact={contact} contacts={contacts} handleChange={onContactChange} />
        </label>
        <label><p>Title</p>
          <input type='text' required onChange={onTitleChange} value={title} />
        </label>
        <label><p>Date</p>
          <input type='date' required onChange={onDateChange} value={date} />
        </label>
        <label><p>Time</p>
          <input type='time' required onChange={onTimeChange} value={time} />
        </label>
        <input type='submit' />
      </form>
    </div>
  )
}
