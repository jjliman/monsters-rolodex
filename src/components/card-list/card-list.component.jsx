import { Component } from 'react';
import Card from '../card/card.component'
import './card-list.styles.css';

class CardList extends Component {

  render() {
    // console.log('cardlist rendering');
    // console.log(this.props);
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { id } = monster;
          return <Card monster={monster} key={id} />;
        })
        }  
      </div>
    );
  }

}

export default CardList;
