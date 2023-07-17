# useOnClickOutside

    타겟이 되는 부분의 바깥부분을 클릭(클릭시, or 클릭 뗄 경우) 에 이벤트를 작동시킬 수 있는 훅

## How to use

```ts
const targetRef = useRef(null);

const doSomething = () => {};

// outside 이기때문에 해당하는 target을 Ref 를 등록하고, 작동할 이벤트 (domsomething), Nullable< 'mouseup' | 'mousedown' > 을 사용하여 이벤트를 실행시킨다
useOnClickOutside(targetRef, doSomething, 'mouseup');

return (
    <>
        <div ref={targetRef}></div>
    </>
);
```
