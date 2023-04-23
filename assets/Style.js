import { StyleSheet } from 'react-native';
import {COLOR_SECONDARY} from '../constants';


/**
 * Generic stylesheet for text that is used throughout
 * the application.
 */
export default StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20
  },
  infoText: {
    color: COLOR_SECONDARY,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left'
  }
});

// In any of the files you want to use your style, add the following:
//    import styles from './Style'