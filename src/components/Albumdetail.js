import React from 'react';
import {Text, View} from 'react-native';
import {Card} from './Card';
import {CardSection} from './CardSection';
const Albumdetail = props => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      
    </Card>
  );
};
export {Albumdetail};
