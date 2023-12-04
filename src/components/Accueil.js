import React, { useEffect, useState } from "react";
import logo from '../components/Logo-secret-time.png';
import './styles.css';

const Accueil = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#000000","#75bbc0", "#3b2b19", "#D0D0D0", "#6B8E23"]; // Liste de couleurs

  useEffect(() => {
    // Met à jour l'index de couleur à intervalles réguliers
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); 

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); // Le tableau vide [] assure que cette effectuation ne se produit qu'une seule fois lors du montage initial du composant

  const isMobile = window.innerWidth <= 768; // Détermine si l'écran est de taille mobile

  return (
    <div className="accueil-container">
      <div className="presentation-container">
        {isMobile ? null : (
          <div className="logo-container">
            <img src={logo} alt="Logo secret-time" className="logo" />
          </div>
        )}
        <div className="description-container">
          <h1>✨​ Bienvenue chez <span style={{ color: colors[colorIndex] }}>SECRET-TIME</span> ! ✨​</h1>
          <br></br>
          <p><strong>
            En tant que passionné de sneakers, je suis ravi de vous présenter ma collection unique et tendance. 👟
          </strong></p>
          <br></br>
<p><strong>
 Chez SECRET-TIME, nous nous engageons à fournir des chaussures de qualité et à la pointe de la mode. ✔️
</strong></p>
<br></br>
<p><strong>
   Parcourez notre sélection et trouvez la paire parfaite pour compléter votre style. 🤝
</strong></p>
<br></br>
<p><strong>
   Shipping dans toutes l'europe en double box sous 48h. 📦
</strong></p>
<br></br>
        </div>
      </div>

      <div className="container-fluid">
  <div className="row">
    <div className="col-12 text-center">
      <div className="bottom-text">
        <strong>SITE CRÉÉ PAR <span className="underline">SECRET - TIME</span> © 2023</strong>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Accueil;
