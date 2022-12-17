#!/usr/bin/env node

import inquirer from 'inquirer';
import * as fs from 'fs';
import createDirectoryContents from './createDirContents.js';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const CURR_DIR = process.cwd();

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
  },
//Need to fix
//   {
//     name: 'js-or-ts',
//     type: 'list',
//     message: 'What language want to use?',
//     choices: ["Javascript", "Typescript"],
//   },
];

inquirer.prompt(QUESTIONS).then(answers => {
  const projectChoice = answers['project-choice'];
  const projectName = answers['project-name'];
 //const projectLang = answers['js-or-ts'];
  let templatePath = `${__dirname}/templates/${projectChoice}`;
//   if(projectLang === "Typescript") {
//     templatePath = `${__dirname}/templates/ts/${projectChoice}`;
//   }

//   if(projectLang === "Typescript") {
//     console.log('Typescript is not supported. Creating project template in Javascript.')
//   }

  fs.mkdirSync(`${CURR_DIR}/${projectName}`);

  createDirectoryContents(templatePath, projectName);
});