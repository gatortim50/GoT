import React, { useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import styles from './styles';
import ModalHeader from './ModalHeader';
import { Button } from '../../components';

// interface IProps extends ModalProps {
//   uri: string;
//   onClose: any;
//   onNavigationStateChange?: any;
// }

function ModalWebView(props) {
  const { title, URI_LINK } = props;
  const [isModalVisible, setModalVisible] = useState(true);

  function onClose() {
    console.log('close modal');
    setModalVisible(!isModalVisible);
  }

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <ModalHeader title={title} />
          <WebView
            originWhitelist={['*']}
            source={{
              uri: URI_LINK,
            }}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator
                color="#397400"
                size="large"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            )}
          />
          <View style={styles.buttonContainer}>
            <Button onPress={onClose} title={'Close'} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalWebView;
