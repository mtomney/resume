
var bio = {
	"name": "Matthew J. Tomney",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "443-812-4098",
		"email": "thecodingchemist@gmail.com",
		"github": "mtomney",
		"twitter": "@kodingchemist",
		"location": "Catonsville, MD"
	},
	"welcomeMessage": "Welcome to my resume! I am an organic chemistry professor turned front end coder with a background in statistics and cognitive processing.",
	"skills": [ 
		"Front End Web Development", 
		"Organic Chemistry and Chemistry Education", 
		"Online Teaching",
		"Statistical Analysis",
	],
	"biopic": "images/matt.jpg",
	"display": ""
}
bio.display = function() {
	$("#header1").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header1").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#header1").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header1").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	if (bio.skills.length > 0) {
		$("#header1").append(HTMLskillsStart);
		for ( skill in bio.skills ) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
}
var education = {
	"schools": [
		{
			"name": "The Catholic University of America",
			"location": "Washingotn DC",
			"degree": "Doctorate (Ph.D.)",
			"majors": ["Chemistry Education"],
			"dates": 2016,
			"url": "www.cua.edu"
		},
		{
			"name": "University of Maryland, Baltimore County (UMBC)",
			"location": "Baltimore, MD",
			"degree": "Master of Science (M.S.)",
			"majors": ["Organic Chemistry and Drug Design"],
			"dates": 2010,
			"url": "www.umbc.edu"
		},
		{
			"name": "Stevenson University (formerly Villa Julie College)",
			"location": "Stevenson, MD",
			"degree": "Bachelor of Science (B.S.)",
			"majors": ["Chemistry"],
			"dates": 2007,
			"url": "www.stevenson.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Nanodegree",
			"school": "Udacity",
			"dates": "Winter 2016",
			"url": "udacity.com"
		},
	],
	"display": ""
}
education.display = function() {
	for ( var school in education.schools ) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		if ( education.schools[school].majors.length > 0) {
			for ( var major in education.schools[school].majors ) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
		}
	}
	if ( education.onlineCourses.length > 0 ) {
		$("#education").append(HTMLonlineClasses);
		for ( var online in education.onlineCourses ) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[online].url));
		}
	}
}
var work = {
	"jobs": [
		{
			"employer": "Anne Arundel Community College",
			"title": "Assistant Professor",
			"location": "Arnold, MD",
			"dates": "2014-Current",
			"description": "College professor, classes taught include General Chemistry, Organic Chemistry, and Chemistry for Non-Majors  along with corresponding labs."
		},
		{
			"employer": "Towson University, Loyola University, Howard Community College",
		 	"title": "Adjunct Professor",
		 	"location": "Baltimore, MD",
		 	"dates": "2014-2015",
		 	"description": "College professor, classes taught include General Chemistry, Organic Chemistry, and Chemistry for Non-Majors  along with corresponding labs."
		},
		{
			"employer": "Stevenson University",
			"title": "Chemistry Lab Manager",
			"location": "Stevenson, MD",
			"dates": "2012-2014",
			"description": "Prepared and managed all chemistry related labs on campus. Other duties included chemical waste segregation and chemical safety"
		}
	],
	"display": ""
}
work.display = function() {
	for ( job in work.jobs ) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
var projects = {
	"projects": [
		{
			"title": "Project 1: Project Portfolio",
			"dates": "September 2015",
			"description": "A digital canvas of all my current projects",
			"images": ["images/project1.png"]
		},
		{
			"title": "Project 2: Digital Resume",
			"dates": "October 2015",
			"description": "You are currently looking at it!",
			"images": ["images/project2.png"]
		}
	],
	"display": ""
}
projects.display = function() {
	for ( project in projects.projects ) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for ( image in projects.projects[project].images ) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);