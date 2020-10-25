import React, { Component } from 'react';
import FormProduto from './FormProduto.js';
import TableProduto from './TableProduto.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = this.initialState();
    console.log(this.state);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  initialState(){
    return {produto:{id:"",fornecedor:"",nome:"",descricao:""},produtos:[],isEditing:false}  
  }
  add(){
      const produtos = this.state.produtos;
      const produto = this.state.produto;
      produto.id = this.state.produtos.length + 1;
      produtos.push(produto);
      this.setState({
        produto:{id:"",fornecedor:"",nome:"",descricao:""},
        produtos:produtos
      });
  }
  update(index){
     const produtos = this.state.produtos;
     const produto = produtos.filter((produto,i) => {return i === index});
     this.setState({
       produto:produto[0],
       isEditing:true
     });
  }
  delete(index){
     const produtos = this.state.produtos;
     produtos.splice(index, 1);
     this.setState({produtos:produtos});
  }
  handleChange(event) {
    event.preventDefault();
    this.state.produto[event.target.name] = event.target.value;
    this.setState({produto:this.state.produto});
  }
  handleSubmit(event){
      event.preventDefault();
      if(!this.state.produto.fornecedor || !this.state.produto.nome) return
      this.add();
  }
  handleReset(event){
    event.preventDefault();
    this.setState({
      produto:{id:"",fornecedor:"",nome:"",descricao:""},
      isEditing:false
    });
  }
  render(){
    return (
      <div>
        <div className="title">
            <h2>Exemplo Cadastro Produto</h2>
        </div>
        <FormProduto  
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            handleReset={this.handleReset}
            produto={this.state.produto}
            isEditing={this.state.isEditing}
         />
        <br/>
        <TableProduto 
            update={this.update}
            delete={this.delete} 
            produtos={this.state.produtos} 
        />
      </div> 
    );
  }
}
export default App;

