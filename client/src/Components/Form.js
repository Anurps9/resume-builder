import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import resumeScript from "../resume"
import ReactHTMLParser from 'react-html-parser'
import download from 'downloadjs'
import {Experience1, Experience2} from './Experience.js'

export default function Form(){

    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        name: '',
        mobile: '',
        title: '' ,
        email: '',
        objective: '',
        experienceHeading1: '',
        experienceDetail1: '',
        experienceStartingMonth1: '',
        experienceStartingYear1: '',
        experienceEndingMonth1: '',
        experienceEndingYear1: '',
        experienceHeading2: '',
        experienceDetail2: '',
        experienceStartingMonth2: '',
        experienceStartingYear2: '',
        experienceEndingMonth2: '',
        experienceEndingYear2: '',
        projectHeading1: '',
        projectHeading2:'',
        projectDescription1:'',
        projectDescription2: '',
        highSchoolBoard: '',
        highSchoolPassingYear: '',
        intermediateBoard:'',
        intermediatePassingYear: '',
        collegeName: '',
        collegeStartingYear: '',
        collegeEndingYear: '',
        degree: '',
        branch: '',
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        achievement1: '',
        achievement2: '',
        github: '',
        linkedIn: ''
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
        const script = resumeScript(data);
        axios(
            {
                method: 'post',
                url: '/resume',
                data:{
                    html: script.html,
                    cssDev: script.cssDev,
                    cssProd: script.cssProd
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
        <Page3 data={data} onChange={handleChange}/>,
        <Page4 data={data} onChange={handleChange}/>,
        <Page5 data={data} onChange={handleChange}/>,
        <Page6 data={data} onChange={handleChange}/>
    ]

    return(
        <div>
            <div>
                <Link to='/'>Home</Link><br/>
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
    return <div id="resume-iframe">
        {ReactHTMLParser(resumeScript(props.data).html)}
    </div>
}

function Page1(props){
    return(
        <div>
            <br/>
            <b>Basic Information</b>
            <br/>
            <input autocomplete="off" placeholder="Full name" value={props.data.name} name="name" onChange={props.onChange}/><br/>
            <input autocomplete="off" placeholder="Title" value={props.data.title} name="title" onChange={props.onChange}/><br/>
            <input autocomplete="off" placeholder="Contact number" value={props.data.mobile} name="mobile" onChange={props.onChange}/><br/>
            <input autocomplete="off" placeholder="Email" value={props.data.email} name="email" onChange={props.onChange}/><br/>
            <textarea autocomplete="off" rows={3} cols={80} placeholder="Tell something about yourself" value={props.data.objective} name="objective" onChange={props.onChange}/>
        </div>
    )
}
function Page2(props){
    return(
        <div>
            <br/>
            <b>Share your previous experiences, internships or any courses.</b>
            <Experience1 data={props.data} onChange={props.onChange} index="1"/>
            <Experience2 data={props.data} onChange={props.onChange} index="2"/>
        </div>
    )
}
function Page3(props){
    return(
        <div>
            <br/>
            <b>Projects</b>
            <br/>
            Project 1:<br/>
            <div>
                <input value={props.data.projectHeading1} placeholder="Project Name" name="projectHeading1" onChange={props.onChange}/>
                <br/>
                <input value={props.data.projectDescription1} placeholder="Project Description" name="projectDescription1" onChange={props.onChange}/>
            </div>
            Project 2:<br/>
            <div>
                <input value={props.data.projectHeading2} placeholder="Project Name" name="projectHeading2" onChange={props.onChange}/>
                <br/>
                <input value={props.data.projectDescription2} placeholder="Project Description" name="projectDescription2" onChange={props.onChange}/>
            </div>
        </div>
    )
}
function Page4(props){
    return(
        <div>
            <br/>
            <b>Education</b><br/>
            <input value={props.data.highSchoolBoard} placeholder="10th Board" name="highSchoolBoard" onChange={props.onChange}/>
            <input value={props.data.highSchoolPassingYear} placeholder="10th Passing Year" name="highSchoolPassingYear" onChange={props.onChange}/><br/>
            <input value={props.data.intermediateBoard} placeholder="12th Board" name="intermediateBoard" onChange={props.onChange}/>
            <input value={props.data.intermediatePassingYear} placeholder="12th Passing Year" name="intermediatePassingYear" onChange={props.onChange}/><br/>
            <input value={props.data.collegeName} placeholder="College Name" name="collegeName" onChange={props.onChange}/><br/>
            <input value={props.data.collegeStartingYear} placeholder="Graduation Start" name="collegeStartingYear" onChange={props.onChange}/>
            <input value={props.data.collegeEndingYear} placeholder="Graduation End" name="collegeEndingYear" onChange={props.onChange}/><br/>
            <input value={props.data.degree} placeholder="Degree" name="degree" onChange={props.onChange}/>
            <input value={props.data.branch} placeholder="Branch" name="branch" onChange={props.onChange}/>
        </div>
    )
}

function Page5(props){
    return(
        <div>
            <br/>
            <b>Skills</b><br/>
            <input value={props.data.skill1} placeholder="Skill 1" onChange={props.onChange} name="skill1"/><br/>
            <input value={props.data.skill2} placeholder="Skill 2" onChange={props.onChange} name="skill2"/><br/>
            <input value={props.data.skill3} placeholder="Skill 3" onChange={props.onChange} name="skill3"/><br/>
            <input value={props.data.skill4} placeholder="Skill 4" onChange={props.onChange} name="skill4"/><br/>
            <b>Achievements</b><br/>
            <input value={props.data.achievement1} placeholder="Achievement 1" onChange={props.onChange} name="achievement1"/><br/>
            <input value={props.data.achievement2} placeholder="Achievement 2" onChange={props.onChange} name="achievement2"/><br/>
        </div>
    )
}

function Page6(props){
    return(
        <div>
            <br/>
            <b>Socials</b><br/>
            <input value={props.data.github} placeholder="Github Profile" onChange={props.onChange} name="github"/><br/>
            <input value={props.data.linkedIn} placeholder="LinkedIn Profile" onChange={props.onChange} name="linkedIn"/><br/>
        </div>
    )
}

