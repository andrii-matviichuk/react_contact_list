import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Avatar from 'react-avatar';

function Contact({ id, avatar, first_name, last_name, email, display }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    display && (
      <div
        className="contact_container"
        onClick={() => {
          setIsSelected(!isSelected);
          console.log(id);
        }}
      >
        <div className="flex_row">
          {avatar ? (
            <img src={avatar} alt="avatar" className="avatar" />
          ) : (
            <div className="avatar no_border">
              <Avatar
                name={`${first_name} ${last_name}`}
                round={true}
                size={52}
                color="#e8e8e8"
              />
            </div>
          )}
          <div className="contact_info">
            <h3>
              {first_name} {last_name}
            </h3>
            <p>
              <FaEnvelope /> {email}
            </p>
          </div>
        </div>
        <input
          type="checkbox"
          className="contact_checkbox"
          checked={isSelected}
          onChange={(e) => {
            setIsSelected(e.target.checked);
          }}
        />
      </div>
    )
  );
}

export default Contact;
