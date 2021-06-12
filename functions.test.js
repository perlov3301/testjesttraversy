const f = require('./functions');
test('test of jest', () => {
    const a = 3;
    expect(a).toBe(3);
});
test('2+2=4', () => { expect(f.add(2,2)).toBe(4); });