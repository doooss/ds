# query-params

next.js useRouter 의 기능이  URLSearchParams 와 유사하게 변경되어 제작한 커스텀 유틸함수

해당 유틸함수 들의 주 목적은 string[] 이 가능한 환경에서 하나씩 제거, 대체, 토글 하는 기능을 포함하고 있습니다.

## How to use

```ts

    const urlParams = new URLSerachParams();


// 공통적으로 첫파라미터는 urlSearchParams 값 Set 형태를 받고, queryKey:string, value:string 이 모두 필요합니다.

    // 특정 쿼리키 + value 값 제거 
    removeValueFromQueryParams(urlParams, queryKey, value )   

    // 특정 쿼리키 + value 값 토글 (있는 경우 제거, 없는 경우 append)
    toggleQueryParamValue(urlParams,queryKey, value )

    // 특정 쿼리 키 set  -> 해당 케이스는 value 에 array 가능
    replaceQueryParamValue(urlParams,queryKey, value )

```
