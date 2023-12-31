# Kukac Test Backend
> A cool playground.

Teste técnico feito para a empresa Kukac que apresenta 4 propostas.
1. Palindromos: Descobrir números palíndromos entre um intervalo.
2. Caixa: Descobrir o troco de uma compra, e quantas notas de 100, 10 e 1 podem ser retornadas.
3. Garagem: Organizar veículos em uma garagem, apresentando seus dados de forma organizada.
4. CEP: Descobrir a localidade de 5 CEPs.

![](header.png)

## Instalação

Instale as depêdencias do projeto com o seguinte comando:

```sh
npm install
```

## Como rodar o backend

Rode o backend simultaneamente com o frontend com o seguinte comando:

```sh
npm run dev
```
##  Ténologias usadas

Para implementação do backend foi usado:

1. Node
2. Express
3. Jest


##  Executando os testes

Para executar os teste unitários, rode o comando abaixo.

```sh
npm run test
```

### Análise dos testes:

Foram criados três testes suites com JEST para os três tipos de controllers: palindrome, cashier, e garage. 
Os testes foram feitos para validar a cobertura de funcionamento desses controllers, e verificar possíveis erros.

- Palindrome testes: Foram realizados testes para confirmar o funcionamento da função que deveria informar se um número é palindromo ou não, e testes para confirmar se todos os palindromos em um intervalo de números estão corretos. 
- Cashier testes: Foram realizados testes para verificar se o valor da compra é menor que o valor pago e testes para confirmar se o valor de troco é correto.
- Garage testes: Foram realizados testes para verificar se o arquivo Json foi corretamente criado e testes para confirmar se o arquivo Json foi corretamente removido.

