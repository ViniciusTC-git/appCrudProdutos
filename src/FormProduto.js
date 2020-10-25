import React from 'react';

const FormProduto = (props) =>{
    return (
        <div className="container bg-light">
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <h5><span className="badge blue-light">Fornecedor</span></h5>
                    <input 
                        onChange={props.handleChange}
                        value={props.produto.fornecedor}  
                        type="text"
                        name="fornecedor" 
                        className="form-control" 
                    required/>
                </div>
                <div className="form-group">
                    <h5><span className="badge blue-light">Produto</span></h5>
                    <input 
                        onChange={props.handleChange}   
                        value={props.produto.nome} 
                        type="text"
                        name="nome" 
                        className="form-control" 
                        required/>
                </div>  
                <div className="form-group">
                    <h5><span className="badge blue-light">Descrição</span></h5>
                    <input 
                        onChange={props.handleChange}  
                        value={props.produto.descricao} 
                        type="text"
                        name="descricao" 
                        className="form-control"
                    />
                </div>  
                <div align="center" className="container"> 
                    {!props.isEditing ? (<button type="submit" className="btn blue-light">Enviar</button>):('')}
                    <button onClick={props.handleReset} className="btn blue-light">Reset</button>  
                </div>    
            </form>
        </div>
    )
}
export default FormProduto;