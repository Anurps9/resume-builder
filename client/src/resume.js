let resumeScript = (data) => {
    return {html: example, css: css}
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
    line-height: 1.2em;
    height: 1.2em;
    font-size: 3.3em;
    font-weight: 400;
    margin: 0;
  }
  
  #title{
    line-height: 2em;
    height: 2em;
    font-size: 1.7em;
    margin-bottom: 0.3em;
    font-weight: 400;
  }
  
  #contact{
    line-height: 1.5em;
    height: 1.5em;
    font-size: 1.3em;
    margin: 0;
  }
  
  #email{
    line-height: 1.5em;
    height: 1.5em;
    font-size: 1.3em;
    margin: 0;
  }
  
  .f2{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-top: 1.5em;
    margin-bottom: 0.3em;
    font-size: 1.2em;
    font-weight: 500;
  }
  
  .f3{
    font-size: 1.2em;
  }
  
  p{
    margin: 0;
  }
  `
const example = `<div id="resume-window">
<p class="f1" id="name">ANURAG SISODIYA</p>
<p class="f1" id="title">FULL STACK WEB DEVELOPER</p>
<p class="f1" id="contact">Phone: +91-6397211086</p>
<p class="f1" id="email">Email: anurps9@gmail.com</p>
<hr/>
<div>
    <p class="f2">OBJECTIVE</p>
    <p class="f1 f3" id="objective">Loem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida nulla eu dolor pulvinar, id pellentesque felis imperdiet. Ut ut tristique purus, a pellentesque nibh.</p>
</div>
<div>
    <p class="f2">EXPERIENCES & COURSES</p>
    <p class="f3 f1"><b>Internship at SRI-B <i>(May 2018 - July 2021)</i></b></p>
    <p class="f3 f1">SDE-Internship at SRI-B. Project related to development of trusted applications for Android devices.</p>
    <p class="g"></p>
    <p class="f3 f1"><b>Internship at Flexiple (Dec 2021 - January 2022)</b></p>
    <p class="f3 f1">SDE-Internship related to software development in Ruby on Rails.</p>
</div>
<div>
    <p class="f2">PROJECTS</p>      
    <p class="f1 f3"><b>Rightdown.io: </b>An email-scheduler web application.</p>
    <p class="f1 f3"><b>ClockPost: </b>An online collaborative whiteboard. </p>      
</div>
<div>
    <p class="f2">EDUCATION</p>   
    <ul>
        <li class="f1 f3"><b>High School,</b> CBSE (2015)</li>
        <li class="f1 f3"><b>Intermediate,</b> CBSE (2017)</li>
        <li class="f1 f3"><b>National Institute of Technology, Uttarakhand (2018 - 2022)</b><br/>
        B.Tech in Computer Science and Engineering</li>
    </ul>
</div>
<div>
    <p class="f2">SKILLS</p>   
    <ul>
        <li class="f1 f3">Data Structures and Algorithms</li>
        <li class="f1 f3">C++</li>
        <li class="f1 f3">MERN</li>
        <li class="f1 f3">Java</li>
    </ul>
</div>
<div>
    <p class="f2">ACHIEVEMENTS</p>
    <ul>
        <li class="f1 f3">5-star Codechef, Expert at Codeforces</li>
        <li class="f1 f3">ICPC Regionals qualified</li>
    </ul>
</div>
<div>
    <p class="f2">SOCIALS</p>
    <p class="f1 f3"><b>Github: </b>github.in/Anurps9</p>
    <p class="f1 f3"><b>Linked In: </b>linkedin.in/AnuragSisodiya9</p>
</div>
</div>`;

module.exports = resumeScript