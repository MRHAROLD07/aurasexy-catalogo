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

    // ── Coleção Dia dos Namorados 2026 💕 ───────────────────────────

    // ── Camisolas Dia dos Namorados ─────────────────────────────────
    {
      id: 24,
      nome: "Camisola Carmim Desejo",
      preco: "R$ 189,90",
      cat: "camisola",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Corset em renda com saia longa em tule — dramática e irresistível",
      keys: ["n5a","n5b","n5c","n5d"]
    },
    {
      id: 25,
      nome: "Camisola Noir Sedução",
      preco: "R$ 159,90",
      cat: "camisola",
      badge: "Noite",
      tags: ["dia-dos-namorados"],
      desc: "Cetim com renda e decote aberto nas costas — misteriosa e elegante",
      keys: ["c6a","c6b","c6c"]
    },
    {
      id: 26,
      nome: "Camisola Terracota Ritual",
      preco: "R$ 159,90",
      cat: "camisola",
      badge: "Desejo",
      tags: ["dia-dos-namorados"],
      desc: "Cetim rosê com renda e costas cruzadas — um presente para os dois",
      keys: ["c7a","c7b","c7c"]
    },

    // ── Calcinhas Dia dos Namorados ──────────────────────────────────
    {
      id: 27,
      nome: "Calcinha Crimson",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Quente",
      tags: ["dia-dos-namorados"],
      desc: "Fio dental vermelho com renda — apaixonante e irresistível",
      keys: ["c9b","c9c","c9a","c9d"]
    },
    {
      id: 28,
      nome: "Calcinha Vermelha Laço",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Calcinha vermelha de renda com laço — ousada e apaixonante",
      keys: ["w6a","w5a"]
    },
    {
      id: 29,
      nome: "Calcinha Noir",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Sedução",
      tags: ["dia-dos-namorados"],
      desc: "Fio dental com renda preta e argolas douradas — o detalhe que completa a noite",
      keys: ["c8a","c8b","c8c"]
    },

    // ── Lingerie (conjuntos) Dia dos Namorados ───────────────────────
    {
      id: 30,
      nome: "Conjunto Renda Rubi",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Paixão",
      tags: ["dia-dos-namorados"],
      desc: "Bralette + saia de renda vermelha — ardente e elegante",
      keys: ["n2b","n2a","n2c"]
    },
    {
      id: 31,
      nome: "Conjunto Renda Vermelha Premium",
      preco: "R$ 219,90",
      cat: "lingerie",
      badge: "Premium",
      tags: ["dia-dos-namorados"],
      desc: "Bralette + saia de renda vermelha em cenário luxuoso — irresistível",
      keys: ["w7a","w7b","w7c"]
    },
    {
      id: 32,
      nome: "Conjunto Branco Luxo",
      preco: "R$ 249,90",
      cat: "lingerie",
      badge: "Presentear",
      tags: ["dia-dos-namorados"],
      desc: "Corset de renda + cinta-liga + calcinha — o presente que ela nunca vai esquecer",
      keys: ["w1b","w1d","w1f","w1c","w1a","w1e"]
    },
    {
      id: 33,
      nome: "Conjunto Renda Noir Luxo",
      preco: "R$ 199,90",
      cat: "lingerie",
      badge: "Exclusivo",
      tags: ["dia-dos-namorados"],
      desc: "Sutiã estruturado + calcinha em renda preta — sofisticação para a noite",
      keys: ["n6a","n6b"]
    },

    // ── Baby Dolls Dia dos Namorados ─────────────────────────────────
    {
      id: 34,
      nome: "Baby Doll Vermelho",
      preco: "R$ 149,90",
      cat: "baby-doll",
      badge: "Destaque",
      tags: ["dia-dos-namorados"],
      desc: "Tule transparente com renda — ousadia e sofisticação para a noite dos dois",
      keys: ["p2a","p2b"]
    },
    {
      id: 35,
      nome: "Baby Doll Noir",
      preco: "R$ 169,90",
      cat: "baby-doll",
      badge: "Noite",
      tags: ["dia-dos-namorados"],
      desc: "Renda preta com amarrações e tule — sensualidade extrema",
      keys: ["n7b","n7a"]
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
