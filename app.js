let addWork = 0;

let addEdu = 0;

const library = 
{
    element:function(el,vl,bg,clr)
    {
       let ele = document.createElement(el)
       ele.innerHTML = vl;
       ele.className = 'col-sm-1'
       ele.style.color = clr;
       ele.style.backgroundColor = bg;
       return ele;
    },
    row:function()
    {
        let row = document.createElement('div')
    row.className = 'row mt-2';
    return row;
    }
    ,
    container:function()
    {
        let container = document.createElement('div')
        container.className = 'container mt-4';
        return container;
    },
    label:function(name) {
        let label = document.createElement('label')
    label.className = 'form-label'
    label.innerHTML = name
    
    return label;
    },
    colSm6:function(colum = 'col-sm-6')
    {
        let col = document.createElement('div');
    col.className = colum
    return col;
    },
    text:function(type,textName,textId,cl = 'form-control')
    {
        let text = document.createElement('input')
        text.type = type
        text.className = cl
        text.id = textName+textId;
        text.setAttribute('oninput',`${textName}(this,${textId})`)
        return text;
    },
    button:function()
    {
        let btn = document.createElement('button');
        btn.innerHTML = '-'
        btn.className = 'btn btn-danger mt-4';
        btn.id = 'removeDetails',
        btn.setAttribute('onclick','clearNode(this)');
        return btn;
    },
    textArea:function(name,num)
    {
        let textArea = document.createElement('textarea')
        textArea.className = 'form-control';
        textArea.setAttribute('oninput',`${name}(this,${num})`)
        textArea.id = name+num
        return textArea;
    }
}

console.log(library.label())

function addMoreEducation()
{
    addEdu = addEdu+1;
    
    if(addEdu >= 3)
    {
        alert("Limit is over")
    }
    else 
    {

        
        
        let container = library.container();
        let row1 = library.row();
        let col1 = library.colSm6();
        let label1 = library.label('Course Name')
        let text1 = library.text('text','courseName',addEdu)
        let label2 = library.label('Course University')
        let text2 = library.text('text','courseUniversity',addEdu)
        col1.appendChild(label1)
        col1.appendChild(text1)
        let col2 = library.colSm6();
        col2.appendChild(label2)
        col2.appendChild(text2)
        row1.appendChild(col1)
        row1.appendChild(col2)
        container.appendChild(row1)
        
        let row2 = library.row();
        let col3 = library.colSm6();
        let label3 = library.label('Course Start')
        let text3 = library.text('date','courseStart',addEdu)
        let label4 = library.label('Course End')
        let text4 = library.text('date','courseEnd',addEdu)
        col3.appendChild(label3)
        col3.appendChild(text3)
        let col4 = library.colSm6();
    col4.appendChild(label4)
    col4.appendChild(text4)
    row2.appendChild(col3)
    row2.appendChild(col4)
    container.appendChild(row2)
    
    container.appendChild(library.button())
    document.querySelector('.education-details').appendChild(container);
    
    
    appendMoreEducationValues([text1,text2,text3,text4])
}
}


function appendMoreEducationValues(text)
{
    
    
    let educationCarry = document.createElement('div')
}




function courseName(ele,num)
{
       fillCourse(ele,num)
}

function courseStart(ele,num)
{
    getStartDate(ele,num)
}

function courseUniversity(ele,num)
{
    getUniversity(ele,num)

}

function courseEnd(ele,num)
{
    getEndDate(ele,num)
}




function clearNode(ele)
{
    ele.parentElement.remove();
}


