import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

class ResumeLink extends React.Component {
  constructor() {
  super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(){

    this.props.showResume();
  }

  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image } = this.props.resumePosition

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
          ignoreLongClick={true}
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

export default ResumeLink;
