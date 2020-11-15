import React,  {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import {SearchField} from './components/search-field/search-field.component';
import './App.css';

class App extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            monsters:[],
            searchValue:''
        }
    }
    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>response.json())
            .then((monsters)=>{
                monsters.forEach((monster)=>{
                    monster.imageSrc = `https://robohash.org/${monster.id}?set=set2&size=180x180`;
                });
                this.setState({
                    monsters
                });
            });
    }
    render(){
        let monsters = this.state.monsters.filter((monster)=> monster.name.toLowerCase().includes(this.state.searchValue));
        return(
            <div className="App">
                <h1 class="title">Monsters Rolodex</h1>
                <SearchField placeholder="Search Monsters!!" handleChange={this.handleChange}/>
                <CardList items={monsters} />
            </div>
        );
    }
}

export default App;
