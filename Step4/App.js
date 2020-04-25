import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';


getJson = (country) => {
    country = country.replace(" ", "-")
    console.log(country)
    const URL = `https://api.covid19api.com/total/country/${country}`;
    return fetch(URL)
            .then((res) => res.json());
}


export default class FirstView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        country: '',
        totalCases: '',
        totalRecovered: '',
        totalDeaths: '',
        newCases: '',
        newDeaths: '',
        newRecovered: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        country: e.nativeEvent.text
      });
    }

    handleSubmit() {
      getJson(this.state.country)
        .then((res) => {            
          this.setState({
            totalCases: res[res.length - 1]['Confirmed'],   
            totalRecovered: res[res.length - 1]['Recovered'],
            totalDeaths: res[res.length - 1]['Deaths'] 
          });
          this.setState({
            newCases: parseInt(res[res.length - 1]['Confirmed']) - parseInt(res[res.length - 2]['Confirmed']), 
            newDeaths: parseInt(res[res.length - 1]['Deaths']) - parseInt(res[res.length - 2]['Deaths']),
            newRecovered: parseInt(res[res.length - 1]['Recovered']) - parseInt(res[res.length - 2]['Recovered']),
          });
        }
      );
    }
    
  render() {

    return (
      <View style={styles.main}>
        <Text style={styles.title}>Enter Country Name</Text>
        <TextInput
              style={styles.searchInput}
              onChange={this.handleChange}
        />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Enter
              </Text>
        </TouchableHighlight>
        <Text style={styles.result}>New Cases: {this.state.newCases} </Text>
        <Text style={styles.result}>New Deaths: {this.state.newDeaths}</Text>        
        <Text style={styles.result}>New Recovered Cases: {this.state.newRecovered}</Text>
        <Text style={styles.result}>Total Cases: {this.state.totalCases} </Text>
        <Text style={styles.result}>Total Deaths: {this.state.totalDeaths} </Text>
        <Text style={styles.result}>Total Recovered Cases: {this.state.totalRecovered} </Text>
            {showErr}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    marginTop: 25,
    marginBottom:25,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#4B0091'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  result: {
    padding: 15,
    color: 'white',
    fontSize: 18
  }
});
