import React , { Component } from 'react';
import { View ,Text ,Image ,Button } from 'react-native';
import ErrorBoundary from './errorboundary.js';
// export default class HelloWorld extends Component {
//   render(){
//     let pic = {
//       uri:"https://image.redbull.com/rbcom/052/2017-02-23/1e56f938-5932-4164-8b9d-d3d4f069d9be/0001/1/1024/1/mick-corbett-taking-the-drop-at-nazare.jpg",
//     };
//     return(
//       <View style = {{alignItems:'center',marginTop:30}}>
//         <Greetings name="Snehal"/>
//         <Greetings name="Jyothi"/>
//         <Greetings name="Pranav"/>
//         <Image source={pic} style={{width:300,height:110}}/>
//       </View>

//     );
//   }
// }
// const Greetings = (props) => {
//   return(
//     <Text>Hello {props.name}!</Text>
//   );
// }

class Blink extends Component{
  
  render(){
    return new error('NOOOO BROO');
    return(
      <Text>{this.props.text}</Text>
    );
    }
}
class BlinkBlink extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShowingText : true,
    };
    this.yes = true;
  }
  handleClick = () => {
    if(this.yes)
    {
      this.blinky = setInterval(()=>{
        this.setState(previousState => {
          return {isShowingText:!previousState.isShowingText};
        });
      },1000);
      this.yes=false;
    }
    else{
      clearInterval(this.blinky);
      this.yes=true;
    }
  }
  render(){
    let text = (
    <View style={{alignContent:'center',flexDirection:'row',overflow:'scroll',flexWrap:'wrap'}}>
      <ErrorBoundary>
        <Blink text="f"/>
      </ErrorBoundary>
      {/* <Blink text="u"/>
      <Blink text="c"/>
      <Blink text="k"/> */}
    </View>
  );
  let display = this.state.isShowingText?text:(<Text></Text>);
    return(
      <View style = {{alignSelf:'center',marginTop:100}}>
        <View style={{width:200,height:100,borderWidth:1}}>
          {display}
        </View>
        <View style={{marginTop:100}}>
          <Button
          onPress = {this.handleClick}
          title='Toggle'
          />
        </View> 
      </View>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <BlinkBlink/>
    );
  }
}
