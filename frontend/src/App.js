import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import ChartItem from "./Components/ChartItem";
import { getMetricItemData, getMetrics } from "./Redux/actionCreator";

// Getting metrics file and collecting all the measure without having duplicated values
// Using select tag to show measures in dropdown list
// On selecting particular measure value, making an api request to get corresponding measure items
// After getting all the measure Items, Passing items to child component as props

export default function App() {

    const dispatch = useDispatch();
     const allMetrics = useSelector(state => state.metrics.metrics);
     const allFilteredItems = useSelector(state => state.metricItems.item)

     const [category, setCategory] = useState("");
     const [items, setItems] = useState([]); 

    useEffect(() => {
       dispatch(getMetrics())
    }, []);

    console.log(allMetrics)

    var categories = [];

    allMetrics && allMetrics.forEach(e => categories.push(e.measure))
    console.log(categories)

    const removeDuplicates = (arr) => {
        var uniques = [...new Set(arr)]
        categories = uniques
    }
    removeDuplicates(categories)
    console.log(categories);
    console.log(category);

    const handleChange = (e) => {
        setCategory(e.target.value);
        dispatch(getMetricItemData(e.target.value))
        allFilteredItems && setItems(allFilteredItems)
    }
    console.log(items)
    
    return(
        <div>
            <h1 style={{marginLeft:"36%",marginTop:"1%"}}>Data Visualization</h1>
            <img src="https://i.pinimg.com/originals/9b/ec/83/9bec831078051d4fc5f06e964da71760.gif" width="300" style={{marginLeft:"35%",marginTop:"1%"}}/>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                <h3>Select Type of Quantity to view</h3>
                <select name="type" id="measure" onChange={handleChange} value={category}>
                    <option value=""></option>
                    {categories && categories.map((e,i) => {
                        return (<option value={e} key={i}>{e}</option>)
                    })}
                </select>
            </div>
            <div>
                <h2 style={{marginLeft:"45%",marginTop:"1%"}}>{category}</h2>
                {items && items.map(data => {
                    return (
                        <ChartItem data={data} />
                    )
                })}
            </div>
        </div>
    )
}