/**
 * TS Pick 에 대응하는 함수
 * @param {Object} object 대상 전체 오브젝트
 * @param {Array} keys pick 할 대상의 key값 Array
 * @returns Pick<Object, typeof keys[number]>
 */

function pick<T>(object: T, keys: (keyof T)[]): Pick<T, (typeof keys)[number]> {
    if (typeof object !== 'object' || !object) return object;

    const _obj: Partial<T> = {};

    for (const el of keys) {
        _obj[el] = object[el];
    }

    const __obj = { ..._obj } as Pick<T, (typeof keys)[number]>;

    return __obj;
}

export default pick;
