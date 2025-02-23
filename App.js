import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [homens, setHomens] = useState('');
  const [mulheres, setMulheres] = useState('');
  const [criancas, setCriancas] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Exercício 1 - Calculadora de Maioridade</Text>
      <View style={{ marginBottom: 20 }} />

      <TextInput
        placeholder="Digite sua Idade"
        keyboardType="numeric"
        onChangeText={(pIdade) => setIdade(parseInt(pIdade) || 0)}
        style={styles.input}
      />
      <View style={{ marginBottom: 20 }} />

      <Button
        title="Calcular Maioridade"
        onPress={() => {
          if (idade < 18) {
            alert('Você é menor de idade');
          } else {
            alert('Você é maior de idade');
          }
        }}
      />
      <View style={{ marginBottom: 40 }} />

      <Text style={{ fontSize: 30 }}>Exercício 2 - Cálculo de IMC</Text>
      <View style={{ marginBottom: 20 }} />

      <TextInput
        placeholder="Digite sua Altura em Centímetros"
        keyboardType="numeric"
        onChangeText={(pAltura) => setAltura(parseFloat(pAltura) || 0)}
        style={styles.input}
      />
      <TextInput
        placeholder="Digite seu Peso em Kg"
        keyboardType="numeric"
        onChangeText={(pPeso) => setPeso(parseFloat(pPeso) || 0)}
        style={styles.input}
      />
      <View style={{ marginBottom: 20 }} />

      <Button
        title="Calcular IMC"
        onPress={() => {
          const pesoNum = parseFloat(peso) || 0;
          const alturaNum = parseFloat(altura) || 1;
          const IMC = pesoNum / ((alturaNum / 100) * (alturaNum / 100));

          let resultado;
          if (IMC < 18.5) resultado = 'Abaixo do Peso';
          else if (IMC < 25) resultado = 'Peso Normal';
          else if (IMC < 30) resultado = 'Sobrepeso';
          else if (IMC < 35) resultado = 'Obesidade Grau 1';
          else if (IMC < 40) resultado = 'Obesidade Grau 2';
          else resultado = 'Obesidade Grau 3';

          alert(resultado);
        }}
      />
      <View style={{ marginBottom: 40 }} />

      <Text style={{ fontSize: 30 }}>Exercício 3 - Churrascômetro</Text>
      <View style={{ marginBottom: 20 }} />

      <Text style={{ fontSize: 15 }}>Informe Quantos Homens Maiores de 11 anos Haverão no Churrasco</Text>
      <TextInput
        placeholder="Homens 11+"
        keyboardType="numeric"
        onChangeText={(pHomens) => setHomens(parseInt(pHomens) || 0)}
        style={styles.input}
      />
      <View style={{ marginBottom: 20 }} />

      <Text style={{ fontSize: 15 }}>Informe Quantas Mulheres Maiores de 11 anos Haverão no Churrasco</Text>
      <TextInput
        placeholder="Mulheres 11+"
        keyboardType="numeric"
        onChangeText={(pMulheres) => setMulheres(parseInt(pMulheres) || 0)}
        style={styles.input}
      />
      <View style={{ marginBottom: 20 }} />

      <Text style={{ fontSize: 15 }}>Informe a quantidade de crianças menores de 11 anos</Text>
      <TextInput
        placeholder="Crianças 11-"
        keyboardType="numeric"
        onChangeText={(pCriancas) => setCriancas(parseInt(pCriancas) || 0)}
        style={styles.input}
      />
      <View style={{ marginBottom: 20 }} />

      <Button
        title="Calcular"
        onPress={() => {
          const homensNum = parseInt(homens) || 0;
          const mulheresNum = parseInt(mulheres) || 0;
          const criancasNum = parseInt(criancas) || 0;

          const totalChurrasco = ((homensNum * 400) + (mulheresNum * 400 - ((mulheresNum * 400) * 0.25)) + (criancasNum * 200)) / 1000;
          
          const totalCarvao = totalChurrasco / 6

          alert(
              `A quantidade de carne necessária é ${totalChurrasco.toFixed(2)} Kg \n 
              ${totalCarvao.toFixed(0)} sacos de carvão serão necessários \n
              Carne para Homens: ${(homensNum * 400) / 1000 } Kg\n
              Carne para Mullheres: ${(mulheresNum * 400 - ((mulheresNum * 400) * 0.25)) / 1000} Kg
              Carne para Crianças: ${(criancasNum * 200) / 1000} Kg`
            );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: { borderBottomWidth: 1, width: 200, marginBottom: 10, textAlign: 'center' },
});
