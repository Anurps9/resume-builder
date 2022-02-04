let resumeScript = (data) => {
    return {html: getHTML(data), css: css}
}

const getHTML = (data) => (
    `
        <div id="resume-window">
            <p class="f1" id="name">${data.name.toUpperCase()}</p>
            <p class="f1" id="title">${data.title.toUpperCase()}</p>
            <p class="f1" id="contact">Phone: +91-${data.mobile}</p>
            <p class="f1" id="email">Email: ${data.email}</p>
            <hr/>
            <div>
                <p class="f2">OBJECTIVE</p>
                <p class="f1 f3" id="objective">${data.objective}</p>
            </div>
            <div>
                <p class="f2">EXPERIENCES & COURSES</p>
                <p class="f3 f1"><b>${data.experienceHeading1} <i>(${data.experienceStartingMonth1} ${data.experienceStartingYear1} - ${data.experienceEndingMonth1} ${data.experienceEndingYear1})</i></b></p>
                <p class="f3 f1">${data.experienceDetail1}</p>
                <p class="g"></p>
                <p class="f3 f1"><b>${data.experienceHeading2} <i>(${data.experienceStartingMonth2} ${data.experienceStartingYear2} - ${data.experienceEndingMonth2} ${data.experienceEndingYear2})</i></b></p>
                <p class="f3 f1">${data.experienceDetail2}</p>
            </div>
            <div>
                <p class="f2">PROJECTS</p>      
                <p class="f1 f3"><b>${data.projectHeading1}: </b>${data.projectDescription1}</p>
                <p class="f1 f3"><b>${data.projectHeading2}: </b>${data.projectDescription2}</p>      
            </div>
            <div>
                <p class="f2">EDUCATION</p>   
                <ul>
                    <li class="f1 f3"><b>High School,</b> ${data.highSchoolBoard} (${data.highSchoolPassingYear})</li>
                    <li class="f1 f3"><b>Intermediate,</b> ${data.intermediateBoard} (${data.intermediatePassingYear})</li>
                    <li class="f1 f3"><b>${data.collegeName} (${data.collegeStartingYear} - ${data.collegeEndingYear})</b><br/>
                    ${data.degree} in ${data.branch}</li>
                </ul>
            </div>
            <div>
                <p class="f2">SKILLS</p>   
                <ul>
                    <li class="f1 f3">${data.skill1}</li>
                    <li class="f1 f3">${data.skill2}</li>
                    <li class="f1 f3">${data.skill3}</li>
                    <li class="f1 f3">${data.skill4}</li>
                </ul>
            </div>
            <div>
                <p class="f2">ACHIEVEMENTS</p>
                <ul>
                    <li class="f1 f3">${data.achievement1}</li>
                    <li class="f1 f3">${data.achievement2}</li>
                </ul>
            </div>
            <div>
                <p class="f2">SOCIALS</p>
                <p class="f1 f3"><b>Github: </b>${data.github}</p>
                <p class="f1 f3"><b>Linked In: </b>${data.linkedIn}</p>
            </div>
        </div>`
)

const css = `
.f1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  
  #name{
    line-height: 4.2rem;
    height: 4.2rem;
    font-size: 3.3rem;
    font-weight: 400;
    margin: 0;
  }
  
  #title{
    line-height: 2rem;
    height: 2rem;
    font-size: 1.7rem;
    margin-bottom: 0.8rem;
    font-weight: 400;
  }
  
  #contact{
    line-height: 1.5rem;
    height: 1.5rem;
    font-size: 1.3rem;
    margin: 0;
  }
  
  #email{
    line-height: 1.5rem;
    height: 1.5rem;
    font-size: 1.3rem;
    margin: 0;
  }
  
  .f2{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
  
  .f3{
    font-size: 1.2rem;
  }
  
  p{
    margin: 0;
  }
  
  .g{
    height: 0.8rem;
  }

  ul{
    margin: 0;
  }

  `
module.exports = resumeScript