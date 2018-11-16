// Import libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


// Make a component
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.name}</Text>
        </View>
    );
};

// class Header extends Component{
//     render(){
//         return (
//             <View style={styles.header}>
//                 <Text style={styles.title}>{this.props.name}</Text>
//             </View>
//         );
//     }
// };


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height: 60,
        paddingTop: 15,
        borderColor: 'black',
        borderWidth: 2,
        elevation: 2,
        position: 'relative',
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 20},
        // shadowOpacity: 1,
      },
});


// Make the component available to other parts of the app
export default Header; 