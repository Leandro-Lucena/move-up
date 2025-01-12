import { Image, Text, View } from "react-native";
import { s } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image style={s.logo} source={require("@/assets/logo.png")} />
      <Text style={s.title}>Bem vindo ao Bargain Map</Text>
      <Text style={s.subtitle}>
        O Bargain Map é um aplicativo para encontrar promoções e descontos em
        lojas próximas a você.
      </Text>
    </View>
  );
}
