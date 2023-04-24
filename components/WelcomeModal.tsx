import React from "react";
import { Modal, View , Text, Button, Image} from "react-native";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../constants";
import styles from '../assets/Style';


function WelcomeModal({showModal, setShowModal}: any) {

return (

<Modal visible={showModal} animationType="slide" style={{height:'100%'}}>
<View style={{alignItems: 'center', padding: 20}}>
    <View style={{height:45}}/>
  <Text style={{color:COLOR_SECONDARY, fontSize: 40, fontWeight: '700', padding: 0, margin: 0}}>
    Welcome to the app PlantDoctor!</Text>
    <View style={{height:45}}/>
  <Text style={styles.infoText}>Welcome to my plant disease analysis application!
    This application is designed to help you identify and diagnose plant diseases. 
    Whether you are a farmer, gardener, or plant enthusiast, this app can provide you 
    with the information you need to keep your plants healthy and happy.
  Using machine learning algorithms including deep neural networks, the app can analyze photos 
  of your plants and determine the specific disease or pest that may be affecting them. 
  With this application, you can quickly identify the problem and take the necessary 
  steps to treat and prevent further damage. This app makes the process of dealing with plant diseases 
  as easy and efficient as possible. My goal is to help you keep your plants healthy and beautiful, 
  and I hope that my app will be a valuable tool in achieving that goal.
  </Text>
</View>
<View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 100}}>
    <Button title="Let's get started!" onPress={() => setShowModal(false)} color={COLOR_PRIMARY} />
</View>
<Image
    source={require('../screens/SettingsTab/PlantDoctor_logo.png')}
    style={{width: 300, height: 100, resizeMode: 'center', position: "absolute", alignSelf: 'center', bottom: 40}}/>
</Modal>)
}
export default WelcomeModal;

