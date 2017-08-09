import React from 'react';
import { Text, View } from 'react-vr';

class HelloBlurb extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.helloBlurbPostion
    return (
          <View
            style={{
              backgroundColor: '#000000',
              opacity: 0.6,
              layoutOrigin: [0.5, 0.5],
              fontSize: 8,
              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}
            >
            <Text
              style={{
                fontSize: 8,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              Hi I am Aaron,
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              I would love to work with you.
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              Click the links to learn more.
            </Text>
          </View>
    );
  }
};

export default HelloBlurb;
