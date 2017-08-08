# Notes and Tips

helpful notes for getting create react app up and running, 
environment vars handling, etc  
https://medium.com/@tuchk4/why-i-love-create-react-app-e63b1be689a3

testing tips  
https://blog.hellojs.org/10-minute-javascript-library-development-in-es6-with-babel-mocha-and-npm-scripts-9f08b22e69c3

====================================
# ROADMAP  
====================================  

## Integrate test framework

$ npm run test:single ./src/map.test.js

Using a `test` folder
Left as homework to work out the kinks, but the path is should be something like ./test/**/*.js.

##### committed 2017/08/07
====================================

## retool git and rework folder structure
- rm -rf .git in both dirs
- transfer gitignore file to root - keep subdir gitignore
- rename client and server dirs
- re-init and commit  

##### committed 2017/08/08
====================================

## test bcrypt
integrate passport/sessions/etc
- http://mherman.org/blog/2016/09/25/node-passport-and-postgres/#.WYkIR3eGPuM
- promisify bcrypt with bluebird

# integrate react-router 4

# create reset pwd flow 
- send email