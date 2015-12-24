var bio = {
  "name" : "James Pecoraro",
  "role" : "Web Developer",
  "contacts": {
    "mobile": "973-568-4361",
    "email": "JP0930@gmail.com",
    "github": "JP0930",
    "twitter": "@NJWeb-devol",
    "location": "New Jersey"
  },
  "welcomeMessage": "Action is the foundational key to all success.",
  "Skills": [
    "HTML", "CSS", "Javascript",
    ],
    "bioPic": "images/mypicture.jpg"
}

bio.displaybio = function () {

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name );
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bioPicture = HTMLbioPic.replace("%data%",bio.bioPic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var Skills = HTMLskillsStart.replace("%data%", bio);
var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var  mobile = HTMLmobile.replace("%data%", bio.contacts.mobile) ;
var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var gitContact = HTMLgithub.replace("%data%",bio.contacts.github);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(welcomeMessage);

$("#header").append(bioPicture);

$("#topContacts").append(mobile);
$("#topContacts").append(contactEmail);
$("#topContacts").append(twitter);
$("#topContacts").append(gitContact);

$("#footerContacts").append(mobile);
$("#footerContacts").append(contactEmail);
$("#footerContacts").append(twitter);
$("#footerContacts").append(gitContact);

if (bio.Skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}

var skills = HTMLskills.replace("%data%",bio.Skills[0]);
$("#header").append(skills);
skills=HTMLskills.replace("%data%",bio.Skills[1]);
$("#header").append(skills);
skills=HTMLskills.replace("%data%",bio.Skills[2]);
$("#header").append(skills);
    };

bio.displaybio();


var work = {
  "jobs": [
  {
    "title": "Customer Service Representative",
    "employer" : "AT&T Wireless",
    "dates" : "Feb 2002 - December 2005",
    "description" : "Handle customer calls and resolve issues in a timely manner",
    "location" : "Paramus, NJ"
  },
  {
    "title": "Credit Analyst",
    "employer" : "Chrysler Financial",
    "dates" : "December 2005 - July 2009",
    "description" : "Analyze applicatons and make financial decisions",
    "location" : "Pearl River, NY"
  },
  {
    "title": "Credit Analyst",
    "employer" : "Wells Fargo Dealer Services",
    "dates" : "July 2009 - May 2011",
    "description" : "Analyze applicatons and make financial decisions",
    "location" : "Basking Ridge, NJ"
  },
  {
    "title": "Sr. Credit Analyst",
    "employer" : "GM Financial",
    "dates" : "May 2011 - Present",
    "description" : "Analyze applicatons and make financial decisions",
    "location" : "Paramus, NJ"
  },
  ],

  display: function(){
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedworkDates);
      $(".work-entry:last").append(formattedworkLocation);
      $(".work-entry:last").append(formattedworkDescription);
    }
  }
};

work.display();

var education = {
  "schools":[
  {
    "name": "Iona College",
    "location": "New Rochelle, NY",
    "degree": "Masters of Business Administration",
    "majors": ["Finance"],
    "dates" : 2007,
  },
  {
    "name": "Montclair State University",
    "location": "Montclair, NJ",
    "degree": "BA",
    "majors": ["Psychology"],
    "dates" : 2002,
  }
  ],
  "onlineCourses": [
  {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": 2015,
    "url": "www.udacity.com"
  },
  ],

  display: function(){
    for (school in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
      var formattedDegreeAndMajor = formattedschoolDegree + formattedschoolMajor;


      $(".education-entry:last").append(formattedDegreeAndMajor);
      $(".education-entry:last").append(formattedschoolDates);
      $(".education-entry:last").prepend(formattedschoolName);
      $(".education-entry:last").append(formattedschoolLocation);
    }
    $("#education").append(HTMLonlineClasses);

    for (onlineCourse in education.onlineCourses){
      $("#education").append(HTMLschoolStart);
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
      var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
      var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
      var formattedOnlineSchoolAndTitle = formattedonlineTitle + formattedonlineSchool;

      $(".education-entry:last").prepend(formattedOnlineSchoolAndTitle);
      $(".education-entry:last").append(formattedonlineDates);
      $(".education-entry:last").append(formattedHTMLonlineURL);
    }
  }
};
education.display();

var projects = {
  "projects":[
  { "title" : "Online Portfolio",
    "dates" : 2015,
    "description" : "Build a porfolio based on a PDF mockup",
    "images": "images/Project1.jpg"
  },
  { "title" : "About me",
    "dates" : 2015,
    "description" : "Brief introduction in HTML",
    "images": "images/Project2.jpg"

  }
   ],
   display: function(){
    for (project in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);

      $(".project-entry:last").append(formattedprojectTitle);
      $(".project-entry:last").append(formattedprojectDates);
      $(".project-entry:last").append(formattedprojectDescription);
      $(".project-entry:last").append(formattedprojectImage);
    }
  }
};

projects.display();

$("#mapDiv").append(googleMap); 