import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, TextInput } from 'react-native';

const TimerInput = ({isVisible}) => {
  const [time, setSeconds] = useState(null);

  return (
    <Modal active={isVisible}>
      <View>
        <TextInput 
          placeholder = "time"
          keyboardType = {"numeric"}
          maxLength = {2}
          value = {time}
          onChangeText = {time => {
            setSeconds(time)
          }}
          />
      </View>
    </Modal>
  )
}

export default TimerInput

const styles = StyleSheet.create({})
