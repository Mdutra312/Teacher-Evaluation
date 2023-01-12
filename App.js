import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, TextInput, Button,StyleSheet} from 'react-native';




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckBox } from 'react-native-web';

function  HomeScreen({ navigation }) {
  var [login, setLogin] = useState(true)
  var [senha, setSenha] = useState(true)
  var [login1, setLogin1] = useState(true)
  var [senha1, setSenha1] = useState(true)
  var [login2, setLogin2] = useState(true)
  var [senha2, setSenha2] = useState(true)


  var verificar = () => {
    if((login == true || senha ==true)){
     
      navigation.navigate('Tela3')
    }


    if((login2 == true || senha2 ==true)){
     
      navigation.navigate('Mapa')
    }


  
  }





  var verificar12 = () => {

    if((login2 == true || senha2 ==true)){
     
      navigation.navigate('Login')
    }


  
  }



  


  var [nome, setNome] = useState()

  var [mb, setMb] = useState(false);

  var [b, setB] = useState(false);

  var [r, setR] = useState(false);

  var [i, setI] = useState(false);


  var mb1 = ()=>{
    
    setMb(true)
    setI(false)
    setR(false)
    setB(false)
 
 }


 var b1 = ()=>{

  setB(true)
  setI(false)
  setR(false)
  setMb(false)
}


var R1 = ()=>{
    
  setB(false)
  setI(false)
  setR(true)
  setMb(false)

}


var I1 = ()=>{

  setB(false)
  setI(true)
  setR(false)
  setMb(false)

}




    var [nota, setNota] = useState()


    var [dados, setDados] = useState()
    var [pontosP, setPontoP] = useState()
    var [pontosN, setPontoN] = useState()
    var [isLoading, setLoading] = useState(true);
    var [data, setData] = useState([]);

    var verificar2 = () => {
        var valores = [nome, nota, pontosN, pontosP]


        fetch('http://localhost/prjFinalPAM/professor-json-inserir.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                nota: nota,
                pontosN: pontosN,
                pontosP: pontosP,
            })
        })

        setDados(valores)
    }



    var getProfessores = async() => {
        try {
            var response = await fetch('http://localhost/prjFinalPAM/professor-json.php');
            var json = await response.json();
            setData(json.professores);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfessores();
    }, []);

    return ( <
        View style = {
            { flex: 1, padding: 24,backgroundColor: '#AAB8FF' }
        } >

        <View  style = {
          { alignItems:'center' }
      }>
        
        <Text  style={styles.text2}>Avaliação de Docentes</Text>
        </View>


        <View >
        <Text   style={styles.text}>Professor</Text>


      <TextInput placeholder = 'Nome'
      placeholderTextColor={'#483D8B'}
      style={styles.input}
        autoFocus = { true }
        onChangeText = { text => setNome(text) }


        />
        
        
        </View>

        <Text   style={styles.text}>Menção </Text>
        <View style={{display: 'block', alignItems: 'center',flexDirection:'row' }}>


        <View style={{display: 'flex',flexDirection:'row', justifyContent: 'center', justifyContent:'space-around'}}>


          <View>
          <Text
          style={{alignItems:'center'}}
          
          style={styles.text3}>1</Text>

          <CheckBox 
          value={mb}
          onClick={()=>mb1()}

          onClick={()=>mb1(setNota('1') )}
          color={'#DC143C'}

          >
           
          </CheckBox>

          </View>


          <View>
          <Text   style={styles.text3}>2</Text>
          <CheckBox                                        
                  value={b}
                  onClick={()=>b1(setNota('2') )}
                  onClick={()=>b1()}
                  color={'#800000'}


          >
               
           </CheckBox>

          </View>

          <View>

          <Text   style={styles.text3}>3</Text>

           <CheckBox style={{display: 'block', alignItems: 'center' }} 
           onClick={()=>r1(setNota('3') )}
      
           value={r}
           onClick={()=>R1()}

           color={'#FF8C00'}

           >
           </CheckBox>
        

          </View>

          <View style={{display: 'display', alignItems: 'center'}}>


          <Text   style={styles.text3}>4</Text>

           <CheckBox 
             value={i}
             onClick={()=>I1(setNota('4') )}
         

               
             onClick={()=>I1()}
             color={'#0000CD'}
             >
           
           </CheckBox>

          </View>

             </View>

          
        </View>
        <View>
        <Text   style={styles.text}>Pontos Negativos</Text>
        
        <
        TextInput
        placeholder='Digite aqui' 
        placeholderTextColor={'#483D8B'}
        autoFocus = { true }
        onChangeText = { text => setPontoN(text) }
        style={styles.input}
        />      
        
        </View>




        <View>
        <Text   style={styles.text}>Pontos Positivos</Text>
        
        <
        TextInput
        placeholder='Digite aqui' 
        placeholderTextColor={'#483D8B'}
        style={styles.input}
        onChangeText = { text => setPontoP(text) }
        />           
        </View>

        <View  style={{marginTop:12, marginBottom:12}}   >
        
        
        <
        
        Button
        title="Enviar"
        
        borderRadius={10}
        color={'#6959CD'} 
        onPress = {
            () => verificar2()
        }
        style={{padding: 100, marginTop:10}}
        />
        
        
        </View>

        <Button


        style={styles.button}
 
         
         raised= {true}
         title="Login"
 
         color={'#6959CD'}      
 
         onPress={()=>verificar12()}
 
       />      



     
        
        < /View>
    );
}


