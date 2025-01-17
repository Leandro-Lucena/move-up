import { prisma } from "@/database/prisma";

async function seed() {
  await prisma.category.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "Hipertrofia" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "Artes Marciais" },
      { id: "57d6e5ff-35f6-4d21-a521-84f23d511d25", name: "CrossFit" },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "Funcional" },
      { id: "abce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "Suplementação" },
      { id: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2", name: "Dança" },
      { id: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45", name: "Yoga" },
      { id: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee", name: "Calistenia" },
      { id: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c", name: "Pilates" },
    ],
  });

  await prisma.market.createMany({
    data: [
      // HIPERTROFIA
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Muscle Factory",
        description:
          "Treinamento personalizado para hipertrofia muscular. Técnicas avançadas e equipamentos de ponta.",
        latitude: -20.46145077030725,
        longitude: -54.61837610973717,
        address: "Av. Afonso Pena, 3297",
        phone: "(67) 94567-1212",
        cover:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300",
      },
      {
        id: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Power House",
        description:
          "Treinamento intensivo em grupo para hipertrofia muscular. Aulas dinâmicas e desafiadoras.",
        latitude: -20.447415686413258,
        longitude: -54.61021348520371,
        address: "Rua 14 de Julho, 2169",
        phone: "(67) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300",
      },
      {
        id: "4197b830-aa9c-40d4-a22e-c05043588a77",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Gainz Gym",
        description:
          "Treinamento de força e resistência para hipertrofia muscular. Aulas particulares e em grupo.",
        latitude: -20.47744350076335,
        longitude: -54.63471039611687,
        address: "Av. Mato Grosso, 3412",
        phone: "(67) 98765-4321",
        cover:
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300",
      },
      {
        id: "4209c72f-9d14-410c-91af-c24d08f177cc",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Body Building Club",
        description:
          "Treinamento de hipertrofia muscular para iniciantes e avançados. Aulas teóricas e práticas.",
        latitude: -20.46768988657675,
        longitude: -54.630219295782794,
        address: "Rua Brilhante, 1836",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300",
      },
      {
        id: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Iron Fitness",
        description:
          "Treinamento de hipertrofia muscular em grupo e particular. Aulas intensivas e desafiadoras.",
        latitude: -20.460613347175386,
        longitude: -54.61511286738634,
        address: "Av. Cônsul Assaf Trad, 4796",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      // ARTES MARCIAIS
      {
        id: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Martial Arts Haven",
        description:
          "Centro de treinamento avançado em artes marciais. Aulas para iniciantes e veteranos.",
        latitude: -20.452197578537245,
        longitude: -54.61552114923489,
        address: "Rua Rui Barbosa, 3498",
        phone: "(67) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300",
      },
      {
        id: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Samurai Dojo",
        description:
          "Treinamento tradicional de samurais. Explore o caminho do guerreiro com técnicas ancestrais.",
        latitude: -20.502494059684025,
        longitude: -54.64940854266478,
        address: "Av. Duque de Caxias, 1525",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300",
      },
      {
        id: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Dragon's Den",
        description:
          "Academia de artes marciais mistas. Aulas dinâmicas para todos os níveis de habilidade.",
        latitude: -20.513583839246746,
        longitude: -54.64287603308794,
        address: "Rua Pedro Celestino, 1214",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Kung Fu Academy",
        description:
          "Aprenda os segredos do Kung Fu com mestres experientes. Ambiente acolhedor e instrutivo.",
        latitude: -20.44550288789721,
        longitude: -54.6553286294688,
        address: "Av. Ernesto Geisel, 5259",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300",
      },
      {
        id: "78ced7b1-436b-42ca-9c66-747f2b671321",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "The Warrior's Way",
        description:
          "Intensivo de artes marciais para aprimorar suas habilidades. Treinamento focado e disciplinado.",
        latitude: -20.441103360967116,
        longitude: -54.59653604327718,
        address: "Rua Joaquim Murtinho, 2456",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=300",
      },
      // CROSSFIT
      {
        id: "7be85f5b-533f-4974-8c9e-75cae740041c",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Fênix",
        description:
          "Academia de CrossFit com treinamento intensivo e personalizado. Aulas dinâmicas e desafiadoras.",
        latitude: -20.45296266746624,
        longitude: -54.59102423832172,
        address: "Av. Eduardo Elias Zahran, 1573",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=400&h=300",
      },
      {
        id: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Evolution",
        description:
          "Treinamento de CrossFit para todos os níveis de habilidade. Aulas teóricas e práticas.",
        latitude: -20.47820846389348,
        longitude: -54.63654766443536,
        address: "Rua da Divisão, 1443",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300",
      },
      {
        id: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Arena",
        description:
          "Academia de CrossFit com treinamento de alta intensidade. Aulas dinâmicas e desafiadoras.",
        latitude: -20.454492833893504,
        longitude: -54.64981682451333,
        address: "Av. Presidente Vargas, 1146",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Matrix",
        description:
          "Treinamento de CrossFit com foco em condicionamento físico e técnica. Aulas individualizadas.",
        latitude: -20.468454898326137,
        longitude: -54.62001224956897,
        address: "Rua Bahia, 795",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300",
      },
      {
        id: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Nova Era",
        description:
          "Academia de CrossFit com treinamento de alta intensidade e foco em condicionamento físico.",
        latitude: -20.453153939103146,
        longitude: -54.6267489000701,
        address: "Av. Calógeras, 3100",
        phone: "(67) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=400&h=300",
      },
      // Funcional
      {
        id: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "FitZone",
        description:
          "Treinamento funcional com aulas dinâmicas e desafiadoras.",
        latitude: -20.437086291628372,
        longitude: -54.62511577267588,
        address: "Rua José Antônio, 1682",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "FitPro",
        description:
          "Treinamento funcional personalizado com foco em resultados.",
        latitude: -20.43785145578494,
        longitude: -54.60266027100548,
        address: "Av. Costa e Silva, 292",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=400&h=300",
      },
      {
        id: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "FitPower",
        description: "Treinamento funcional com foco em força e resistência.",
        latitude: -20.493506925382377,
        longitude: -54.66818950769821,
        address: "Rua Padre João Crippa, 1645",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300",
      },
      // SUPLEMENTAÇÃO
      {
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "FitNutri",
        description:
          "Loja de suplementos esportivos especializada em produtos de alta qualidade.",
        latitude: -20.45468410362524,
        longitude: -54.597556747898565,
        address: "Av. Mascarenhas de Moraes, 2345",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "e4949574-a579-4b07-a005-3fc4b7339752",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "PowerFit",
        description:
          "Loja de suplementos esportivos com uma ampla linha de produtos para atletas e praticantes de fitness.",
        latitude: -20.440720787457042,
        longitude: -54.6518582337561,
        address: "Rua Antonio Maria Coelho, 3356",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Suplemento Total",
        description:
          "Loja de suplementos esportivos com uma equipe de nutricionistas para ajudar a escolher o melhor produto para você.",
        latitude: -20.453153939103146,
        longitude: -54.61225489444647,
        address: "Av. Bandeirantes, 1456",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "NutriFit",
        description:
          "Loja de suplementos esportivos com uma equipe de personal trainers para ajudar a alcançar seus objetivos de fitness.",
        latitude: -20.441868505130945,
        longitude: -54.58714556076047,
        address: "Rua Barão do Rio Branco, 1423",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
      //DANÇA
      {
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Dança Viva",
        description: "Estúdio exclusivo para aulas de dança contemporânea.",
        latitude: -20.515113401000225,
        longitude: -54.6457340060278,
        address: "Av. Fernando Corrêa da Costa, 2367",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "e4949574-a579-4b07-a005-3fc4b7339752",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Ritmos & Movimentos",
        description:
          "Academia especializada em diversos estilos de dança, desde clássica até moderna.",
        latitude: -20.455831717650106,
        longitude: -54.64267189257082,
        address: "Rua Marechal Rondon, 1678",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Ballet e Movimento",
        description:
          "Escola de balé com aulas para todas as idades, do infantil ao adulto.",
        latitude: -20.48471049712965,
        longitude: -54.618787404430485,
        address: "Av. Júlio de Castilho, 2356",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Studio Arte em Movimento",
        description: "Espaço dedicado a aulas de dança criativa e performance.",
        latitude: -20.474766100409415,
        longitude: -54.58530829284915,
        address: "Rua Dom Aquino, 2132",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
      //YOGA
      {
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Yoga Vida",
        description: "Estúdio exclusivo para aulas de Yoga e meditação.",
        latitude: -20.456405521129454,
        longitude: -54.6193998272033,
        address: "Av. Ceará, 1267",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "e4949574-a579-4b07-a005-3fc4b7339752",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Yoga Integral",
        description:
          "Academia especializada em diversos estilos de Yoga, desde Hatha até Ashtanga.",
        latitude: -20.44875463184432,
        longitude: -54.598373312002835,
        address: "Rua Amazonas, 912",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Yoga Vipasana",
        description:
          "Escola de Yoga com aulas para todas as idades, do infantil ao adulto.",
        latitude: -20.470941160816036,
        longitude: -54.618787404430485,
        address: "Av. Salgado Filho, 3490",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Studio Yoga e Meditação",
        description: "Espaço dedicado a aulas de Yoga e meditação.",
        latitude: -20.4944630291838,
        longitude: -54.63368969190265,
        address: "Rua Chile, 1789",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
      //CALISTENIA
      {
        id: "8b2c5e5a-45c4-4df4-9d1f-5bcb4c2b3f7a",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Calistenia Fitness",
        description:
          "Academia especializada em treinamento de calistenia, desde treinos de força até condicionamento físico.",
        latitude: -20.459848296989477,
        longitude: -54.61470458594495,
        address: "Av. Mato Grosso, 1890",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "6c5b47f4-4f4e-4c7c-9d8f-1f5f7e42b6a0",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Treinamento de Calistenia",
        description:
          "Estúdio exclusivo para treinamento de calistenia, com aulas personalizadas.",
        latitude: -20.443590066210316,
        longitude: -54.662881844074185,
        address: "Rua Antônio Rahe, 680",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "3c4a1c5b-cb9a-4f4e-af3b-4f6c7f7fb5a4",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Calistenia Brasil",
        description:
          "Academia de treinamento de calistenia, com aulas para todas as idades.",
        latitude: -20.472088652703746,
        longitude: -54.578571642348024,
        address: "Av. Presidente Ernesto Geisel, 4977",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "8d94f5e4-5f9a-45a3-8bfc-4b1f55c9f1d5",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Academia de Calistenia",
        description: "Espaço dedicado ao treinamento de calistenia.",
        latitude: -20.51453981776863,
        longitude: -54.64389673811648,
        address: "Rua Cândido Mariano, 1345",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
      //PILATES
      {
        id: "8b2c5e5a-45c4-4df4-9d1f-5bcb4c2b3f7a",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Pilates Studio",
        description:
          "Espaço de Pilates para treinamento de flexibilidade, força e equilíbrio.",
        latitude: -20.492742039191786,
        longitude: -54.640018060555235,
        address: "Av. Hiroshima, 883",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "6c5b47f4-4f4e-4c7c-9d8f-1f5f7e42b6a0",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Pilates for All",
        description:
          "Espaço de Pilates para treinamento de flexibilidade e força, com aulas personalizadas.",
        latitude: -20.46788114050723,
        longitude: -54.61654185426344,
        address: "Rua Padre João Crippa, 2458",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "3c4a1c5b-cb9a-4f4e-af3b-4f6c7f7fb5a4",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Pilates Brasil",
        description:
          "Academia de Pilates para treinamento de flexibilidade e força, com aulas para todas as idades.",
        latitude: -20.456979322465255,
        longitude: -54.60980520376231,
        address: "Av. Afonso Pena, 5723",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "8d94f5e4-5f9a-45a3-8bfc-4b1f55c9f1d5",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Academia de Pilates",
        description: "Espaço dedicado ao treinamento de Pilates.",
        latitude: -20.4606133478111,
        longitude: -54.614908726869224,
        address: "Rua Quinze de Novembro, 1235",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
