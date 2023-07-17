import record from './record';

describe('record test', () => {
    const SAMPLE_OBJECT = {
        id: 0,
        name: 'hong gil dong',
        email: 'asdf1234@asdf.com',
        password: 'Passw0rd',
    };

    const SAMPLE_KEYS = Object.keys(SAMPLE_OBJECT);
    const SAMPLE_VALUES = Object.values(SAMPLE_OBJECT);

    it('object record test', () => {
        expect(record(SAMPLE_KEYS, SAMPLE_VALUES)).toStrictEqual({
            ...SAMPLE_OBJECT,
        });
    });
});
