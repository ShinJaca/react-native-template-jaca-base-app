import React from "react";
import { View, Text } from "react-native";

import styles from './styles'

const Wellcome = () =>
    <View style={styles.container}>
        <Text style={styles.title}>Wellcome!</Text>
        <Text style={styles.text}>Basic app test template.</Text>
        <View style={styles.list}>
            <Text style={styles.text}>Navigation v4.x <Text style={styles.highlight}>OK</Text></Text>
            <Text style={styles.text}><Text style={styles.dirStructure}>+-- </Text>SwichNavigator<Text style={styles.highlight}>OK</Text></Text>

            <Text style={styles.text}>Redux<Text style={styles.highlight}>OK</Text></Text>
            <Text style={styles.text}>Redux-Saga<Text style={styles.highlight}>OK</Text></Text>

            <Text style={styles.text}>Reactotron <Text style={styles.highlight}>OK</Text></Text>
            <Text style={styles.text}><Text style={styles.dirStructure}>+-- </Text>Redux<Text style={styles.highlight}>OK</Text></Text>
            <Text style={styles.text}><Text style={styles.dirStructure}>+-- </Text>Saga<Text style={styles.highlight}>OK</Text></Text>
            <Text style={styles.text}>Babel root import<Text style={styles.highlight}>OK</Text></Text>


        </View>
    </View>

export default Wellcome;