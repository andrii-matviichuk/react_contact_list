import Contact from './Contact';
function ContactList({ contacts, searchValue, setIsLoading }) {
  return (
    <div className="contactlist_container">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          avatar={contact.avatar}
          first_name={contact.first_name}
          last_name={contact.last_name}
          email={contact.email}
          display={
            contact.first_name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            contact.last_name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            `${contact.first_name} ${contact.last_name}`
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase())
              ? true
              : false
          }
        />
      ))}
    </div>
  );
}

export default ContactList;
