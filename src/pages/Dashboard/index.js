import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TitleValue,
  ViewMaxMin,
  TextMax,
  TextMin,
  StatusTempo,
  ViewCity,
  TextNameCity,
  TextUpdate,
  ViewCityDetails,
  ViewHours,
  TextGraus,
  TextHora,
  TextImageIcon,
  TextDays,
  ViewImage,
  ViewDays,
  ViewDaysTesx,
  ViewMax,
  TextMinDay,
  TextMaxDay,
} from './styles';

Icon.loadFont();

export default function Dashboard() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <ScrollView style={{flex: 1}} horizontal={false}>
        <TitleValue>32</TitleValue>
        <ViewMaxMin>
          <TextMax>32</TextMax>
          <TextMin>/24</TextMin>
        </ViewMaxMin>
        <StatusTempo>Parcialmente ensolarado</StatusTempo>
        <ViewCity>
          <ViewCityDetails>
            <TextNameCity>Aquiraz</TextNameCity>
            <Icon
              name="map-marker"
              size={14}
              color="#fff"
              style={{marginTop: 4}}
            />
          </ViewCityDetails>
          <TextUpdate>Ultima Atualização 14:00</TextUpdate>
        </ViewCity>

        <FlatList
          data={data}
          horizontal={true}
          renderItem={({item}) => (
            <ViewHours>
              <TextHora>16:00</TextHora>
              <TextImageIcon />
              <TextGraus>20</TextGraus>
            </ViewHours>
          )}
        />

        <FlatList
          data={data}
          renderItem={({item}) => (
            <ViewDays>
              <ViewDaysTesx>
                <TextDays>Amanhã, 13 de abr</TextDays>
              </ViewDaysTesx>
              <ViewImage />
              <ViewMax>
                <TextMaxDay>30</TextMaxDay>
                <TextMinDay>/28</TextMinDay>
              </ViewMax>
            </ViewDays>
          )}
        />
      </ScrollView>
    </Container>
  );
}
