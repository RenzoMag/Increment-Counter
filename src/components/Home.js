import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { doc, updateDoc, increment, onSnapshot } from "firebase/firestore";
import { db } from '../../.env/firebase';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

function Home() {

  const Ref = doc(db, "incrementCounter", "counter");     //  Referencia al path absoluto en la base de datos de firestore.

  async function sendData(){      
    try{
    await updateDoc(Ref,      //  Actualiza los campos en el documento al que hace referencia la constante Ref.
      {contador: increment(1)})     //  Incremento el valor actual del objeto contador, en 1 unidad.
    } catch(e) {      //  (Error handling).
      alert("Ha ocurrido un error inesperado"), 
      console.log(error)};
  }

  const [counter, setCounter] = useState(0);      //  Uso de useState para poder renderizar correctamente el valor del contador.
  const a = onSnapshot(Ref, (doc) => {      //  Uso de onSnapshot para detectar las actualizaciones en el objeto contador.
    setCounter(doc.data().contador.toLocaleString('en-US'));    //  Obtiene el valor específico del objeto y lo formatea para poder renderizar el contador de miles. (Ej: 1000 => 1,000)
  },
    (error) =>{     //  (Error handling).
      alert("Ha ocurrido un error inesperado")
      console.log(error)}
  ); 



  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffffff', '#9a49ff']}
        style={styles.container}
        start={{x: 1.1, y: 1.1}}
        end={{x: 0.15, y: 0.15}}
      >
      <Image source={{uri: 'https://crushsocialnetwork.com/logo-transparent.38ab9da5.png'}} style={styles.img} />
      <View style={styles.conttx}>
      <Text style={styles.tx}>{counter}</Text>
      </View>
      <Button mode="elevated" onPress={sendData}>
        Increment!
      </Button>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 50,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight + 10,
  },

  tx:{
    fontSize: 60,
    fontWeight: "300",
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 15, 
    paddingLeft: 15, 
    color: "white",
  },

  conttx:{
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255,255,255, 0.13);",
    borderRadius: 20,
    borderColor: "rgba(0,0,0, 0.1);",
    borderWidth: 1,
  }
});

export default Home;