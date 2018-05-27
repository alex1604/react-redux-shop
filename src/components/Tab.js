import React,{Component} from 'react';
import ProductsList from './ProductsList.js';
import Form from './Form.js';
import Kundvagn from './Kundvagn.js'
import Historik from './Historik.js';
import {connect} from 'react-redux';

class TabContent extends Component{
  render(){
    let pageContent;
    if(this.props.tab[0] === 'products'){
      pageContent =  <ProductsList />
    }
    else if(this.props.tab[0] === "admin"){
      pageContent =  <Form/>
    }
    else if(this.props.tab[0] === 'hist'){
      pageContent =  <Historik historyList={this.props.history}/>
    }
    else if(this.props.tab[0] === 'cart'){
      // pageContent = <Kundvagn/>
      pageContent = "here you can see your cart"
    }
    else{
      pageContent = <ProductsList />
    }

    return(
      <div>
        {pageContent}
      </div>
    );
  }
};
let mapStateToProps = state =>{
  return{
    history: state.history,
    tab: state.tab,
  };
}
export default connect(mapStateToProps)(TabContent);
