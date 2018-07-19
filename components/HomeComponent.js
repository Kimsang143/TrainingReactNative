import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,StyleSheet,TextInput
} from 'react-native';
import { Info } from '../screenNames';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#e56969';
export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Image
                source={require('../icons/home-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return {drawerLabel, drawerIcon};
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>      
            <HeaderComponent {...this.props} />      
            <View style={styles.container}>

          <View style={styles.firstrow}>
            
              <Image style={{ width: 130,
                    height: 130,
                    marginTop: 20,
                    borderRadius: 63,
                    marginLeft: 5,
                    borderWidth: 4,
                    borderColor: "white",
                    marginBottom:10,}}
              source={{uri: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/33399983_1676044052514802_5432614123080777728_n.jpg?_nc_cat=0&oh=72157d6c18df26bbac4edfaf8fb488bb&oe=5BDB7B83'}}/>

              <Text style={{ color: "#000",
                    width: 160,
                    height: 130,
                    marginLeft: 120,
                    marginTop: 70,
                    fontSize: 25,
                    marginBottom : 4,
                    }}>IPC BIOBANK
              </Text>



          </View>
          <View style={styles.secondrow}>



              <Text style={{ color: "#fff",
                    fontSize: 14,
                    marginLeft: 20,
                    fontSize: 16,
                    marginBottom : 4,
                    color: '#000'
                    }}>Login
              </Text>

              <View style={{borderBottomColor: '#F5FCFF',
                  backgroundColor: '#FFFFFF',
                  borderBottomWidth: 1,
                  borderRadius:5,
                  marginRight: 5,
                  marginLeft: 5,
                  height:45,
                  marginTop: 5,
                  marginBottom:20,
                  flexDirection: 'row',
                  }}>

                <Image style={{  width:30,
                    height:30,
                    marginLeft:15,
                    marginTop: 5,
                    justifyContent: 'center'}} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={{height: 45,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1,}}
                    placeholder="Username"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
              </View>

              <Text style={{ color: "#fff",
                    fontSize: 14,
                    marginLeft: 20,
                    fontSize: 16,
                    marginBottom : 4,
                    color: '#000'
                    }}>Password
              </Text>
              
              <View style={{borderBottomColor: '#F5FCFF',
                    backgroundColor: '#FFFFFF',
                    borderRadius:5,
                    borderBottomWidth: 1,
                    marginRight: 5,
                    marginLeft: 5,
                    height:45,
                    marginLeft: 5,
                    marginBottom:20,
                    flexDirection: 'row',
                    alignItems:'center'}}>

                <Image style={{    width:30,
                    height:30,
                    marginLeft:15,
                    justifyContent: 'center'}} 
                    source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>

                <TextInput style={{height:45,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1,}}

                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
              </View>

              <TouchableHighlight style={{    height:45,
                    flexDirection: 'row',
                  
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom:20,
                    marginRight: 5,
                    marginLeft: 5,
                    backgroundColor: '#0066ff',
                    borderRadius:30,}} 
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate(Info);                                             
                    }}>

                <Text style={{color: 'white',}}>Login</Text>

              </TouchableHighlight>

            


          </View>
          <View style={styles.thirdrow}>

          </View>
   



      </View>
        </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },

  firstrow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#e6e6e6"
  },

  secondrow: {
    flex: 2,
    shadowColor: '#393c42',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  
    backgroundColor: "#fff"
  },

  thirdrow: {
    flex: 1,
    backgroundColor: "#e6e6e6"
  },

 
  
});