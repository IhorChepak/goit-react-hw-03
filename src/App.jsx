import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

const App = () => {
  const testContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : testContacts;
  });

  const [filterCont, setFilterCont] = useState("");
  // збереження даних в локальне сховище кожний раз, коли змінюється стейт contacts
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    [contacts];
  });
  // Фільтрований список контактів
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterCont.toLowerCase())
  );
  // Обробник зміни в полі пошуку
  const handleFilteredContacts = (evt) => {
    setFilterCont(evt.target.value);
  };
  //Додавання контакта
  const addContact = (values, actions) => {
    setContacts((prevContact) => [
      ...prevContact,
      { id: nanoid(), name: values.name, number: values.number },
    ]);
    actions.resetForm();
  };
  //Видалення контакта
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox
        value={filterCont}
        onFilter={handleFilteredContacts}
      />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;