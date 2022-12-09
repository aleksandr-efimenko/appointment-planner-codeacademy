import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import AppointmentsPage from './containers/appointmentPage/AppointmentPage';
import ContactPage from './containers/contactsPage/ContactsPage';

const mockContacts = [
  { name: 'Mike', phone: '1231412', email: 'aa@aa.com', id: 10 },
  { name: 'John', phone: '1213312', email: 'bb@bb.com', id: 15 }
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPIONTMENTS: "/appointments",
  };
  const addContact = (name, phone, email) => {
    setContacts(contacts => [{
      name: name,
      phone: phone,
      email: email,
      id: (new Date()).valueOf()
    }, ...contacts]);
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(el => el.id !== id));
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointments(appointments => [
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
        id: (new Date()).valueOf()
      }, ...appointments,]);
  }

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(el => el.id !== id));
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink
            to={ROUTES.CONTACTS}
            className={({ isActive }) => isActive ? "active" : undefined}
          >Contacts
          </NavLink>
          <NavLink
            to={ROUTES.APPIONTMENTS}
            className={({ isActive }) => isActive ? "active" : undefined}
          >Appointments
          </NavLink>
        </nav>
        <main>
          <Routes>
            <Route
              exact
              path='/'
              element={<Navigate replace to={ROUTES.CONTACTS} />}
            />
            <Route
              path={ROUTES.CONTACTS}
              element=
              {<ContactPage
                contacts={contacts}
                addContact={addContact}
                deleteObj={deleteContact}
              />} />
            <Route
              path={ROUTES.APPIONTMENTS}
              element=
              {<AppointmentsPage
                contacts={contacts.map(e => e.name)}
                appointments={appointments}
                addAppointment={addAppointment}
                deleteObj={deleteAppointment}
              />}
            />
            <Route
              path='/*'
              element={<Navigate replace to={ROUTES.CONTACTS} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
