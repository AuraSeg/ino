import React, { Fragment, useState } from "react";
import Axios from 'axios';

export default function NewMilestone() {
    const url="https://jsonplaceholder.typicode.com/posts"
    const [data, setData] = useState({
        title: "",
        description: "",
        date: "",
        list: ""
    })
    function handle (e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            title: data.title,
            description: data.description,
            date: data.date,
            list: data.list
        })
        .then(res=>{
            console.log(res.data)
        })
    }

  return (
    <div >
        <Fragment>
            <h3>New Milestone</h3>
            <form onSubmit={(e)=> submit(e)}>
                <label className="formlabel">Title</label>
                <input className="form-control my-2" onChange={(e)=>handle(e)} id="title" value={data.title} placeholder="Title" type="text"></input>
                <label className="formlabel">Description</label>
                <textarea className="form-control my-2" rows="3" onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="Description" type="text"></textarea>
                <label className="formlabel">Due date</label>
                <input className="form-control my-2" onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="Due date" type="date"></input>
                <label className="formlabel">Add team members</label>
                <input className="form-control my-2" list="datalistOptions" onChange={(e)=>handle(e)} id="list" value={data.list} placeholder="Type to search..."/>
                    <datalist id="datalistOptions">
                    <option value="Andrea"/>
                    <option value="John"/>
                    <option value="Sam"/>
                    <option value="Luis"/>
                    <option value="Carmen"/>
                </datalist>
                <button className="btn btn-primary">Add</button>
            </form>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.date}</div>
            <div>{data.list}</div>
        </Fragment>
    </div>
  );
};