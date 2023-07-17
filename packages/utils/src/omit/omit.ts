/**
 *  TS Omit 에 대응하는 함수
 *  @param {object} object 오브젝트 타입
 *  @param {Array} keys 제외하고 싶은 key 값들 Array
 *  @return {object} obj 에서 keys 제외한 Object
 *  @return object에 object가 아닌 값이 들어올 경우 예외처리로 뒤 값에 상관없이 그대로 리턴
 */

export function omit<T, K extends (keyof T)[]>(object: T, keys: K): Omit<T, (typeof keys)[number]> {
    if (typeof object !== 'object' || !object) return object;

    const _obj = { ...object };
    for (const el of keys) {
        delete _obj[el];
    }

    const __obj: Omit<T, (typeof keys)[number]> = { ..._obj };

    return __obj;
}

export default omit;
