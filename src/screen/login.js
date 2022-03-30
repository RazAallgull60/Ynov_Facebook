import React from 'react'
import {Text, Button, TextInput} from 'react-native'
import styled from 'styled-components/native'

const Login = ({navigation}) =>{

    const handleSubmit = () => {
       
                navigation.navigate('Home')
                         
    
    }
    return (
		<>
			   <Text> Identifiant </Text>
               <TextInput></TextInput>
               <Text>Mot de passe</Text>
               <TextInput></TextInput>
               <Button title="Connexion"
                onPress={handleSubmit}
                />
				
		</>
	)
}

export default Login