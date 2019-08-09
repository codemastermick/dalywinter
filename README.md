# Daly Winter & Associates LLP website

[![Travis (.org)](https://img.shields.io/travis/codemastermick/dalywinter-v2.svg)](https://travis-ci.org/codemastermick/dalywinter-v2)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/416ae7ab519647198f2ad3cdb2a76e86)](https://www.codacy.com/app/codemastermick/dalywinter-v2?utm_source=github.com&utm_medium=referral&utm_content=codemastermick/dalywinter-v2&utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/codemastermick/dalywinter-v2/branch/master/graph/badge.svg)](https://codecov.io/gh/codemastermick/dalywinter-v2)
[![David](https://img.shields.io/david/codemastermick/dalywinter-v2.svg)](https://david-dm.org/codemastermick/dalywinter-v2)
[![GitHub issues](https://img.shields.io/github/issues/codemastermick/dalywinter-v2.svg)](https://github.com/codemastermick/dalywinter-v2/issues)
[![Website](https://img.shields.io/website/http/dalywinter.com.svg?down_color=red&down_message=offline&up_color=green&up_message=online)](http://dalywinter.com) [![Greenkeeper badge](https://badges.greenkeeper.io/codemastermick/dalywinter-v2.svg)](https://greenkeeper.io/)

Code repository for the Daly Winter & Associates LLP public website located at [Daly Winter & Associates LLP](https://dalywinter.com)

This repo is integrated with Travis, where it is automatically tested for quality and coverage before being deployed to the staging site located on Firebase.

## Build Pipeline
1. Commit code to GitHub
2. Travis ensures all files pass linting
3. Travis builds the application
4. Travis runs all included tests with coverage reports
5. Travis uploads the coverage reports to CodeCov
6. Travis deploys the application to Firebase
