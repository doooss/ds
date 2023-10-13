type ErrorResult = [null, Error];
type SuccessResult<T> = [T, null];
type AsyncResult<T> = ErrorResult | SuccessResult<T>;

async function asyncWithError<T>(promise: Promise<T>): Promise<AsyncResult<T>> {
    try {
        const result = await promise;
        return [result, null];
    } catch (error) {
        return [null, error as Error];
    }
}

export default asyncWithError;
