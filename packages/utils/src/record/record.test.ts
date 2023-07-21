import record from './record';

describe('record test', () => {
    const SAMPLE_OBJECT = {
        id: 0,
        name: 'hong gil dong',
        email: 'asdf1234@asdf.com',
        password: 'Passw0rd',
    };

    const something = {
        user: {
            id: 0,
            name: 'hong gil dong',
            email: '',
        },
        priority: 2,
        is_admin: false,
    };

    const SAMPLE_KEYS = Object.keys(SAMPLE_OBJECT);
    const SAMPLE_VALUES = Object.values(SAMPLE_OBJECT);

    it('object record test', () => {
        expect(record(SAMPLE_KEYS, SAMPLE_VALUES)).toStrictEqual({
            ...SAMPLE_OBJECT,
        });
    });

    it('object in object is working??', () => {
        expect(record(Object.keys(something), Object.values(something))).toStrictEqual({
            ...something,
        });
    });
});
