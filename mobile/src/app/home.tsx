import { useEffect, useState } from "react";
import { Alert, View, Image } from "react-native";
import MapView, { Marker, MarkerPressEvent } from "react-native-maps";

import { api } from "@/services/api";

import { Places } from "@/components/places";
import { PlaceProps } from "@/components/place";
import { Categories, CategoriesProps } from "@/components/categories";

type EstablishmentsProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -20.4642286,
  longitude: -54.6173566,
};

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [establishments, setEstablishments] = useState<EstablishmentsProps[]>(
    []
  );
  const [pressedMarker, setPressedMarker] = useState("");

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Erro ao buscar categorias.");
    }
  }

  async function fetchEstablishments() {
    try {
      if (!category) return;
      const { data } = await api.get("/establishments/category/" + category);
      setEstablishments(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Locais", "Erro ao buscar locais.");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchEstablishments();
  }, [category]);

  const handleMarkerPress = (event: MarkerPressEvent) => {
    const markerId = event.nativeEvent.id;
    setPressedMarker(markerId);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#cecece" }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {establishments.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            onPress={handleMarkerPress}
          >
            <View
              style={{
                position: "relative",
                width: 35,
                height: 35,
              }}
            >
              {pressedMarker === item.id && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "red",
                    opacity: 0.3,
                    borderRadius: 100,
                  }}
                />
              )}
              <Image
                source={require("@/assets/pin.png")}
                style={{
                  marginTop: 8,
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                  transform: [{ scale: pressedMarker === item.id ? 1.2 : 1 }],
                }}
              />
            </View>
          </Marker>
        ))}
      </MapView>
      <Places
        data={establishments}
        selectedId={pressedMarker}
        setPressedMarker={setPressedMarker}
      />
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
    </View>
  );
}
