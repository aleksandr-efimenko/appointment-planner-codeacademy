import React from 'react'

export default function ContactPicker({contacts, handleChange}) {
  const handlePickContact = (e) => {
    handleChange(e.target.value);
  }
  // console.log(contacts);
  return (
    <div>
      <select name='contacts' onChange={handlePickContact}>
        <option defaultValue=''>--Please choose an option--</option>
      {
        contacts.map((el, index) => (<option key={index} value={el}>{el}</option>))
      }
      </select>
    </div>
  )
}
