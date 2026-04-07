import './MainPageContent.css';
import Headline from './elements/headline/Headline';

function MainPageContent() {
  return (
    <div className="pageContent">
        <p className="contentTest sixtyfourDiplay-fontface">
            Aglio Olio Peperoncino
        </p>
        <Headline
          text="Questo sito è ancora in realizzazione..." 
        />
    </div>
  );
}

export default MainPageContent;