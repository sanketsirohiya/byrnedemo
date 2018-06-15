import React from "react";
import { StyleSheet, Text, View ,Image} from 'react-native';

export default Header = () =>{
    return(
        <View style={styles.header}>
            <Image source={require('../assets/logo.png')}
                style={{height: 100 , width: 120}}/>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Today's Menu</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        height: 130,
        padding: 10,
        alignItems: 'center',
    }
});