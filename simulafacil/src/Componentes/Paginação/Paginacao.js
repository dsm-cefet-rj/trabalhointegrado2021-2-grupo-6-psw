import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

let pagAtiva = 1;
let pagTotal = [];

for (let f = 1; f <=5; f++){
    pagTotal.push(
        <Pagination.Item key={f} active={f === pagAtiva}>
            {f}
        </Pagination.Item>
    )
}

function paginacao () {
    return(
        <div>
            <Pagination> {pagTotal} </Pagination>
            <br />
            <Pagination size="lg"> {pagTotal} </Pagination>
            <br />
            <Pagination size="sm"> {pagTotal} </Pagination>
        </div>
    )
};

export default paginacao;