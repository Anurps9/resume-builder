import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import resumeScript from "../resume"
import ReactHTMLParser from 'react-html-parser'
import download from 'downloadjs'

export default function Form(){

    let navigate = useNavigate()
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
       name: '',
       phone: '',
       title: '' 
    })
    
    const handleClick = (e) => {
        let newPage = page + parseInt(e.target.value)
        newPage = Math.max(newPage, 0)
        newPage = Math.min(newPage, pages.length-1)
        setPage(newPage)
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
 
    const handleDownload = () => {
        axios(
            {
                method: 'post',
                url: '/resume',
                data:{
                    html: resumeScript(data)
                },
                responseType: 'blob'
            }
        )
        .then((res) => {
            download(res.data, 'resume.pdf', 'application/pdf')
            console.log(res.data);
        })
    }

    let pages = [
        <Page1 data={data} onChange={handleChange}/>,
        <Page2 data={data} onChange={handleChange}/>,
        <Page3 data={data} onChange={handleChange}/>
    ]

    return(
        <div>
            <div>
                <Link to='/'>Home</Link><br/>    
                Lets create your resume.
                {pages[page]}
                <button onClick={handleClick} value={-1} type="button">Previous</button>
                <button onClick={handleClick} value={+1} type="button">Next</button>
            </div>
            <Resume data = {data}/>
            <button onClick={handleDownload} type="button">Download</button>
        </div>
    )
}

function Resume(props){
    return <iframe id="resume-iframe" height='100%' width='50%' srcDoc={resumeScript(props.data)}>)</iframe>
}

function Page1(props){
    return(
        <div>
            Page 1
            <br/>
            <input autocomplete="off" placeholder="Full name" value={props.data.name} name="name" onChange={props.onChange}></input>
            <input autocomplete="off" placeholder="Title" value={props.data.title} name="title" onChange={props.onChange}></input>
        </div>
    )
}
function Page2(props){
    return(
        <div>
            Page 2
            <br/>
            <input autocomplete="off" placeholder="Mobile" value={props.data.phone} name="phone" onChange={props.onChange}></input>
        </div>
    )
}
function Page3(props){
    return(
        <div>
            Page 3
            <br/>
            <input autocomplete="off" placeholder="Title" value={props.data.title} name="title" onChange={props.onChange}></input>
        </div>
    )
}