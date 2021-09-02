import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';


export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [valor3, setValor3] = useState(0);
  const [res1, setResultado1] = useState(0);
  const [res2, setResultado2] = useState(0);

  function operaciones(valor1,valor2,valor3){
    var a= parseFloat(valor1);
    var b= parseFloat(valor2);
    var c= parseFloat(valor3);
    var discriminante = Math.pow(b,2)-(4*(a*c))
    if(discriminante > 0){
      var x1= (-b + Math.sqrt(discriminante))/(2*(a))
      var x2= (-b - Math.sqrt(discriminante))/(2*(a))

      setResultado1(x1);
      setResultado2(x2);
    }
    else{
      setResultado1("El discriminante es menor a 0, por lo cual existen raices imaginarias");
      setResultado2("El discriminante es menor a 0, por lo cual existen raices imaginarias");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora ecuaciones cuadraticas</Text>
      <TextInput style={styles.TextInput} placeholder='Valor a' keyboardType='numeric' onChangeText={(valor1)=>setValor1(valor1)}/>
      <TextInput style={styles.TextInput} placeholder='Valor b' keyboardType='numeric' onChangeText={(valor2)=>setValor2(valor2)}/>
      <TextInput style={styles.TextInput} placeholder='Valor c' keyboardType='numeric' onChangeText={(valor3)=>setValor3(valor3)}/>

      <TouchableOpacity  style={styles.boton} onPress={()=>{operaciones(valor1,valor2,valor3)}}>
        <Text style={{color:'white',fontSize:24,textAlign:'center'}}>Operar</Text>
        </TouchableOpacity>

        <Text style={styles.texto}>X1: {res1}</Text>
        <Text style={styles.texto}>X2: {res2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCD6F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    marginTop:20,
    fontSize: 25,
    color:'#4E4C67',
  },
  titulo:{
    padding:15, 
    backgroundColor:'#B4869F', 
    borderRadius:12,
    fontSize:20,
    color:'#985F6F'
  },
  boton:{
    marginTop:30,
    padding:10, 
    backgroundColor:'#985F6F', 
    borderRadius:12,
    fontSize:20,
    color:'#DCEDFF',
    width: 130,
  },
  TextInput:{
    borderWidth:2,
    padding:5,
    borderColor:'#8F91A2',
    marginTop:20,
    backgroundColor:'#A6B1E1',
    color: '#DCEDFF',
    width: 350,
  },
  combobox:{
    borderWidth:2,
    padding:5,
    borderColor:'#8F91A2',
    marginTop:20,
    backgroundColor:'#505A5B',
    color: '#DCEDFF',
    width: 350,
  }
});