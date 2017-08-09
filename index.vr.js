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
        width: 1.2,
        height: 1.6,
        translateX: -3,
        translateY: 1.3,
        translateZ: -2,
        rotateY: 48,
        image: 'AaronStackResume.jpg'
      },
      linkedinPosition: {
        width: 2.8,
        height: 2.4,
        translateX: -9.2,
        translateY: 4.65,
        translateZ: -2,
        rotateY: 69,
        image: 'ASBLinkedin.jpg',
        url: 'https://www.linkedin.com/in/aaron-stack-10778920/'
      },
      gitHubPosition: {
        width: 3.8,
        height: 3.4,
        translateX: 2.6,
        translateY: 5.9,
        translateZ: -7,
        rotateY: -35,
        image: 'ASBGitHub.jpg',
        url: 'https://www.linkedin.com/in/aaron-stack-10778920/'
      },
      contactMePostion: {
        width: 5.8,
        height: 5.4,
        translateX: 10,
        translateY: 10.5,
        translateZ: -7,
        rotateY: -60,
        image: 'Email.jpg',
        url: 'mailto:aaron@aaronstackbarnes.com'
      },
      helloBlurbPostion: {
        translateX: -15,
        translateY: 65,
        translateZ: -95,
        rotateY: 0,
      },
      resumeBlurbPostion: {
        width: 30,
        height: 7,
        translateX: -65,
        translateY: 92,
        translateZ: -55,
        rotateY: 40,
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
          newPosition.width = 1.2;
          newPosition.height = 1.6;
          newPosition.rotateY = 48;
      this.setState({ resumePosition: newPosition })
    }
 }

  render() {
    return (
      <View>
        <Pano source={asset('ASB1.jpg')}/>
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
