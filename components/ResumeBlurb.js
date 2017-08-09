import React from 'react';
import { Text, View } from 'react-vr';

class ResumeBlurb extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.resumeBlurbPostion
    return (
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: '#000000',
              opacity: 0.6,
              layoutOrigin: [0.5, 0.5],


              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}
            >
            <Text
              style={{
                fontSize: 2,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              Check out the source code
            </Text>
            <Text
              style={{
                fontSize: 2,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              for a text only resume
            </Text>
          </View>
    );
  }
};

export default ResumeBlurb;
