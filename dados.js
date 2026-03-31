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
      id: 1,
      nome: "Baby Doll Branco",
      preco: "R$ 149,90",
      cat: "baby-doll",
      badge: "Lançamento",
      desc: "Tule e renda delicada — puro romantismo",
      keys: ["p1c", "p1a", "p1b", "p1d"]
    },
    {
      id: 2,
      nome: "Baby Doll Vermelho",
      preco: "R$ 149,90",
      cat: "baby-doll",
      badge: "Destaque",
      desc: "Tule transparente com renda — ousadia e sofisticação",
      keys: ["p2a", "p2b"]
    },
    {
      id: 18,
      nome: "Baby Doll Noir",
      preco: "R$ 169,90",
      cat: "baby-doll",
      badge: "Exclusivo",
      desc: "Renda preta com amarrações e tule — sensualidade extrema",
      keys: ["n7b", "n7a"]
    },
    {
      id: 3,
      nome: "Body Scarlet",
      preco: "R$ 129,90",
      cat: "body",
      badge: "Novo",
      desc: "Renda floral com forro — sensual e confortável",
      keys: ["p3a", "p3b"]
    },
    {
      id: 4,
      nome: "Body Rosê",
      preco: "R$ 129,90",
      cat: "body",
      badge: "Exclusivo",
      desc: "Renda delicada em nude rosado — elegância pura",
      keys: ["p4a", "p4b"]
    },
    {
      id: 5,
      nome: "Body Dourado",
      preco: "R$ 129,90",
      cat: "body",
      badge: "Premium",
      desc: "Renda floral amarela — atrevida e luminosa",
      keys: ["p5a", "p5b", "p5c"]
    },
    {
      id: 6,
      nome: "Camisola Noir",
      preco: "R$ 159,90",
      cat: "camisola",
      badge: "Novo",
      desc: "Cetim com renda e decote aberto nas costas",
      keys: ["c6a", "c6b", "c6c"]
    },
    {
      id: 7,
      nome: "Camisola Terracota",
      preco: "R$ 159,90",
      cat: "camisola",
      badge: "Destaque",
      desc: "Cetim rosê com renda e costas cruzadas",
      keys: ["c7a", "c7b", "c7c"]
    },
    {
      id: 15,
      nome: "Camisola Carmim",
      preco: "R$ 189,90",
      cat: "camisola",
      badge: "Hot",
      desc: "Corset em renda com saia longa em tule — dramática e irresistível",
      keys: ["n5a", "n5b", "n5c", "n5d"]
    },
    {
      id: 8,
      nome: "Calcinha Noir",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Hot",
      desc: "Fio dental com renda preta e argolas douradas",
      keys: ["c8a", "c8b", "c8c"]
    },
    {
      id: 9,
      nome: "Calcinha Crimson",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Quente",
      desc: "Fio dental vermelho com renda — apaixonante e irresistível",
      keys: ["c9b", "c9c", "c9a", "c9d"]
    },
    {
      id: 10,
      nome: "Calcinha Blossom",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Delicada",
      desc: "Fio dental rosa com renda e detalhe coração",
      keys: ["c10a", "c10b", "c10c"]
    },
    {
      id: 11,
      nome: "Calcinha Branca",
      preco: "R$ 59,90",
      cat: "calcinha",
      badge: "Clássica",
      desc: "Fio dental branco com renda — minimalista e sensual",
      keys: ["c11a", "h1", "h2", "h3"]
    },
    {
      id: 12,
      nome: "Conjunto Renda Noir",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Luxo",
      desc: "Bralette + saia de renda preta — sofisticação máxima",
      keys: ["n1b", "n1c", "n1a"]
    },
    {
      id: 13,
      nome: "Conjunto Renda Rubi",
      preco: "R$ 189,90",
      cat: "lingerie",
      badge: "Paixão",
      desc: "Bralette + saia de renda vermelha — ardente e elegante",
      keys: ["n2b", "n2a", "n2c"]
    },
    {
      id: 14,
      nome: "Conjunto Renda Noir Luxo",
      preco: "R$ 199,90",
      cat: "lingerie",
      badge: "Coleção",
      desc: "Sutiã estruturado + calcinha em renda preta volumosa",
      keys: ["n6a", "n6b"]
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
      keys: ["n4a"]
    },
  ],

  // ------------------------------------------------------------------
  // BANNERS — slides do topo da página (máx. recomendado: 10)
  // Altere "key" para a chave da foto em fotos.js
  // Altere "nome" e "sub" para o texto que aparece no banner
  // ------------------------------------------------------------------
  banners: [
    { key: "n1b", nome: "Conjunto Renda Noir", sub: "Sofisticação que encanta" },
    { key: "p2b", nome: "Baby Doll Vermelho", sub: "Para noites inesquecíveis" },
    { key: "n2b", nome: "Conjunto Renda Rubi", sub: "Ardente e irresistível" },
    { key: "c6a", nome: "Camisola Noir", sub: "Elegância que transforma" },
    { key: "n5a", nome: "Camisola Carmim", sub: "Dramática e sedutora" },
    { key: "p1c", nome: "Baby Doll Branco", sub: "Delicadeza e romantismo" },
    { key: "c7a", nome: "Camisola Terracota", sub: "Romantismo moderno" },
    { key: "n7b", nome: "Baby Doll Noir", sub: "Sensualidade em cada detalhe" },
    { key: "p5b", nome: "Body Dourado", sub: "Luminosa e atrevida" },
    { key: "n5d", nome: "Camisola Carmim", sub: "Cada detalhe é um convite" },
  ]
};
