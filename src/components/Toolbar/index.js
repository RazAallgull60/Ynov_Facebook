import React from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Profil from '../Profil'

const Container = styled.View`
	width: 100%;
	height: 92px;
`
const Row = styled.View`
	flex-direction: row;
	background: #ffffff;
	width: 100%;
	padding: 0 11px;
	align-items: center;
`
const Input = styled.TextInput`
	height: 50px;
	width: 100%;
	padding: 0 8px;
`
const Divider = styled.View`
	width: 100%;
	height: 0.5px;
	background: #f0f0f0;
`
const Menu = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 42px;
`
const MenuText = styled.Text`
	padding-left: 11px;
	font-weight: 500;
	font-size: 12px;
`
const Separator = styled.View`
	width: 1px;
	height: 26px;
	background: #f0f0f0;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Toolbar = () => {
	return (
		<>
			<Container>
				<Row>
					<Profil source={require('../../../assets/user1.jpg')} />
					<Input placeholder="Quoi de neuf ?" />
				</Row>
				<Divider />
				<Row>
					<Menu>
						<Ionicons name='ios-videocam' size={22} color='#F44337' />
						<MenuText>En direct</MenuText>
					</Menu>
					<Separator />

					<Menu>
						<MaterialIcons
							name='photo-size-select-actual'
							size={20}
							color='#4CAF50'
						/>
						<MenuText>Photo</MenuText>
					</Menu>
					<Separator />

					<Menu>
						<MaterialCommunityIcons
							name='video-plus'
							size={22}
							color='#E141FC'
						/>
						<MenuText>Salon</MenuText>
					</Menu>
				</Row>
			</Container>
			<BottomDivider />
		</>
	)
}

export default Toolbar