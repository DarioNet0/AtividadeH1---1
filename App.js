import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {

  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>
        Exercício 1
      </Text>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <TextInput 
        placeholder='Digite sua Idade'
        onChangeText={(pIdade) => setIdade(pIdade)}
      />
      <br/>
      <br/>
      <Button
        title='Calcular Maioridade'
        onPress={() => {
          if (idade < 18) {
            alert('Você é menor de idade');
          }
          else {
            alert('Você é maior de idade');
          }
        }} 
      />
      <br/>
      <br/>      
      <Text style={{fontSize: 30}}>
        Exercício 2
      </Text>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <TextInput
        placeholder='Digite sua Altura em Centímetros'
        onChangeText={(pAltura) => setAltura(pAltura)}
      />
      <TextInput
        placeholder='Digite seu Peso em Kg'
        onChangeText={(pPeso) => setPeso(pPeso)}
      />
      <br/>
      <br/>
      <Button
        title='Calcular IMC'
        onPress={() => {
          const IMC = peso / ((altura / 100) * (altura / 100));

          if (IMC < 18.5) {
            alert('Abaixo do Peso');
          }
          else if (IMC >= 18.5 && IMC <= 24.9) {
            alert('Peso Normal');
          }
          else if (IMC >= 25 && IMC <= 29.9) {
            alert('Sobrepeso');
          }
          else if (IMC >= 30 && IMC <= 34.9) {
            alert('Obesidade Grau 1');
          }
          else if (IMC >= 35 && IMC <= 39.9) {
            alert('Obesidade Grau 2');
          }
          else {
            alert('Obesidade Grau 3');
          }
        }} 
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
