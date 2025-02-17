import { Text, View } from "react-native";
import { s } from "./styles";
import { IconBarbell, IconHealthRecognition } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

export function Welcome() {
  return (
    <View>
      <IconHealthRecognition
        style={s.logo}
        size={80}
        color={colors.blue.base}
      />
      <Text style={s.title}>Bem vindo ao MoveUp</Text>
      <Text style={s.subtitle}>
        O MoveUp é o seu guia definitivo para descobrir academias, estúdios de
        artes marciais, centros esportivos e espaços dedicados à sua saúde.
        Conecte-se a estabelecimentos próximos que oferecem treinos, aulas e
        atividades para melhorar seu condicionamento físico e qualidade de vida.
      </Text>
    </View>
  );
}