function DetailsScreen({ navigation }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height:10 }}>
      <Text  style={styles.details}>Confira alguns parametros</Text>


      <View>
      


      </View>

     

      <View>
        
   
        


      <Button
        title="Entrar"

        color={'#6959CD'}
        onPress={() => navigation.navigate('Home')}
        style={styles.input}
      />

      </View>
    </View>
  );

  
}




function Mapa({ navigation }) {


  var [login, setLogin] = useState(true)
  var [senha, setSenha] = useState(true)
  var [login1, setLogin1] = useState(true)
  var [senha1, setSenha1] = useState(true)
  var [login2, setLogin2] = useState(true)
  var [senha2, setSenha2] = useState(true)


  var verificar2 = () => {
    if((login == true || senha ==true)){
     
      navigation.navigate('Tela3')
    }


    if((login1 == true || senha1 ==true)){
     
      navigation.navigate('Login')
    }
  
  }



  var verificarAdmin = () => {

    if((login2 != 'admin') || (senha2 !='123')){
     
      navigation.navigate('Login')
    }else{
      navigation.navigate('Mapa')

    }

  }



  var [nome, setNome] = useState()

  var [mb, setMb] = useState(false);

  var [b, setB] = useState(false);

  var [r, setR] = useState(false);

  var [i, setI] = useState(false);


  var mb1 = ()=>{
    
    setMb(true)
    setI(false)
    setR(false)
    setB(false)
 
 }


 var b1 = ()=>{

  setB(true)
  setI(false)
  setR(false)
  setMb(false)
}


var R1 = ()=>{
    
  setB(false)
  setI(false)
  setR(true)
  setMb(false)

}


var I1 = ()=>{

  setB(false)
  setI(true)
  setR(false)
  setMb(false)

}




    var [nota, setNota] = useState()


    var [dados, setDados] = useState()
    var [pontosP, setPontoP] = useState()
    var [pontosN, setPontoN] = useState()
    var [isLoading, setLoading] = useState(true);
    var [data, setData] = useState([]);

    var verificar2 = () => {
        var valores = [nome, nota, pontosN, pontosP]


        fetch('http://localhost:8080/prjFinalPAM/professor-json-inserir.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                nota: nota,
                pontosN: pontosN,
                pontosP: pontosP,
            })
        })

        setDados(valores)
    }



    var getProfessores = async() => {
        try {
            var response = await fetch('http://localhost:8080/prjFinalPAM/professor-json.php');
            var json = await response.json();
            setData(json.professores);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfessores();
    }, []);

  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height:10, backgroundColor:'#AAB8FF' }}>
      <Text  style={styles.details}>Lista de Avaliações</Text>

      <View style={{borderColor: '#483D8B', borderWidth: 1, borderRadius: 5, margin: 10}}>
        
      {
            isLoading ? < ActivityIndicator  /> : ( <
                FlatList data = { data }
                
                keyExtractor = {
                    ({ idCategoria }, index) => idCategoria
                }
                renderItem = {     

                    ({ item }) => ( <

                        
                        Text 
           


                        style={{padding: 10, color:'#483D8B', fontWeight: 700, borderWidth: 1}}
                        
                        > 
                        <View style={{}}>
                        { item.nome },

                        </View>
                        
                        
                        { item.nota }
                        
                        { item.pontosnegativos },
                        
                        
                        { item.pontosPositivos } < /Text>
                    )
                }
                />
            )
        }
       
      </View>

      <View style={{  }} >


      </View>
    </View>
  );

  
}

function Tela3({ navigation }) {

  return (
    <View style={{ backgroundColor: '#AAB8FF', height: 1000, justifyContent: 'center', padding: 100 }}>


        <View style={{ alignItems:'center' }} >

       <Text  style={styles.text2}>Avaliação de Docentes</Text>
        </View>



      <View>

      <TextInput placeholder = 'Email'
      
        style={{marginTop: 10}}
         placeholderTextColor={'#483D8B'}
        style={styles.input}
        autoFocus = { true }
        marginTop={10}
       


        />

      </View>

      <View   style={{marginTop: 10}}>

<TextInput placeholder = 'Senha'
   placeholderTextColor={'#483D8B'}
  style={styles.input}
  autoFocus = { true }
 


  />

</View>



    <View style={{ margin: 10}}>

      <Button
        color={'#6959CD'}
        title="Registre-se"
        onPress={() => navigation.navigate('Home')}
      />

    </View>


    <View style={{ margin: 10}}>


      <Button
        color={'#6959CD'}
        title="Login"
        onPress={() => verificarAdmin()}
      />

    </View>
    </View>
  );
}


var Stack = createNativeStackNavigator();




export default function App() {

  

  //parseFloat()	

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />        
        <Stack.Screen name="Details" component={DetailsScreen} />  
      

        <Stack.Screen name="Login" component={Tela3} /> 


        <Stack.Screen name="Mapa" component={Mapa} /> 


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'


  },
  input: {
    borderWidth: 2,
    borderColor: '#483D8B',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#F6D7D7',
    padding: 10,

  
    fontSize: 25,
    display: 'flex'
    

  },
  button: {
    display: 'flex',
    fontSize: 20,
    backgroundColor: 'red',
    padding: 100
  },

  text: {
    fontSize: 25,
    padding: 10,
    color: '#483D8B',
    fontWeight: 600
    
    
    
  },  
  view:{
    display: 'flex',
    
  },
  details:{
    padding: 10,
    textAlign: 'center',
    fontWeight: 800,
    color: '#483D8B',
    fontSize: 30
    
  },

  text2:{
    fontSize: 25,
    fontWeight: 700,
    color: '#483D8B'
    

  },

  text3:{
    fontSize: 25,
    fontWeight: 700,
    color: '#483D8B',
    alignItems:'center'
  
  },
  
  
});
