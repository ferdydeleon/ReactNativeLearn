import { useState } from "react";
import { StyleSheet, TextInput, View,Button } from "react-native";

function GoalInput(props) {

    const [enterGoalText, setEnterGoal] = useState('');

    function goalInput(enterText) {
        setEnterGoal(enterText);
      }

    function addGloalHandler() {
        props.onddGoal(enterGoalText);
        setEnterGoal('');
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your goal"
          onChangeText={goalInput}
          value={enterGoalText}
        />
        <Button title="Add Goal" onPress={addGloalHandler} />
      </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 5,
      },
});
