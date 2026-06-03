// ================================================================
// CATÁLOGO AURA SEXY — EDITE ESTE ARQUIVO PARA ALTERAR:
//   • Nomes das peças       → campo "nome"
//   • Preços                → campo "preco"
//   • Descrições            → campo "desc"
//   • Categorias            → campo "cat"
//   • Quais fotos aparecem  → campo "keys" (use as chaves de fotos.js)
//   • Texto do banner       → seção BANNERS abaixo
// ================================================================

var CATALOGO = {

  // ------------------------------------------------------------------
  // PRODUTOS — cada {} é uma peça do mostruário
  // ------------------------------------------------------------------
  produtos: [
    {
      id: 36,
      nome: "Lingerie Mel Branca M e G",
      preco: "R$ 119,90",
      cat: "lingerie",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "Corset branco com bordado floral dourado e cinta-liga — sofisticado e irresistível",
      keys: ["dn1a","dn1b"]
    },

    {
      id: 37,
      nome: "Body Stela Vermelho e Cappuccino M e G",
      preco: "R$ 89,90",
      cat: "body",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "Body vermelho de renda com laço — apaixonante para a noite dos dois",
      keys: ["dn2a","dn2b"]
    },

    {
      id: 38,
      nome: "Vestido Selena Preto, Branco e Vinho M e G",
      preco: "R$ 109,90",
      cat: "camisola",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "Camisola preta de cetim com decote halter — misteriosa e elegante",
      keys: ["dn3a","dn3b"]
    },

    {
      id: 39,
      nome: "Conjunto Pandora, Preto e Vermelho Floral e Preto com Rose Floral M e G",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Duo",
      tags: ["dia-dos-namorados"],
      desc: "Conjunto de renda com roupão transparente — disponível em preto e vermelho",
      keys: ["dn4a","dn4b"]
    },

    {
      id: 40,
      nome: "Camisola Bell Branca e Azul Marinho M e G",
      preco: "R$ 115,90",
      cat: "camisola",
      badge: "Duo",
      tags: ["dia-dos-namorados"],
      desc: "Camisola de cetim com decote em renda — disponível em azul marinho e branco",
      keys: ["dn5a","dn5b"]
    },

    {
      id: 41,
      nome: "Conjunto Pietra Preta M e G",
      preco: "R$ 99,90",
      cat: "lingerie",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Sutiã + calcinha em tule bordado preto com choker floral — ousadia e sofisticação",
      keys: ["dn6a","dn6b"]
    },

    {
      id: 42,
      nome: "Lingerie Lorena Vermelha M e G",
      preco: "R$ 119,90",
      cat: "Lingerie",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Camisola vinho em tule transparente com bojo de renda — intensa e irresistível",
      keys: ["dn7a","dn7b"]
    },

    {
      id: 43,
      nome: "Conjunto Virginia Preto Floral M e G",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Sutiã + calcinha em tule bordado com rosas coloridas — único e apaixonante",
      keys: ["dn8a","dn8b"]
    },

    {
      id: 44,
      nome: "Conjunto Flor de Liz Preta e Cappuccino M e G",
      preco: "R$ 69,90",
      cat: "lingerie",
      badge: "Conforto",
      tags: ["dia-dos-namorados"],
      desc: "Top + short em renda preta transparente — delicada, sensual e confortável",
      keys: ["dn9a","dn9b"]
    },

    {
      id: 45,
      nome: "Conjunto Lais Vermelho Bocas M",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Conjunto vermelho estampado com coração e liga — feito para o 12 de junho",
      keys: ["dn10a"]
    },

    {
      id: 46,
      nome: "Body Hello Hello Sexy Correntes",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Ousado",
      tags: ["dia-dos-namorados"],
      desc: "Harness vermelho com correntes douradas — poder, sedução e presença total",
      keys: ["dn11a","dn11b"]
    },

    {
      id: 47,
      nome: "Corset Mirela Vermelho Floral",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Bustier + calcinha em tule bordado vermelho — delicado e ardente",
      keys: ["dn12a","dn12b"]
    },

    {
      id: 48,
      nome: "Body Livia Rosa M",
      preco: "R$ 59,90",
      cat: "body",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Body fúcsia com bordado floral — vibrante, feminina e irresistível",
      keys: ["dn13a","dn13b"]
    },

    {
      id: 49,
      nome: "Conjunto Nanda Oncinha M",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Wild",
      tags: ["dia-dos-namorados"],
      desc: "Conjunto estampa onça com detalhes pretos — ousado, selvagem e irresistível",
      keys: ["dn14a","dn14b"]
    },

    {
      id: 24,
      nome: "Camisola Tais Vermelha M e G",
      preco: "R$ 127,90",
      cat: "camisola",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Corset em renda com saia longa em tule — dramática e irresistível",
      keys: ["n5a","n5b","n5c","n5d"]
    },

    {
      id: 25,
      nome: "Camisola Agnes Preta G",
      preco: "R$ 74,90",
      cat: "camisola",
      badge: "Noite",
      tags: ["dia-dos-namorados"],
      desc: "Cetim com renda e decote aberto nas costas — misteriosa e elegante",
      keys: ["c6a","c6b","c6c"]
    },

    {
      id: 26,
      nome: "Camisola Agnes Marrom G",
      preco: "R$ 74,90",
      cat: "camisola",
      badge: "Desejo",
      tags: ["dia-dos-namorados"],
      desc: "Cetim rosê com renda e costas cruzadas — um presente para os dois",
      keys: ["c7a","c7b","c7c"]
    },

    {
      id: 27,
      nome: "Calcinha Fio Ariela Vermelha",
      preco: "R$ 24,90",
      cat: "calcinha",
      badge: "Quente",
      tags: ["dia-dos-namorados"],
      desc: "Fio dental vermelho com renda — apaixonante e irresistível",
      keys: ["c9b","c9c","c9a","c9d"]
    },

    {
      id: 28,
      nome: "Calcinha Secretária Vermelha",
      preco: "R$ 26,90",
      cat: "calcinha",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Calcinha vermelha de renda com laço — ousada e apaixonante",
      keys: ["w6a","w5a"]
    },

    {
      id: 29,
      nome: "Calcinha Fio Ariela Preta",
      preco: "R$ 24,90",
      cat: "calcinha",
      badge: "Sedução",
      tags: ["dia-dos-namorados"],
      desc: "Fio dental com renda preta e argolas douradas — o detalhe que completa a noite",
      keys: ["c8a","c8b","c8c"]
    },

    {
      id: 30,
      nome: "CCamisola Elizabeth Vermelha M e G",
      preco: "R$ 89,90",
      cat: "camisola",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Bralette + saia de renda vermelha — ardente e elegante",
      keys: ["n2b","n2a","n2c"]
    },

    {
      id: 31,
      nome: "Camisola Elizabeth Vermelha M e G",
      preco: "R$ 89,90",
      cat: "camisola",
      badge: "Premium",
      tags: ["dia-dos-namorados"],
      desc: "Bralette + saia de renda vermelha em cenário luxuoso — irresistível",
      keys: ["w7a","w7b","w7c"]
    },

    {
      id: 32,
      nome: "Fantasia Paola Branca M e G",
      preco: "R$ 119,90",
      cat: "lingerie",
      badge: "Presentear",
      tags: ["dia-dos-namorados"],
      desc: "Corset de renda + cinta-liga + calcinha — o presente que ela nunca vai esquecer",
      keys: ["w1b","w1d","w1f","w1c","w1a","w1e"]
    },

    {
      id: 33,
      nome: "Conjunto Ravena Preta",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Sutiã estruturado + calcinha em renda preta — sofisticação para a noite",
      keys: ["n6a","n6b"]
    },

    {
      id: 34,
      nome: "Camisola Amapola Vermelha",
      preco: "R$ 127,90",
      cat: "camisola",
      badge: "Destaque",
      tags: ["dia-dos-namorados"],
      desc: "Tule transparente com renda — ousadia e sofisticação para a noite dos dois",
      keys: ["p2a","p2b"]
    },

    {
      id: 35,
      nome: "Camisola Tais Preta M e G",
      preco: "R$ 127,90",
      cat: "camisola",
      badge: "Noite",
      tags: ["dia-dos-namorados"],
      desc: "Renda preta com amarrações e tule — sensualidade extrema",
      keys: ["n7b","n7a"]
    },

    {
      id: 1,
      nome: "Baby Doll Branco",
      preco: "R$ 149,90",
      cat: "baby-doll",
      badge: "Lançamento",
      desc: "Tule e renda delicada — puro romantismo",
      keys: ["p1c","p1a","p1b","p1d"]
    },

    {
      id: 2,
      nome: "Baby Doll Vermelho",
      preco: "R$ 149,90",
      cat: "baby-doll",
      badge: "Destaque",
      desc: "Tule transparente com renda — ousadia e sofisticação",
      keys: ["p2a","p2b"]
    },

    {
      id: 18,
      nome: "Baby Doll Noir",
      preco: "R$ 169,90",
      cat: "baby-doll",
      badge: "Exclusivo",
      desc: "Renda preta com amarrações e tule — sensualidade extrema",
      keys: ["n7b","n7a"]
    },

    {
      id: 3,
      nome: "Body Scarlet",
      preco: "R$ 129,90",
      cat: "body",
      badge: "Novo",
      desc: "Renda floral com forro — sensual e confortável",
      keys: ["p3a","p3b"]
    },

    {
      id: 4,
      nome: "Body Rosê",
      preco: "R$ 129,90",
      cat: "body",
      badge: "Exclusivo",
      desc: "Renda delicada em nude rosado — elegância pura",
      keys: ["p4a","p4b"]
    },

    {
      id: 5,
      nome: "Body Dourado",
      preco: "R$ 129,90",
      cat: "body",
      badge: "Premium",
      desc: "Renda floral amarela — atrevida e luminosa",
      keys: ["p5a","p5b","p5c"]
    },

    {
      id: 6,
      nome: "Camisola Noir",
      preco: "R$ 159,90",
      cat: "camisola",
      badge: "Novo",
      desc: "Cetim com renda e decote aberto nas costas",
      keys: ["c6a","c6b","c6c"]
    },

    {
      id: 7,
      nome: "Camisola Terracota",
      preco: "R$ 159,90",
      cat: "camisola",
      badge: "Destaque",
      desc: "Cetim rosê com renda e costas cruzadas",
      keys: ["c7a","c7b","c7c"]
    },

    {
      id: 15,
      nome: "Camisola Carmim",
      preco: "R$ 189,90",
      cat: "camisola",
      badge: "Hot",
      desc: "Corset em renda com saia longa em tule — dramática e irresistível",
      keys: ["n5a","n5b","n5c","n5d"]
    },

    {
      id: 8,
      nome: "Calcinha Noir",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Hot",
      desc: "Fio dental com renda preta e argolas douradas",
      keys: ["c8a","c8b","c8c"]
    },

    {
      id: 9,
      nome: "Calcinha Crimson",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Quente",
      desc: "Fio dental vermelho com renda — apaixonante e irresistível",
      keys: ["c9b","c9c","c9a","c9d"]
    },

    {
      id: 10,
      nome: "Calcinha Blossom",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Delicada",
      desc: "Fio dental rosa com renda e detalhe coração",
      keys: ["c10a","c10b","c10c"]
    },

    {
      id: 11,
      nome: "Calcinha Branca",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Clássica",
      desc: "Fio dental branco com renda — minimalista e sensual",
      keys: ["c11a","h1","h2","h3"]
    },

    {
      id: 20,
      nome: "Calcinha Branca Laço",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Delicada",
      desc: "Fio dental branco com laço e detalhe dourado — feminina e irresistível",
      keys: ["w2a","w2b","w2c"]
    },

    {
      id: 21,
      nome: "Calcinha Vermelha Laço",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Paixão",
      desc: "Calcinha vermelha de renda com laço — ousada e apaixonante",
      keys: ["w6a","w5a"]
    },

    {
      id: 12,
      nome: "Conjunto Renda Noir",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Luxo",
      desc: "Bralette + saia de renda preta — sofisticação máxima",
      keys: ["n1b","n1c","n1a"]
    },

    {
      id: 13,
      nome: "Conjunto Renda Rubi",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Paixão",
      desc: "Bralette + saia de renda vermelha — ardente e elegante",
      keys: ["n2b","n2a","n2c"]
    },

    {
      id: 14,
      nome: "Conjunto Renda Noir Luxo",
      preco: "R$ 199,90",
      cat: "lingerie",
      badge: "Coleção",
      desc: "Sutiã estruturado + calcinha em renda preta volumosa",
      keys: ["n6a","n6b"]
    },

    {
      id: 16,
      nome: "Conjunto Fúcsia",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Vibrante",
      desc: "Conjunto em renda fúcsia com sutiã e calcinha — ousado e apaixonante",
      keys: ["n3a"]
    },

    {
      id: 17,
      nome: "Conjunto Branco Noiva",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Noiva",
      desc: "Conjunto em renda branca — puro, delicado e inesquecível",
      keys: ["n4a","w4a"]
    },

    {
      id: 22,
      nome: "Conjunto Preto Laço",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Sofisticado",
      desc: "Sutiã + calcinha em renda preta com laço dourado — clássico e sensual",
      keys: ["w3a","w5a"]
    },

    {
      id: 23,
      nome: "Conjunto Renda Vermelha Premium",
      preco: "R$ 219,90",
      cat: "lingerie",
      badge: "Premium",
      desc: "Bralette + saia de renda vermelha em cenário luxuoso — irresistível",
      keys: ["w7a","w7b","w7c"]
    },

    {
      id: 19,
      nome: "Conjunto Branco Luxo",
      preco: "R$ 249,90",
      cat: "lingerie",
      badge: "Exclusivo",
      desc: "Corset de renda + cinta-liga + calcinha — elegância e sensualidade máximas",
      keys: ["w1b","w1d","w1f","w1c","w1a","w1e"]
    },

    // ── Fotos Editoriais Lifestyle ───────────────────────────────
    {
      id: 50,
      nome: "Camisola Vermelha Paixão",
      preco: "R$ 89,90",
      cat: "camisola",
      badge: "Editorial",
      tags: ["dia-dos-namorados"],
      desc: "Camisola vermelha em cetim com bojo de renda e pingente dourado — sofisticada e irresistível",
      keys: ["uv1a","uv1c","uv1b","uv1d"]
    },
    
    {
      id: 51,
      nome: "Camisola Branca Paixão",
      preco: "R$ 89,90",
      cat: "camisola",
      badge: "Editorial",
      tags: ["dia-dos-namorados"],
      desc: "Camisola branca em cetim com bojo de renda — delicada, pura e inesquecível",
      keys: ["uv2a","uv2b","uv2c"]
    },

    // ── Coleção Nova — Dia dos Namorados 2026 ──────────────────────────
   
    {
      id: 53,
      nome: "Camisola Tais Preta M e G",
      preco: "R$ 127,90",
      cat: "camisola",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Sutiã e calcinha em renda com bordado floral — feminino e irresistível",
      keys: ["nc2a", "nc2b", "nc2c"]
    },
    
    {
      id: 54,
      nome: "CConjunto Ravena Preta",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Editorial",
      tags: ["dia-dos-namorados"],
      desc: "Camisola em tecido nobre com decote elegante — sofisticação pura",
      keys: ["nc3a", "nc3b", "nc3c"]
    },
    
    {
      id: 55,
      nome: "Camisola Tais Vermelha M e G",
      preco: "R$ 127,90",
      cat: "camisola",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Body com detalhes em renda — sensual e confortável para a noite dos dois",
      keys: ["nc4a", "nc4b"]
    },
    
    {
      id: 56,
      nome: "Conjunto Ravena Branco M e G",
      preco: "R$ 59,90",
      cat: "lingerie",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "Conjunto vermelho com acabamento delicado — feito para o 12 de junho",
      keys: ["nc5a", "nc5b"]
    },
    
    {
      id: 57,
      nome: "Camisola Tais Vermelha M e G",
      preco: "R$ 105,90",
      cat: "camisola",
      badge: "Noite",
      tags: ["dia-dos-namorados"],
      desc: "Camisola escura com detalhe em renda — misteriosa e elegante",
      keys: ["nc6a", "nc6b"]
    },
    
    {
      id: 58,
      nome: "Camisola Tais Preta e Vermelha M e G",
      preco: "R$ 105,90",
      cat: "camisola",
      badge: "Premium",
      tags: ["dia-dos-namorados"],
      desc: "Lingerie com bordado especial — um ritual de sedução e amor",
      keys: ["nc7a", "nc7b", "nc7c", "nc7d"]
    },
    
    {
      id: 59,
      nome: "Body Ester Amarelo",
      preco: "R$ 89,90",
      cat: "body",
      badge: "Destaque",
      tags: ["dia-dos-namorados"],
      desc: "Baby doll com tule e renda — delicado e irresistível",
      keys: ["nc8a", "nc8b"]
    },
    
    {
      id: 60,
      nome: "Body Ester Marrom",
      preco: "R$ 89,90",
      cat: "body",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Body especial para a noite dos dois — detalhes que encantam",
      keys: ["nc9a", "nc9b", "nc9c"]
    },
    
    {
      id: 61,
      nome: "Body Ester Vermelho",
      preco: "R$ 89,90",
      cat: "body",
      badge: "Quente",
      tags: ["dia-dos-namorados"],
      desc: "Body com detalhes apaixonantes — para uma noite de pura emoção",
      keys: ["nc10a", "nc10b"]
    },
    
    {
      id: 62,
      nome: "Camisola Amapola Branca M e G",
      preco: "R$ 109,90",
      cat: "camisola",
      badge: "Ousado",
      tags: ["dia-dos-namorados"],
      desc: "Camisola provocante com detalhes exclusivos — para ela brilhar",
      keys: ["nc11a"]
    },
    
    {
      id: 63,
      nome: "Camisola Amapola Branca e Vermelha M e G",
      preco: "R$ 109,90",
      cat: "camisola",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "Camisola com acabamento especial — para a noite mais especial do ano",
      keys: ["nc12a", "nc12b"]
    },
    
    {
      id: 64,
      nome: "Camisola Amapola Vermelha M e G",
      preco: "R$ 109,90",
      cat: "camisola",
      badge: "Elegante",
      tags: ["dia-dos-namorados"],
      desc: "Camisola com charme e feminilidade — ela vai adorar",
      keys: ["nc13a"]
    },
    
    {
      id: 65,
      nome: "Camisola Amapola Branca M e G",
      preco: "R$ 109,90",
      cat: "camisola",
      badge: "Romance",
      tags: ["dia-dos-namorados"],
      desc: "Camisola com detalhes românticos — para uma noite de puro encanto",
      keys: ["nc14a", "nc14b"]
    },
    
    {
      id: 66,
      nome: "Camisola Agnes Marrom G",
      preco: "R$ 99,90",
      cat: "camisola",
      badge: "Premium",
      tags: ["dia-dos-namorados"],
      desc: "Camisola de sedução total — cada detalhe é uma promessa",
      keys: ["nc15a", "nc15b"]
    },
    
    {
      id: 67,
      nome: "Camisola Agnes Marrom e Preta G",
      preco: "R$ 99,90",
      cat: "camisola",
      badge: "Romance",
      tags: ["dia-dos-namorados"],
      desc: "Camisola romântica com tule delicado — puro romantismo",
      keys: ["nc16a", "nc16b"]
    },
    
    {
      id: 68,
      nome: "Camisola Agnes Preta G",
      preco: "R$ 99,90",
      cat: "camisola",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Camisola que desperta o desejo — para uma noite extraordinária",
      keys: ["nc17a", "nc17b"]
    },
    
    {
      id: 69,
      nome: "Camisola Tais Vermelha",
      preco: "R$ 105,90",
      cat: "camisola",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "O conjunto perfeito para celebrar o amor — detalhes que emocionam",
      keys: ["nc18a", "nc18b", "nc18c"]
    },
    
    {
      id: 70,
      nome: "Calcinha Fio Secretária Branca",
      preco: "R$ 24,90",
      cat: "calcinha",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "calcinha com acabamentos especiais — sensual e elegante",
      keys: ["nc19a", "nc19b", "nc19c"]
    },
    
    {
      id: 71,
      nome: "CCalcinha Fio Secretária Branca, Vermelha e Preta",
      preco: "R$ 24,90",
      cat: "calcinhaa",
      badge: "Editorial",
      tags: ["dia-dos-namorados"],
      desc: "Calcinha leve e sedutora — para noites de muito amor",
      keys: ["nc20a", "nc20b", "nc20c", "nc20d"]
    },
    
    {
      id: 72,
      nome: "Fantasia Paola Branca M e G",
      preco: "R$ 119,90",
      cat: "lingerie",
      badge: "Quente",
      tags: ["dia-dos-namorados"],
      desc: "Lingerie que não passa despercebida — tentação em cada detalhe",
      keys: ["nc21a", "nc21b"]
    },
    
    {
      id: 73,
      nome: "Fantasia Paola Branca M e G",
      preco: "R$ 119,90",
      cat: "lingerie",
      badge: "Duo",
      tags: ["dia-dos-namorados"],
      desc: "Lingerie especialmente pensada para o Dia dos Namorados — inesquecível",
      keys: ["nc22a", "nc22b", "nc22c"]
    },
    
    {
      id: 75,
      nome: "Fantasia Paola Branca M e G",
      preco: "R$ 119,90",
      cat: "lingerie",
      badge: "Casal",
      tags: ["dia-dos-namorados"],
      desc: "Lingerie especial para celebrar o amor — para a noite do dia 12",
      keys: ["nc24a"]
    },
  
  ],

  // ------------------------------------------------------------------
  // BANNERS — slides do topo da página (máx. recomendado: 10)
  // ------------------------------------------------------------------
  banners: [
    { key: "w7a",  nome: "O desejo não precisa de data",           sub: "Mas quando tem uma, se torna inesquecível" },
    { key: "n2b",  nome: "Para ela. Para você. Para os dois.",      sub: "A noite começa antes de você sair de casa" },
    { key: "w1b",  nome: "Presenteie com intenção",                 sub: "Porque o que ela veste em segredo diz tudo" },
    { key: "c9b",  nome: "Dia dos Namorados — 12 de Junho",         sub: "Cada peça, um ritual. Cada detalhe, uma promessa." },
    { key: "n5a",  nome: "Camisola Carmim",                         sub: "Dramática e irresistível" },
    { key: "w7c",  nome: "Conjunto Renda Vermelha Premium",         sub: "Cada detalhe é um convite" },
    { key: "n1b",  nome: "Conjunto Renda Noir",                     sub: "Sofisticação que encanta" },
    { key: "p2b",  nome: "Baby Doll Vermelho",                      sub: "Para noites inesquecíveis" },
    { key: "w1e",  nome: "Conjunto Branco Luxo",                    sub: "O luxo que ela merece" },
    { key: "n6a",  nome: "Conjunto Renda Noir Luxo",                sub: "A escolha de quem sabe o que quer" },
  ]
};
