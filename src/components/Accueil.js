import React from "react";
import logo from '../components/Logo-secret-time.png'; // Remplacez le chemin par le chemin réel de votre logo
import './styles.css'; // Assurez-vous de créer un fichier de style CSS pour ce composant

const Accueil = () => {
  return (
    <div className="presentation-container">
      <div className="logo-container">
        <img src={logo} alt="Logo secret-time" className="logo" />
      </div>
      <div className="description-container">
        <h1>✨​ Bienvenue chez SECRET-TIME ! ✨​</h1>
        <br></br>
        <p><strong>
          En tant que passionné de sneakers, je suis ravi de vous présenter ma collection unique et tendance. Chez SECRET-TIME, nous nous engageons à fournir des chaussures de qualité et à la pointe de la mode. Parcourez notre sélection et trouvez la paire parfaite pour compléter votre style. 
          </strong></p>
      </div>
    </div>
  );
};

export default Accueil;
