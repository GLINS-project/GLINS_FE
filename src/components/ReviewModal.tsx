import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-simple-modal';

function ReviewModal() {
  const [Open, setOpen] = useState(false);
  return (
    <View style={{height: 200}}>
      <Modal open={Open}>

        <View>
          <Text>dd</Text>
        </View>
      </Modal>
    </View>
  );
}

export default ReviewModal;
