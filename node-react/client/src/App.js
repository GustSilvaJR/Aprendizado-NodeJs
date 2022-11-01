import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: [],
  };


  renderRow(row) {
    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.numero}</td>
      </tr>
    )
  }

  getResponse(url) {
    let cod = document.querySelector("#codigoFilial").value;
    this.callApi(url, cod)
      .then(res => {
        this.setState({ response: res.express });
        console.log(this.state.response);
      })
      .catch(err => console.log(err));
  }

  callApi = async (url, data = '0') => {

    url += '?' + new URLSearchParams({ codigoFilial: data });
    console.log(url);

    const response = await fetch(url);

    if (response.status !== 200) throw Error();

    const body = await response.json();
    console.log(body);
    console.log(body.express);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='row center mt-3 mb-1'>
          <label className='col-1' htmlFor="codigoFilial">Código Filial</label>
          <input className='col-3 m-2' id="codigoFilial" type='text' placeholder='Filial a se consultar' />
          <button className='btn btn-primary col-2' onClick={() => { this.getResponse('/instrucaoServicoReal') }}>Click and Consult</button>
        </div>


        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Número</th>
            </tr>
          </thead>

          <tbody>
            {this.state.response.map(this.renderRow)}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
