import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import Loader from 'react-loader-spinner';
import Header from '../components/Header';
import ContactList from '../components/ContactList';

function Contacts() {
  const [contactsData, setContactsData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://cors-anywhere.herokuapp.com/https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
    )
      .then((response) => response.json())
      .then((res) => {
        setContactsData(
          res.sort((a, b) => {
            if (a.last_name < b.last_name) {
              return -1;
            }
            if (a.last_name > b.last_name) {
              return 1;
            }
            return 0;
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="contacts_container">
      <Header title="Contacts" />
      <div className="search_container">
        <input
          type="text"
          value={searchInputValue}
          onChange={(e) => {
            setSearchInputValue(e.target.value);
          }}
        />
        <FaSearch size={25} className="search_icon" />
      </div>
      {isLoading ? (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={80}
          width={80}
          className="loader"
        />
      ) : (
        <ContactList searchValue={searchInputValue} contacts={contactsData} />
      )}
    </div>
  );
}

export default Contacts;
