# useIsomorphicLayoutEffect

https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect 의 코드입니다.

해당 훅은 Next.js 에서 useLayoutEffect 를 버그 없이 사용하기 위한 코드입니다

## How to use

useLayoutEffect 나 useEffect 처럼 사용하면 됩니다.

```ts
useIsomorphicLayoutEffect(() => {
    // do something
}, []);
```
