import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

const GenericHelp = (): JSX.Element => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.firstTitle}>Disesase Analysis</Text>
      <Text style={styles.normalText}>In order to analyze the plant disease, go to the Analyze tab and either take images using your camera 
      roll or select them from gallery. You need to provide pictures of the leaf, preferably from both sides. Make 
      sure to properly crop it so that the entire image is in view, taking about 80-90% of the photo. Then, select 
      the species of plant and when you are happy with the chosen pictures, click on the analyze button and wait for 
      the result. After you get the back the results, you can see certainty of the top 5 possible diseases the prediction 
      model is giving. You can click the disease button to view details, pictures of the disease and treatment tips.
      </Text>

      <Text style={styles.titleText}>Encyclopedia - list of known diseases</Text>
      <Text style={styles.normalText}>Select a specific plant and browse the list of known diseases that can afflict this species. 
      You can click the disease to view a detail overview with pictures and treatment advices.
      </Text>

    <Text style={styles.titleText}>History - previous analysis</Text>
    <Text style={styles.normalText}>In the History tab, you can find previous analysis you made, you can sort through them by plant species and date, 
    you can click it to view overview of the predicted diseases and from the overview screen, you can also open the disease 
    detail and view the recommended treatment for that disease.
    </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: "#fff"
  },
  firstTitle: {
    fontWeight: 'bold',
    paddingBottom: 15
  },
  titleText: {
    fontWeight: 'bold',
    paddingVertical: 15
  },
  normalText: {
    paddingBottom: 10
  }
});

export default GenericHelp;