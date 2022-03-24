import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Profil from '../Profil'

const Container = styled.View`
	width: 100%;
	height: 192px;
	flex-direction: row;
	align-items: center;
`
const Card = styled.View`
	width: 106px;
	height: 170px;
	position: relative;
	margin-right: 8px;
`
const CardStory = styled.Image`
	width: 100%;
	height: 170px;
	border-radius: 12px;
`
const CardUser = styled.View`
	position: absolute;
	top: 8px;
	left: 8px;
	background: #ffffff;
	border-radius: 20px;
	width: 39px;
	height: 39px;
	align-items: center;
	justify-content: center;
`
const CardFooter = styled.View`
	width: 100%;
	position: absolute;
	bottom: 12px;
	left: 9px;
`
const Text = styled.Text`
	font-size: 13px;
	font-weight: bold;
	color: #ffffff;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Story = () => {
	return (
		<>
			<Container>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingLeft: 11 }}>
					<Card>
						<CardStory
							source={require('../../../assets/story1.jpg')}
						/>
						<CardUser>
							<AntDesign
								name='plus'
								size={24}
								color='#1777f2'
							/>
						</CardUser>
						<CardFooter>
							<Text>Créer une Story</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('../../../assets/story2.jpg')}
						/>
						<CardUser>
							<Profil
								source={require('../../../assets/user2.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>ZEPECK</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('../../../assets/story3.jpg')}
						/>
						<CardUser>
							<Profil
								source={require('../../../assets/user3.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Elyes NK</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('../../../assets/story4.jpg')}
						/>
						<CardUser>
							<Profil
								source={require('../../../assets/user4.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Assa Sylla</Text>
						</CardFooter>
					</Card>
				</ScrollView>
			</Container>
			<BottomDivider />
		</>
	)
}

export default Story