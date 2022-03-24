import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Story from './src/components/Story'
import Navbar from './src/components/Navbar'
import Toolbar from './src/components/Toolbar'
import User from './src/components/User'
import FilActu from './src/components/FilActu'

const Container = styled.SafeAreaView`
	flex: 1;
`

const App = () => {
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

export default App