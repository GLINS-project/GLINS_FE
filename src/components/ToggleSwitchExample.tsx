import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const ToggleSwitchExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{true: '#767577', false: '#81b0ff'}}
        thumbColor={isEnabled ? '#d4d4d0' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToggleSwitchExample;
