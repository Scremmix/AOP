import './Headline.css';

function Headline(props) {
  return (
    <div className="headlineContainer">
        <div className="headline">
            <div className={props.direction}>
                <p className="headlineContent vt323-fontface">{props.text}</p>
                <p className="headlineContent vt323-fontface">&emsp;</p>
                <p className="headlineContent vt323-fontface">{props.text}</p>
                <p className="headlineContent vt323-fontface">&emsp;</p>
            </div>
        </div>
    </div>
  );
}

export default Headline;