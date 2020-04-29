import React from 'react'
import { SafeAreaView, Image, View, StyleSheet } from 'react-native'
import {
	Card,
	Divider,
	Icon,
	Layout,
	Text,
	TopNavigation,
	TopNavigationAction,
} from '@ui-kitten/components'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BackIcon = (props) => <Icon {...props} name='arrow-back' />

const ExercisesList = [
	{
		Exercise: 'Tabata',
		Image: '',
		Description: 'Fit into your busy schedule and easy to mix up!',
	},
	{
		Exercise: 'Running',
		Image: '',
		Description: 'Sprints',
	},
	{
		Exercise: 'AMRAP',
		Image: '',
		Description:
			'Do as many reps as you can for each exercise! Stay motivated :D',
	},
]

const Header = (props) => (
	<View {...props}>
		<Text category='h6'>Tabata</Text>
		<Image></Image>
	</View>
)

export const Exercise = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack()
	}

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	)

	return (
		// ScrollViews unlimited items
		<React.Fragment>
			<Layout style={styles.topContainer} level='2'>
				<Card style={styles.card} header={Header}>
					<Text>HIIT Exercises for you to choose</Text>
				</Card>
			</Layout>

			<Card style={styles.card} header={Header}>
				<Text>Fit into your busy schedule and easy to mix up!</Text>
			</Card>
		</React.Fragment>
		// <SafeAreaView style={{ flex: 1 }}>
		// 	<TopNavigation
		// 		title='HIIT Mobile App'
		// 		alignment='center'
		// 		leftControl={BackAction()}
		// 	/>
		// 	<Divider />
		// 	<Layout
		// 		style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		// 		<Text category='h1'>HIIT Exercises</Text>
		// 	</Layout>
		// 	<Layout
		// 		style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		// 		<Text category='h1'>Tabata</Text>
		// 		<View style={styles.container}>
		// 			<Image
		// 				style={styles.tinyLogo}
		// 				source={require('../../assets/imgs/running.jpg')}
		// 			/>
		// 			<Text category='h1'>Running</Text>
		// 		</View>
		// 	</Layout>
		// 	<Layout
		// 		style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		// 		<Text category='h1'>AMRAP (As many rounds as possible)</Text>
		// 	</Layout>
		// </SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
})
export default Exercise
