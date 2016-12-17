
var img = new Image();

var bio = {
    "name": "Nishit Meswani",
    "role": "Front End Wen Developer",
    "contacts": {
        "mobile": "9022709967",
        "email": "meswani16@gmail.com",
        "github": "nishitmeswani",
        "location": "Mumbai"
    },
    "biopic": "images/me.jpg",
    /*biopic have image instead of a string*/

    "welcomeMessage": "hey",
    "skills": ["HTML", "CSS", "Javascript"]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#topContacts, #footerContacts").append(formattedNo);

    var formattedGit = HTMLgithub.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedGit);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.contacts.github);
    $("#header").append(formattedWelcome);

    var formattedNo = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedNo);
    $("#footerContacts").append(formattedNo);
    var formattedMail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedMail);
    $("#footerContacts").append(formattedMail);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImg);


    if (bio.skills !== null) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i <= bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();



var work = {
    "jobs": [{
        "employer": "Siemens",
        "title": "Intern",
        "dates": "June 2016",
        "description": "Where I worked in a team with a group of employees, Learning and Developing Industrial skills.Handled multiple Individual project on Programmable Logic Control. Adapted to LAD programing on SIEMENS Licensed Step 7 software.",
        "location": "India"
    }, {
        "employer": "National NGO",
        "title": "Active Member for Summer of 2015",
        "dates": "June July 2015",
        "description": "As an active member of the NGO, Developed communication skills working in a team raising funds from donations and working for the cause of patients affected with health problems",
        "location": "India"

    }]
};


work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTittle = formattedEmp + formattedTittle;
        $(".work-entry:last").append(formattedEmployerTittle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

    }
};
work.display();
var education = {
    "schools": [{
        "name": "NMIMS",
        "location": "India Mumbai",
        "degree": "Engineering",
        "majors": ["Computer Science"],
        "dates": "2014-2018",
        "url": "nmims.edu"
    }, {
        "name": "NMIMS",
        "location": "India Mumbai",
        "degree": "Engineering",
        "majors": ["Computer Science"],
        "dates": "2014-2018",
        "url": "nmims.edu"

    }],
    "onlineCourses": [{
        "title": "Front End Webdevlopment",
        "school": "udacity",
        "dates": "December 2016",
        "url": "udacity.com"
    }, {
        "title": "Front End Webdevlopment",
        "school": "udacity",
        "dates": "December 2016",
        "url": "udacity.com"

    }]

};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $("#education").append(formattedSchoolName);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $("#education").append(formattedSchoolLocation);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $("#education").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $("#education").append(formattedSchoolDates);
        var formattedSchoolUrl = HTMLonlineURL.replace("%data%", education.schools[i].url);
        $("#education").append(formattedSchoolUrl);


        for (var j = 0; j < education.schools[i].majors.length; j++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            $("#education").append(formattedSchoolMajor);
        }
    }
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLonlineClasses);
        var formattedTittle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        $("#education").append(formattedTittle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $("#education").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $("#education").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
        $("#education").append(formattedUrl);



    }
};
education.display();

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);



var projects = {
    "projects": [{
        "title": "Design mockup to HTMl",
        "dates": "November 2016",
        "description": "Practicing HTML syntax by translating a mockup of a blog article design provided by UI designer into a real website.",
        "images": ["images/mockup.png"]
    }, {
        "title": "Implementing CSS",
        "dates": "November 2016",
        "description": "Using what I,ve learned about CSS to convert a design prototype into a functional webpage!",
        "images": ["images/Panda.png"]
    }, {
        "title": "Project Portfolio Showcase",
        "dates": "December 2016",
        "description": "Developing a responsive website that will display images, descriptions and links to each of the portfolio projects i have completed throughout the course of Front End Webdevlopment",
        "images": ["images/portfolio.png"]
    }]
};

projects.display = function() {
    for (k = 0; k < projects.projects.length; k++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTittle = HTMLprojectTitle.replace("%data%", projects.projects[k].title);
        $(".project-entry:last").append(formattedTittle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[k].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[k].description);
        $(".project-entry:last").append(formattedDescription);
        for (j = 0; j <  projects.projects[k].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[k].images[j]);
            $(".project-entry:last").append(formattedImage);
        }

    }
};



projects.display();
$("#mapDiv").append(googleMap);