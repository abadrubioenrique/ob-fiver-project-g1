import React from 'react';
import CardListComponent from '../../container/card_list';
import '../../../App.css';
import NavComponent from '../../nav/navComponet';
import CardListFilter from '../../examples/card_list_filter';

const CardsPage = () => {
    return (

    <div className="App">
      <header className="App-header">
      <NavComponent></NavComponent>
      <CardListFilter></CardListFilter>
      </header>
      </div>

    );
}

export default CardsPage;
