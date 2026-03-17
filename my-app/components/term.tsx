import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
 
export default function Term() {
  const [isChecked, setChecked] = useState(false);
 
  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#F2155F' : undefined}
      />
      <Text style={styles.text}>
        Me mantenha logado
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 16,
    color:'white'
  },
});