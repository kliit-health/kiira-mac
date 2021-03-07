import React, {useState} from 'react';
import {Text} from 'react-native';
import Modal from 'react-native-root-modal';
import {useDispatch} from 'react-redux';
import {setLoading} from '../redux/actions/loading';

const Loader = ({isLoading}) => {
  return (
    <Modal
      style={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
      visible={isLoading}>
      <Text>Loading...</Text>
    </Modal>
  );
};

const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const setLoadingState = (isComponentLoading) => {
      dispatch(setLoading(isComponentLoading));
      setIsLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <Loader message={loadingMessage} isLoading={isLoading} />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }

  return HOC;
};

export default IsLoadingHOC;
