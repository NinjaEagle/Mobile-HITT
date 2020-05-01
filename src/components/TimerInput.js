import React, {useState} from 'react'
import { StyleSheet, View, Modal, TextInput, Button} from 'react-native';

const TimerInput = ({isVisible, onCancel, addTimer}) => {
  const [time, setTime] = useState(null);
  const [title, setTitle] = useState('');

  const createTimer = () => {
    addTimer({time, title});
  };


  return (
		<Modal visible={isVisible}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Exercise Name'
					maxLength={24}
					onChangeText={(title) => {
						setTitle(title);
					}}
				/>

				<TextInput
					style={styles.input}
					placeholder='time'
					keyboardType={"numeric"}
					maxLength={2}
					value={time}
					onChangeText={(time) => {
						setTime(time);
					}}
				/>

				<View style={styles.btnContainer}>
					<Button title='Cancel' color='red' onPress={onCancel} />
					<Button title='Add' onPress={createTimer}/>
				</View>
			
      </View>
		</Modal>
	);
}

export default TimerInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '60%'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }
})
