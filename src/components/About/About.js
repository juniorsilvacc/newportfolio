/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import "./About.css";

class About extends Component{
  render(){
    return(
      <div className="about">
        <div className="container">
          <div className="items">
           <div className="">
            <img src="Img/photo.jpg" 
            style={{
              width:260, 
              height:260, 
              borderRadius: 500,
              }} />
           </div>
           <div className="about_me">
              <h2>SOBRE MIM</h2>
              <p>Estudante de graduação em Engenharia de Software Centro Universitário de Maringá (Unicesumar) e Análise e Desenvolvimento de Sistemas no Centro Universitário de Patos (UNIFIP). Sou do Estado da Paraíba, atualmente estudante e desenvolvedor web e mobile.</p>
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;