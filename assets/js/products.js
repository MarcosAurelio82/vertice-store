// Cadastro centralizado do catálogo. Para incluir uma peça, informe gênero,
// grupo, categoria, nome, tamanho, preço de venda e o caminho da fotografia.
const catalog = {
  masculina: {
    label: 'Moda Masculina',
    groups: [
      { name: 'Camisas', categories: ['Drifty', 'Oversized', 'Malha Normal', 'Malha Peruana', 'Basquete'] },
      { name: 'Calças', categories: ['Sarja', 'Nike', 'Jogger', 'Moletom'] },
      { name: 'Bermudas', categories: ['Bermuda Sarja'] },
      { name: 'Moletons e Suéteres', categories: ['Blusa Moletom', 'Suéter'] }
    ]
  },
  feminina: {
    label: 'Moda Feminina',
    groups: [
      { name: 'Blusas', categories: ['Baby Look Manga Longa', 'Blusa Bata', 'Blusa Cacharrel', 'Blusa com Manga', 'Blusa de Frio', 'Blusa Feminina', 'T-shirt', 'Top'] },
      { name: 'Calças', categories: ['Alfaiataria', 'Legging', 'Montaria'] },
      { name: 'Conjuntos', categories: ['Conjunto Feminino', 'Conjunto Koreano'] },
      { name: 'Shorts', categories: ['Short Linho'] }
    ]
  }
};

const products = [
  {id:'lacoste-marinho', gender:'masculina', group:'Camisas', category:'Malha Peruana', name:'Camiseta Lacoste azul-marinho', size:'G', price:69.90, image:'assets/images/products/camiseta-lacoste-frente.webp'},
  {id:'lv-preta', gender:'masculina', group:'Camisas', category:'Malha Peruana', name:'Camiseta Louis Vuitton preta', size:'GG', price:69.90, image:'assets/images/products/camiseta-louis-vuitton-frente.webp'},
  {id:'adidas-laranja', gender:'masculina', group:'Camisas', category:'Malha Peruana', name:'Camiseta Adidas laranja', size:'G', price:69.90, image:'assets/images/products/camiseta-adidas-laranja-frente.webp'},
  {id:'adidas-bege', gender:'masculina', group:'Camisas', category:'Oversized', name:'Camiseta Adidas bege', size:'GG', price:89.90, image:'assets/images/products/camiseta-adidas-bege-frente.webp'},
  {id:'macaquinho-preta', gender:'masculina', group:'Camisas', category:'Oversized', name:'Camiseta preta estampa macaquinho', size:'GG', price:89.90, image:'assets/images/products/camiseta-macaquinho-frente.webp'},
  {id:'coelho-preta', gender:'masculina', group:'Camisas', category:'Oversized', name:'Camiseta preta estampa coelho', size:'GG', price:89.90, image:'assets/images/products/camiseta-coelho-frente.webp'},
  {id:'bermuda-preta', gender:'masculina', group:'Bermudas', category:'Bermuda Sarja', name:'Bermuda preta', size:'42', price:79.90, image:'assets/images/products/bermuda-preta.webp'},
  {id:'bermuda-marinho', gender:'masculina', group:'Bermudas', category:'Bermuda Sarja', name:'Bermuda azul-marinho', size:'42', price:79.90, image:'assets/images/products/bermuda-azul-marinho.webp'},
  {id:'bermuda-bege', gender:'masculina', group:'Bermudas', category:'Bermuda Sarja', name:'Bermuda bege', size:'44', price:79.90, image:'assets/images/products/bermuda-bege.webp'},
  {id:'bermuda-azul', gender:'masculina', group:'Bermudas', category:'Bermuda Sarja', name:'Bermuda azul', size:'40', price:79.90, image:'assets/images/products/bermuda-azul.webp'}
];