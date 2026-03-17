import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import ButtonLogin from '@/components/buttonLogin';
import CheckboxTerm from '@/components/term';

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const TabsContainer = styled.View`  flex-direction: row;
  margin-bottom: 30px;`;

const Tab = styled.TouchableOpacity<{ active: boolean }>`  flex: 1;
  padding: 14px;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }) => (active ? "#F2155F" : "#333")};`;

const TabText = styled.Text<{ active: boolean }>`  font-size: 16px;
  color: ${({ active }) => (active ? "#F2155F" : "#888")};`;

const Input = styled.TextInput`  width: 100%;
  height: 55px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0 15px;
  color: white;
  margin-bottom: 15px;`;

export default function HomeScreen() {
const [activeTab, setActiveTab] = useState("email");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return ( <ThemedView style={styles.container}>

  <View style={styles.titleContainer}>
    <ThemedText type="title">Login</ThemedText>
    <ThemedText style={styles.subtitle}>
      Bem-Vindo de volta!
    </ThemedText>
  </View>

  <TabsContainer>
    <Tab active={activeTab === "email"} onPress={() => setActiveTab("email")}>
      <TabText active={activeTab === "email"}>Email</TabText>
    </Tab>

    <Tab active={activeTab === "phone"} onPress={() => setActiveTab("phone")}>
      <TabText active={activeTab === "phone"}>Telefone</TabText>
    </Tab>
  </TabsContainer>

  {activeTab === "phone" && (
    <Input
      placeholder="Telefone"
      placeholderTextColor="#777"
      keyboardType="phone-pad"
      value={phone}
      onChangeText={setPhone}
    />
  )}

  {activeTab === "email" && (
    <Input
      placeholder="Email"
      placeholderTextColor="#777"
      keyboardType="email-address"
      value={email}
      onChangeText={setEmail}
    />
  )}

  <Input
    placeholder="Senha"
    placeholderTextColor="#777"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
  />

  <CheckboxTerm />
      <ButtonLogin text="Login" />


</ThemedView>


);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 24,
backgroundColor: "black",
justifyContent: "center",
},

titleContainer: {
marginBottom: 30,
},

subtitle: {
marginTop: 5,
color: "gray",
},
});
