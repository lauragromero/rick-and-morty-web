import React from 'react';
import '../stylesheets/App.scss';
import {fechDataApi} from '../services/Api'
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';
import Filters from './Filters';
import {Route, Switch } from 'react-router-dom'
import CharacterDetail from './CharacterDetail'
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      characteres:[],
      inputform:{ filterValue:'', specie:'all'},
      checkValue:'', 
      isChecked: false

    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.renderRouterDetail = this.renderRouterDetail.bind(this); 
  }

  componentDidMount(){
    this.fechDataApi()
  }

  

  fechDataApi(){
    fechDataApi()
    .then(data=>{
      this.setState({
        characteres:data.results
      })
    })
  }

  handleSearchInput(value, name){
    //por destructuring nos quedamos con el valor del objeto inputsData
    let {inputform}= this.state;
    //accedemos al nombre y al valor que nos llegue por parámetr
    inputform[name]=value; 
    //seteamos el estado, cogemos el anterior y devolvemos el objeto inputsData
    //con el valor anterior del estado que pisamos con el nuevo
    this.setState(prevState=>{
      return{
        inputform:{
          ...prevState.inputform, 
          ...inputform
        }
      }
    })
  }

  

  renderRouterDetail(props){
    const routerId = props.match.params.id;
    return <CharacterDetail characterDetail ={routerId}
                            characteres={this.state.characteres}/>
    
  }


  render() {
    return (
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Filters
              handleSearchInput={this.handleSearchInput}
              valueInput={this.state.inputform}/>
            <CharacterList
              characteres={this.state.characteres}
              valueSearch={this.state.inputform.filterValue}
              filterSpecie={this.state.inputform.specie}
            />
          </Route>
          <Route path="/character/:id" render={this.renderRouterDetail}></Route>
        </Switch>
      </div>
    );
  }
}

CharacterList.propTypes = {
  characteres: PropTypes.arrayOf(PropTypes.object), 
  valueSearch: PropTypes.string
}

Filters.protoTypes ={
  handleSearchInput: PropTypes.func, 
  valueInput: PropTypes.string, 
  selectSpecie: PropTypes.string
}

CharacterDetail.protoTypes ={
  characteres: PropTypes.arrayOf(PropTypes.object).isRequired, 
  characterDetail:PropTypes.string
}
export default App;
