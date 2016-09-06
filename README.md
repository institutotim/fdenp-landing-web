# Fora da Escola Não Pode Landing Page #

## Documentation ##

- [Running the Project](#running-the-project)
  - [Install Node](#install-node)
  - [Install Gulp Cli](#install-gulp-cli)
  - [Install Bower](#install-bower)
  - [Install Ruby](#install-ruby)
  - [Install Dependencies](#install-dependencies)

## Running the Project ##

To run the application, some initial setup is required:

### Install Node ###

Since this is a [Node.js](http://nodejs.org/) project, please make sure
Node is installed on the machine. A recommended install method is to use
[nvm](https://github.com/creationix/nvm) which installs Node into your
home directory using the correct version.

### Install Gulp Cli ###

This project uses [Gulp](http://gulpjs.com/), run the following
command to install the building tool globally:

`$ npm -g install gulp-cli`

### Install Bower ###

This project uses [Bower](http://bower.io/), run the following
command to install the client side dependencies manager globally:

`$ npm -g install bower`

This will install the client side dependencies (via [bower](http://bower.io/)).

### Install Dependencies ###

Once Node is installed, from this project's root directory run the following
command to install the project dependencies:

`$ npm install`

This will install the server side dependencies (via [npm](https://www.npmjs.org/)).

`$ npm install -g bower gulp-cli`
`$ npm install`
`$ bower install`

The application will be available on *build/development* directory.

### Configure application ###

Copy the `.env.template` file to `.env` and change the settings to match your environment.