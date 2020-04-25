/*This is an Example of React Native Map*/
import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { Callout } from 'react-native-maps';

getJson = (country) => {
//    let username = name.toLowerCase().trim();
    const URL = `https://api.covid19api.com/total/country/${country}`;
    return fetch(URL)
            .then((res) => res.json());
} 
 

getSum = () => {
	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};

	return fetch("https://api.covid19api.com/summary", requestOptions)
	  .then((res) => res.json());
}

export default class App extends React.Component {
	
	  constructor(props) {
      super(props);
      this.state = {
        totalCases: '',
        totalRecovered: '',
        totalDeaths: '',
        totalCases01: '',
        totalRecovered01: '',
        totalDeaths01: '',
        totalCases02: '',
        totalRecovered02: '',
        totalDeaths02: '',
        totalCases03: '',
        totalRecovered03: '',
        totalDeaths03: '',
        totalCases04: '',
        totalRecovered04: '',
        totalDeaths04: '',
        totalCases05: '',
        totalRecovered05: '',
        totalDeaths05: '',
        totalCases06: '',
        totalRecovered06: '',
        totalDeaths06: '',
        totalCases07: '',
        totalRecovered07: '',
        totalDeaths07: '',
        totalCases08: '',
        totalRecovered08: '',
        totalDeaths08: '',
        totalCases09: '',
        totalRecovered09: '',
        totalDeaths09: '',
        totalCases10: '',
        totalRecovered10: '',
        totalDeaths10: '',
        totalCases11: '',
        totalRecovered11: '',
        totalDeaths11: '',
        totalCases12: '',
        totalRecovered12: '',
        totalDeaths12: '',
        totalCases13: '',
        totalRecovered13: '',
        totalDeaths13: '',
        totalCases14: '',
        totalRecovered14: '',
        totalDeaths14: '',
        totalCases15: '',
        totalRecovered15: '',
        totalDeaths15: '',
        totalCases16: '',
        totalRecovered16: '',
        totalDeaths16: '',
        totalCases17: '',
        totalRecovered17: '',
        totalDeaths17: '',
        totalCases18: '',
        totalRecovered18: '',
        totalDeaths18: '',
        totalCases19: '',
        totalRecovered19: '',
        totalDeaths19: '',
        totalCases20: '',
        totalRecovered20: '',
        totalDeaths20: '',
        totalCases21: '',
        totalRecovered21: '',
        totalDeaths21: '',
        totalCases22: '',
        totalRecovered22: '',
        totalDeaths22: '',
        totalCases23: '',
        totalRecovered23: '',
        totalDeaths23: '',
        totalCases24: '',
        totalRecovered24: '',
        totalDeaths24: '',
        totalCases25: '',
        totalRecovered25: '',
        totalDeaths25: '',
        totalCases26: '',
        totalRecovered26: '',
        totalDeaths26: '',
        totalCases27: '',
        totalRecovered27: '',
        totalDeaths27: '',
        totalCases28: '',
        totalRecovered28: '',
        totalDeaths28: '',
        totalCases29: '',
        totalRecovered29: '',
        totalDeaths29: '',
        totalCases30: '',
        totalRecovered30: '',
        totalDeaths30: '',
        totalCases31: '',
        totalRecovered31: '',
        totalDeaths31: '',
        totalCases32: '',
        totalRecovered32: '',
        totalDeaths32: '',
        totalCases33: '',
        totalRecovered33: '',
        totalDeaths33: '',
        totalCases34: '',
        totalRecovered34: '',
        totalDeaths34: '',
        totalCases35: '',
        totalRecovered35: '',
        totalDeaths35: '',
        totalCases36: '',
        totalRecovered36: '',
        totalDeaths36: '',
        totalCases37: '',
        totalRecovered37: '',
        totalDeaths37: '',
        totalCases38: '',
        totalRecovered38: '',
        totalDeaths38: '',
        totalCases39: '',
        totalRecovered39: '',
        totalDeaths39: '',
        totalCases40: '',
        totalRecovered40: '',
        totalDeaths40: '',
        totalCases41: '',
        totalRecovered41: '',
        totalDeaths41: '',
        totalCases42: '',
        totalRecovered42: '',
        totalDeaths42: '',
        totalCases43: '',
        totalRecovered43: '',
        totalDeaths43: '',
        totalCases44: '',
        totalRecovered44: '',
        totalDeaths44: '',
        totalCases45: '',
        totalRecovered45: '',
        totalDeaths45: '',
        totalCases46: '',
        totalRecovered46: '',
        totalDeaths46: '',
        totalCases47: '',
        totalRecovered47: '',
        totalDeaths47: '',
        totalCases48: '',
        totalRecovered48: '',
        totalDeaths48: '',
        totalCases49: '',
        totalRecovered49: '',
        totalDeaths49: '',
        totalCases50: '',
        totalRecovered50: '',
        totalDeaths50: '',
		
        totalCases51: '',
        totalRecovered51: '',
        totalDeaths51: '',
        totalCases52: '',
        totalRecovered52: '',
        totalDeaths52: '',
        totalCases53: '',
        totalRecovered53: '',
        totalDeaths53: '',
        totalCases54: '',
        totalRecovered54: '',
        totalDeaths54: '',
        totalCases55: '',
        totalRecovered55: '',
        totalDeaths55: '',
        totalCases56: '',
        totalRecovered56: '',
        totalDeaths56: '',
        totalCases57: '',
        totalRecovered57: '',
        totalDeaths57: '',
        totalCases58: '',
        totalRecovered58: '',
        totalDeaths58: '',
        totalCases59: '',
        totalRecovered59: '',
        totalDeaths59: '',
        totalCases60: '',
        totalRecovered60: '',
        totalDeaths60: '',
        totalCases61: '',
        totalRecovered61: '',
        totalDeaths61: '',
        totalCases62: '',
        totalRecovered62: '',
        totalDeaths62: '',
        totalCases63: '',
        totalRecovered63: '',
        totalDeaths63: '',
        totalCases64: '',
        totalRecovered64: '',
        totalDeaths64: '',
        totalCases65: '',
        totalRecovered65: '',
        totalDeaths65: '',
        totalCases66: '',
        totalRecovered66: '',
        totalDeaths66: '',
        totalCases67: '',
        totalRecovered67: '',
        totalDeaths67: '',
        totalCases68: '',
        totalRecovered68: '',
        totalDeaths68: '',
        totalCases69: '',
        totalRecovered69: '',
        totalDeaths69: '',
        totalCases70: '',
        totalRecovered70: '',
        totalDeaths70: ''

      } 
    }
	
  onRegionChange(region) {
    this.setState({ region });
  }

handleSubmit(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases: res[res.length - 1]['Confirmed'],   
			totalRecovered: res[res.length - 1]['Recovered'],
			totalDeaths: res[res.length - 1]['Deaths'] 
		  });	
	});
}


