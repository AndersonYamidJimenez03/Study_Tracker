import './Card.css';

const Card = (props) => {
    const cardClass = 'study-card ' + props.className;

    return (
        <div className={cardClass}>{props.children}</div>
    );
}

export default Card;