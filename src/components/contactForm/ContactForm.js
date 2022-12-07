import React from 'react'

export default function ContactForm(
  {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
    isDuplicateName
  }
) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
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
        <label><p>Name</p>
          <input type='text' required value={name} onChange={onNameChange} />
        </label>
        <label><p>Phone (must contain 5-15 digits only)</p>
          <input type='tel' pattern='[0-9]{5,15}' required value={phone} onChange={onPhoneChange} />
        </label>
        <label><p>Email</p>
          <input type='email' required value={email} onChange={onEmailChange} />
        </label>
        <input 
          type='submit' 
          disabled={isDuplicateName} 
          value={isDuplicateName ? 'Please enter another name' : 'Submit'} 
        />
      </form>
    </div>
  )
}
