import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Profil from '../Profil'

const Container = styled.View`
	width: 100%;
	height: 58px;
	flex-direction: row;
	align-items: center;
`
const Room = styled.TouchableOpacity`
	width: 115px;
	height: 40px;
	flex-direction: row;
	align-items: center;
	border-radius: 20px;
	border-width: 1px;
	border-color: #82b1ff;
	padding: 0 15px;
	margin-right: 12px;
`
const Text = styled.Text`
	color: #1777f2;
	font-size: 12px;
	padding-left: 6px;
`
const Users = styled.View`
	margin-right: 13px;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const User = () => {
	return (
		<>
			<Container>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingLeft: 11 }}>
					<Room>
						<MaterialCommunityIcons
							name='video-plus'
							size={26}
							color='#E141FC'
						/>
						<Text>New Salon</Text>
					</Room>
					<Users>
						<Profil
							source={require('../../../assets/user2.jpg')}
							online={true}
						/>
					</Users>
					<Users>
						<Profil
							source={require('../../../assets/user3.jpg')}
							online={true}
						/>
					</Users>
					<Users>
						<Profil
							source={require('../../../assets/user4.jpg')}
						/>
					</Users>
					<Users>
						<Profil
							source={require('../../../assets/user5.jpg')}
						/>
					</Users>
					<Users>
						<Profil
							source={require('../../../assets/user3.jpg')}
						/>
					</Users>
				</ScrollView>
			</Container>
			<BottomDivider />
		</>
	)
}

export default User