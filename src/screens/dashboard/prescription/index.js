// import React from 'react';
// import {View, Text, useWindowDimensions} from 'react-native';
// import {useSelector} from 'react-redux';

// import Container from '../../../components/container';
// import Section from '../../../components/section';
// import Spacer from '../../../components/spacer';
// import log from '../../../utils/functions/logger';

// function Prescription({navigation}) {
//   const state = useSelector((state) => state.authLoading);
//   const width = useWindowDimensions().width / 2;
//   const height = useWindowDimensions().height;

//   return (
//     <Container>
//       <Section>
//         <View
//           style={{
//             borderWidth: 2,
//             borderColor: '#0089FF',
//             flex: 1,
//           }}>
//           <Text
//             style={{
//               fontSize: 36,
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: 'black',
//               textAlign: 'center',
//             }}>
//             Prescription Left
//           </Text>
//         </View>
//       </Section>
//       <Spacer />
//       <Section>
//         <View
//           style={{
//             borderWidth: 2,
//             borderColor: '#0089FF',
//             flex: 1,
//           }}>
//           <Text
//             style={{
//               fontSize: 36,
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: 'black',
//               textAlign: 'center',
//             }}>
//             Prescription Right
//           </Text>
//         </View>
//       </Section>
//     </Container>
//   );
// }

// export default Prescription;

import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Container from '../../../components/container';
import Section from '../../../components/section';
import {WebView} from 'react-native-webview';
import {mergeStyles} from '../../../utils/functions';
import defaultStyles, {modifiers} from './styles';

const Prescription = () => {
  const [loading, setLoading] = useState(false);

  const styles = {
    loadingContainer: mergeStyles([
      defaultStyles.loadingContainer,
      [modifiers.loading.loadingContainer, !loading],
    ]),
  };

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <Container>
      <WebView
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        source={{uri: 'https://ayva-demo.dev.bravadocloud.com/#!/login'}}
        originWhitelist={['https://*']}
      />
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#008AFC" />
      </View>
    </Container>
  );
};

export default Prescription;
