import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
 
export default function buttons({ text }) {
  return (
    <View style={styles.container}>
      <Link href="https://www.fiap.com/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      </Link>
 
      <Text style={styles.insign}>ou logue com</Text>
 
      <Link href="https://www.google.com" asChild>
        <Pressable style={styles.google}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.googleText}>Continue com o Google</Text>
        </Pressable>
      </Link>
 
        <Link href="https://on.fiap.com.br/" asChild>
        <Pressable style={styles.newaccount}>
          <Text style={styles.newText}>Criar uma conta</Text>
        </Pressable>
      </Link>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#F2155F',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  insign: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
  },
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#F3f3f3',
  },
  googleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newaccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    borderRadius: 10,
  },
  newText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:   '#F2155F',
  },
});