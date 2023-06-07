---
name: authentication login bug
about: this issue template gives a bried overview of the bug
title: ''
labels: bug
assignees: Roygebrayel, AbbasHamyehGit

---

**As a** project manager  
 **I need** an authentication google login on the login page in a real time hosting
 **So that** we can recieve login credentials from the real server
   
 ### Details and Assumptions
 * the authentication is perfectly working on the localhost:3000 but when opening it on the hosting service it doesn't work
   
 ### Acceptance Criteria  
   
 ```gherkin
 Given a click from the user on the google icon
 When logging the website
 Then the google api should display a login form and we should recieve it in the mongodb db
 ```
