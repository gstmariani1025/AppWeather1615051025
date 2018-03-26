import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, TextInput } from 'react-native';

export default class PrakiraanCuaca extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        city: '',
        forecast: {
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=a009a08ca0c3dd6a017270c1412bc9de&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.box2}>
              <Text style={styles.text}>Masukkan Wilayah</Text>
              <TextInput style = {{height: 40, textAlign:'center'}}
                placeholder="Masukkan Nama Wilayah"
                onChangeText={(city)=>this.setState({city})}
              />

              <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#01579B"
              accessibilityLabel="Klik untuk melihat"
              />
          </View>
          <View style={styles.box3}>
            <Text style = {{padding: 10, fontSize: 20}} >
              Kota  {"\t\t\t\t\t\t"}= {this.state.city} {"\n"}
              Cuaca   {"\t\t\t\t"}= {this.state.forecast.main} {"\n"}
              Description = {this.state.forecast.description} {"\n"}
              Temperatur = {this.state.forecast.temp} {"'Celcius"}
            </Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text1}>Copyright @Mariani</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#4FC3F7',
    flex: 1,
    flexDirection: 'column',
  },

  box1: {
    backgroundColor: '#1565C0',
    flex: 1,
    justifyContent: 'center'
  },

  box2: {
    backgroundColor: '#29B6F6',
    flex: 3,
    margin: 20,
    padding: 10,
    justifyContent: 'center'
  },

  box3: {
    backgroundColor: '#0091EA',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#1565C0',
    flex: 1,
    margin: 10
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },

  text1: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'
  }

});
