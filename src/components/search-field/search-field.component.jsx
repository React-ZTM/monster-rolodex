import './search-field.styles.css';

function _SearchField(props){
    return (
        <input className="search" placeholder={props.placeholder} type="text" onChange = {props.handleChange} />
    )
}

export const SearchField = _SearchField;