import { View, Text } from "react-native";
import { IconMapPin, IconPhone, IconRoute } from "@tabler/icons-react-native";
import { s } from "./styles";
import { Step } from "../step";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Descubra as vantagens!</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros do MoveUp"
      />
      <Step
        icon={IconPhone}
        title="Entre em contato"
        description="Consiga os meios de contato dos estabelecimentos para tirar dúvidas e muito mais."
      />
    </View>
  );
}
