/**
 * TS Record 에 대응하는 함수
 * @param {Array} keys 오브젝트 키값 Array
 * @param {Array} values 오브젝트 밸류값 Array
 * @returns {object} keys[key] : values[key] 로 이루어진
 */

function record<T extends string | number, K>(keys: T[], values: K[]): Record<T, K> {
    const _obj: Partial<Record<T, K>> = {};
    for (let i = 0, _length = keys.length; i < _length; i++) {
        _obj[keys[i]] = values[i];
    }

    const __obj = { ..._obj } as Record<T, K>;

    return __obj;
}

export default record;
