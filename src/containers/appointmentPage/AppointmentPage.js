import React from 'react'

export default function AppointmentPage({appointments, addAppointment}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
            </section>
        </div>
    )
}
