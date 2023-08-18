export const removeValueFromQueryParams = (
    originalParams: URLSearchParams,
    queryKey: string,
    queryValue: string
) => {
    const updatedParams = new URLSearchParams(originalParams);

    const currentValues = updatedParams.getAll(queryKey);
    const updatedValues = currentValues.filter((value) => value !== queryValue);

    updatedParams.delete(queryKey);
    updatedValues.forEach((value) => updatedParams.append(queryKey, value));

    return updatedParams;
};

export const toggleQueryParamValue = (
    originalParams: URLSearchParams,
    queryKey: string,
    queryValue: string
) => {
    const updatedParams = new URLSearchParams(originalParams);

    const currentValues = updatedParams.getAll(queryKey);
    const updatedValues = currentValues.includes(queryValue)
        ? currentValues.filter((value) => value !== queryValue)
        : [...currentValues, queryValue];

    updatedParams.delete(queryKey);
    updatedValues.forEach((value) => updatedParams.append(queryKey, value));

    return updatedParams;
};

export const replaceQueryParamValue = (
    originalParams: URLSearchParams,
    queryKey: string,
    queryValue: string | string[]
) => {
    const updatedParams = new URLSearchParams(originalParams);

    if (Array.isArray(queryValue)) {
        updatedParams.delete(queryKey);
        queryValue.forEach((value) => updatedParams.append(queryKey, value));
        return updatedParams;
    }
    updatedParams.set(queryKey, queryValue);

    return updatedParams;
};
