import React, { useState, useEffect, useRef } from 'react';
import { drops_data } from "../data/data.js";
import "./styles.css";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Icon } from '@iconify/react';
import HammerGesture from './hammer.js';

function App() {
  const [selectedResell, setSelectedResell] = useState(null);
  const dropListRef = useRef(null);

  const uniqueResellValues = [...new Set(drops_data.map((drop) => drop.resellIndex))];

  const handleResellFilter = (resellValue) => {
    setSelectedResell(resellValue);
  };

  const filteredDrops = selectedResell ? drops_data.filter((drop) => drop.resellIndex === selectedResell) : drops_data;

  return (
    <div>
      <div className="resell-buttons">
        <select value={selectedResell} onChange={(e) => handleResellFilter(e.target.value)}>
          <option value="">-- VOIR TOUT --</option>
          {uniqueResellValues.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="drop-list" ref={dropListRef}>
        {filteredDrops.map((drop) => (
       <div key={drop.id} className="drop-item" style={{ color: drop.colorName }}>
       <div className={`resell-circle resell-circle-${drop.resellIndex.toLowerCase()}`}></div>
       <img src={drop.imagePath} alt={`${drop.brandName} - ${drop.modelName}`} />
       <div className={`drop-details color-${drop.colorName}`}>
         <br></br>
         <h3 className="color-text">{drop.modelName}</h3>
         <p className="black-text">{drop.brandName}</p>
         <p className={`resell-index resell-index-${drop.resellIndex.toLowerCase()} bold`}>{drop.resellIndex}</p>
       </div>
       <Icon icon="material-symbols:favorite-outline"
  onClick={() => window.location.href = 'https://www.vinted.fr/member/78182834'}
  style={{ fontSize: '24px', cursor: 'pointer' }}
/>

     </div>
     
        ))}
      </div>
      
<section className="texte-drops">
        <h1> SNEAKERS ​🔥​</h1>
      </section>

      <HammerGesture refElement={dropListRef} />
    </div>
  );
}

export default App;
