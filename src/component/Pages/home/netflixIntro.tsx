import React from 'react';
import '../../MYCSS/NetflixIntro.css';

interface NetflixIntroProps {
  letter: string;
}

const NetflixIntro: React.FC<NetflixIntroProps> = ({ letter }) => {
  return (
    <div id="container">
      <div className="netflixintro" data-letter={letter}>
        <div className="helper-1">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={`fur-1-${i}`} className={`fur-${31 - i}`}></span>
            ))}
          </div>
          <div className="effect-lumieres">
            {[...Array(28)].map((_, i) => (
              <span key={`lamp-${i}`} className={`lamp-${i + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="helper-2">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={`fur-2-${i}`} className={`fur-${31 - i}`}></span>
            ))}
          </div>
        </div>
        <div className="helper-3">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={`fur-3-${i}`} className={`fur-${31 - i}`}></span>
            ))}
          </div>
        </div>
        <div className="helper-4">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={`fur-4-${i}`} className={`fur-${31 - i}`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixIntro;
