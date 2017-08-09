import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
  NativeModules
} from 'react-vr';

class gitHubLink extends React.Component {
  constructor() {
  super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(){
    NativeModules.LinkingManager.openURL(this.props.gitHubPosition.url).catch(err => console.error('An error occurred', err));
  }

  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image } = this.props.gitHubPosition

    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0.0125,
          width: 0.7,
        }}
      >
        <VrButton
          onClick={this.onButtonClick}
        >
          <Image
            style={{
              width: width,
              height: height,
              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}
          source={asset(image)}
          >
          </Image>
        </VrButton>
      </View>
    );
  }
};

export default gitHubLink;
