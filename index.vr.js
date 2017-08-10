import React from 'react';
import ResumeLink from './components/ResumeLink';
import LinkedinLink from './components/LinkedinLink';
import GitHubLink from './components/GitHubLink';
import EmailLink from './components/EmailLink';
import HelloBlurb from './components/HelloBlurb';
import ResumeBlurb from './components/ResumeBlurb';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class personalWeb extends React.Component {
  constructor(){
    super()
    this.showResume = this.showResume.bind(this);
    this.state = {
      resumePosition: {
        start: true,
        width: 2.0,
        height: 2.6,
        translateX: -4.8,
        translateY: 1.4,
        translateZ: -1,
        rotateY: 55,
        image: 'EvansWangResume.png'
      },
      linkedinPosition: {
        width: 25,
        height: 30.0,
        translateX: -70.0,
        translateY: 22.0,
        translateZ: 11.0,
        rotateY: 90,
        image: 'EvansLinkedin.png',
        url: 'https://www.linkedin.com/in/evansjwang/'
      },
      gitHubPosition: {
        width: 3.1,
        height: 3.0,
        translateX: 0.0,
        translateY: 34.0,
        translateZ: -6,
        rotateY: 0,
        image: 'EvansGitHub.png',
        url: 'https://github.com/EvansJWang'
      },
      contactMePostion: {
        width: 1.0,
        height: 1.0,
        translateX: 1.2,
        translateY: 36.1,
        translateZ: -2,
        rotateY: -35,
        image: 'Email.jpg',
        url: 'mailto:HireMe@evanswang.com'
      },
      helloBlurbPostion: {
        translateX: -15,
        translateY: 80,
        translateZ: -95,
        rotateY: 20,
      },
      resumeBlurbPostion: {
        width: 20,
        height: 15,
        translateX: -20,
        translateY: 30,
        translateZ: -50,
        rotateY: 20,
      },
    }
  }

  showResume() {
    if ( this.state.resumePosition.start === true ) {
        let newPosition = Object.assign({}, this.state.resumePosition);
          newPosition.start = false;
          newPosition.width = 3;
          newPosition.height = 3.4;
          newPosition.rotateY = 50;
      this.setState({ resumePosition: newPosition })
    } else {
        let newPosition = Object.assign({}, this.state.resumePosition);
          newPosition.start = true;
          newPosition.width = 2.0;
          newPosition.height = 2.6;
          newPosition.rotateY = 55;
      this.setState({ resumePosition: newPosition })
    }
 }

  render() {
    return (
      <View>
        <Pano source={asset('EJW.jpg')}/>
        <ResumeLink
          resumePosition={this.state.resumePosition}
          showResume={this.showResume}/>
        <LinkedinLink
          linkedinPosition={this.state.linkedinPosition}/>
        <GitHubLink
          gitHubPosition={this.state.gitHubPosition}/>
        <EmailLink
          contactMePostion={this.state.contactMePostion}/>
        <HelloBlurb
          helloBlurbPostion={this.state.helloBlurbPostion}/>
        <ResumeBlurb
          resumeBlurbPostion={this.state.resumeBlurbPostion}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('personalWeb', () => personalWeb);
