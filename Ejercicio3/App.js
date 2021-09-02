import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';


export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [valor3, setValor3] = useState(0);
  const [valor4, setValor4] = useState(0);
  const [menor, setMenor] = useState(0);
  const [mayor, setMayor] = useState(0);

  function menorYmayor(A,B,C,D)
  {
    if((A>0 && B>0 && C>0 && D>0)){
      if(A > B && A > C && A > D){
        setMayor(A);
      }else{
        if(B > A && B > C && B > D){
          setMayor(B);
        }else{
            if(C > A && C > B && C > D){
              setMayor(C);
            }else
            setMayor(D);
        }
    }
    if(A < B && A < C && A < D){
        setMenor(A);
    }else{
        if(B < A && B < C && B < D){
          setMenor(B);
        }else{
            if(C < A && C < B && C < D){
              setMenor(C);
            }else
            setMenor(D);
        }


        if(menor > 10){
          setMayor(mayor+10);
        }
      
        if(mayor < 50){
          setMenor(menor-5);
        }
    }
    }else{
      setMenor("No se aceptan numeros negativos ni 0")
      setMayor("No se aceptan numeros negativos ni 0")
    }
  }

  function menorCondi(){
    var may;
    if(menor > 10){
      may=mayor+10
    }
    else{
      may= mayor
    }
    return may;
  }

  function mayorCondi(){
    var men;
    if(mayor < 50){
      men=menor-5
    }
    else{
      men= menor
    }
    return men;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Número mayor y número menor</Text>
      <TextInput style={styles.TextInput} placeholder='Valor 1' keyboardType='numeric' onChangeText={(valor1)=>setValor1(valor1)}/>
      <TextInput style={styles.TextInput} placeholder='Valor 2' keyboardType='numeric' onChangeText={(valor2)=>setValor2(valor2)}/>
      <TextInput style={styles.TextInput} placeholder='Valor 3' keyboardType='numeric' onChangeText={(valor3)=>setValor3(valor3)}/>
      <TextInput style={styles.TextInput} placeholder='Valor 4' keyboardType='numeric' onChangeText={(valor4)=>setValor4(valor4)}/>

      <TouchableOpacity  style={styles.boton} onPress={()=>{menorYmayor(parseFloat(valor1),parseFloat(valor2),parseFloat(valor3),parseFloat(valor4))}}>
        <Text style={{color:'white',fontSize:24,textAlign:'center'}}>Conocer</Text>
        </TouchableOpacity>

        <Text style={styles.texto}>Número Mayor: {menorCondi()}</Text>
        <Text style={styles.texto}>Número Menor: {mayorCondi()}</Text>
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
