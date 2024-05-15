import React from 'react';

const Form = () => {
  return (
    <div className="form-card1">
      <div className="form-card2">
        <form className="form">
          <p className="form-heading"></p>

          <div className="form-field">
            <input required placeholder="Nom" className="input-field" type="text" />
          </div>

          <div className="form-field">
            <input required placeholder="Email" className="input-field" type="email" />
          </div>

          <div className="form-field">
            <input required placeholder="Sujet" className="input-field" type="text" />
          </div>

          <div className="form-field">
            <textarea required placeholder="Message" cols="30" rows="3" className="input-field"></textarea>
          </div>

          <button className="sendMessage-btn">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
