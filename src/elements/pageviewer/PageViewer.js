import { useState } from 'react';
import './PageViewer.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function PageViewer() {
    const [selectedPage, setSelectedPage] = useState('pageId');

    const handlePageChange = (event) => {
        setSelectedPage(event.target.value);
    };

    const renderPage = (pageRadioId) => {
        switch(pageRadioId){
            case "Page1" :
                return <Page1 />;
            case "Page2" :
                return <Page2 />;
            case "Page3" :
                return <Page3 />;
            default :
             return <Page1 />;
        }
    } 
    return (
        <div>
            <div className="pageSelectorWrapper">
                <label class="selectorLabel">
                    <input type="radio" id="pageOption1" name="value-radio" defaultValue="Page1" onChange={handlePageChange}/>
                    <span className="text kodeMono-fontface">Memoriale Zenk</span>
                </label>
                <label class="selectorLabel">
                    <input type="radio" id="pageOption2" name="value-radio" defaultValue="Page2" onChange={handlePageChange}/>
                    <span className="text kodeMono-fontface">Premio Matteo</span>
                </label>
                <label class="selectorLabel">
                    <input type="radio" id="pageOption3" name="value-radio" defaultValue="Page3" onChange={handlePageChange}/>
                    <span className="text kodeMono-fontface">Storico Camminate</span>
                </label>
            </div>

            <div>
                {renderPage(selectedPage)}
            </div>
        </div>
    )
}

export default PageViewer;
