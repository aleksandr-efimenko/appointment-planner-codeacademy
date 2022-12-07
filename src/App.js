import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import AppointmentsPage from './containers/appointmentPage/AppointmentPage';
import ContactPage from './containers/contactsPage/ContactsPage';


function App() {
  const [contacts, setContacts] = useState([
    {name: 'a', phone: '1-241-412', email: 'aa@aa.com'},
    {name: 'b', phone: '1-213-312', email: 'bb@bb.com'}]);
  const [appointments, setAppointments] = useState([]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPIONTMENTS: "/appointments",
  };
  const addContact = (name, phone, email) => {
    setContacts(contacts => [...contacts, {
      name: name, 
      phone: phone, 
      email: email,
    }]);
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointments(appointments => [...appointments, 
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      }]);
  }

  return (
    <>
        <BrowserRouter>
      <nav>
        <NavLink to={ROUTES.CONTACTS} className={({ isActive }) => isActive ? "active" : undefined}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPIONTMENTS} className={({ isActive }) => isActive ? "active" : undefined}>
          Appointments
        </NavLink>
      </nav>
      <main>
          <Routes>          
            <Route exact path='/' element={<Navigate replace to={ROUTES.CONTACTS} />} />
            <Route 
              path={ROUTES.CONTACTS} 
              element={<ContactPage contacts={contacts} addContact={addContact}  />} />
            <Route 
              path={ROUTES.APPIONTMENTS} 
              element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} />} />
            <Route path='/*' element={<Navigate replace to={ROUTES.CONTACTS}/>} />
          </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
