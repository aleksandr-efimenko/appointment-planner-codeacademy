import React, {useState, useEffect} from 'react'
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';

export default function ContactPage({contacts, addContact, deleteObj}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isDuplicateName, setIsDuplicateName] = useState(false);

    const handleSubmit = () => {
        if (!isDuplicateName) {
            addContact(name, phone, email);
            setName('');
            setPhone('');
            setEmail('');
        }
    }
    useEffect(() => 
    {
        if (contacts.some(el => el.name.toLowerCase() === name.toLocaleLowerCase())) {
            setIsDuplicateName(true);
        } else {
            setIsDuplicateName(false);
        }
    }, [name, contacts])
    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm 
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    isDuplicateName={isDuplicateName}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList deleteObj={deleteObj} list={contacts} />
            </section>
        </div>
    )
}
