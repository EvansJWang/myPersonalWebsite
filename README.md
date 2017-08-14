
# How to deploy React-VR to Heroku

React VR allows you to create compelling VR experiences. Heroku is the easiest way to deploy your web app.
In this tutorial will walk you through pushing your React-VR website to Heroku.
![](react-vr.gif)

# Created by

* [Aaron Stack Barnes](https://github.com/aaronstackbarnes)
* [Evans Wang](https://github.com/evansjwang)

## Install

1. clone the repo

2. `yarn install` to grab all the necessary dependencies.

3. Then run `yarn start` and open http://localhost:8081/vr/ in your browser. // this is to see initial build

## Customize

1. Change the Pano img 
  a. Add Pano image to `static_assets` folder
  b. Open index.vr.js
  c. In the render() change <Pano source={asset('ASB1.jpg')}/> to -->
                            <Pano source={asset('Your_Pano_Img_File_here.jpg')}/> 

2. Change the images on the computer screens
  a. Add images to `static_assets` folder
  b. Open index.vr.js
  c. in the constructor() resumePosition:
                                  change 
                                    image: 'EvansWangResume.jpg' to -->
                                    image: 'your_resume_img.jpg' 

3. Change the link on the computer screens
  a. Add images to `static_assets` folder
  b. Open index.vr.js
  c. in the constructor() gitHubPosition:
                                  change 
                                    url: 'https://www.linkedin.com/in/evansjwang/' to -->
                                    url: 'https://www.yourcustomlink.com' 
                                    
4. Change image locations and rotations
  a. Open index.vr.js
  b. in the constructor() resumeBlurbPostion: {
        width: 30,
        height: 7,
        translateX: -65,
        translateY: 92,
        translateZ: -55,
        rotateY: 40,
        }

## Production Build and How to Deploy

1. run `npm run bundle` - this creates a new folder called build under the vr folder
2. create a new folder on desktop called production
3. copy index.html, static_assets, and all contents from the new build folder to your new desktop folder production 
4. rename index.html to home.html
5. open home.html
  a. change line 9 from: 
        `<script src="./client.bundle?platform=vr"></script>` to `<script src="./client.bundle.js"></script>`
  b. change line 15 from:
        `'../index.bundle?platform=vr&dev=true',` to `'./index.bundle.js'`,
6. `cd` into desktop/production
// this will trick heroku to thinking this is a PHP app 
7. `touch` composer.json
8. `touch` index.php
9. open index.php and add the following: `<?php include_once("home.html"); ?>`
10. open composer.json and add:  `{}`
11. git add .
12. git commit -m "Almost there"
13. git push heroku master             // assuming you have linked Heroku to this folder


