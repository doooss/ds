# useLockedBody

https://usehooks-ts.com/react-hook/use-locked-body 의 코드입니다.

해당 코드는 스크롤을 잠구고 싶을때 사용합니다.

## How to use

```ts
const [locked, setLocked] = useLockedBody();

console.log(locked); // 상태값

setLocked(true); // 바디 잠굼 (스크롤 안움직임)

setLocked(false); // 스크롤 다시 가능
```
