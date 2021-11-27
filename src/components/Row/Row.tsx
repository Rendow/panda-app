import React from "react";
import s from "./Row.module.scss";
import {ColumnType} from "../Table/Table";

export const Row = React.memo(({title,columnOne,columnTwo,columnTree}:ColumnType) => {
let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

    return (
        <section className={s.wrap}>
            <div style={{backgroundColor:color}} className={s.bookmark}/>
            <div className={s.title}> {title}</div>
            <div className={s.column}> {columnOne}</div>
            <div className={s.column}> {columnTwo}</div>
            <div className={s.column}> {columnTree}</div>
        </section>
    )
})

