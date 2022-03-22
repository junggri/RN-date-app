import reactotron, {networking} from 'reactotron-react-native';

reactotron
   .configure() // controls connection & communication settings
   .useReactNative() // add all built-in react native plugins
   .use(networking())
   .connect(); // let's connect!
