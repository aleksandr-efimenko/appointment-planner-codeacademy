import React from 'react'

export default function ContactPicker({contacts, contact, handleChange}) {
  const handlePickContact = (e) => {
    handleChange(e.target.value);
  }
  return (
    <div>
      <select 
        placeholder='Choose contact' 
        // defaultValue={'Default'} 
        name='contacts' 
        value={contact}
        onChange={handlePickContact}
      >
        <option 
          key={(new Date()).valueOf()} 
          value='' 
          disabled
        >--Please choose an option--</option>
      {
        contacts.map((el, index) => (
        <option key={index} value={el}>{el}</option>
        ))
      }
      </select>
    </div>
  )
}
