# Daly Winter & Associates LLP website

[![Travis (.org)](https://img.shields.io/travis/codemastermick/dalywinter-v2.svg)](https://travis-ci.org/codemastermick/dalywinter-v2)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/416ae7ab519647198f2ad3cdb2a76e86)](https://www.codacy.com/app/codemastermick/dalywinter-v2?utm_source=github.com&utm_medium=referral&utm_content=codemastermick/dalywinter-v2&utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/codemastermick/dalywinter-v2/branch/master/graph/badge.svg)](https://codecov.io/gh/codemastermick/dalywinter-v2)
[![David](https://img.shields.io/david/codemastermick/dalywinter-v2.svg)](https://david-dm.org/codemastermick/dalywinter-v2)
[![GitHub issues](https://img.shields.io/github/issues/codemastermick/dalywinter-v2.svg)](https://github.com/codemastermick/dalywinter-v2/issues)
[![Website](https://img.shields.io/website/http/dalywinter.com.svg?down_color=red&down_message=offline&up_color=green&up_message=online)](http://dalywinter.com) [![Greenkeeper badge](https://badges.greenkeeper.io/codemastermick/dalywinter-v2.svg)](https://greenkeeper.io/)

Code repository for the Daly Winter & Associates LLP public website located at [Daly Winter & Associates LLP](https://dalywinter.com)

This repo is integrated with Travis, where it is automatically tested for quality and coverage before being deployed to the staging site located on Firebase.

## Getting Started

1.  Clone this repository locally
2.  Move into the project directory with `cd dalywinter-v2` 
3.  Run `git checkout -b feat:<FEATURENAME>` to create a local feature branch **NOTE: The prefix feat: is required for Travis to pick up your work**
4.  Use `npm start` to start up the development server
5.  Start working on the code
6.  When happy with changes, push to GitHub
7.  When finished your feature, submit a PR to merge the branch into master

## Build Pipeline

1.  Commit code to GitHub
2.  Travis ensures all files pass linting
3.  Travis builds the application
4.  Travis runs all included tests with coverage reports
5.  Travis uploads the coverage reports to CodeCov
6.  Travis deploys the application to Firebase

## Additional Notes

* Greenkeeper automatically keeps dependencies up to date, no need to worry about doing that locally