handleSubmit01(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases01: res[res.length - 1]['Confirmed'],   
			totalRecovered01: res[res.length - 1]['Recovered'],
			totalDeaths01: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit02(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases02: res[res.length - 1]['Confirmed'],   
			totalRecovered02: res[res.length - 1]['Recovered'],
			totalDeaths02: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit03(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases03: res[res.length - 1]['Confirmed'],   
			totalRecovered03: res[res.length - 1]['Recovered'],
			totalDeaths03: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit04(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases04: res[res.length - 1]['Confirmed'],   
			totalRecovered04: res[res.length - 1]['Recovered'],
			totalDeaths04: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit05(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases05: res[res.length - 1]['Confirmed'],   
			totalRecovered05: res[res.length - 1]['Recovered'],
			totalDeaths05: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit06(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases06: res[res.length - 1]['Confirmed'],   
			totalRecovered06: res[res.length - 1]['Recovered'],
			totalDeaths06: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit07(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases07: res[res.length - 1]['Confirmed'],   
			totalRecovered07: res[res.length - 1]['Recovered'],
			totalDeaths07: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit08(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases08: res[res.length - 1]['Confirmed'],   
			totalRecovered08: res[res.length - 1]['Recovered'],
			totalDeaths08: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit09(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases09: res[res.length - 1]['Confirmed'],   
			totalRecovered09: res[res.length - 1]['Recovered'],
			totalDeaths09: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit10(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases10: res[res.length - 1]['Confirmed'],   
			totalRecovered10: res[res.length - 1]['Recovered'],
			totalDeaths10: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit11(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases11: res[res.length - 1]['Confirmed'],   
			totalRecovered11: res[res.length - 1]['Recovered'],
			totalDeaths11: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit12(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases12: res[res.length - 1]['Confirmed'],   
			totalRecovered12: res[res.length - 1]['Recovered'],
			totalDeaths12: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit13(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases13: res[res.length - 1]['Confirmed'],   
			totalRecovered13: res[res.length - 1]['Recovered'],
			totalDeaths13: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit14(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases14: res[res.length - 1]['Confirmed'],   
			totalRecovered14: res[res.length - 1]['Recovered'],
			totalDeaths14: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit15(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases15: res[res.length - 1]['Confirmed'],   
			totalRecovered15: res[res.length - 1]['Recovered'],
			totalDeaths15: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit16(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases16: res[res.length - 1]['Confirmed'],   
			totalRecovered16: res[res.length - 1]['Recovered'],
			totalDeaths16: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit17(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases17: res[res.length - 1]['Confirmed'],   
			totalRecovered17: res[res.length - 1]['Recovered'],
			totalDeaths17: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit18(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases18: res[res.length - 1]['Confirmed'],   
			totalRecovered18: res[res.length - 1]['Recovered'],
			totalDeaths18: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit19(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases19: res[res.length - 1]['Confirmed'],   
			totalRecovered19: res[res.length - 1]['Recovered'],
			totalDeaths19: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit20(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases20: res[res.length - 1]['Confirmed'],   
			totalRecovered20: res[res.length - 1]['Recovered'],
			totalDeaths20: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit21(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases21: res[res.length - 1]['Confirmed'],   
			totalRecovered21: res[res.length - 1]['Recovered'],
			totalDeaths21: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit22(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases22: res[res.length - 1]['Confirmed'],   
			totalRecovered22: res[res.length - 1]['Recovered'],
			totalDeaths22: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit23(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases23: res[res.length - 1]['Confirmed'],   
			totalRecovered23: res[res.length - 1]['Recovered'],
			totalDeaths23: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit24(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases24: res[res.length - 1]['Confirmed'],   
			totalRecovered24: res[res.length - 1]['Recovered'],
			totalDeaths24: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit25(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases25: res[res.length - 1]['Confirmed'],   
			totalRecovered25: res[res.length - 1]['Recovered'],
			totalDeaths25: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit26(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases26: res[res.length - 1]['Confirmed'],   
			totalRecovered26: res[res.length - 1]['Recovered'],
			totalDeaths26: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit27(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases27: res[res.length - 1]['Confirmed'],   
			totalRecovered27: res[res.length - 1]['Recovered'],
			totalDeaths27: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit28(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases28: res[res.length - 1]['Confirmed'],   
			totalRecovered28: res[res.length - 1]['Recovered'],
			totalDeaths28: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit29(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases29: res[res.length - 1]['Confirmed'],   
			totalRecovered29: res[res.length - 1]['Recovered'],
			totalDeaths29: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit30(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases30: res[res.length - 1]['Confirmed'],   
			totalRecovered30: res[res.length - 1]['Recovered'],
			totalDeaths30: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit31(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases31: res[res.length - 1]['Confirmed'],   
			totalRecovered31: res[res.length - 1]['Recovered'],
			totalDeaths31: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit32(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases32: res[res.length - 1]['Confirmed'],   
			totalRecovered32: res[res.length - 1]['Recovered'],
			totalDeaths32: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit33(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases33: res[res.length - 1]['Confirmed'],   
			totalRecovered33: res[res.length - 1]['Recovered'],
			totalDeaths33: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit34(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases34: res[res.length - 1]['Confirmed'],   
			totalRecovered34: res[res.length - 1]['Recovered'],
			totalDeaths34: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit35(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases35: res[res.length - 1]['Confirmed'],   
			totalRecovered35: res[res.length - 1]['Recovered'],
			totalDeaths35: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit36(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases36: res[res.length - 1]['Confirmed'],   
			totalRecovered36: res[res.length - 1]['Recovered'],
			totalDeaths36: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit37(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases37: res[res.length - 1]['Confirmed'],   
			totalRecovered37: res[res.length - 1]['Recovered'],
			totalDeaths37: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit38(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases38: res[res.length - 1]['Confirmed'],   
			totalRecovered38: res[res.length - 1]['Recovered'],
			totalDeaths38: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit39(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases39: res[res.length - 1]['Confirmed'],   
			totalRecovered39: res[res.length - 1]['Recovered'],
			totalDeaths39: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit40(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases40: res[res.length - 1]['Confirmed'],   
			totalRecovered40: res[res.length - 1]['Recovered'],
			totalDeaths40: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit41(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases41: res[res.length - 1]['Confirmed'],   
			totalRecovered41: res[res.length - 1]['Recovered'],
			totalDeaths41: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit42(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases42: res[res.length - 1]['Confirmed'],   
			totalRecovered42: res[res.length - 1]['Recovered'],
			totalDeaths42: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit43(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases43: res[res.length - 1]['Confirmed'],   
			totalRecovered43: res[res.length - 1]['Recovered'],
			totalDeaths43: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit44(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases44: res[res.length - 1]['Confirmed'],   
			totalRecovered44: res[res.length - 1]['Recovered'],
			totalDeaths44: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit45(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases45: res[res.length - 1]['Confirmed'],   
			totalRecovered45: res[res.length - 1]['Recovered'],
			totalDeaths45: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit46(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases46: res[res.length - 1]['Confirmed'],   
			totalRecovered46: res[res.length - 1]['Recovered'],
			totalDeaths46: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit47(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases47: res[res.length - 1]['Confirmed'],   
			totalRecovered47: res[res.length - 1]['Recovered'],
			totalDeaths47: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit48(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases48: res[res.length - 1]['Confirmed'],   
			totalRecovered48: res[res.length - 1]['Recovered'],
			totalDeaths48: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit49(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases49: res[res.length - 1]['Confirmed'],   
			totalRecovered49: res[res.length - 1]['Recovered'],
			totalDeaths49: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit50(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases50: res[res.length - 1]['Confirmed'],   
			totalRecovered50: res[res.length - 1]['Recovered'],
			totalDeaths50: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit51(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases51: res[res.length - 1]['Confirmed'],   
			totalRecovered51: res[res.length - 1]['Recovered'],
			totalDeaths51: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit52(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases52: res[res.length - 1]['Confirmed'],   
			totalRecovered52: res[res.length - 1]['Recovered'],
			totalDeaths52: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit53(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases53: res[res.length - 1]['Confirmed'],   
			totalRecovered53: res[res.length - 1]['Recovered'],
			totalDeaths53: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit54(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases54: res[res.length - 1]['Confirmed'],   
			totalRecovered54: res[res.length - 1]['Recovered'],
			totalDeaths54: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit55(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases55: res[res.length - 1]['Confirmed'],   
			totalRecovered55: res[res.length - 1]['Recovered'],
			totalDeaths55: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit56(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases56: res[res.length - 1]['Confirmed'],   
			totalRecovered56: res[res.length - 1]['Recovered'],
			totalDeaths56: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit57(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases57: res[res.length - 1]['Confirmed'],   
			totalRecovered57: res[res.length - 1]['Recovered'],
			totalDeaths57: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit58(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases58: res[res.length - 1]['Confirmed'],   
			totalRecovered58: res[res.length - 1]['Recovered'],
			totalDeaths58: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit59(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases59: res[res.length - 1]['Confirmed'],   
			totalRecovered59: res[res.length - 1]['Recovered'],
			totalDeaths59: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit60(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases60: res[res.length - 1]['Confirmed'],   
			totalRecovered60: res[res.length - 1]['Recovered'],
			totalDeaths60: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit61(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases61: res[res.length - 1]['Confirmed'],   
			totalRecovered61: res[res.length - 1]['Recovered'],
			totalDeaths61: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit62(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases62: res[res.length - 1]['Confirmed'],   
			totalRecovered62: res[res.length - 1]['Recovered'],
			totalDeaths62: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit63(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases63: res[res.length - 1]['Confirmed'],   
			totalRecovered63: res[res.length - 1]['Recovered'],
			totalDeaths63: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit64(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases64: res[res.length - 1]['Confirmed'],   
			totalRecovered64: res[res.length - 1]['Recovered'],
			totalDeaths64: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit65(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases65: res[res.length - 1]['Confirmed'],   
			totalRecovered65: res[res.length - 1]['Recovered'],
			totalDeaths65: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit66(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases66: res[res.length - 1]['Confirmed'],   
			totalRecovered66: res[res.length - 1]['Recovered'],
			totalDeaths66: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit67(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases67: res[res.length - 1]['Confirmed'],   
			totalRecovered67: res[res.length - 1]['Recovered'],
			totalDeaths67: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit68(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases68: res[res.length - 1]['Confirmed'],   
			totalRecovered68: res[res.length - 1]['Recovered'],
			totalDeaths68: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit69(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases69: res[res.length - 1]['Confirmed'],   
			totalRecovered69: res[res.length - 1]['Recovered'],
			totalDeaths69: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit70(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases70: res[res.length - 1]['Confirmed'],   
			totalRecovered70: res[res.length - 1]['Recovered'],
			totalDeaths70: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit71(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases71: res[res.length - 1]['Confirmed'],   
			totalRecovered71: res[res.length - 1]['Recovered'],
			totalDeaths71: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit72(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases72: res[res.length - 1]['Confirmed'],   
			totalRecovered72: res[res.length - 1]['Recovered'],
			totalDeaths72: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit73(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases73: res[res.length - 1]['Confirmed'],   
			totalRecovered73: res[res.length - 1]['Recovered'],
			totalDeaths73: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit74(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases74: res[res.length - 1]['Confirmed'],   
			totalRecovered74: res[res.length - 1]['Recovered'],
			totalDeaths74: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit75(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases75: res[res.length - 1]['Confirmed'],   
			totalRecovered75: res[res.length - 1]['Recovered'],
			totalDeaths75: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit76(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases76: res[res.length - 1]['Confirmed'],   
			totalRecovered76: res[res.length - 1]['Recovered'],
			totalDeaths76: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit77(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases77: res[res.length - 1]['Confirmed'],   
			totalRecovered77: res[res.length - 1]['Recovered'],
			totalDeaths77: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit78(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases78: res[res.length - 1]['Confirmed'],   
			totalRecovered78: res[res.length - 1]['Recovered'],
			totalDeaths78: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit79(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases79: res[res.length - 1]['Confirmed'],   
			totalRecovered79: res[res.length - 1]['Recovered'],
			totalDeaths79: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit80(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases80: res[res.length - 1]['Confirmed'],   
			totalRecovered80: res[res.length - 1]['Recovered'],
			totalDeaths80: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit81(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases81: res[res.length - 1]['Confirmed'],   
			totalRecovered81: res[res.length - 1]['Recovered'],
			totalDeaths81: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit82(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases82: res[res.length - 1]['Confirmed'],   
			totalRecovered82: res[res.length - 1]['Recovered'],
			totalDeaths82: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit83(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases83: res[res.length - 1]['Confirmed'],   
			totalRecovered83: res[res.length - 1]['Recovered'],
			totalDeaths83: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit84(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases84: res[res.length - 1]['Confirmed'],   
			totalRecovered84: res[res.length - 1]['Recovered'],
			totalDeaths84: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit85(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases85: res[res.length - 1]['Confirmed'],   
			totalRecovered85: res[res.length - 1]['Recovered'],
			totalDeaths85: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit86(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases86: res[res.length - 1]['Confirmed'],   
			totalRecovered86: res[res.length - 1]['Recovered'],
			totalDeaths86: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit87(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases87: res[res.length - 1]['Confirmed'],   
			totalRecovered87: res[res.length - 1]['Recovered'],
			totalDeaths87: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit88(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases88: res[res.length - 1]['Confirmed'],   
			totalRecovered88: res[res.length - 1]['Recovered'],
			totalDeaths88: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit89(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases89: res[res.length - 1]['Confirmed'],   
			totalRecovered89: res[res.length - 1]['Recovered'],
			totalDeaths89: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit90(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases90: res[res.length - 1]['Confirmed'],   
			totalRecovered90: res[res.length - 1]['Recovered'],
			totalDeaths90: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit91(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases91: res[res.length - 1]['Confirmed'],   
			totalRecovered91: res[res.length - 1]['Recovered'],
			totalDeaths91: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit92(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases92: res[res.length - 1]['Confirmed'],   
			totalRecovered92: res[res.length - 1]['Recovered'],
			totalDeaths92: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit93(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases93: res[res.length - 1]['Confirmed'],   
			totalRecovered93: res[res.length - 1]['Recovered'],
			totalDeaths93: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit94(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases94: res[res.length - 1]['Confirmed'],   
			totalRecovered94: res[res.length - 1]['Recovered'],
			totalDeaths94: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit95(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases95: res[res.length - 1]['Confirmed'],   
			totalRecovered95: res[res.length - 1]['Recovered'],
			totalDeaths95: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit96(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases96: res[res.length - 1]['Confirmed'],   
			totalRecovered96: res[res.length - 1]['Recovered'],
			totalDeaths96: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit97(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases97: res[res.length - 1]['Confirmed'],   
			totalRecovered97: res[res.length - 1]['Recovered'],
			totalDeaths97: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit98(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases98: res[res.length - 1]['Confirmed'],   
			totalRecovered98: res[res.length - 1]['Recovered'],
			totalDeaths98: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit99(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases99: res[res.length - 1]['Confirmed'],   
			totalRecovered99: res[res.length - 1]['Recovered'],
			totalDeaths99: res[res.length - 1]['Deaths'] 
		  });	
	});
}

handleSubmit100(country) {
	getJson(country).then((res) => {  
		  this.setState({
			totalCases100: res[res.length - 1]['Confirmed'],   
			totalRecovered100: res[res.length - 1]['Recovered'],
			totalDeaths100: res[res.length - 1]['Deaths'] 
		  });	
	});
}



  render() {

	this.handleSubmit("United-States");
	this.handleSubmit01("Afghanistan");
	this.handleSubmit02("Albania");
	this.handleSubmit03("Algeria");
	this.handleSubmit04("Andorra");
	this.handleSubmit05("Angola");
	this.handleSubmit06("Antigua-and-Barbuda");	
	this.handleSubmit07("Argentina");	
	this.handleSubmit08("Armenia");	
	this.handleSubmit09("Australia");	
	this.handleSubmit10("Austria");	
	this.handleSubmit11("Azerbaijan");	
	this.handleSubmit12("Bahrain");	
	this.handleSubmit13("Bangladesh");	
	this.handleSubmit14("Barbados");	
	this.handleSubmit15("Belarus");	
	this.handleSubmit16("Belgium");	
	this.handleSubmit17("Belize");	
	this.handleSubmit18("Benin");	
	this.handleSubmit19("Bhutan");	
	this.handleSubmit20("Bolivia");
	this.handleSubmit21("Bosnia-and-Herzegovina");
	this.handleSubmit22("Botswana");
	this.handleSubmit23("Brazil");
	this.handleSubmit24("brunei");
	this.handleSubmit25("Bulgaria");
	this.handleSubmit26("burkina-faso");	
	this.handleSubmit27("Burundi");	
	this.handleSubmit28("Cambodia");	
	this.handleSubmit29("Cameroon");	
	this.handleSubmit30("Canada");	
	this.handleSubmit31("cape-verde");
	this.handleSubmit32("central-african-republic");
	this.handleSubmit33("Chad");
	this.handleSubmit34("Chile");
	this.handleSubmit35("China");
	this.handleSubmit36("Colombia");	
	this.handleSubmit37("congo-brazzaville");	
	this.handleSubmit38("congo-kinshasa");	
	this.handleSubmit39("costa-rica");	
	this.handleSubmit40("Croatia");	
	this.handleSubmit41("Cuba");	
	this.handleSubmit42("Cyprus");	
	this.handleSubmit43("czech-republic");	
	this.handleSubmit44("cote-divoire");	
	this.handleSubmit45("Denmark");	
	this.handleSubmit46("Djibouti");	
	this.handleSubmit47("Dominica");	
	this.handleSubmit48("dominican-republic");	
	this.handleSubmit49("Ecuador");	
	this.handleSubmit50("Egypt");
	this.handleSubmit51("el-salvador");
	this.handleSubmit52("equatorial-guinea");
	this.handleSubmit53("Eritrea");
	this.handleSubmit54("Estonia");
	this.handleSubmit55("Ethiopia");
	this.handleSubmit56("Fiji");	
	this.handleSubmit57("Finland");	
	this.handleSubmit58("France");	
	this.handleSubmit59("Gabon");	
	this.handleSubmit60("Gambia");	
	this.handleSubmit61("Georgia");	
	this.handleSubmit62("Germany");	
	this.handleSubmit63("Ghana");	
	this.handleSubmit64("Greece");	
	this.handleSubmit65("Grenada");	
	this.handleSubmit66("Guatemala");	
	this.handleSubmit67("Guinea");	
	this.handleSubmit68("guinea-bissau");	
	this.handleSubmit69("Guyana");	
	this.handleSubmit70("Haiti");	

	this.handleSubmit71("holy-see-vatican-city-state");
	this.handleSubmit72("Honduras");
	this.handleSubmit73("Hungary");
	this.handleSubmit74("Iceland");
	this.handleSubmit75("India");
	this.handleSubmit76("Indonesia");	
	this.handleSubmit77("iran");	
	this.handleSubmit78("Iraq");	
	this.handleSubmit79("Ireland");	
	this.handleSubmit80("Israel");	
	this.handleSubmit81("Italy");	
	this.handleSubmit82("Jamaica");	
	this.handleSubmit83("Japan");	
	this.handleSubmit84("Jordan");	
	this.handleSubmit85("Kenya");	
	this.handleSubmit86("korea-south");	
	this.handleSubmit87("Kuwait");	
	this.handleSubmit88("Kyrgyzstan");	
	this.handleSubmit89("lao-pdr");	
	this.handleSubmit90("Latvia");
	this.handleSubmit91("Lebanon");
	this.handleSubmit92("Liberia");
	this.handleSubmit93("Libya");
	this.handleSubmit94("Liechtenstein");
	this.handleSubmit95("Lithuania");
	this.handleSubmit96("Luxembourg");	
	this.handleSubmit97("macedonia");	
	this.handleSubmit98("Madagascar");	
	this.handleSubmit99("Malawi");	
	this.handleSubmit100("Malaysia");

	return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 42.349300,
            longitude: -71.106537,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
		  }}
        >

		<Marker             
			coordinate={{
			  latitude: 38.31,
              longitude: -117.06,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"United States"}</Text>
                <Text>Confirmed: {this.state.totalCases}</Text>
                <Text>Recovered: {this.state.totalRecovered}</Text>
                <Text>Deaths: {this.state.totalDeaths}</Text>			
              </View>
            </Callout>
		</Marker>


		<Marker             
			coordinate={{
			  latitude: 33.94,
              longitude: 67.71,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Afghanistan"}</Text>
                <Text>Confirmed: {this.state.totalCases01}</Text>
                <Text>Recovered: {this.state.totalRecovered01}</Text>
                <Text>Deaths: {this.state.totalDeaths01}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 41.15,
              longitude: 20.17,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Albania"}</Text>
                <Text>Confirmed: {this.state.totalCases02}</Text>
                <Text>Recovered: {this.state.totalRecovered02}</Text>
                <Text>Deaths: {this.state.totalDeaths02}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 28.03,
              longitude: 1.66,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Algeria"}</Text>
                <Text>Confirmed: {this.state.totalCases03}</Text>
                <Text>Recovered: {this.state.totalRecovered03}</Text>
                <Text>Deaths: {this.state.totalDeaths03}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 42.55,
              longitude: 1.6,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Andorra"}</Text>
                <Text>Confirmed: {this.state.totalCases04}</Text>
                <Text>Recovered: {this.state.totalRecovered04}</Text>
                <Text>Deaths: {this.state.totalDeaths04}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -11.2,
              longitude: 17.87,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Angola"}</Text>
                <Text>Confirmed: {this.state.totalCases05}</Text>
                <Text>Recovered: {this.state.totalRecovered05}</Text>
                <Text>Deaths: {this.state.totalDeaths05}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 17.06,
              longitude: -61.8,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Antigua-and-Barbuda"}</Text>
                <Text>Confirmed: {this.state.totalCases06}</Text>
                <Text>Recovered: {this.state.totalRecovered06}</Text>
                <Text>Deaths: {this.state.totalDeaths06}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -38.42,
              longitude: -63.62,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Argentina"}</Text>
                <Text>Confirmed: {this.state.totalCases07}</Text>
                <Text>Recovered: {this.state.totalRecovered07}</Text>
                <Text>Deaths: {this.state.totalDeaths07}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 40.07,
              longitude: 45.04,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Armenia"}</Text>
                <Text>Confirmed: {this.state.totalCases08}</Text>
                <Text>Recovered: {this.state.totalRecovered08}</Text>
                <Text>Deaths: {this.state.totalDeaths08}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -37.81,
              longitude: 144.96,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Australia"}</Text>
                <Text>Confirmed: {this.state.totalCases09}</Text>
                <Text>Recovered: {this.state.totalRecovered09}</Text>
                <Text>Deaths: {this.state.totalDeaths09}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 47.52,
              longitude: 14.55,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Austria"}</Text>
                <Text>Confirmed: {this.state.totalCases10}</Text>
                <Text>Recovered: {this.state.totalRecovered10}</Text>
                <Text>Deaths: {this.state.totalDeaths10}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 40.14,
              longitude: 47.58,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Azerbaijan"}</Text>
                <Text>Confirmed: {this.state.totalCases11}</Text>
                <Text>Recovered: {this.state.totalRecovered11}</Text>
                <Text>Deaths: {this.state.totalDeaths11}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 25.93,
              longitude: 50.64,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Bahrain"}</Text>
                <Text>Confirmed: {this.state.totalCases12}</Text>
                <Text>Recovered: {this.state.totalRecovered12}</Text>
                <Text>Deaths: {this.state.totalDeaths12}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 23.68,
              longitude: 90.36,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Bangladesh"}</Text>
                <Text>Confirmed: {this.state.totalCases13}</Text>
                <Text>Recovered: {this.state.totalRecovered13}</Text>
                <Text>Deaths: {this.state.totalDeaths13}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 13.19,
              longitude: -59.54,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Barbados"}</Text>
                <Text>Confirmed: {this.state.totalCases14}</Text>
                <Text>Recovered: {this.state.totalRecovered14}</Text>
                <Text>Deaths: {this.state.totalDeaths14}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 53.71,
              longitude: 27.95,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Belarus"}</Text>
                <Text>Confirmed: {this.state.totalCases15}</Text>
                <Text>Recovered: {this.state.totalRecovered15}</Text>
                <Text>Deaths: {this.state.totalDeaths15}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 50.5,
              longitude: 4.47,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Belgium"}</Text>
                <Text>Confirmed: {this.state.totalCases16}</Text>
                <Text>Recovered: {this.state.totalRecovered16}</Text>
                <Text>Deaths: {this.state.totalDeaths16}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 17.19,
              longitude: -88.5,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Belize"}</Text>
                <Text>Confirmed: {this.state.totalCases17}</Text>
                <Text>Recovered: {this.state.totalRecovered17}</Text>
                <Text>Deaths: {this.state.totalDeaths17}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 9.31,
              longitude: 2.32,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Benin"}</Text>
                <Text>Confirmed: {this.state.totalCases18}</Text>
                <Text>Recovered: {this.state.totalRecovered18}</Text>
                <Text>Deaths: {this.state.totalDeaths18}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 27.51,
              longitude: 90.43,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Bhutan"}</Text>
                <Text>Confirmed: {this.state.totalCases19}</Text>
                <Text>Recovered: {this.state.totalRecovered19}</Text>
                <Text>Deaths: {this.state.totalDeaths19}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -16.29,
              longitude: -63.59,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Bolivia"}</Text>
                <Text>Confirmed: {this.state.totalCases20}</Text>
                <Text>Recovered: {this.state.totalRecovered20}</Text>
                <Text>Deaths: {this.state.totalDeaths20}</Text>			
              </View>
            </Callout>
		</Marker>
		  
		<Marker             
			coordinate={{
			  latitude: 43.92,
              longitude: 17.68,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Bosnia-and-Herzegovina"}</Text>
                <Text>Confirmed: {this.state.totalCases21}</Text>
                <Text>Recovered: {this.state.totalRecovered21}</Text>
                <Text>Deaths: {this.state.totalDeaths21}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -22.33,
              longitude: 24.68,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Botswana"}</Text>
                <Text>Confirmed: {this.state.totalCases22}</Text>
                <Text>Recovered: {this.state.totalRecovered22}</Text>
                <Text>Deaths: {this.state.totalDeaths22}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -14.24,
              longitude: -51.93,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Brazil"}</Text>
                <Text>Confirmed: {this.state.totalCases23}</Text>
                <Text>Recovered: {this.state.totalRecovered23}</Text>
                <Text>Deaths: {this.state.totalDeaths23}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 4.54,
              longitude: 114.73,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"brunei"}</Text>
                <Text>Confirmed: {this.state.totalCases24}</Text>
                <Text>Recovered: {this.state.totalRecovered24}</Text>
                <Text>Deaths: {this.state.totalDeaths24}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 42.73,
              longitude: 25.49,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Bulgaria"}</Text>
                <Text>Confirmed: {this.state.totalCases25}</Text>
                <Text>Recovered: {this.state.totalRecovered25}</Text>
                <Text>Deaths: {this.state.totalDeaths25}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 12.24,
              longitude: -1.56,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"burkina-faso"}</Text>
                <Text>Confirmed: {this.state.totalCases26}</Text>
                <Text>Recovered: {this.state.totalRecovered26}</Text>
                <Text>Deaths: {this.state.totalDeaths26}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -3.37,
              longitude: 29.92,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Burundi"}</Text>
                <Text>Confirmed: {this.state.totalCases27}</Text>
                <Text>Recovered: {this.state.totalRecovered27}</Text>
                <Text>Deaths: {this.state.totalDeaths27}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 12.57,
              longitude: 104.99,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Cambodia"}</Text>
                <Text>Confirmed: {this.state.totalCases28}</Text>
                <Text>Recovered: {this.state.totalRecovered28}</Text>
                <Text>Deaths: {this.state.totalDeaths28}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 7.37,
              longitude: 12.35,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Cameroon"}</Text>
                <Text>Confirmed: {this.state.totalCases29}</Text>
                <Text>Recovered: {this.state.totalRecovered29}</Text>
                <Text>Deaths: {this.state.totalDeaths29}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 51.25,
              longitude: -85.32,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Canada"}</Text>
                <Text>Confirmed: {this.state.totalCases30}</Text>
                <Text>Recovered: {this.state.totalRecovered30}</Text>
                <Text>Deaths: {this.state.totalDeaths30}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 16,
              longitude: -24.01,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"cape-verde"}</Text>
                <Text>Confirmed: {this.state.totalCases31}</Text>
                <Text>Recovered: {this.state.totalRecovered31}</Text>
                <Text>Deaths: {this.state.totalDeaths31}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 6.61,
              longitude: 20.94,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"central-african-republic"}</Text>
                <Text>Confirmed: {this.state.totalCases32}</Text>
                <Text>Recovered: {this.state.totalRecovered32}</Text>
                <Text>Deaths: {this.state.totalDeaths32}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 15.45,
              longitude: 18.73,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Chad"}</Text>
                <Text>Confirmed: {this.state.totalCases33}</Text>
                <Text>Recovered: {this.state.totalRecovered33}</Text>
                <Text>Deaths: {this.state.totalDeaths33}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -35.68,
              longitude: -71.54,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Chile"}</Text>
                <Text>Confirmed: {this.state.totalCases34}</Text>
                <Text>Recovered: {this.state.totalRecovered34}</Text>
                <Text>Deaths: {this.state.totalDeaths34}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 27.61,
              longitude: 115.72,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"China"}</Text>
                <Text>Confirmed: {this.state.totalCases35}</Text>
                <Text>Recovered: {this.state.totalRecovered35}</Text>
                <Text>Deaths: {this.state.totalDeaths35}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 4.57,
              longitude: -74.3,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Colombia"}</Text>
                <Text>Confirmed: {this.state.totalCases36}</Text>
                <Text>Recovered: {this.state.totalRecovered36}</Text>
                <Text>Deaths: {this.state.totalDeaths36}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -0.23,
              longitude: 15.83,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"congo-brazzaville"}</Text>
                <Text>Confirmed: {this.state.totalCases37}</Text>
                <Text>Recovered: {this.state.totalRecovered37}</Text>
                <Text>Deaths: {this.state.totalDeaths37}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -4.04,
              longitude: 21.76,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"congo-kinshasa"}</Text>
                <Text>Confirmed: {this.state.totalCases38}</Text>
                <Text>Recovered: {this.state.totalRecovered38}</Text>
                <Text>Deaths: {this.state.totalDeaths38}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 9.75,
              longitude: -83.75,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"costa-rica"}</Text>
                <Text>Confirmed: {this.state.totalCases39}</Text>
                <Text>Recovered: {this.state.totalRecovered39}</Text>
                <Text>Deaths: {this.state.totalDeaths39}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 45.1,
              longitude: 15.2,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Croatia"}</Text>
                <Text>Confirmed: {this.state.totalCases40}</Text>
                <Text>Recovered: {this.state.totalRecovered40}</Text>
                <Text>Deaths: {this.state.totalDeaths40}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 21.52,
              longitude: -77.78,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Cuba"}</Text>
                <Text>Confirmed: {this.state.totalCases41}</Text>
                <Text>Recovered: {this.state.totalRecovered41}</Text>
                <Text>Deaths: {this.state.totalDeaths41}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 35.13,
              longitude: 33.43,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Cyprus"}</Text>
                <Text>Confirmed: {this.state.totalCases42}</Text>
                <Text>Recovered: {this.state.totalRecovered42}</Text>
                <Text>Deaths: {this.state.totalDeaths42}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 49.82,
              longitude: 15.47,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"czech-republic"}</Text>
                <Text>Confirmed: {this.state.totalCases43}</Text>
                <Text>Recovered: {this.state.totalRecovered43}</Text>
                <Text>Deaths: {this.state.totalDeaths43}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 7.54,
              longitude: -5.55,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"cote-divoire"}</Text>
                <Text>Confirmed: {this.state.totalCases44}</Text>
                <Text>Recovered: {this.state.totalRecovered44}</Text>
                <Text>Deaths: {this.state.totalDeaths44}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 56.26,
              longitude: 9.5,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Denmark"}</Text>
                <Text>Confirmed: {this.state.totalCases45}</Text>
                <Text>Recovered: {this.state.totalRecovered45}</Text>
                <Text>Deaths: {this.state.totalDeaths45}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 11.83,
              longitude: 42.59,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Djibouti"}</Text>
                <Text>Confirmed: {this.state.totalCases46}</Text>
                <Text>Recovered: {this.state.totalRecovered46}</Text>
                <Text>Deaths: {this.state.totalDeaths46}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 15.41,
              longitude: -61.37,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Dominica"}</Text>
                <Text>Confirmed: {this.state.totalCases47}</Text>
                <Text>Recovered: {this.state.totalRecovered47}</Text>
                <Text>Deaths: {this.state.totalDeaths47}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 18.74,
              longitude: -70.16,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"dominican-republic"}</Text>
                <Text>Confirmed: {this.state.totalCases48}</Text>
                <Text>Recovered: {this.state.totalRecovered48}</Text>
                <Text>Deaths: {this.state.totalDeaths48}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -1.83,
              longitude: -78.18,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Ecuador"}</Text>
                <Text>Confirmed: {this.state.totalCases49}</Text>
                <Text>Recovered: {this.state.totalRecovered49}</Text>
                <Text>Deaths: {this.state.totalDeaths49}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 26.82,
              longitude: 30.8,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Egypt"}</Text>
                <Text>Confirmed: {this.state.totalCases50}</Text>
                <Text>Recovered: {this.state.totalRecovered50}</Text>
                <Text>Deaths: {this.state.totalDeaths50}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 13.79,
              longitude: -88.9,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"el-salvador"}</Text>
                <Text>Confirmed: {this.state.totalCases51}</Text>
                <Text>Recovered: {this.state.totalRecovered51}</Text>
                <Text>Deaths: {this.state.totalDeaths51}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 1.65,
              longitude: 10.27,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"equatorial-guinea"}</Text>
                <Text>Confirmed: {this.state.totalCases52}</Text>
                <Text>Recovered: {this.state.totalRecovered52}</Text>
                <Text>Deaths: {this.state.totalDeaths52}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 15.18,
              longitude: 39.78,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Eritrea"}</Text>
                <Text>Confirmed: {this.state.totalCases53}</Text>
                <Text>Recovered: {this.state.totalRecovered53}</Text>
                <Text>Deaths: {this.state.totalDeaths53}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 58.6,
              longitude: 25.01,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Estonia"}</Text>
                <Text>Confirmed: {this.state.totalCases54}</Text>
                <Text>Recovered: {this.state.totalRecovered54}</Text>
                <Text>Deaths: {this.state.totalDeaths54}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 9.15,
              longitude: 40.49,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Ethiopia"}</Text>
                <Text>Confirmed: {this.state.totalCases55}</Text>
                <Text>Recovered: {this.state.totalRecovered55}</Text>
                <Text>Deaths: {this.state.totalDeaths55}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: -16.58,
              longitude: 179.41,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Fiji"}</Text>
                <Text>Confirmed: {this.state.totalCases56}</Text>
                <Text>Recovered: {this.state.totalRecovered56}</Text>
                <Text>Deaths: {this.state.totalDeaths56}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 61.92,
              longitude: 25.75,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Finland"}</Text>
                <Text>Confirmed: {this.state.totalCases57}</Text>
                <Text>Recovered: {this.state.totalRecovered57}</Text>
                <Text>Deaths: {this.state.totalDeaths57}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 46.23,
              longitude: 2.21,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"France"}</Text>
                <Text>Confirmed: {this.state.totalCases58}</Text>
                <Text>Recovered: {this.state.totalRecovered58}</Text>
                <Text>Deaths: {this.state.totalDeaths58}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -0.8,
              longitude: 11.61,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Gabon"}</Text>
                <Text>Confirmed: {this.state.totalCases59}</Text>
                <Text>Recovered: {this.state.totalRecovered59}</Text>
                <Text>Deaths: {this.state.totalDeaths59}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 13.44,
              longitude: -15.31,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Gambia"}</Text>
                <Text>Confirmed: {this.state.totalCases60}</Text>
                <Text>Recovered: {this.state.totalRecovered60}</Text>
                <Text>Deaths: {this.state.totalDeaths60}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 42.32,
              longitude: 43.36,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Georgia"}</Text>
                <Text>Confirmed: {this.state.totalCases61}</Text>
                <Text>Recovered: {this.state.totalRecovered61}</Text>
                <Text>Deaths: {this.state.totalDeaths61}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 51.17,
              longitude: 10.45,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Germany"}</Text>
                <Text>Confirmed: {this.state.totalCases62}</Text>
                <Text>Recovered: {this.state.totalRecovered62}</Text>
                <Text>Deaths: {this.state.totalDeaths62}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 7.95,
              longitude: -1.02,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Ghana"}</Text>
                <Text>Confirmed: {this.state.totalCases63}</Text>
                <Text>Recovered: {this.state.totalRecovered63}</Text>
                <Text>Deaths: {this.state.totalDeaths63}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 39.07,
              longitude: 21.82,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Greece"}</Text>
                <Text>Confirmed: {this.state.totalCases64}</Text>
                <Text>Recovered: {this.state.totalRecovered64}</Text>
                <Text>Deaths: {this.state.totalDeaths64}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 12.26,
              longitude: -61.6,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Grenada"}</Text>
                <Text>Confirmed: {this.state.totalCases65}</Text>
                <Text>Recovered: {this.state.totalRecovered65}</Text>
                <Text>Deaths: {this.state.totalDeaths65}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 15.78,
              longitude: -90.23,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Guatemala"}</Text>
                <Text>Confirmed: {this.state.totalCases66}</Text>
                <Text>Recovered: {this.state.totalRecovered66}</Text>
                <Text>Deaths: {this.state.totalDeaths66}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 9.95,
              longitude: -9.7,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Guinea"}</Text>
                <Text>Confirmed: {this.state.totalCases67}</Text>
                <Text>Recovered: {this.state.totalRecovered67}</Text>
                <Text>Deaths: {this.state.totalDeaths67}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 11.8,
              longitude: -15.18,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"guinea-bissau"}</Text>
                <Text>Confirmed: {this.state.totalCases68}</Text>
                <Text>Recovered: {this.state.totalRecovered68}</Text>
                <Text>Deaths: {this.state.totalDeaths68}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 4.86,
              longitude: -58.93,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Guyana"}</Text>
                <Text>Confirmed: {this.state.totalCases69}</Text>
                <Text>Recovered: {this.state.totalRecovered69}</Text>
                <Text>Deaths: {this.state.totalDeaths69}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 18.97,
              longitude: -72.29,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Haiti"}</Text>
                <Text>Confirmed: {this.state.totalCases70}</Text>
                <Text>Recovered: {this.state.totalRecovered70}</Text>
                <Text>Deaths: {this.state.totalDeaths70}</Text>			
              </View>
            </Callout>
		</Marker>


		<Marker             
			coordinate={{
			  latitude: 41.9,
              longitude: 12.45,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"holy-see-vatican-city-state"}</Text>
                <Text>Confirmed: {this.state.totalCases71}</Text>
                <Text>Recovered: {this.state.totalRecovered71}</Text>
                <Text>Deaths: {this.state.totalDeaths71}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 15.2,
              longitude: -86.24,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Honduras"}</Text>
                <Text>Confirmed: {this.state.totalCases72}</Text>
                <Text>Recovered: {this.state.totalRecovered72}</Text>
                <Text>Deaths: {this.state.totalDeaths72}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 47.16,
              longitude: 19.5,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Hungary"}</Text>
                <Text>Confirmed: {this.state.totalCases73}</Text>
                <Text>Recovered: {this.state.totalRecovered73}</Text>
                <Text>Deaths: {this.state.totalDeaths73}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 64.96,
              longitude: -19.02,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Iceland"}</Text>
                <Text>Confirmed: {this.state.totalCases74}</Text>
                <Text>Recovered: {this.state.totalRecovered74}</Text>
                <Text>Deaths: {this.state.totalDeaths74}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 20.59,
              longitude: 78.96,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"India"}</Text>
                <Text>Confirmed: {this.state.totalCases75}</Text>
                <Text>Recovered: {this.state.totalRecovered75}</Text>
                <Text>Deaths: {this.state.totalDeaths75}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: -0.79,
              longitude: 113.92,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Indonesia"}</Text>
                <Text>Confirmed: {this.state.totalCases76}</Text>
                <Text>Recovered: {this.state.totalRecovered76}</Text>
                <Text>Deaths: {this.state.totalDeaths76}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 32.43,
              longitude: 53.69,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"iran"}</Text>
                <Text>Confirmed: {this.state.totalCases77}</Text>
                <Text>Recovered: {this.state.totalRecovered77}</Text>
                <Text>Deaths: {this.state.totalDeaths77}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 33.22,
              longitude: 43.68,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Iraq"}</Text>
                <Text>Confirmed: {this.state.totalCases78}</Text>
                <Text>Recovered: {this.state.totalRecovered78}</Text>
                <Text>Deaths: {this.state.totalDeaths78}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 53.41,
              longitude: -8.24,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Ireland"}</Text>
                <Text>Confirmed: {this.state.totalCases79}</Text>
                <Text>Recovered: {this.state.totalRecovered79}</Text>
                <Text>Deaths: {this.state.totalDeaths79}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 31.05,
              longitude: 34.85,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Israel"}</Text>
                <Text>Confirmed: {this.state.totalCases80}</Text>
                <Text>Recovered: {this.state.totalRecovered80}</Text>
                <Text>Deaths: {this.state.totalDeaths80}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 41.87,
              longitude: 12.57,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Italy"}</Text>
                <Text>Confirmed: {this.state.totalCases81}</Text>
                <Text>Recovered: {this.state.totalRecovered81}</Text>
                <Text>Deaths: {this.state.totalDeaths81}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 18.11,
              longitude: -77.3,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Jamaica"}</Text>
                <Text>Confirmed: {this.state.totalCases82}</Text>
                <Text>Recovered: {this.state.totalRecovered82}</Text>
                <Text>Deaths: {this.state.totalDeaths82}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 36.2,
              longitude: 138.25,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Japan"}</Text>
                <Text>Confirmed: {this.state.totalCases83}</Text>
                <Text>Recovered: {this.state.totalRecovered83}</Text>
                <Text>Deaths: {this.state.totalDeaths83}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 30.59,
              longitude: 36.24,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Jordan"}</Text>
                <Text>Confirmed: {this.state.totalCases84}</Text>
                <Text>Recovered: {this.state.totalRecovered84}</Text>
                <Text>Deaths: {this.state.totalDeaths84}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: -0.02,
              longitude: 37.91,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Kenya"}</Text>
                <Text>Confirmed: {this.state.totalCases85}</Text>
                <Text>Recovered: {this.state.totalRecovered85}</Text>
                <Text>Deaths: {this.state.totalDeaths85}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 35.91,
              longitude: 127.77,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"korea-south"}</Text>
                <Text>Confirmed: {this.state.totalCases86}</Text>
                <Text>Recovered: {this.state.totalRecovered86}</Text>
                <Text>Deaths: {this.state.totalDeaths86}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 29.31,
              longitude: 47.48,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Kuwait"}</Text>
                <Text>Confirmed: {this.state.totalCases87}</Text>
                <Text>Recovered: {this.state.totalRecovered87}</Text>
                <Text>Deaths: {this.state.totalDeaths87}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 41.2,
              longitude: 74.77,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Kyrgyzstan"}</Text>
                <Text>Confirmed: {this.state.totalCases88}</Text>
                <Text>Recovered: {this.state.totalRecovered88}</Text>
                <Text>Deaths: {this.state.totalDeaths88}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 19.86,
              longitude: 102.5,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"lao-pdr"}</Text>
                <Text>Confirmed: {this.state.totalCases89}</Text>
                <Text>Recovered: {this.state.totalRecovered89}</Text>
                <Text>Deaths: {this.state.totalDeaths89}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 56.88,
              longitude: 24.6,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Latvia"}</Text>
                <Text>Confirmed: {this.state.totalCases90}</Text>
                <Text>Recovered: {this.state.totalRecovered90}</Text>
                <Text>Deaths: {this.state.totalDeaths90}</Text>			
              </View>
            </Callout>
		</Marker>
		  
		<Marker             
			coordinate={{
			  latitude: 33.85,
              longitude: 35.86,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Lebanon"}</Text>
                <Text>Confirmed: {this.state.totalCases91}</Text>
                <Text>Recovered: {this.state.totalRecovered91}</Text>
                <Text>Deaths: {this.state.totalDeaths91}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 6.43,
              longitude: -9.43,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Liberia"}</Text>
                <Text>Confirmed: {this.state.totalCases92}</Text>
                <Text>Recovered: {this.state.totalRecovered92}</Text>
                <Text>Deaths: {this.state.totalDeaths92}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 26.34,
              longitude: 17.23,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Libya"}</Text>
                <Text>Confirmed: {this.state.totalCases93}</Text>
                <Text>Recovered: {this.state.totalRecovered93}</Text>
                <Text>Deaths: {this.state.totalDeaths93}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 47.17,
              longitude: 9.56,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Liechtenstein"}</Text>
                <Text>Confirmed: {this.state.totalCases94}</Text>
                <Text>Recovered: {this.state.totalRecovered94}</Text>
                <Text>Deaths: {this.state.totalDeaths94}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 55.17,
              longitude: 23.88,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Lithuania"}</Text>
                <Text>Confirmed: {this.state.totalCases95}</Text>
                <Text>Recovered: {this.state.totalRecovered95}</Text>
                <Text>Deaths: {this.state.totalDeaths95}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 49.82,
              longitude: 6.13,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Luxembourg"}</Text>
                <Text>Confirmed: {this.state.totalCases96}</Text>
                <Text>Recovered: {this.state.totalRecovered96}</Text>
                <Text>Deaths: {this.state.totalDeaths96}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: 41.61,
              longitude: 21.75,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"macedonia"}</Text>
                <Text>Confirmed: {this.state.totalCases97}</Text>
                <Text>Recovered: {this.state.totalRecovered97}</Text>
                <Text>Deaths: {this.state.totalDeaths97}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -18.77,
              longitude: 46.87,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Madagascar"}</Text>
                <Text>Confirmed: {this.state.totalCases98}</Text>
                <Text>Recovered: {this.state.totalRecovered98}</Text>
                <Text>Deaths: {this.state.totalDeaths98}</Text>			
              </View>
            </Callout>
		</Marker>
		
		<Marker             
			coordinate={{
			  latitude: -13.25,
              longitude: 34.3,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Malawi"}</Text>
                <Text>Confirmed: {this.state.totalCases99}</Text>
                <Text>Recovered: {this.state.totalRecovered99}</Text>
                <Text>Deaths: {this.state.totalDeaths99}</Text>			
              </View>
            </Callout>
		</Marker>

		<Marker             
			coordinate={{
			  latitude: 4.21,
              longitude: 101.98,
            }}>
            <Callout style={styles.plainView}>
              <View>
				<Text>Country: {"Malaysia"}</Text>
                <Text>Confirmed: {this.state.totalCases100}</Text>
                <Text>Recovered: {this.state.totalRecovered100}</Text>
                <Text>Deaths: {this.state.totalDeaths100}</Text>			
              </View>
            </Callout>
		</Marker>
		

        </MapView>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});