import { useEffect, useState } from "react";
import { View, StatusBar, Alert, ScrollView, Linking } from "react-native";
import { router, useLocalSearchParams, Redirect } from "expo-router";

import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { Cover } from "@/components/establishment/cover";
import { Details, PropsDetails } from "@/components/establishment/details";

import { api } from "@/services/api";

type DataProps = PropsDetails & {
  cover: string;
};

export default function Establishment() {
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(true);
  const params = useLocalSearchParams<{ id: string }>();

  async function fetchEstablishment() {
    try {
      const { data } = await api.get(`/establishments/${params.id}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao buscar estabelecimento.", [
        { text: "OK", onPress: () => router.back() },
      ]);
    }
  }

  useEffect(() => {
    fetchEstablishment();
  }, [params.id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <Redirect href="/home" />;
  }

  const handleCall = () => {
    if (data.phone) {
      Linking.openURL(`tel:${data.phone}`);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleCall}>
          <Button.Title>Entrar em contato</Button.Title>
        </Button>
      </View>
    </View>
  );
}
