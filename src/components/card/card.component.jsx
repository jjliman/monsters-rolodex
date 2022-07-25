import { Component } from 'react';
import './card.styles.css'


class Card extends Component {
   // Can wrap img in div if you want img size to stay constant
  render() {
    const { id, name, email } = this.props.monster;
    return(
      <div className='card-container'>
        <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
