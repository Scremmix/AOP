import './PageSelector.css';

function PageSelector() {
  return (
    <div className="pageSelectorWrapper">
        <label class="selectorLabel">
            <input type="radio" id="pageOption1" name="value-radio" defaultValue="Page1" />
            <span className="text kodeMono-fontface">Classifica Memoriale Zenk</span>
        </label>
        <label class="selectorLabel">
            <input type="radio" id="pageOption2" name="value-radio" defaultValue="Page2" />
            <span className="text kodeMono-fontface">Classifica Premio Matteo</span>
        </label>
        <label class="selectorLabel">
            <input type="radio" id="pageOption3" name="value-radio" defaultValue="Page3" />
            <span className="text kodeMono-fontface">Storico Camminate</span>
        </label>
    </div>
  );
}

export default PageSelector;