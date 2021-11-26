import React from "react";
import s from "./Column.module.scss";
import {ColumnType} from "../Table/Table";

export const Column = React.memo(({title,columnOne,columnTwo,columnTree}:ColumnType) => {

    return (
        <section className={s.test}>
            <div className={s.bookmark}/>
            <div className={s.name}> {title}</div>
            <div className={s.type}> {columnOne}</div>
            <div className={s.type}> {columnTwo}</div>
            <div className={s.type}> {columnTree}</div>
        </section>
    )
})

