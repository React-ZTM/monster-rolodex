import './card-list.styles.css';
import {Card} from '../card/card.component';

function CardList(props){
    return (
        <div className="card-list">
            {props.items.length 
                    ? props.items.map((item) => <Card key={item.id} item={item}/>)
                    : <div>No Cards To Show!!</div>
            }
        </div>
    )
}

export default CardList;