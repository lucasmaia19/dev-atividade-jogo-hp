import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AtividadeJogo from './atividade-jogo/atividade-jogo';
import AtividadeMontar from './atividade-montar/atividade-montar';

ReactDOM.render(
  <BrowserRouter>

  <Switch>
     <Route exact path="/" component={AtividadeJogo} />
     <Route exact path="/atividade-montar" component={AtividadeMontar}/>
     <Route exact path="/atividade-montar/:id" component={AtividadeMontar}/>
     {/* <Route component={Pagina404} /> */}
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
