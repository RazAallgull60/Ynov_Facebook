import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Profil from '../Profil'

const Container = styled.View`
	flex: 1;
`
const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
`
const User = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #222121;
`
const Time = styled.Text`
	font-size: 9px;
	color: #747476;
`
const Post = styled.Text`
	font-size: 12px;
	color: #222121;
	line-height: 16px;
	padding: 0 11px;
`
const Photo = styled.Image`
	margin-top: 9px;
	width: 100%;
	height: 300px;
`
const Footer = styled.View`
	padding: 0 11px;
`
const FooterCount = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const IconCount = styled.View`
	background: #1878f3;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`
const TextCount = styled.Text`
	font-size: 11px;
	color: #424040;
`
const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`
const FooterMenu = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const Button = styled.TouchableOpacity`
	flex-direction: row;
`
const Icon = styled.View`
	margin-right: 6px;
`
const Text = styled.Text`
	font-size: 12px;
	color: #424040;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const FilActu = () => {
	return (
		<>
			<Container>
				<Header>
					<Row>
						<Profil
							source={require('../../../assets/user1.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>REACT NATIVE MAN</User>
							<Row>
								<Time>2 jours</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>

					<Entypo
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
				</Header>

				<Post>Merci à mon intervenant pour m'avoir fait découvrir React-Native :) !</Post>
				<Photo source={require('../../../assets/post3.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>2K</TextCount>
						</Row>
						<TextCount>808 commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Like</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commentaire</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>

			<Container>
				<Header>
					<Row>
						<Profil
							source={require('../../../assets/user3.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>Elyes NK</User>
							<Row>
								<Time>9 mois</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>

					<Entypo
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
				</Header>

				<Post>
					Paris, ma ville lumière... merci de m'offrir ce spectacle tous les soirs !
				</Post>
				<Photo source={require('../../../assets/post1.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>78</TextCount>
						</Row>
						<TextCount>19 commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Like</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commentaire</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>

			<Container>
				<Header>
					<Row>
						<Profil
							source={require('../../../assets/user2.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>ZEPECK</User>
							<Row>
								<Time>5 heures</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>

					<Entypo
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
				</Header>

				<Post>Coucher de soleil dans ma foutue campagne mdrr</Post>
				<Photo source={require('../../../assets/post2.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>126</TextCount>
						</Row>
						<TextCount>28 commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Like</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commentaire</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>

			
		</>
	)
}

export default FilActu