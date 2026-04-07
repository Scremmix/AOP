import './Headline.css';

function Headline(props) {
  return (
    <div className="headlineContainer">
        <div className="headline">
            <div className="RightToLeft">
                <p className="headlineContent vt323-fontface">{props.text}</p>
                <p className="headlineContent vt323-fontface">{props.text}</p>
                <p className="headlineContent vt323-fontface">{props.text}</p>
            </div>
        </div>
    </div>
  );
}

export default Headline;