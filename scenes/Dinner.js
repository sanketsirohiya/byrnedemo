import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import LunchMenu from "../assets/demoWeeklyLunchMenu.json";
import moment from 'moment';
import FoodCard from '../components/FoodCard';



export default class DinnerScreen extends React.Component{
    
     state={
             current: moment().format('e'),
     }
     componentDidMount=()=>{
         this.props.navigation.setParams({
             current: this.state.current
            });
     }
     componentWillMount=()=>{
         console.log("Will Mount");
         console.log(this.state.current);
         console.log(this.props.navigation.state.params);
         if(this.props.navigation.state.params)
         {
             let current= this.props.navigation.state.params.current;
             this.setState({current: current});
         } 
     }    
     _onPressButton=(current)=>{
         this.props.navigation.setParams({
            current: current
           });
         this.setState({current: current});

     }
     render(){
         let current=this.state.current;
         let currentday= Object.keys(LunchMenu)[current-1];         
         return(
             <View>
                 <ScrollView style={{height: '100%'}}>
                 <View>
                     {
                         LunchMenu[currentday].map((food)=> <FoodCard food={food}/>)
                     }
                     </View>
                 </ScrollView>
                 <View style={{flexDirection: "row",width:"100%",justifyContent: "space-around", position:"absolute" , bottom: 0}}>
                 {
                     Object.keys(LunchMenu).map((dayname,index)=> {
                     if(current==index+1)
                     return(<TouchableNativeFeedback
                         onPress = { ()=>{
                             this._onPressButton(index+1)
                         }}
                     background={TouchableNativeFeedback.SelectableBackground()}>
                     <View style={{borderWidth:0.7,borderColor:"grey",backgroundColor:"red",padding:10,width:"20%",alignItems:"center"}}>
                     <Text style={{color:"white"}}>{dayname}</Text>
                     <Text style={{color:"white"}}>{moment().subtract(moment().format('e'),'days').add(index+1,'days').format("MMM DD")}</Text>
                     </View>
                     </TouchableNativeFeedback>)
                     else
                     return(<TouchableNativeFeedback
                         onPress = { ()=>{
                             this._onPressButton(index+1)
                         }}
                         background={TouchableNativeFeedback.SelectableBackground()}>
                         <View style={{borderWidth:0.7,borderColor:"grey",backgroundColor:"white",padding:10,width:"20%",alignItems:"center"}}>
                         <Text style={{color:"grey"}}>{dayname}</Text>
                         <Text style={{color:"grey"}}>{moment().subtract(moment().format('e'),'days').add(index+1,'days').format("MMM DD")}</Text>
                         </View>
                         </TouchableNativeFeedback>)
                         }
                     )
                 }
                 </View>
             </View>
         );
     }
 }