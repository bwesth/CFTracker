# Group ID: 2 <br>
## Group Members: Rasmus de Neergaard, Nicolai Mollerup, John Muller, Bjørn Westh

# Project: Front end project for Carbon Footprint Tracker

### Dependencies:
reactjs-popup <br/>
yup <br/>
react-hook-form <br/>
@hookform/resolvers <br/>
npm install unirest <br/>
npm install victory <br/>

`npm i reactjs-popup yup react-hook-form @hookform/resolvers` <br/>
(run nom audit fix as well)

### use to run: 
`npm start`

## Sass Guide
Installing sass: npm install node-sass
Updating our sass files: node-sass App.scss App.css
Updating our sass files with a watcher: node-sass App.scss App.css -w


## Project Description: A personal CO2 emission tracker tracker featuring:

### User login and persistent data 
Firebase server up and running.
User accounts can be created, but if you wish to skip that step a default login can be used:
{email: mette@climate.dk, pass: hestepige}

### Pledges where users can commit to making changes in life-style for visually lowered footprint
Now functional, with entirely fake (placeholder) emmissions numbers. Some debate about monthly vs. yearly pledges,
a lot of potential gamification that leads to a whole broader area of work that we don't have time
to fully explore. Currently pledges work on a 'yearly' assumption, although some would ideally be 
much shorter (weeks or months) or flexible with their duration.

### Visual Graphs using the Victory API
Added a few different graphs using the victory API to display user data in a more appealing manner.
Still some tweaking to be done as we are learning how it works. Theming, styling and some more graphs
probably still to come.

## Team is currently working on:
Expanding firebase functionality, cleaning up backend code (quite messy atm), improving styling, adding images,
refactoring folder structure (also messy).

### Firebase server setup
Essentially finished. Currently stores username, pass and email. Might want to store user footprint data too.

### CO2 data research, import, and logic
- [ ] Yaml file (tmorow) import waiting on Firebase server
- [x] Arbitrary numbers manually generated (need to talk to Mads about the yaml file data). 
- [x] Pre-login survey prototype complete, but radial input options locked to context state - priority bug. (UPDATE: Fixed by syncing to context directly instead of using form hook registration)

### Sass styling setup
- [ ] Initial research and setup complete, fixes pending before merging to master


