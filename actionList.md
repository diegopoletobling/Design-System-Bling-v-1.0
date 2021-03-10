# Components / Action List

## Action List

Esse botão possibilita que o usuário possa escolher outras ações de mesma natureza. Também
pode ser usado para um conjunto de ações que não cabem no espaço disponível na tela.

![](../_media/images/iconCIL.png)
### Regras de Uso no Bling

Esse componente é usado em listagens dentro de modais ou páginas com data table se precisar.

### Como usar

O "CommonActions" usado no código a baixo, é um objeto de "Filter", funciona como uma lista de objetos. Cada objeto dessa lista representa respectivamente uma funcionalidade: **Sacola de Compras**, **Imprimir Relatório** e **Excluir os Produtos Selecionados**.

```css
commonActions: [
{
	icon: 'fas fa-shopping-bag',
	title: 'Sacola de compras',
	dataSystemAction: 'SacolaCompras',
	id: 'sacola_compras'
},
{
	icon: 'fas fa-print',
	title: 'Imprimir',
	class: 'act-relatorio'
},
{
	icon: 'fas fa-trash-alt',
	title: 'Excluir os produtos selecionados',
	dataSystemAction:'ProdutosRegistroEX',
	class:'act-excluir'
}
]
```
### Exemplo a baixo: Essa opção é utilizada na listagem principal

![](../_media/images/iconProdutos.png)