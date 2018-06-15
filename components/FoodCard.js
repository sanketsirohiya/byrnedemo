import React from "react";
import { StyleSheet, Text, View ,Image,TouchableNativeFeedback} from 'react-native';

export default class FoodCard extends React.Component {
    state={
        food: this.props.food,
        details: false
    }
    _onPressButton=()=>{
        let details= !(this.state.details);
        this.setState({details: details});
    }
    render()
    {
        return(
        <View>
        <View style={{flexDirection: "row", borderColor:"white",borderWidth:1}}>
            <View style={{backgroundColor: "red",width: "10%"}}>
            <Text style={{ color:"white" ,marginTop:30,transform: [{ rotate: '90deg'}]}} >
                {this.state.food.tag}
            </Text>
            </View>
            <View style={{backgroundColor:"grey" , width:"70%"}}>
                <Text style={{ padding:10,color:"red", fontWeight:"bold"}}>
                {this.state.food.dish}
                </Text>
                
                <Text style={{ padding:10}}>
                Calories: {this.state.food.cal}
                </Text>
                
                <Text style={{ padding:10}}>
                Allergens: {this.state.food.Allergens}
                </Text>
            </View> 
            <View style={{width: "20%", backgroundColor: 'grey', justifyContent:"space-around"}}>
            <TouchableNativeFeedback
                    onPress = {this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{height: 50 , width: 50 }}>
                    <Image source={require('../assets/add.png')}   
                style={{height: 50 , width: 50 }}/>
                </View>                    
            </TouchableNativeFeedback>
            </View>   
        </View>
        {
            (this.state.details) && <View style={{backgroundColor:"#afb1b2",height: 200,justifyContent:"space-around",alignItems:"center"}}>
            <Text> Additional Info </Text>
            </View>
        }
        </View>
        )
    }
}
