import './MainPageContent.css';
import Headline from './elements/headline/Headline';

function MainPageContent() {
  return (
    <div className="pageContent">
        <p className="contentTest handjet-fontface">
            Aglio Olio Peperoncino
        </p>
        <Headline 
          direction="RightToLeft"
          text="Sito ancora in costruzione" 
        />
    </div>
  );
}

export default MainPageContent;