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
          // const { id, name, email } = monster;
          return <Card monster={monster} />;
        })
        }  
      </div>
    );
  }

}

export default CardList;
