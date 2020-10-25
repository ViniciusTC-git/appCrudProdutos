import React from 'react';

const TableProduto = (props) =>{
    return (
        <div className="container bg-light">
            <table className="table table-striped">
                <thead className="blue-light">
                    <tr>
                        <th>ID</th>
                        <th>Fornecedor</th>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th width="15%">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.produtos.length > 0 ? (
                        props.produtos.map((produto,index)=> (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.fornecedor}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>
                                    <div className="btn-group">
                                        <button onClick={() => props.update(index)} className="btn btn-success">Editar</button>
                                        <button onClick={() => props.delete(index)} className="btn btn-danger">Deletar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ):(
                    <tr>
                        <td colSpan="2"></td>
                        <td align="center" colSpan="1">Sem Produtos</td>
                        <td colSpan="2"></td>
                    </tr>
                    )} 
                </tbody>
            </table>
        </div>
    );
    
}
export default TableProduto;