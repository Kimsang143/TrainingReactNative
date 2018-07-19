import React, { Component } from 'react';
import { Settings } from '../screenNames';
import Button from 'react-native-button';
import {
    Text,StyleSheet ,View, Image, TouchableHighlight,ScrollView,FlatList,TouchableOpacity
} from 'react-native';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#e97600';
export default class SettingsComponent extends Component {

    constructor() {
    super();
    this.state = {
      data:[
        {id:1, image: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/33399983_1676044052514802_5432614123080777728_n.jpg?_nc_cat=0&oh=72157d6c18df26bbac4edfaf8fb488bb&oe=5BDB7B83", name:"Jim Jim",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maria More More",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Clark June Boom!", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      ]
    }
  }

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Settings';
        let drawerIcon = () => (
            <Image
                source={require('../icons/settings-icon.png')}
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



             <FlatList
                style={styles.root}
                data={this.state.data}
                extraData={this.state}
                ItemSeparatorComponent={() => {
                  return (
                    <View style={styles.separator}/>
                  )
                }}
                keyExtractor={(item)=>{
                  return item.id;
                }}

                renderItem={(item) => {
                  const Notification = item.item;
                  return(
                    <View style={styles.container}>
                      <TouchableOpacity onPress={() => {}}>
                        <Image style={styles.image} source={{uri: Notification.image}}/>
                      </TouchableOpacity>
                      <View style={styles.content}>
                        <View style={styles.contentHeader}>
                          <Text  style={styles.name}>{Notification.name}</Text>
                          <Text style={styles.time}>
                            9:58 am
                          </Text>
                        </View>
                        <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                      </View>
                    </View>
                  );
                }}/>

            


        </View>);
    }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{

    borderRadius:20,
    width: 60,
    height: 60,
    marginTop: 20,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});  