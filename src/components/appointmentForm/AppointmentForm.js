import React from 'react'
import ContactPicker from '../contactPicker/ContactPicker'

export default function AppointmentForm({ title, setTitle, date, setDate, time, setTime, contacts, setContact, handleSubmit }) {
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
        <ContactPicker contacts={contacts} handleChange={onContactChange} />
        <input type='text' onChange={onTitleChange} value={title} />
        <input type='date' onChange={onDateChange} value={date} />
        <input type='time' onChange={onTimeChange} value={time} />
        <input type='submit' />
      </form>
    </div>
  )
}
