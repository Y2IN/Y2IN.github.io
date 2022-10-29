---
title: var, let, const의 차이점
date: '2022-10-23'
tags: ['JavaScript', 'grammer', 'function']
draft: false
summary: 변수 선언 방식인 var, let, const에 대해
---

## var, let, const의 차이점에 대해 알아보자
우선 let, const는 ES6 업데이트 이후로 추가된 선언 방식이다.

## var (변수 재선언 가능)
```javascript
var a = '변수 선언'
console.log(a);

var a = '변수 선언2'
console.log(a);
```
var은 변수 선언이 여러 번 가능하다.위의 코드와 같이 변수를 2번 선언했는데도 에러가 안 나오고 다른 값이 출력된다.
변수명을 남용하는 문제를 일으킬 수 있기 때문에 ES6부터 나온 const와 let은 var과 같은 선언 방식을 막고있다.

## let (변수 재선언 불가능, 재할당 가능)
```javascript
let a = '변수 선언';
console.log(a);

let a = '변수 선언2';
console.log(a);
//error -> 변수 재선언 불가능
a = '변수 할당';
console.log(a);

```
다른 언어에서도 많이 볼 수 있는 방식인 let은 변수는 var처럼 재선언은 불가능하다. 다만 변수의 재할당은 가능하다. 

## const (변수 재선언 불가능, 재할당 불가능)
```javascript
const a = '변수 선언';
console.log(a);

let a = '변수 선언2';
console.log(a);
//error -> 변수 재선언 불가능
a = '변수 할당';
console.log(a);
//error -> 변수 재할당 불가능

```
const는 재할당, 재선언 모두 불가능하다.

## 결론
재할당이 필요없는 경우 const를, 할당이 필요하면 let을 사용해서 불필요한 변수의 재사용 남발을 막는 것이 좋다.
