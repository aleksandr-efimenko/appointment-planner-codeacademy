import React from 'react'

export default function ContactForm(
  {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
  }
) {
  const handleSubmitForm = (e) => {
    e.prevendDefaul();
    handleSubmit();
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const onEmailChange = (e) => {
    const pattern = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}";
    setEmail(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>Name
          <input type='text' value={name} onChange={onNameChange} />
        </label>
        <label>Phone
          <input type='tel' value={phone} onChange={onPhoneChange} />
        </label>
        <label>Email
          <input type='email' value={email} onChange={onEmailChange} />
        </label>
        <input type='submit' />
      </form>
    </div>
  )
}
