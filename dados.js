// ================================================================
// CATÁLOGO AURA SEXY — EDITE ESTE ARQUIVO PARA ALTERAR:
//   • Nomes das peças       → campo "nome"
//   • Preços                → campo "preco"
//   • Descrições            → campo "desc"
//   • Categorias            → campo "cat"
//   • Tags especiais        → campo "tags" (ex: ["dia-das-maes"])
//   • Quais fotos aparecem  → campo "keys" (use as chaves de fotos.js)
//   • Texto do banner       → seção BANNERS abaixo
// ================================================================

var CATALOGO = {

  // ------------------------------------------------------------------
  // PRODUTOS — cada {} é uma peça do mostruário
  // ------------------------------------------------------------------
  produtos: [

    // ── Baby Dolls ──────────────────────────────────────────────────
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

    // ── Bodies ──────────────────────────────────────────────────────
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

    // ── Camisolas ───────────────────────────────────────────────────
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

    // ── Calcinhas ───────────────────────────────────────────────────
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

    // ── Lingerie (conjuntos) ─────────────────────────────────────────
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

    // ── Coleção Dia das Mães 2026 🌸 ────────────────────────────────

    // ── Camisolas Dia das Mães ──────────────────────────────────────
    {
      id: 24,
      nome: "Camisola Branca Luminosa",
      preco: "R$ 169,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola branca com bojo de renda floral e alças cruzadas — delicada e irresistível",
      keys: ["dm4a","dm4b","dm4c"]
    },
    {
      id: 25,
      nome: "Camisola Vermelha Paixão",
      preco: "R$ 169,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola vermelha com bojo de renda e costas cruzadas — ardente e sofisticada",
      keys: ["dm5a","dm5b","dm5c","dm5d"]
    },
    {
      id: 26,
      nome: "Camisola Noir Elegance",
      preco: "R$ 169,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola preta com renda e alças cruzadas — misteriosa e elegante",
      keys: ["dm6a","dm6b"]
    },
    {
      id: 32,
      nome: "Camisola Branca Satin",
      preco: "R$ 179,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola branca em cetim com bojo de renda — sofisticada e irresistível",
      keys: ["dm8a","dm8b"]
    },
    {
      id: 33,
      nome: "Camisola Vinho Premium",
      preco: "R$ 179,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola vinho em cetim com bojo de renda e costas abertas — intensa e elegante",
      keys: ["dm9a","dm9b"]
    },
    {
      id: 34,
      nome: "Camisola Noir Satin",
      preco: "R$ 179,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola preta em cetim com decote profundo nas costas — misteriosa e sensual",
      keys: ["dm11a"]
    },
    {
      id: 30,
      nome: "Camisola Azul Marinho",
      preco: "R$ 169,90",
      cat: "camisola",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Camisola azul marinho em cetim com bojo de renda e pingente dourado — elegante e marcante",
      keys: ["dm1a","dm1b","dm1c","dm1d","dm1e","dm1f"]
    },

    // ── Calcinhas Dia das Mães ──────────────────────────────────────
    {
      id: 27,
      nome: "Calcinha Rosa Pérola",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Fio dental rosa com renda e detalhe pérola — feminina e irresistível",
      keys: ["dm2a","dm2b"]
    },
    {
      id: 28,
      nome: "Calcinha Verde Menta",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Fio dental verde menta com renda e pingente coração — fresca e encantadora",
      keys: ["dm3a","dm3b","dm3c"]
    },
    {
      id: 29,
      nome: "Calcinha Vermelha Desejo",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Fio dental vermelho cetinado — ousado e apaixonante",
      keys: ["dm7a"]
    },
    {
      id: 35,
      nome: "Calcinha Azul Naval",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Calcinha azul marinho de renda — delicada e feminina",
      keys: ["dm12a"]
    },
    {
      id: 36,
      nome: "Calcinha Noir Alta",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Novidade",
      tags: ["dia-das-maes"],
      desc: "Calcinha preta de cintura alta — elegante e