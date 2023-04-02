import React, {useState, useEffect} from 'react'
import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import { COLOR_PRIMARY } from '../constants';


export default function CustomLoadingModal() {
    const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
    const loadingMsgs = ["uploading data", "analyzing", "looking real close", "almost there"];

    useEffect(() => {
      setLoadingMsgIndex(0); // Reset the message index each time the component is mounted
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (loadingMsgIndex < loadingMsgs.length - 1) {
                setLoadingMsgIndex(loadingMsgIndex + 1);
            }
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, [loadingMsgIndex, loadingMsgs.length]);

    const currentLoadingMsg = loadingMsgs[loadingMsgIndex];
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color={COLOR_PRIMARY} />
          <Text style={styles.loadingText}>{currentLoadingMsg}</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      loadingText: {
        marginTop: 10,
        color: '#ffffff',
        fontSize: 18,
      },
})