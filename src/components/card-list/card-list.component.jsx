import { Component } from 'react';

class CardList extends Component {

  render() {
    // console.log('cardlist rendering');
    // console.log(this.props);
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
            return(<div key={monster.id}><h1>{monster.name}</h1></div>);
          })
        }  
      </div>
    );
  }

}

export default CardList;
