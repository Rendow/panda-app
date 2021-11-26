import React, {useState} from "react";
import s from "./filterBar.module.scss";
import classNames from "classnames";
import arrowIcon from "../../common/img/arrow.png";

type FilterBarProps = {
    setType: (type: string) => void
    setSortDirection: (dir: boolean) => void
    sortDirection:boolean
}
export const FilterBar = React.memo(({setType,sortDirection,setSortDirection}:FilterBarProps) => {
    return (
        <div className={s.filterBar}>
            <FilterButton sortDirection={sortDirection} setSortDirection={setSortDirection} left={32} type={'title'} name={'title'}  setType={setType} />
            <FilterButton sortDirection={sortDirection} setSortDirection={setSortDirection} left={52} type={'columnOne'} name={'Column'} setType={setType} />
            <FilterButton sortDirection={sortDirection} setSortDirection={setSortDirection} left={52} type={'columnTwo'}  name={'Column'} setType={setType} />
            <FilterButton sortDirection={sortDirection} setSortDirection={setSortDirection} left={52}  type={'columnTree'} name={'Column'}  setType={setType} />
        </div>
    )
})
type FilterButtonProps = FilterBarProps & {
    name?:string
    left?:number
    type:string
}
const FilterButton = React.memo(({setType,type,sortDirection,setSortDirection,name,left}:FilterButtonProps)=> {
    const [direction,setDirection] = useState(true)
    const sort = () => {
        setType(type)
        setSortDirection(!sortDirection)
        setDirection(!direction)
    }
    return (
        <div>
            <button className={classNames(s.arrow, {[s.arrowSwitch]: direction })}  onClick={sort}>
                <div style={{backgroundImage:`url(${arrowIcon})`, left:`${left}px`}}/>{name}</button>
        </div>
    )
})