function addMoreExperience()
{
    addWork = addWork+1;

    if(addWork >= 3)
    {
        alert("Limit is over")
    }
    else 
    {

        
        let container = library.container();
    let row1 = library.row();
    let row2 = library.row();
    let row3 = library.row();
    let col1 = library.colSm6();
    let col2 = library.colSm6();
    let col3 = library.colSm6();
    let col4 = library.colSm6();
    let col5 = library.colSm6('col-sm-12');
    let label1 = library.label("Organisation")
    let label2 = library.label("Designation")
    let label3 = library.label("Start Date")
    let label4 = library.label("End Date")
    let label5 = library.label("Present")
    let label6 = library.label("About")
    let text1 = library.text('text','Organisation',addWork)
    let text2 = library.text('text','designation',addWork)
    let text3 = library.text('date','startdate',addWork)
    let text4 = library.text('date','endDate',addWork)
    let text5 = library.text('checkbox','present',addWork,'form-check')
    let textarea = library.textArea('about',addWork);
    
    col1.appendChild(label1)
    col1.appendChild(text1)
    col2.appendChild(label2)
    col2.appendChild(text2)
    
    col3.appendChild(label3)
    col3.appendChild(text3)
    col4.appendChild(label4)
    col4.appendChild(text4)
    col4.appendChild(label5)
    col4.appendChild(text5)
    
    col5.appendChild(label6)
    col5.appendChild(textarea)
    
    
    row1.appendChild(col1)
    row1.appendChild(col2)
    row2.appendChild(col3)
    row2.appendChild(col4)
    row3.appendChild(col5)
    
    container.appendChild(row1)
    container.appendChild(row2)
    container.appendChild(row3)
    
    
    container.appendChild(library.button())
    
    document.querySelector('.experience-details').appendChild(container);
    
}
}

const skillsContainer = document.querySelector('#skills-container');
let addSkill = 0;
function addSkills(ele)
{
    
    if(skillsContainer.value == "")
    {
         alert("Please add skills")
    }
    else 
    {
        let p = document.createElement('p')
        p.className = 'bg-primary p-1'
        p.innerHTML = skillsContainer.value;
        document.querySelector('.skill').appendChild(p)

        skillsContainer.value = ""
    }
}



function Organisation(ele,id)
{
    fillWorkExperienceOrganisation(ele,id)
}

function designation(ele,id)
{
    fillWorkExperienceDesgination(ele,id)
}

function startdate(ele,id)
{
    fillWorkExperienceStartDate(ele,id)
}

function endDate(ele,id)
{
    fillWorkExperienceEndDate(ele,id)
}



function about(ele,id)
{
    fillWorkExperienceAbout(ele,id)
}


function present(ele,id)
{
      checkPresent(ele,id)
}










































const reFirstName = document.querySelector('#person-name #first-name')
const reLastName = document.querySelector('#person-name #last-name')
const rePhoneNumber = document.querySelector('#phone-number')
const reEmail = document.querySelector('#email-id')
const reProfile = document.querySelector('#profile-photo');
const reAddress = document.querySelector('#address');
const reCuRole = document.querySelector('#person-designation');
const reEducationCourse = document.querySelector('#education-study-name');
const reEducationUniversity = document.querySelector('#education-university');
const reEducationYear = document.querySelector('#education-year');
const reAboutPerson = document.querySelector('#about-person');

const reWorkExperienceOrganisation = document.querySelector('#work-experience-organization');
const reWorkExperienceDesignation = document.querySelector('#work-experience-designation');
const reWorkExperienceAbout = document.querySelector('#work-experience-about');
const reWorkExperienceYear = document.querySelector('#work-experience-year');

const reSkillName = document.querySelector('#skill-name');
const reSkillRange = document.querySelector('.skill-inner-range');

const reWebsiteLink = document.querySelector('#website-link');

const reLinkedIn = document.querySelector('#linkedin-link')

const createResume = document.querySelector('#createResume')

let startDate;


function firstName(ele)
{
    reFirstName.style.display = "inline"
    reFirstName.innerHTML = ele.value;

}

function lastName(ele)
{
    reLastName.style.display = "inline"
    reLastName.innerHTML = ele.value;
}

