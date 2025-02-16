import { useRef } from "react";
import { useWindowDimensions, Text } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { colors } from "@/styles/theme";

import { Place, PlaceProps } from "../place";
import { s } from "./styles";

type Props = {
  data: PlaceProps[];
  selectedId: string;
  setPressedMarker: (id: string) => void;
};

export function Places({ data, selectedId, setPressedMarker }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 100,
  };

  const handlePress = (id: string) => {
    if (id === selectedId) {
      router.navigate(`/establishment/${id}`);
    } else {
      setPressedMarker(id);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            style={{
              backgroundColor:
                item.id === selectedId ? colors.blue.soft : "white",
              boxShadow:
                item.id === selectedId ? "2 2 10px rgba(0, 0, 0, 0.2)" : "none",
              padding: 12,
              transform: item.id === selectedId ? [{ scale: 1.005 }] : [],
              borderRadius: 10,
            }}
            onPress={() => handlePress(item.id)}
          />
        )}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Estabelecimentos encontrados</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
