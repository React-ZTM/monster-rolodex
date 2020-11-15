import './card.styles.css';

export const Card = (props) =>{
    return (
        <div className="card-container"> 
            <img src={props.item.imageSrc} alt="Monster"/>
            <h3>{props.item.name}</h3>
            <p>
                {props.item.email} 
            </p>
        </div>
    )
}
