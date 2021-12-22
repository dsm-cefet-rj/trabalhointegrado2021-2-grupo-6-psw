import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { useState } from 'react';

/*let pagAtiva = 1;
let pagTotal = [];

for (let f = 1; f <=5; f++){
    pagTotal.push(
        <Pagination.Item key={f} active={f === pagAtiva}>
            {f}
        </Pagination.Item>
    )
}*/

function Paginacao (props) {

    const [arrPag, setArrPag] = useState(0);

    React.useEffect(() => {
        var pagTotal = parseInt(props.pagTotal);
        var pagAtual = parseInt(props.pagAtual);
        var pagArray = [];
        if (pagTotal >1) {
            if (pagTotal <=9) {
                var a = 1;
                while (a <= pagTotal) {
                    pagArray.push(a);
                    a++;
                }
            }else
                    pagArray = [
                        1,
                        "",
                        pagAtual-1,
                        pagAtual,
                        pagAtual+1,
                        "",
                        pagTotal
                    ];
            }
        setArrPag(pagArray);
    }, []);

    return(
        <div>
        <Pagination>
        <Pagination.Prev />
        <Pagination.Ellipsis />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
        </Pagination>
        </div>
    );
};

export default Paginacao;

/*<div>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{pagAtual-1}</Pagination.Item>
                <Pagination.Item active>{pagAtual}</Pagination.Item>
                <Pagination.Item>{pagAtual+1}</Pagination.Item>


                <Pagination.Ellipsis />
                <Pagination.Item>{pagTotal}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
                </Pagination>
        </div>
*/

/* <Pagination> {pagTotal} </Pagination>
            <br />
            <Pagination size="lg"> {pagTotal} </Pagination>
            <br />
            <Pagination size="sm"> {pagTotal} </Pagination> */

/*              else {
                if (pagAtual <=5)
                    pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", pagTotal];
                else if (pagTotal - pagAtual <= 4)
                    pagArray = [
                        1, "",
                        pagTotal-7,
                        pagTotal-6,
                        pagTotal-5,
                        pagTotal-4,
                        pagTotal-3,
                        pagTotal-2,
                        pagTotal-1,
                        pagTotal
                    ]; */
/*            <React.Fragment>
              {props.children}
              <div style={{ marginTop: "15px" }}>
                <Pagination style={{ justifyContent: "center" }}>
                  {arrPag.map((ele, ind) => {
                    const toReturn = [];
                    if (ind === 0) {
                      toReturn.push(
                        <Pagination.First
                          key={"firstpage"}
                          onClick={
                            props.pagAtual === 1
                              ? () => {}
                              : () => {
                                  props.pageClicked(1);
                                }
                          }
                        />
                      );
                      toReturn.push(
                        <Pagination.Prev
                          key={"prevpage"}
                          onClick={
                            props.pagAtual === 1
                              ? () => {}
                              : () => {
                                  props.pageClicked(props.pagAtual - 1);
                                }
                          }
                        />
                      );
                    }
                    if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
                    else
                      toReturn.push(
                        <Pagination.Item
                          key={ind}
                          active={props.pagAtual === ele ? true : false}
                          onClick={
                            props.pagAtual === ele
                              ? () => {}
                              : () => {
                                  props.pageClicked(ele);
                                }
                          }
                        >
                          {ele}
                        </Pagination.Item>
                      );
                    if (ind === arrPag.length - 1) {
                      toReturn.push(
                        <Pagination.Next
                          key={"nextpage"}
                          onClick={
                            props.pagAtual === ele
                              ? () => {}
                              : () => {
                                  props.pageClicked(props.pagAtual + 1);
                                }
                          }
                        />
                      );
                      toReturn.push(
                        <Pagination.Last
                          key={"lastpage"}
                          onClick={
                            props.pagAtual === ele
                              ? () => {}
                              : () => {
                                  props.pageClicked(ele);
                                }
                          }
                        />
                      );
                    }
                    return toReturn;
                  })}
                </Pagination>
              </div>
            </React.Fragment>

*/