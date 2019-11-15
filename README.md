# REACT EXPRESS GRAPHQL TEMPLATE

This template is meant to provide the user with the barebones boilerplate for a React/Express project built with a GraphQL API and a PostgreSQL database.

The use of the this template repo means that you agree to abide by the current licensing rules.

##### NOTE: This template is still under development.

## Template use-cases

This template is intended to be used as a very quick project setup. For that reason, it only supports a single software stack. This stack includes:

### Front-end

- react
- react-router-dom
- apollo

### Back-end

- node / express
- REST
- graphql
- massive (postgresql)
- db-migrate

### Developer Experience

- nodemon
- winston
- chalk
- dotenv
- eslint
- prettier
- husky
- jest
- babel

Each of these packages can be found on npmjs.org for more information.

## Setup Instructions

This template is intended to be an out-of-the-box way to set up a new project in a matter of minutes. Once a repo has been created off of this template, the user can clone the new repo to their preferred machine, run `npm install`, change the needed variables, and then run `npm start` and `npm run start:server` to get the project running!

### Create new repo

Do not use this template directly. You must create a new repo on your own github account using this template (you can follow the guide [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template));

Once you have created a new repo off of this template, clone and download it to your computer.

### Initial Setup

There are various dependancies and scripts that are included in this template.
The only scripts you likely need to concern yourself with are:

- test -> test the front- and back-end
- start -> start the front-end
- start:server -> start the back-end
- start:prod -> start the back-end on production
- build -> build the front-end
- build:prod -> build the front-end on production
- migrate:* -> database migration. this includes create, up and down

All the other scripts are ran automatically throughout the development workflow.

Make sure to run `npm install` to fetch all the needed dependancies

#### Replacing Variables

Throughout the application there are multiple variables that need to be changed to make the project run. You can do a global search for `REPLACE_WITH` to find all the values that need to be changed.

You'll need to duplicate the `.env.example` into `.env`, and fill it with the needed data.

Once those values are set up for your own project, you should be able to start up your project.

