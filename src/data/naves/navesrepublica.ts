
const navesRepublica = [
    {
      nome: "Venator-class Star Destroyer",
      classe: "Cruzador Estelar",
      fabricante: "Kuat Drive Yards",
      comprimento: "1.137 metros",
      armamento: [
        "8 canhões turbolaser pesados",
        "2 canhões turbolaser médios",
        "52 canhões laser point-defense",
        "4 lançadores de torpedos de prótons"
      ],
      tripulacao: "7.400",
      capacidade: "2.000 soldados, 192 caças estelares, 40 AT-TEs",
      descricao: "Nave principal da Frota da República durante as Guerras Clônicas, versátil para combate espacial e transporte de tropas.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISWxIHjYMTQ1X7NouCEhITYWrbDz-Dpy0MQ&s"
    },
    {
      nome: "Acclamator-class Assault Ship",
      classe: "Nave de Assalto",
      fabricante: "Rothana Heavy Engineering",
      comprimento: "752 metros",
      armamento: [
        "12 torres turbolaser quádruplas",
        "24 canhões laser",
        "4 lançadores de mísseis estratégicos"
      ],
      tripulacao: "700",
      capacidade: "16.000 soldados clones, veículos pesados como LAATs, AT-TEs e artilharia SPHA",
      descricao: "Nave de assalto utilizada no início das Guerras Clônicas para transporte de tropas e suporte em batalhas espaciais.",
      imagem: "https://media.sketchfab.com/models/4b8c1ff8b1484a3e89f52232ce37593d/thumbnails/d8c5ecb36a3442f79cd622f8d1603d69/f8afabae086a4ed69ee2fc29c10a5622.jpeg"
    },
    {
        nome: "Victory I-class Star Destroyer",
        classe: "Destróier Estelar",
        fabricante: "Rendili StarDrive",
        comprimento: "900 metros",
        armamento: [
        "10 canhões turbolaser pesados",
        "20 canhões turbolaser médios",
        "10 lançadores de mísseis de concussão",
        "4 projetores de raio trator"
        ],
        tripulacao: "6.000",
        capacidade: "2.000 soldados, 24 caças estelares",
        descricao: "Destróier utilizado pela República em missões de combate e suporte tático.",
        imagem: "https://media.sketchfab.com/models/b0264aea36ba4f7ba90fcbb266d7034c/thumbnails/db51d1b3affb4f74b48cabdee5a4c9ce/92ca703ca1764ce39bee69675f8650d2.jpeg"
    },
    {
      nome: "Consular-class Cruiser (Charger c70 retrofit)",
      classe: "Cruzador Diplomático",
      fabricante: "Corellian Engineering Corporation",
      comprimento: "115 metros",
      armamento: [
        "5 torres turbolaser duplas",
        "1 canhão laser duplo"
      ],
      tripulacao: "9",
      capacidade: "16 passageiros",
      descricao: "Cruzador leve utilizado para missões diplomáticas e transporte de Jedi, posteriormente adaptado para funções militares.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYztLlxiUsnu2HGb8Anh8vhjij1zQJYBmwGg&s"
    },
    {
      nome: "Pelta-class Frigate",
      classe: "Fragata",
      fabricante: "Kuat Drive Yards",
      comprimento: "282 metros",
      armamento: [
        "4 canhões turbolaser",
        "2 canhões de íons"
      ],
      tripulacao: "900",
      capacidade: "Variável, incluindo tropas e suprimentos médicos",
      descricao: "Fragata versátil usada pela República para transporte, apoio médico e missões de patrulha.",
      imagem: "https://iili.io/dA8IY37.jpg"
    },
    {
      nome: "Z-95 Headhunter",
      classe: "Caça Estelar Leve",
      fabricante: "Incom Corporation",
      comprimento: "11,8 metros",
      armamento: [
        "2 canhões laser",
        "1 lançador de mísseis"
      ],
      tripulacao: "1 piloto",
      capacidade: "Sem capacidade de carga",
      descricao: "Caça estelar leve utilizado pela República em missões de patrulha e combate durante as Guerras Clônicas.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIQFH_MCCyIbjvI1Ria1nudtsgcOhehSX0g&s"
    },
    {
        nome: "Arquitens-class Light Cruiser",
        classe: "Cruzador Leve",
        fabricante: "Kuat Drive Yards",
        comprimento: "325 metros",
        armamento: [
            "4 baterias turbolaser duplas",
            "4 torres de laser quádruplas"
        ],
        tripulacao: "750",
        capacidade: "Caças estelares, tropas",
        descricao: "Cruzador leve versátil, utilizado para patrulhas e escoltas.",
        imagem: "https://media.sketchfab.com/models/802fa70fb8cd46f5b741cb6b99f66229/thumbnails/b9abc3445bd74448baeea20883f21592/a663ae5a55084af7a0e0df0a03a1091a.jpeg"
    },
    {
        nome: "Secutor-class Star Destroyer",
        classe: "Destróier Estelar",
        fabricante: "Kuat Drive Yards",
        comprimento: "2.200 metros",
        armamento: [
          "Numerosos canhões turbolaser",
          "Canhões de íons",
          "Tratores de feixe"
        ],
        tripulacao: "29.000",
        capacidade: "Caças estelares, tropas, veículos",
        descricao: "Destróier de grande porte, com capacidade para transportar e lançar grandes contingentes de tropas.",
        imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/301821bc-b5b2-4c59-bdfd-cf3d68ed19f9/dj14srt-2061e80f-b378-4525-bd19-7271cac2cacf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwMTgyMWJjLWI1YjItNGM1OS1iZGZkLWNmM2Q2OGVkMTlmOVwvZGoxNHNydC0yMDYxZTgwZi1iMzc4LTQ1MjUtYmQxOS03MjcxY2FjMmNhY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3SOu5t_vKT3ajr2kyR-wdV_LrAlGtcEPfckxwUSwsoA"
    },
    {
        nome: "Dreadnought-class Heavy Cruiser",
        classe: "Cruzador Pesado",
        fabricante: "Rendili StarDrive",
        comprimento: "600 metros",
        armamento: [
          "10 canhões turbolaser pesados",
          "20 canhões laser médios"
        ],
        tripulacao: "16.000",
        capacidade: "Troops, caças estelares",
        descricao: "Cruzador pesado utilizado para missões de longa duração e suporte em batalhas espaciais.",
        imagem: "https://cdna.artstation.com/p/assets/images/images/077/129/648/large/lord-poncho-front-csd.jpg?1718672066"
    },
    {
        nome: "Carrack-class Light Cruiser",
        classe: "Cruzador Leve",
        fabricante: "Damorian Manufacturing Corporation",
        comprimento: "350 metros",
        armamento: [
          "10 canhões turbolaser médios",
          "20 canhões laser leves"
        ],
        tripulacao: "1.092",
        capacidade: "Caças estelares, tropas",
        descricao: "Cruzador leve rápido e ágil, utilizado para escolta e patrulha.",
        imagem: "https://cdnb.artstation.com/p/assets/images/images/077/129/315/large/lord-poncho-front.jpg?1718670829"
    },
    {
        nome: "Nebulon-B Frigate",
        classe: "Fragata",
        fabricante: "Kuat Drive Yards",
        comprimento: "300 metros",
        armamento: [
          "12 canhões turbolaser",
          "12 canhões laser"
        ],
        tripulacao: "920",
        capacidade: "Troops, suporte médico",
        descricao: "Usada principalmente como nave médica e de escolta durante as Guerras Clônicas.",
        imagem: "https://swrpggm.com/wp-content/uploads/2021/03/NebulonB_FE.png"
    },
    {
        nome: "Cr90 Corvette (Republic version)",
        classe: "Corveta",
        fabricante: "Corellian Engineering Corporation",
        comprimento: "150 metros",
        armamento: [
          "2 canhões turbolaser médios",
          "4 canhões laser leves"
        ],
        tripulacao: "165",
        capacidade: "Transporte de tropas e carga",
        descricao: "Corveta leve e veloz usada para patrulha, escolta e missões diplomáticas.",
        imagem: "https://w0.peakpx.com/wallpaper/910/527/HD-wallpaper-star-wars-movie-cr90-corvette-tantive-iv.jpg"
    },
    {
        nome: "Low Altitude Assault Transport/infantry (LAAT/i)",
        classe: "Transporte de Tropas",
        fabricante: "Rothana Heavy Engineering",
        comprimento: "17,4 metros",
        armamento: [
          "Canhões laser",
          "Lançadores de mísseis"
        ],
        tripulacao: "6",
        capacidade: "30 soldados clonados",
        descricao: "Helicóptero aéreo usado pelas tropas clonadas para ataques rápidos e inserções táticas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdU7ylHQ1kCP1mTpyKjfF1RKiriEA3DRx3w&s"
    }
  ];
  
  export default navesRepublica;
  