import React, { useEffect, useState } from "react";
import logo from '../components/Succès.png';
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

  const titleElement = isMobile ? "h3" : "h1";

  return (
    <div className="accueil-container">
      <div className="presentation-container">
        {isMobile ? null : (
          <div className="logo-container">
            <img src={logo} alt="Logo secret-time" className="logo" />
          </div>
        )}
        <div className="description-container">
          {React.createElement(
            titleElement,
            null,
            <>
              ✨ ​Bienvenue chez <span style={{ color: colors[colorIndex] }}>SECRET-TIME</span> ! ✨​
            </>
          )}
          <br></br>
          <br></br>
          <p><strong>
            En tant que passionné de sneakers, je suis ravi de vous présenter ma collection unique et tendance. 👟
          </strong></p>
          <br></br>
<p><strong>
 Chez SECRET-TIME, nous nous engageons à fournir des sneakers 100% authentiques (facture sur demande). 🧾
</strong></p>
<br></br>
<p><strong>
   Parcourez notre sélection et trouvez la sneakers parfaite pour compléter votre style. 🤝
</strong></p>
<br></br>
<p><strong>
   Réduction offerte pour les abonnées vinted. 🏷️​
</strong></p>
<br></br>
<p><strong>
  Possibilité d'une remise en main propre sur Paris. 📍
</strong></p>
<br></br>
<p><strong>
   Shipping dans toute l'Europe en double box sous 48h. 📦
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
