import s from './Table.module.scss'
import {useEffect, useState} from "react";
import searchIcon from "../../common/img/search.png";
import React from 'react';
import { Row } from '../Row/Row';
import { FilterBar } from '../FilterBar/FilterBar';
import { Pagination } from '../Pagination/Pagination';

export type ColumnType = {
        columnOne: number
        columnTwo: number
        columnTree: number
        title: string
        id?: number
}

export const Table = () => {
    const [sortDirection,setSortDirection] = useState(false)
    const [text,setText] = useState('')
    const [state,setState] = useState<ColumnType[]>( [])
    const [currentPage,setCurrentPage] = useState(1)
    const [rowPerPage] = useState(10)

    useEffect(()=>{
        function makeString() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (let i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

        let arr = new Array(55).join().split(',')
           .map((n,index) => ++index)
           .map((n) => {
               let title = makeString()

               let columnOne = Math.floor(Math.random() * 10)
               let columnTwo = Math.floor(Math.random() * 10)
               let columnTree = Math.floor(Math.random() * 10)
               return  {
               columnOne: columnOne,
               columnTwo: columnTwo,
               columnTree: columnTree,
               title: title,
               id: n
           }})

      setState(arr)
    },[])
    function sortFunction(left: (undefined | string | number), right: (undefined | string | number)) {
        if (left && right) {
            if (sortDirection) {
                if (left > right) {
                    return 1;
                }
                if (left < right) {
                    return -1;
                }
                return 0;
            } else {
                if (left < right) {
                    return 1;
                }
                if (left > right) {
                    return -1;
                }
                return 0;
            }
        } else {
            return 0;
        }
    }

    const sortTestsByType = function (type:string){
        let sortedState = [] as ColumnType[]
        switch (type) {
            case 'title':
                  sortedState = state.sort((a, b) => {
                    let left = a.title
                    let right = b.title
                    return sortFunction(left, right)
                });
                return  setState(sortedState)
            case 'columnOne':
                sortedState = state.sort((a, b) => {
                    let left = a.columnOne
                    let right = b.columnOne
                    return sortFunction(left, right)
                });
                return  setState(sortedState)
            case 'columnTwo':
                sortedState = state.sort((a, b) => {
                    let left = a.columnTwo
                    let right = b.columnTwo
                    return sortFunction(left, right)
                });
                return  setState(sortedState)
            case 'columnTree':
                sortedState = state.sort((a, b) => {
                    let left = a.columnTree
                    let right = b.columnTree
                    return sortFunction(left, right)
                });
                return  setState(sortedState)
            default:
                throw new Error()
        }

    }



    const lastRowIndex = currentPage * rowPerPage
    const firstRowIndex = lastRowIndex - rowPerPage
    const currentState = state.slice(firstRowIndex,lastRowIndex)

    const search = currentState.filter(t => {
        return [text].every(el => t.title.toLowerCase().includes(el))
    })
    return (
      <main className={s.table}>
        <h1>Table </h1>
        <div className={s.inputWrap}>
          <input
              style={{backgroundImage:`url(${searchIcon})`}}
              placeholder={'Start typing'}
              value={text}
              onChange={(e)=>{setText(e.currentTarget.value)}}
              type="text" />
        </div>
          <FilterBar sortDirection={sortDirection}
                     setSortDirection={setSortDirection}
                     setType={sortTestsByType} />
          <ul>
                  { search.map( i => {
                      return <li key={i.id}>
                          <Row    title={i.title}
                                  columnOne={i.columnOne}
                                  columnTwo={i.columnTwo}
                                  columnTree={i.columnTree}
                          />
                      </li>
                  })}
      </ul>
          <Pagination currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      rowPerPage={rowPerPage}
                      totalRow={state.length} />
      </main>
  )
}
