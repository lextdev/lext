import LottieView from "lottie-react-native";
import { View } from "react-native";

const Loader = () => {
  return (
    <View>
      <LottieView
        autoPlay
        style={{
          width: 120,
          height: 120,
        }}
        source={require("../../assets/animation/Loader.json")}
      />
    </View>
  );
};

export default Loader;
