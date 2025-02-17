import {
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { IconTicket } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
  customStyle?: {};
};

export function Place({ data, customStyle, ...rest }: Props) {
  return (
    <TouchableOpacity style={[s.container, customStyle]} {...rest}>
      <Image style={s.image} source={{ uri: data.cover }} />
      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description} numberOfLines={2}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
