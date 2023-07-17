import omit from './omit';

describe('omit test', () => {
    const SAMPLE_OBJECT = {
        id: 0,
        name: 'hong gil dong',
        email: 'asdf1234@asdf.com',
        password: 'Passw0rd',
    };
    const _SAMPLE_OBJECT = { ...SAMPLE_OBJECT };

    test('object omit test', () => {
        expect(omit(SAMPLE_OBJECT, ['name'])).toStrictEqual({
            id: SAMPLE_OBJECT.id,
            email: SAMPLE_OBJECT.email,
            password: SAMPLE_OBJECT.password,
        });
        expect(omit(SAMPLE_OBJECT, ['id'])).toStrictEqual({
            name: SAMPLE_OBJECT.name,
            email: SAMPLE_OBJECT.email,
            password: SAMPLE_OBJECT.password,
        });
        expect(omit(SAMPLE_OBJECT, ['name', 'id'])).toStrictEqual({
            email: SAMPLE_OBJECT.email,
            password: SAMPLE_OBJECT.password,
        });

        expect(omit(SAMPLE_OBJECT, ['name', 'id', 'email', 'password'])).toStrictEqual({});

        expect(omit(SAMPLE_OBJECT, [])).toStrictEqual({ ...SAMPLE_OBJECT });

        expect(SAMPLE_OBJECT).toStrictEqual(_SAMPLE_OBJECT);
    });
});
