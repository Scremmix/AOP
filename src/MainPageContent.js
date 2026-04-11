import './MainPageContent.css';
import Headline from './elements/headline/Headline';
import PageViewer from './elements/pageviewer/PageViewer';

function MainPageContent() {
  return (
    <div className="pageContent">
        <p className="title sixtyfourDiplay-fontface">
            Aglio Olio Peperoncino
        </p>
        <Headline
          text="Questo sito è ancora in realizzazione... Nel frattempo, venite a camminare, bestie." 
        />
        <PageViewer />
    </div>
  );
}

export default MainPageContent;