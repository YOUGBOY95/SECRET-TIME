import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css"; // Assurez-vous de créer le fichier CSS correspondant

const Avis = () => {
  const [avis, setAvis] = useState([
    { id: 1, rating: 5, comment: "PERFECT 🤩!!!", auteur: "jonasvdv05" },
    { id: 2, rating: 5, comment: "Parfait aucun problème expédition rapide.", auteur: "enzo.roc4" },
    { id: 3, rating: 5, comment: "Tout est parfait ! Merci à vous.", auteur: "lison2022" },
    { id: 4, rating: 5, comment: "parfait", auteur: "leabrssn" },
    { id: 5, rating: 5, comment: "Parfait rien a dire article conforme répond très vite, envoi soigné et rapide.", auteur: "gulli18" },
    { id: 6, rating: 5, comment: "Très bonne communication 👍", auteur: "philboss92" },
    { id: 7, rating: 5, comment: "Meilleur revendeur de sneakers.", auteur: "tgodet56565" },
    { id: 8, rating: 5, comment: "Bonne communication, transaction rapide, top 👍🏼", auteur: "faben1121" },
    { id: 9, rating: 5, comment: "Parfait 👍", auteur: "ange8306" },
    { id: 10, rating: 5, comment: "Tres bonne communication, vendeur très sympa A recommander !!", auteur: "madeinusa12" },
    { id: 11, rating: 5, comment: "Merci clément. Colis rapide et bien emballé. Conforme à la description et aux photos. Je recommande.", auteur: "justine.gardiol" },
    { id: 12, rating: 5, comment: "Très bien passé 👍", auteur: "giannisaval" },
    { id: 13, rating: 5, comment: "Merci", auteur: "gojostyle78" },
    { id: 14, rating: 5, comment: "Très bien ✅", auteur: "gojostyle78" },
    { id: 15, rating: 5, comment: "Excellent", auteur: "gojostyle78" },
    { id: 16, rating: 5, comment: "Merci comme d’habitude", auteur: "gojostyle78" },
    { id: 17, rating: 5, comment: "Comme d’habitude rien à dire", auteur: "gojostyle78" },
    { id: 18, rating: 5, comment: "Mercii", auteur: "gojostyle78" },
    { id: 19, rating: 5, comment: "🔝🔝", auteur: "gojostyle78" },
    { id: 20, rating: 5, comment: "tutto ok, venditore affidabile e serio. Acquistate tranquillamente", auteur: "dimitribonassi" },
    { id: 21, rating: 5, comment: "👍", auteur: "juxme" },
    { id: 22, rating: 5, comment: "Payout rapide", auteur: "gojostyle78" },
    { id: 23, rating: 5, comment: "Sympa !", auteur: "gojostyle78" },
  ]);

  return (
    <>
      <section className="hero">
        <h1> Avis Clients </h1>
      </section>
      <section className="avis-container">
        {avis.map((avis) => (
          <div key={avis.id} className="avis-block">
            <div className="rating">
              {Array.from({ length: avis.rating }).map((_, index) => (
                <FaStar key={index} className="star" />
              ))}
            </div>
            <p>
              <strong>{avis.auteur}</strong> a évalué <strong>Clemment_77017</strong> - {avis.comment}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Avis;
