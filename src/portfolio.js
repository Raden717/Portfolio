/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raden Almaden",
  title: "Hello! I'm Raden",
  subTitle: emoji(
    "A passionate Software Developer 💻 having an experience of building Web and Mobile applications with Java / Node.js, and other projects inluding but not limited to Python,JavaScript,C++ and various frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Cid0OJyymXStmEP-T_XAVgTPWBenB3hv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Raden717",
  linkedin: "https://www.linkedin.com/in/raden-mathieu-almaden/",
  gmail: "raden.almaden@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Some of my Skills",
  subTitle: "Upcoming Software Developer who wants to make their mark",
  skills: [
    emoji(
      "⚡ Utilizing various testing methods to ensure software quality assurance"
    ),
    emoji("⚡ Implemented threading and multi-threading techniques to develop concurrent systems within projects"),
    emoji(
      "⚡ Employed integrated systems utilizing Google Maps API, Places API, Firebase API, and other libraries/frameworks "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carleton University",
      logo: require("./assets/images/Carleton_University_shield.png"),
      subHeader: "Honours Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2023",
      desc: "Took courses about Software Engineering, Software Quality Assurance, Operating Systems, ...",
      descBullets: ["Software Engineering Focused Stream, Dean's List 2019-2022"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Testing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-end",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Science Teaching Assistant",
      company: "Carleton University",
      companylogo: require("./assets/images/Carleton.png"),
      date: "September 2021 – April 2023",
      desc: "Assisted the faculty with classroom instructions,records, and assessments",
      descBullets: [
        "Utilized knowledge in Python, C, C++, and Linux to provide feedback and guidance for students",
        
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),


  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you want to say hello, feel free contact me.",
  number: "+1-514-578-5227",
  email_address: "raden.almaden@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
