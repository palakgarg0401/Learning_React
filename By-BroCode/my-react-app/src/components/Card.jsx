import shinchan from "../assets/shinchan.jpg";

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={shinchan} alt="shinchan" />
            <h2 className="card-title">Shinchan</h2>
            <p className="card-text">Shin-chan, also known as Shinnosuke "Shin" Nohara, is a mischievous and hilarious five-year-old character from the popular anime series Crayon Shin-chan</p>
        </div>
    );
};

export default Card;