function phoneNumber(ele)
{
    rePhoneNumber.style.display = "block"
    rePhoneNumber.innerHTML = ele.value;
}

function fillMail(ele)
{
    reEmail.style.display = "block"
    reEmail.innerHTML = ele.value;
}

function fillFile(ele)
{
    reProfile.style.display = "block"
    let format = ele.value.split('\\')[2]
    reProfile.src = `./images/${format}`

}

function fillAddress(ele)
{
    reAddress.style.display = "block"
    reAddress.innerHTML = ele.value;
}


function fillCurrentRole(ele)
{
    reCuRole.style.display = "block"
    reCuRole.innerHTML = ele.value;
}

function fillCourse(ele,num)
{
    document.querySelector('#education-study-name'+num).style.display = "block"
    document.querySelector('#education-study-name'+num).innerHTML = ele.value;
}

function getStartDate(ele,num)
{
     startDate = ele.value.toString().split('-')[0]
}

function getEndDate(ele,num)
{
    let sample = ele.value.toString().split('-')[0]
    document.querySelector('#education-year'+num).style.display = "block";
    document.querySelector('#education-year'+num).innerHTML = startDate+"-"+sample;
}

function getUniversity(ele,num)
{
    document.querySelector('#education-university'+num).style.display = "block";
    document.querySelector('#education-university'+num).innerHTML = ele.value;
}



function fillAbout(ele)
{
    reAboutPerson.style.display = "block";
    reAboutPerson.innerHTML = ele.value;
}

function fillWorkExperienceOrganisation(ele,num)
{
    document.querySelector('#work-experience-organization'+num).style.display = "block";
    document.querySelector('#work-experience-organization'+num).innerHTML = ele.value;
}

function fillWorkExperienceDesgination(ele,num)
{
    document.querySelector('#work-experience-designation'+num).style.display = "block";
    document.querySelector('#work-experience-designation'+num).innerHTML = ele.value;
}

function fillWorkExperienceAbout(ele,num)
{
    document.querySelector('#work-experience-about'+num).style.display = "block";
    document.querySelector('#work-experience-about'+num).innerHTML = ele.value;
}

let workExperienceSample;
function fillWorkExperienceStartDate(ele,num)
{
    
    workExperienceSample = ele.value.split('-')[0]
}

function fillWorkExperienceEndDate(ele,num)
{
    let sample = ele.value.split('-')[0]
    document.querySelector('#work-experience-year'+num).style.display = "block";
    document.querySelector('#work-experience-year'+num).innerHTML = workExperienceSample+"-"+sample;
}


function checkPresent(ele,num)
{
    if(ele.checked)
    {
        document.querySelector('#work-experience-year'+num).style.display = "block";
        document.querySelector('#work-experience-year'+num).innerHTML = workExperienceSample+"-"+"Present";
    }
}


// function fillSkills(ele)
// {
//          reSkillName.style.display = "block"    
//          reSkillName.innerHTML = ele;
// }


function fillWebsite(ele)
{
          reWebsiteLink.style.display = 'block'
          reWebsiteLink.innerHTML = ele.value;
}


function fillLinkedIn(ele)
{
            reLinkedIn.style.display = 'block'
          reLinkedIn.innerHTML = ele.value;
}




function darkMode(ele)
{
    (ele.className == 'fa fa-moon-o')?ele.className = 'fa fa-sun-o':ele.className = 'fa fa-moon-o'

    document.body.classList.toggle('darkMode')
}


function generateResume(ele)
{
    document.querySelector('.header').style.display = 'none'
    document.querySelector('.personal-details').style.display = 'none'
    document.querySelector('.education-details').style.display = 'none'
    document.querySelector('.experience-details').style.display = 'none'
    document.querySelector('.social-links').style.display = 'none'
    document.querySelector('.skill-details').style.display = 'none'
    
setTimeout(() => 
{
       ele.style.display = 'none'
       window.print()
},1000)

}


