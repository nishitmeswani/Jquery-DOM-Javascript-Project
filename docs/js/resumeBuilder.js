var formattedName = HTMLheaderName.replace("%data%" , "Nishit Meswani");
var formattedRole = HTMLheaderRole.replace("%data%" , "Front End Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);

var formattedNo = HTMLmobile.replace("%data%" , "+919022709967");
$("#header").append(formattedNo);
var formattedMail = HTMLemail.replace("%data%" , "meswani16@gmail.com");
$("#header").append(formattedMail);
var formattedLocation = HTMLlocation.replace("%data%" , "India,Mumbai");
$("#header").append(formattedLocation);



var skills = ["HTML", "CSS", "Javascript"];
var img = new Image();
img.src = "images/me.jpg";
var bio={
    "Name":"Nishit",
    "Role" : "Front End Wen Developer",
    "Contact" : "meswani16@gmail.com",
    "Picture" : img ,
    "welcome" : "hey",
    "skills" : skills
}
var formattedImg=HTMLbioPic.replace("%data%","images/me.jpg");
$("#header").append(formattedImg);

if(bio.skills!=null)
{
$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkills);
}

var work={
    "jobs": [{
        "employer": "Siemens",
        "tittle": "Intern",
        "dates":"June 2016",
        "description":"Where I worked in a team with a group of employees, Learning and Developing Industrial skills.Handled multiple Individual project on Programmable Logic Control. Adapted to LAD programing on SIEMENS Licensed Step 7 software.",
        "locations":"India"
    }, {
        "employer": "National NGO",
        "tittle": "Active Member for Summer of 2015",
        "dates":"June July 2015",
        "description":"As an active member of the NGO, Developed communication skills working in a team raising funds from donations and working for the cause of patients affected with health problems",
        "locations":"India"

    }]
}


function displayWork(){
    for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].tittle);
    var formattedEmployerTittle=formattedEmp+formattedTittle;
    $(".work-entry:last").append(formattedEmployerTittle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

}
}
displayWork();

function inName(name){
    name=name.trim().split(" ");
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);



var projects={
    "projects":[{
        "tittle":"Design mockup to HTMl",
        "dates":"November 2016",
        "description":"Practicing HTML syntax by translating a mockup of a blog article design provided by UI designer into a real website.",
        "images":"images/mockup.png"
    },
    {
       "tittle":"Implementing CSS",
        "dates":"November 2016",
        "description":"Using what I,ve learned about CSS to convert a design prototype into a functional webpage!",
        "images":"images/Panda.png"
    },
    {
        "tittle":"Project Portfolio Showcase",
        "dates":"December 2016",
        "description":"Developing a responsive website that will display images, descriptions and links to each of the portfolio projects i have completed throughout the course of Front End Webdevlopment",
        "images":"images/portfolio.png"
    }
    ]
}

projects.display=function() {
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTittle=HTMLprojectTitle.replace("%data%", projects.projects[project].tittle);
        $(".project-entry:last").append(formattedTittle);

        var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);

    }

}
projects.display();
$("#mapDiv").append(googleMap);








