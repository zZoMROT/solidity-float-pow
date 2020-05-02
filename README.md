# Soliditemp

TruffleFramework template with travis-ci.org and coveralls.io configured

[![Build Status](https://travis-ci.org/zZoMROT/solidity-float-pow.svg?branch=master)](https://travis-ci.org/zZoMROT/solidity-float-pow)
[![Coverage Status](https://coveralls.io/repos/github/zZoMROT/solidity-float-pow/badge.svg?branch=master)](https://coveralls.io/github/zZoMROT/solidity-float-pow?branch=master)

### Установка

1. Глобально установить [truffle](http://truffleframework.com) с помощью команды `npm install -g truffle`
2. Глобально установить [ganache-cli](https://github.com/trufflesuite/ganache-cli) с помощью команды `npm install -g ganache-cli`
3. Локально установить пакеты с помощью команды `npm install`
4. Запустить ganache в отдельном терминале `scripts/rpc.sh` (Возможгно понадобится добавить в переменную окружения PATH с помощью команды `PATH=$PATH:<path_to_npm_bin>` путь до исполняемого файла npm, узнать этот путь можно командой `npm bin -g`)
5. Запустить тесты с помощью команды `npm test`

На macOS необходимо установить watchman: `brew install watchman`

Для смены версии компилятора необходимо указать нужную версию в `truffle.js` и переустановить его с помощью команд 
```
npm uninstall -g truffle
npm install truffle
```
После этого рекоммендуется сделать апдейт `ganache-cli` с помощью команды `npm install -g ganache-cli`


```
Отсутствие fallback'a  даст реверт, при попытке кинуть eth на адрес контракта
```

### Библиотека

`lib/Sqrt.sol`

- `sqrt(uint256 c, uint256 rank)` - вавилонский корень степени `rank` из числа `c`
- `precisionSqrt(uint256 c, uint256 rank, uint256 precision)` - корень степени `rank` с точностью `precision` знаков после запятой из `n`-разрядного числа `c`, при условии что `pk + n < 78`

     