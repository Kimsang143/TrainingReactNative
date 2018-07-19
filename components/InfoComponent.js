import React, { Component } from 'react';

import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight,StyleSheet,TouchableOpacity
} from 'react-native';
import { Settings } from '../screenNames';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#007256';

export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Info';
        let drawerIcon = () => (
            <Image
                source={require('../icons/info-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} />

            <View style={styles.container}>
     

      <View style={styles.secondrow}>
        
        <Image style={styles.imageLogo}

            source={{uri: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/33399983_1676044052514802_5432614123080777728_n.jpg?_nc_cat=0&oh=72157d6c18df26bbac4edfaf8fb488bb&oe=5BDB7B83'}}/>

          <TouchableOpacity style={{marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#f2f2f2',
                    borderWidth: .5,
                    borderColor: '#fff',
                    height: 40,
                    borderRadius: 5 ,}}
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate(Settings);                                             
                    }}>     
 
         <Image 
          source={require('../icons/abc.png')} 
          style={styles.iconImage}
          />
 
         <Text style={styles.textView}>
              ScrollView
          </Text>
 
       </TouchableOpacity>
      </View>
      <View style={styles.thirdrow}>


          <TouchableOpacity style={{marginTop: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#f2f2f2',
                    borderWidth: .5,
                    borderColor: '#fff',
                    height: 40,
                    borderRadius: 5 ,}}>
 
         <Image 
          source={require('../icons/home-icon.png')} 
          style={styles.iconImage}
          />
 
         <Text style={styles.textView}>Manager User
          </Text>
 
       </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#f2f2f2',
                    borderWidth: .5,
                    borderColor: '#fff',
                    height: 40,
                    borderRadius: 5 ,}}>
 
         <Image 
          source={require('../icons/call-icon.png')} 
          style={styles.iconImage}
          />
 
         <Text style={styles.textView}>N/A
          </Text>
 
       </TouchableOpacity>

      <TouchableOpacity style={{marginTop: 3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#f2f2f2',
                    borderWidth: .5,
                    borderColor: '#fff',
                    height: 40,
                    borderRadius: 5,}}>
 
         <Image 
          source={require('../icons/email-icon.png')} 
          style={styles.iconImage}
          />
 
         <Text style={styles.textView}>Usermanager@gmail.com
          </Text>
 
       </TouchableOpacity>

      </View>
   
      </View>

            
        </View>);
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2041',
  },


  secondrow: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: "#fff"
  },

  thirdrow: {
    flex: 1,
    backgroundColor: "#fff"
  },

  imageLogo: {
    width: 130,
    height: 130,
    marginTop: 40,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,

  },

  iconImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
  },

  textView: {
    color: "#000",
    marginBottom : 4,
    fontSize: 18,
    marginRight :20,

  },


  LayoutView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
  },

 
  
});