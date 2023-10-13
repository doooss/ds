# asyncWrapper

async await 에서 error 처리를 try ~ catch 로 해야하는 불편함을 줄여주는 wrapper 입니다.

드러나는 error를 여러 뎁스에서 전달하기 쉽다.

## How to use

promise 함수를 인자로 전달해주면 됩니다.

```ts
    const [result, error] = await asyncWrapper(promiseFn)
```

result 와 error 중 빈 값은 null 로 리턴합니다.
