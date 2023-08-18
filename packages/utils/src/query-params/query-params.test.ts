import { removeValueFromQueryParams, toggleQueryParamValue } from './query-params';

describe('toggleQueryParamValue', () => {
    it('should remove the value if it already exists', () => {
        const params = new URLSearchParams('key=value1&key=value2');
        const result = toggleQueryParamValue(params, 'key', 'value1');
        expect(result.toString()).toBe('key=value2');
    });

    it('should add the value if it does not exist', () => {
        const params = new URLSearchParams('key=value1&key=value2');
        const result = toggleQueryParamValue(params, 'key', 'value3');
        expect(result.toString()).toBe('key=value1&key=value2&key=value3');
    });

    it('should add the key and value if the key does not exist', () => {
        const params = new URLSearchParams('otherKey=value1');
        const result = toggleQueryParamValue(params, 'key', 'value1');
        expect(result.toString()).toBe('otherKey=value1&key=value1');
    });
});

describe('removeValueFromQueryParams', () => {
    it('should not modify before params', () => {
        const params = new URLSearchParams('key=value1&key=value2');
        removeValueFromQueryParams(params, 'key', 'value1');
        expect(params.toString()).toBe('key=value1&key=value2');
    });

    it('should remove the value if it already exists', () => {
        const params = new URLSearchParams('key=value1&key=value2');
        const result = removeValueFromQueryParams(params, 'key', 'value1');
        expect(result.toString()).toBe('key=value2');
    });

    it('should maintain the state if the value does not exist', () => {
        const params = new URLSearchParams('key=value1&key=value2');
        const result = removeValueFromQueryParams(params, 'key', 'targetValue3');
        expect(result.toString()).toBe('key=value1&key=value2');
    });

    it('should maintain the state if the key does not exist', () => {
        const params = new URLSearchParams('otherKey=otherValue');
        const result = removeValueFromQueryParams(params, 'key', 'value1');
        expect(result.toString()).toBe('otherKey=otherValue');
    });
});
