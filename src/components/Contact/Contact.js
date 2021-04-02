import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <h1>Contato</h1>
          <div className="boxs">
            <div className="box">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Localização</h3>
              <p>Paraíba, Brasil</p>
            </div>
            <div className="box">
              <i className="fas fa-envelope"></i>
              <h3>E-mail</h3>
              <p>juniorsilvacc@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;