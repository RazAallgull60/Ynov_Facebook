import React from 'react';
import Story from '../../src/components/Story'
import Navbar from '../../src/components/Navbar'
import Toolbar from '../../src/components/Toolbar'
import User from '../../src/components/User'
import FilActu from '../../src/components/FilActu'
import { StatusBar, ScrollView } from 'react-native'
import styled from 'styled-components/native'


const Container = styled.SafeAreaView`
	flex: 1;
`


const Home = ({routes}) =>{
    return (
		<>
			<StatusBar
				backgroundColor='#FFFFFF'
				barStyle='dark-content'
			/>
			<Container>
				<ScrollView>
					<Navbar />
					<Toolbar />
					<User />
					<Story />
					<FilActu />
				</ScrollView>
			</Container>
		</>
	)
}

export default Home