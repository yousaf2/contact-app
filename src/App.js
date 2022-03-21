import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";
import { useState,useEffect } from 'react';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContacts] = useState([]);
  const addContact = (contact) =>{
    setContacts([...contacts,{id : uuid(),...contact}]);
  };
  const removeContact = (id)=>{
    const newContactList = contacts.filter((contact) => {
      return contact.id !==id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem( LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  // const contacts = [
  //   {
  //     id : "1",
  //     name : "yousaf",
  //     email : "yousaf@gmail.com"
  //   },
  //   {
  //     id : "2",
  //     name : "ali",
  //     email : "ali@gmail.com"
  //   }
  // ];
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addcontact={addContact}/>
      <ContactList contacts={contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;
