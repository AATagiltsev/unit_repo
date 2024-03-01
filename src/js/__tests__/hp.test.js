import getHealthState from '../hp';

test('result = healthy', () => {
    const result = getHealthState({ name: 'Маг', health: 78 });
    expect(result).toBe('healthy');
});

test('result = wounded', () => {
    const result = getHealthState({ name: 'Маг', health: 15 });
    expect(result).toBe('wounded');
});

test('result = critical', () => {
    const result = getHealthState({ name: 'Маг', health: 0 });
    expect(result).toBe('critical');
});