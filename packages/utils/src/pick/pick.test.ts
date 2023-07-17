import pick from './pick';

describe('pick test', () => {
    const SAMPLE_OBJECT = {
        id: 0,
        name: 'hong gil dong',
        email: 'asdf1234@asdf.com',
        password: 'Passw0rd',
    };

    test('object _pick test', () => {
        expect(pick(SAMPLE_OBJECT, ['name'])).toStrictEqual({
            name: SAMPLE_OBJECT['name'],
        });
        expect(pick(SAMPLE_OBJECT, ['email', 'id'])).toStrictEqual({
            email: SAMPLE_OBJECT['email'],
            id: SAMPLE_OBJECT['id'],
        });
    });
});
