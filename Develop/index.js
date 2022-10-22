//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('utils/generateMarkdown.js');


// methods  inquirer.prompt(questions, answers)-> promise
//questions (Array)  answers (object) 
function userPrompt(){
    return inquirer
    .prompt([
        //pass questions in here//
        {
            //questions type
         type:'input',
         name: 'Title',
         message:'What is the project title?',
        },
        {
        type:'input',
        name: 'Description',
        message:'Provide a description of the project',
        },
        {
        type:'input',
         name: 'Usage',
        message:'Provide a use for the project',
        },
        {
        type:'input',
        name: 'Installation',
        message:'Provide installation details what is needed',
        },
        {
        type:'input',
        name: 'Contributions',
        message:'Provide details on collaboration, licenses, or resources used for project, github profiles, links',
        },
        {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
        },
        {
            //license or list?
         type: 'input',
         name:'Tests',
         message:" what is the test provided or created?",
        },
        {
        type:'input',
        name:'Questions',
        message:'email address & git hub instructions how to reach me',
            //adding links?
        }
       
    ]);
}

// function to write README file using util.promisify 
async function init() {
    try {
     
        const response = await userPrompt();
        const generateFile = generateReadme(response);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateFile);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
}


// Function call to initialize app
init();
