import React, { Component } from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {

  state = {
    items: [
      {id: 1, name: 'Todo 1', priority: 5},
      {id: 2, name: 'Todo 2', priority: 6},
      {id: 3, name: 'Todo 3', priority: 9}
    ]
  }

  deleteItem = (id) => {
    const items = this.state.items.filter( item => {
      return item.id !== id;
    } )

    this.setState({items});
  }

  addItem = item => {
    let {items} = this.state;
    item.id = items.length + 1;
    items.push(item);
    this.setState({
      items
    })
  }

  render() {
    return (
      <div className="App">
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem  addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
