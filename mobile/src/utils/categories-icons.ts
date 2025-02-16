import {
  IconProps,
  IconKarate,
  IconBarbellFilled,
  IconBarbellOff,
  IconStretching,
  IconGymnastics,
  IconBox,
  IconRings,
  IconPillFilled,
  IconYoga,
} from "@tabler/icons-react-native";

export const categoriesIcons: Record<string, React.ComponentType<IconProps>> = {
  "52e81585-f71a-44cd-8bd0-49771e45da44": IconKarate, //Artes Marciais
  "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee": IconBarbellOff, //Calistenia
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": IconStretching, //CrossFit
  "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2": IconGymnastics, //Dança
  "826910d4-187d-4c15-88f4-382b7e056739": IconBox, //Funcional
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": IconBarbellFilled, //Hipertrofia
  "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c": IconRings, //Pilates
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": IconPillFilled, //Suplementação
  "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45": IconYoga, //Yoga
};
