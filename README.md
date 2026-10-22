# Vértice Store

Loja estática de moda masculina para Itaúna-MG, pronta para GitHub Pages.

## Executar localmente

Abra `index.html` no navegador ou use qualquer servidor estático (por exemplo, a extensão Live Server no VS Code).

## Produtos e preços

Edite `assets/js/products.js`. As categorias disponíveis ficam no objeto `catalog`; cada produto usa `id`, `gender`, `group`, `category`, `name`, `size`, `price` e `image`. Produtos só devem ser cadastrados quando a fotografia real estiver na pasta de imagens.

## Fotografias

Coloque as fotos reais em `assets/images/products/`, substitua os placeholders e atualize o campo `image` no cadastro. Para frente/verso, acrescente uma propriedade `images` no produto e adapte o componente quando as fotos estiverem disponíveis.

## Estoque

O cadastro não exibe nem deduz estoque individual, pois os números disponíveis são por categoria. Quando houver estoque individual, acrescente uma propriedade como `stock` a cada produto e valide-a no carrinho.

## Publicar no GitHub Pages

Envie os arquivos a um repositório GitHub, abra **Settings → Pages**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e salve. A URL gerada pode então ser adicionada à bio do Instagram.
