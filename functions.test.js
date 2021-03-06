const f = require('./functions');
test('test of jest get async api with axios.', async () => {
    const data = await f.fetchUser();
    await console.log('test axios api.name:', data.name);
    expect(data.name).toBe('John');
});
test('2+2',       () => { expect(f.add(3,1)).toBe(4); });
test('2+2',       () => { expect(f.add(2,2)).not.toBe(5); });
test('null',      () => { expect(f.isNull()).toBe(null); });
test('undefined', () => { expect(f.isUndefined()).toBe(undefined); });
test('undefined', () => { expect(f.checkValue(undefined)).toBe(undefined); });
test('not falsy', () => { expect(f.checkValue(2)).not.toBeFalsy(); });