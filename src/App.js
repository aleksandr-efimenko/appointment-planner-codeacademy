import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import AppointmentsPage from './containers/appointmentPage/AppointmentPage';
import ContactPage from './containers/contactPage/ContactPage';


function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPIONTMENTS: "/appointments",
  };

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
            <Route path={ROUTES.CONTACTS} element={<ContactPage />} />
            <Route path={ROUTES.APPIONTMENTS} element={<AppointmentsPage />} />
            <Route path='/*' element={<Navigate replace to={ROUTES.CONTACTS}/>} />
          </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
