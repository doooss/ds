import asyncWrapper from './asyncWrapper';

describe('asyncWrapper', () => {
    it('should return result data with null error when promise resolves', async () => {
        const promise = Promise.resolve('Resolved data');
        const [result, error] = await asyncWrapper(promise);

        expect(result).toEqual('Resolved data');
        expect(error).toBeNull();
    });

    it('should return null result with an error when promise rejects', async () => {
        const promise = Promise.reject(new Error('Rejected error'));
        const [result, error] = await asyncWrapper(promise);

        expect(result).toBeNull();
        expect(error).toBeInstanceOf(Error);
        expect(error?.message).toEqual('Rejected error');
    });
});
