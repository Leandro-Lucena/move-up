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

  await prisma.establishment.createMany({
    data: [
      // HIPERTROFIA
      {
        id: "5a830fe1-0cae-49f8-a4d7-75d8522dd510",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Muscle Factory",
        description:
          "Treinamento personalizado para hipertrofia muscular. Técnicas avançadas e equipamentos de ponta.",
        latitude: -20.46145077030725,
        longitude: -54.61837610973717,
        address: "Av. Afonso Pena, 3297",
        phone: "(67) 94567-1212",
        cover:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww",
      },
      {
        id: "df60a5b6-7ee0-4c43-ae58-237ebca11747",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Power House",
        description:
          "Treinamento intensivo em grupo para hipertrofia muscular. Aulas dinâmicas e desafiadoras.",
        latitude: -20.447415686413258,
        longitude: -54.61021348520371,
        address: "Rua 14 de Julho, 2169",
        phone: "(67) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
      },
      {
        id: "e008f3b9-544d-4767-ba5f-8f811d33c51a",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Gainz Gym",
        description:
          "Treinamento de força e resistência para hipertrofia muscular. Aulas particulares e em grupo.",
        latitude: -20.47744350076335,
        longitude: -54.63471039611687,
        address: "Av. Mato Grosso, 3412",
        phone: "(67) 98765-4321",
        cover:
          "https://plus.unsplash.com/premium_photo-1661301057249-bd008eebd06a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww",
      },
      {
        id: "4f6733a8-6332-4ed3-9cc0-e7e31e03404c",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Body Building Club",
        description:
          "Treinamento de hipertrofia muscular para iniciantes e avançados. Aulas teóricas e práticas.",
        latitude: -20.46768988657675,
        longitude: -54.630219295782794,
        address: "Rua Brilhante, 1836",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww",
      },
      {
        id: "83688913-5bb8-4621-87fd-3f96b4d73d87",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Iron Fitness",
        description:
          "Treinamento de hipertrofia muscular em grupo e particular. Aulas intensivas e desafiadoras.",
        latitude: -20.460613347175386,
        longitude: -54.61511286738634,
        address: "Av. Cônsul Assaf Trad, 4796",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
      },
      // ARTES MARCIAIS
      {
        id: "0f210c08-2cd9-40c5-9cc9-5a5e6b0e630c",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Martial Arts Haven",
        description:
          "Centro de treinamento avançado em artes marciais. Aulas para iniciantes e veteranos.",
        latitude: -20.452197578537245,
        longitude: -54.61552114923489,
        address: "Rua Rui Barbosa, 3498",
        phone: "(67) 3456-7890",
        cover:
          "https://plus.unsplash.com/premium_photo-1683120894558-c3b3c2161de4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D",
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
          "https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "e27fdc4d-56d7-4da1-a943-22f64a37c92b",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Dragon's Den",
        description:
          "Academia de artes marciais mistas. Aulas dinâmicas para todos os níveis de habilidade.",
        latitude: -20.513583839246746,
        longitude: -54.64287603308794,
        address: "Rua Pedro Celestino, 1214",
        phone: "(67) 2345-6789",
        cover:
          "https://plus.unsplash.com/premium_photo-1663099253632-a4a8dec0e7c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "1d7ae4ec-d741-43f5-8c32-beae6d5573d3",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Kung Fu Academy",
        description:
          "Aprenda os segredos do Kung Fu com mestres experientes. Ambiente acolhedor e instrutivo.",
        latitude: -20.44550288789721,
        longitude: -54.6553286294688,
        address: "Av. Ernesto Geisel, 5259",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "d6160e39-0508-4abe-99d2-9b29eaf95f2a",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "The Warrior's Way",
        description:
          "Intensivo de artes marciais para aprimorar suas habilidades. Treinamento focado e disciplinado.",
        latitude: -20.441103360967116,
        longitude: -54.59653604327718,
        address: "Rua Joaquim Murtinho, 2456",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1611077479643-5b3c01381f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fHww",
      },
      // CROSSFIT
      {
        id: "96189dbb-30d2-4dd0-929e-3d24633ee078",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Fênix",
        description:
          "Academia de CrossFit com treinamento intensivo e personalizado. Aulas dinâmicas e desafiadoras.",
        latitude: -20.45296266746624,
        longitude: -54.59102423832172,
        address: "Av. Eduardo Elias Zahran, 1573",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "070ae58c-bdb9-443e-a03e-eafd2709f480",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Evolution",
        description:
          "Treinamento de CrossFit para todos os níveis de habilidade. Aulas teóricas e práticas.",
        latitude: -20.47820846389348,
        longitude: -54.63654766443536,
        address: "Rua da Divisão, 1443",
        phone: "(67) 9876-5432",
        cover:
          "https://plus.unsplash.com/premium_photo-1664109999781-27f77214bcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "ebdfeb03-cea8-45b4-9e55-54ce63293486",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Arena",
        description:
          "Academia de CrossFit com treinamento de alta intensidade. Aulas dinâmicas e desafiadoras.",
        latitude: -20.454492833893504,
        longitude: -54.64981682451333,
        address: "Av. Presidente Vargas, 1146",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "5e3b4210-ac73-4bb6-9f0d-358aca83d464",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Matrix",
        description:
          "Treinamento de CrossFit com foco em condicionamento físico e técnica. Aulas individualizadas.",
        latitude: -20.468454898326137,
        longitude: -54.62001224956897,
        address: "Rua Bahia, 795",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "67167549-45a7-41c7-b78e-de4083676560",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "CrossFit Nova Era",
        description:
          "Academia de CrossFit com treinamento de alta intensidade e foco em condicionamento físico.",
        latitude: -20.453153939103146,
        longitude: -54.6267489000701,
        address: "Av. Calógeras, 3100",
        phone: "(67) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyb3NzZml0fGVufDB8fDB8fHww",
      },
      // Funcional
      {
        id: "31bb1590-9e84-4c20-8ad7-089b630d048a",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "FitZone",
        description:
          "Treinamento funcional com aulas dinâmicas e desafiadoras.",
        latitude: -20.437086291628372,
        longitude: -54.62511577267588,
        address: "Rua José Antônio, 1682",
        phone: "(67) 9876-5432",
        cover:
          "https://plus.unsplash.com/premium_photo-1663012917724-4ce9630a5de4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuY3Rpb25hbCUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "c61ff02a-e3fd-4d9d-9809-e238090bc101",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "FitPro",
        description:
          "Treinamento funcional personalizado com foco em resultados.",
        latitude: -20.43785145578494,
        longitude: -54.60266027100548,
        address: "Av. Costa e Silva, 292",
        phone: "(67) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVuY3Rpb25hbCUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "1f606726-6b7b-4b30-b03f-3fbbebd5b0ae",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "FitPower",
        description: "Treinamento funcional com foco em força e resistência.",
        latitude: -20.493506925382377,
        longitude: -54.66818950769821,
        address: "Rua Padre João Crippa, 1645",
        phone: "(67) 9876-5432",
        cover:
          "https://plus.unsplash.com/premium_photo-1672280783570-59f6320798fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1bmN0aW9uYWwlMjBneW18ZW58MHx8MHx8fDA%3D",
      },
      // SUPLEMENTAÇÃO
      {
        id: "2e9d307a-95a2-497f-906b-590342a2e5ea",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "FitNutri",
        description:
          "Loja de suplementos esportivos especializada em produtos de alta qualidade.",
        latitude: -20.45468410362524,
        longitude: -54.597556747898565,
        address: "Av. Mascarenhas de Moraes, 2345",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1596177582967-a5d143a41237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cHBsZW1lbnRzfGVufDB8fDB8fHww",
      },
      {
        id: "b52cb52e-5ddc-4db3-b3b9-d4cd9f3fa3b6",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "PowerFit",
        description:
          "Loja de suplementos esportivos com uma ampla linha de produtos para atletas e praticantes de fitness.",
        latitude: -20.440720787457042,
        longitude: -54.6518582337561,
        address: "Rua Antonio Maria Coelho, 3356",
        phone: "(67) 8765-4321",
        cover:
          "https://plus.unsplash.com/premium_photo-1672352722063-678ed538f80e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hleXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "6b9d630c-859d-49d8-8046-c01b58e9660f",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Suplemento Total",
        description:
          "Loja de suplementos esportivos com uma equipe de nutricionistas para ajudar a escolher o melhor produto para você.",
        latitude: -20.453153939103146,
        longitude: -54.61225489444647,
        address: "Av. Bandeirantes, 1456",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hleXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "115a85af-50dc-405d-9702-5a4213cd6656",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "NutriFit",
        description:
          "Loja de suplementos esportivos com uma equipe de personal trainers para ajudar a alcançar seus objetivos de fitness.",
        latitude: -20.441868505130945,
        longitude: -54.58714556076047,
        address: "Rua Barão do Rio Branco, 1423",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1595257842044-8f021a58c8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZXl8ZW58MHx8MHx8fDA%3D",
      },
      //DANÇA
      {
        id: "37cb8027-6876-422c-8ac7-fe885343111e",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Dança Viva",
        description: "Estúdio exclusivo para aulas de dança contemporânea.",
        latitude: -20.515113401000225,
        longitude: -54.6457340060278,
        address: "Av. Fernando Corrêa da Costa, 2367",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFuY2luZyUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "d12f1e30-0c00-467c-9eb9-5d589d63247f",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Ritmos & Movimentos",
        description:
          "Academia especializada em diversos estilos de dança, desde clássica até moderna.",
        latitude: -20.455831717650106,
        longitude: -54.64267189257082,
        address: "Rua Marechal Rondon, 1678",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFuY2luZyUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "916cae17-4d68-438d-9d12-31a8525cdd68",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Ballet e Movimento",
        description:
          "Escola de balé com aulas para todas as idades, do infantil ao adulto.",
        latitude: -20.48471049712965,
        longitude: -54.618787404430485,
        address: "Av. Júlio de Castilho, 2356",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1598732570659-d6ef41a86c10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhbmNpbmclMjBneW18ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "e3619c5e-2fbe-425b-8a5e-c0557ab0d7f8",
        categoryId: "d9f8c5e2-3a4b-4c9d-b6c5-08e5e7d5b9a2",
        name: "Studio Arte em Movimento",
        description: "Espaço dedicado a aulas de dança criativa e performance.",
        latitude: -20.474766100409415,
        longitude: -54.58530829284915,
        address: "Rua Dom Aquino, 2132",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1634472105791-dc2338841c93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRhbmNpbmclMjBneW18ZW58MHx8MHx8fDA%3D",
      },
      //YOGA
      {
        id: "99b26ea2-5800-4c26-ad19-75499b2ef07c",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Yoga Vida",
        description: "Estúdio exclusivo para aulas de Yoga e meditação.",
        latitude: -20.456405521129454,
        longitude: -54.6193998272033,
        address: "Av. Ceará, 1267",
        phone: "(67) 5432-1098",
        cover:
          "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "36d5c94b-ef43-476d-a281-e511a8f5f6ee",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Yoga Integral",
        description:
          "Academia especializada em diversos estilos de Yoga, desde Hatha até Ashtanga.",
        latitude: -20.44875463184432,
        longitude: -54.598373312002835,
        address: "Rua Amazonas, 912",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "ec851cd8-17eb-4f8a-91b9-051754137070",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Yoga Vipasana",
        description:
          "Escola de Yoga com aulas para todas as idades, do infantil ao adulto.",
        latitude: -20.470941160816036,
        longitude: -54.618787404430485,
        address: "Av. Salgado Filho, 3490",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "a7fbde9b-ca19-4fd4-83a7-5ed99b603fe7",
        categoryId: "b3a6c7a1-8a6e-4d6f-9d54-6d0c3e7c7a45",
        name: "Studio Yoga e Meditação",
        description: "Espaço dedicado a aulas de Yoga e meditação.",
        latitude: -20.4944630291838,
        longitude: -54.63368969190265,
        address: "Rua Chile, 1789",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      //CALISTENIA
      {
        id: "86de4ba5-a258-4193-9983-d0ce1e9fe1c0",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Calistenia Fitness",
        description:
          "Academia especializada em treinamento de calistenia, desde treinos de força até condicionamento físico.",
        latitude: -20.459848296989477,
        longitude: -54.61470458594495,
        address: "Av. Mato Grosso, 1890",
        phone: "(67) 5432-1098",
        cover:
          "https://plus.unsplash.com/premium_photo-1666956838556-f940185abbbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsaXN0ZW5pY3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "dc306059-9406-4a39-838c-54d9816107ab",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Treinamento de Calistenia",
        description:
          "Estúdio exclusivo para treinamento de calistenia, com aulas personalizadas.",
        latitude: -20.443590066210316,
        longitude: -54.662881844074185,
        address: "Rua Antônio Rahe, 680",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1634225251578-d5f6ffced78a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaXN0ZW5pY3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "0cad934a-3550-433f-be7a-711274a7f3ae",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Calistenia Brasil",
        description:
          "Academia de treinamento de calistenia, com aulas para todas as idades.",
        latitude: -20.472088652703746,
        longitude: -54.578571642348024,
        address: "Av. Presidente Ernesto Geisel, 4977",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1634225309345-b6b49528bcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FsaXN0ZW5pY3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "84f51c24-affb-4b28-9788-c825db617839",
        categoryId: "9d1e05b4-6bb4-4f9f-80d1-6eeb0f9bd5ee",
        name: "Academia de Calistenia",
        description: "Espaço dedicado ao treinamento de calistenia.",
        latitude: -20.51453981776863,
        longitude: -54.64389673811648,
        address: "Rua Cândido Mariano, 1345",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1634225253504-43d3103669dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbGlzdGVuaWNzfGVufDB8fDB8fHww",
      },
      //PILATES
      {
        id: "bf85fd4b-727c-4ccc-94f5-8247637e2b84",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Pilates Studio",
        description:
          "Espaço de Pilates para treinamento de flexibilidade, força e equilíbrio.",
        latitude: -20.492742039191786,
        longitude: -54.640018060555235,
        address: "Av. Hiroshima, 883",
        phone: "(67) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGlsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "5c23ced1-2aea-4da3-8b79-4af537fbb05a",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Pilates for All",
        description:
          "Espaço de Pilates para treinamento de flexibilidade e força, com aulas personalizadas.",
        latitude: -20.46788114050723,
        longitude: -54.61654185426344,
        address: "Rua Padre João Crippa, 2458",
        phone: "(67) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1591258370814-01609b341790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "e577fde9-530b-4448-963b-beef02b3315d",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Pilates Brasil",
        description:
          "Academia de Pilates para treinamento de flexibilidade e força, com aulas para todas as idades.",
        latitude: -20.456979322465255,
        longitude: -54.60980520376231,
        address: "Av. Afonso Pena, 5723",
        phone: "(67) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "2d1b5d77-5637-4d6b-8b87-29c71c2c20b0",
        categoryId: "c0a6f4b1-4be4-4c3a-a6f6-0c2edc5b9f9c",
        name: "Academia de Pilates",
        description: "Espaço dedicado ao treinamento de Pilates.",
        latitude: -20.4606133478111,
        longitude: -54.614908726869224,
        address: "Rua Quinze de Novembro, 1235",
        phone: "(67) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1621886178958-be42369fc9e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGlsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
