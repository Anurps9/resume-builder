import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Form(){

    let navigate = useNavigate()
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
       name: '',
       phone: '',
       title: '' 
    })
    const [resumePath, setResumePath] = useState("")
    
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        axios
        .post('/resume', data)
        .then((res) => {
            setResumePath(res.data)
        })
    }

    useEffect(() => {
        if(resumePath !== "") {
            let newResumePath = resumePath.replace(/\\/g, '%5C');
            navigate(`/resume/${newResumePath}`)
        }
    }, [resumePath])

    let pages = [
        <Page1 data={data} onChange={handleChange}/>,
        <Page2 data={data} onChange={handleChange}/>,
        <Page3 data={data} onChange={handleChange} handleSubmit={handleSubmit} path={resumePath}/>
    ]

    const handleClick = (e) => {
        let newPage = page + parseInt(e.target.value)
        newPage = Math.max(newPage, 0)
        newPage = Math.min(newPage, pages.length-1)
        setPage(newPage)
    }


    return(
        <div>
            <Link to='/'>Home</Link><br/>    
            Lets create your resume.
            <div>
                {pages[page]}
                <button onClick={handleClick} value={-1} type="button">Previous</button>
                <button onClick={handleClick} value={+1} type="button">Next</button>
            </div>
        </div>
    )
}

function Page1(props){
    return(
        <div>
            Page 1
            <br/>
            <input placeholder="Full name" value={props.data.name} name="name" onChange={props.onChange}></input>
        </div>
    )
}
function Page2(props){
    return(
        <div>
            Page 2
            <br/>
            <input placeholder="Mobile" value={props.data.phone} name="phone" onChange={props.onChange}></input>
        </div>
    )
}
function Page3(props){
    return(
        <div>
            Page 3
            <br/>
            <input placeholder="Title" value={props.data.title} name="title" onChange={props.onChange}></input>
            <button onClick={props.handleSubmit} type="button">Create</button>
        </div>
    )
}