import React, {useState, useEffect} from 'react';
import {View, FlatList, ScrollView, Text} from 'react-native';
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
import api from '../../services/api';

Icon.loadFont();

export default function Dashboard() {
  const [locationKey, setLocationKey] = useState('');
  const [teste, setTeste] = useState([]);
  const [city, setNameCity] = useState('');

  const key = '8MkR2dQdMuNbfZdA0jo2uu6uyOMEcdwn';
  const data = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    api
      .get(
        `locations/v1/cities/search?apikey=${key}&q=Aquiraz&language=pt&details=true&offset=100&alias=Cear%C3%A1`,
      )
      .then((res) =>
        // console.log('RES => ',),
        // setLocationKey(res.data[0].Details.CanonicalLocationKey),
        setLocationKey(res.data[0]),
      )
      .catch((err) => console.log(err));

    // console.log('RESPONSE', response);
  }, []);

  useEffect(() => {
    api
      .get(
        `forecasts/v1/daily/1day/32256?apikey=8MkR2dQdMuNbfZdA0jo2uu6uyOMEcdwn&language=pt&details=true&metric=true`,
      )
      .then((res) => setTeste(res.data.DailyForecasts))
      .catch((err) => console.log(err));
  }, [locationKey]);

  return (
    <Container>
      <ScrollView style={{flex: 1}} horizontal={false}>
        {teste.map((item) => (
          <>
            <TitleValue>{item.Temperature.Maximum.Value}</TitleValue>
            <ViewMaxMin>
              <TextMax>{item.Temperature.Maximum.Value}</TextMax>
              <TextMin>/{item.Temperature.Minimum.Value}</TextMin>
            </ViewMaxMin>
          </>
        ))}

        <StatusTempo>Parcialmente ensolarado</StatusTempo>
        <ViewCity>
          <ViewCityDetails>
            <TextNameCity>
              {locationKey.SupplementalAdminAreas[0].LocalizedName}
            </TextNameCity>
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
