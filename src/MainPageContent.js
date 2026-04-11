import './MainPageContent.css';
import Headline from './elements/headline/Headline';
import PageSelector from './elements/pageselector/PageSelector';

function MainPageContent() {
  return (
    <div className="pageContent">
        <p className="contentTest sixtyfourDiplay-fontface">
            Aglio Olio Peperoncino
        </p>
        <Headline
          text="Questo sito è ancora in realizzazione... Nel frattempo, venite a camminare, bestie." 
        />
        <PageSelector />
    </div>
  );
}

export default MainPageContent;