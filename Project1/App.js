import React , { Component } from 'react';
import { View ,Text ,Image ,Button, StyleSheet ,Platform ,TextInput , 
  TouchableHighlight ,Alert,ScrollView} from 'react-native';
import ErrorBoundary from './errorboundary.js';
class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state={
      text:''
    };
  }
  _onPressButton = ()=>{
   Alert.alert('hey');
  }
  render(){
    let pic = {
      uri:"https://image.redbull.com/rbcom/052/2017-02-23/1e56f938-5932-4164-8b9d-d3d4f069d9be/0001/1/1024/1/mick-corbett-taking-the-drop-at-nazare.jpg",
    };
      
    return(  
     <View style = {{flex:1,marginTop:(Platform.OS=='ios'?21:24)}}>
        <View style={{flex:1, backgroundColor: '#2B59C3',flexDirection:'row'}}>
            <View style = {{
              flex:1 , 
              backgroundColor:'#F8F0FB',
              margin:2
            }}> 
            <TouchableHighlight onPress={this._onPressButton}>
              <Text>HEY</Text>
            </TouchableHighlight>

            </View>
          <View style = {{
            flex:5 , 
            backgroundColor:'#EBBAB9',
            margin:2,
            alignItems:'center',
            justifyContent:'center'

          }}>
          <TextInput
        style={{height:40,width:100, borderColor: 'green', borderWidth: 1 ,color:'red'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder='Type here'
        underlineColorAndroid='transparent'
        />
          </View>
          <View style = {{
            flex:1 , 
            backgroundColor:'#F8F0FB',
            margin:2
          }}/>
        </View>
        <View style={{flex:10, backgroundColor: '#F5DBCB'}} >
            <ScrollView>
            <View style = {{
              flex:1 , 
              height:100,
              width:100,
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
              flex:1 , height:100,
              width:100,
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
              flex:1 , 
              height:100,
              width:100,
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
              flex:1 , 
              height:100,
              width:100,
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
              flex:1 , 
              height:100,
              width:100,
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
              flex:1 , 
              height:100,
              width:100,
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
              flex:1 ,
              height:100,
              width:100, 
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
          </ScrollView>
        </View>
        <View style={{flex:1, backgroundColor: '#2B59C3',flexDirection:'row'}}>
          <View style = {{
              flex:1 , 
              backgroundColor:'#F8F0FB',
              margin:2
            }}/>
            <View style = {{
            flex:1 , 
            backgroundColor:'#F8F0FB',
            margin:2
          }}/>
          <View style = {{
            flex:1 , 
            backgroundColor:'#F8F0FB',
            margin:2
          }}/>
          <View style = {{
            flex:1 , 
            backgroundColor:'#F8F0FB',
            margin:2
          }}/>
          <View style = {{
            flex:1 , 
            backgroundColor:'#F8F0FB',
            margin:2
          }}/>
        </View>
      </View>
    );
  }
}
const Greetings = (props) => {
  return(
    <Text style={props.ss}>Hello {props.name}!</Text>
  );
}
const styles = StyleSheet.create({
  bigBlue : {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigBlack :{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  }
})

// class Blink extends Component{
  
//   render(){
//     return(
//       <Text>{this.props.text}</Text>
//     );
//     }
// }
// class BlinkBlink extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isShowingText : true,
//     };
//     this.yes = true;
//   }
//   handleClick = () => {
//     if(this.yes)
//     {
//       this.blinky = setInterval(()=>{
//         this.setState(previousState => {
//           return {isShowingText:!previousState.isShowingText};
//         });
//       },1000);
//       this.yes=false;
//     }
//     else{
//       clearInterval(this.blinky);
//       this.yes=true;
//     }
//   }
//   render(){
//     let text = (
//     <View style={{alignContent:'center',flexDirection:'row',overflow:'scroll',flexWrap:'wrap'}}>
//     <Blink text="f"/>
//     <Blink text="u"/>
//     <Blink text="c"/>
//     <Blink text="k"/>
//     </View>
//   );
//   let display = this.state.isShowingText?text:(<Text></Text>);
//     return(
//       <View style = {{alignSelf:'center',marginTop:100}}>
//         <View style={{width:200,height:100,borderWidth:1}}>
//           {display}
//         </View>
//         <View style={{marginTop:100}}>
//           <Button
//           onPress = {this.handleClick}
//           title='Toggle'
//           />
//         </View> 
//       </View>
//     );
//   }
// }

export default class App extends Component{
  render(){
    return(
      <HelloWorld/>
    );
  }
}

