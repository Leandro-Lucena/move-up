import { View, Text } from "react-native";
import { IconPhone, IconMapPin } from "@tabler/icons-react-native";

import { Info } from "../info";
import { s } from "./styles";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>
      <View style={s.group}>
        <Text style={s.title}>Informações</Text>
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
    </View>
  );
}
