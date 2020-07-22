//import React from 'react';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput,ScrollView} from 'react-native';
import Recipe from './Recipe';


const App = () =>  {
 
  const APP_ID = '89026221';
  const APP_KEY = '5396ab327411357c2b7dc625cb8de41d'; 

 
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  // Its for INputText
  const [value, onChangeText] = React.useState('');
  // End of INputText

  const [counter, setCounter] = React.useState(0);

  const [recipes, setRecipes] = useState([])

  useEffect( () => {
    getRecipes();
    console.log('Effect has been run')
  }, []);

const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)

   const data = await response.json();
  //  document.write(data);
   console.log(data.hits);
   setRecipes(data.hits);
}
  


return (

 

      <View style={styles.container}>

        <ScrollView>
         
      
                
         <TextInput
                  style={{ height: 40, width: 220, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => onChangeText(text)}
                  value={value}
        />         

        <Button title="Search" onPress={() => setCounter(counter+1)}/> 
          
         <Text style={{fontSize: 20}}>{counter}</Text>


            {/* <View style={{ width: 100, height: 100 }}> */}
              {recipes.map(recipe => ( 
                  <Recipe 
                      key={recipe.recipe.label}
                      title={recipe.recipe.label} 
                      calories={recipe.recipe.calories} 
                      image={recipe.recipe.image}
                  />
                )
              )}
           {/* </View>  */}


           </ScrollView>

      </View>

      

    );
}

export default App;




const styles = StyleSheet.create({

  

  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#6dd5ed',
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
