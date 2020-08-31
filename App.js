import React from 'react';
import createStore from "./src/store/createStore";
import AppContainer from "./src/AppContainer";


export default class App extends React.Component{
   renderApp(){
        const initialState = window.___INTITIAL_STATE__;
		    const store = createStore(initialState);

        return(

          <AppContainer store={store} />
          
        );
   }

   render(){
     return this.renderApp();
   }
}