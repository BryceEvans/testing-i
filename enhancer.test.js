const enhancer = require('./enhancer');
const items = require('./items');

const enhancedItems = items.map(enhancer.success);


describe('success', () => {
  test('when enhancement succeeds', () => {
    expect(enhancer.success(enhancedItems[1].enhancement)).toBe(2);
    expect(enhancer.success(enhancedItems[1].name)).toEqual('[+2] helmet');
    expect(enhancer.success(enhancedItems[2].name)).toEqual('[PEN] dagger');
    expect(enhancer.success(enhancedItems[3].name)).toEqual('[DUO] broadsword');
    expect(enhancer.success(enhancedItems[5].enhancement)).toBe(5);
  });
});

describe('fail', () => {
  test('when enhancement failss', () => {
    expect(enhancer.fail(enhancedItems[0].enhancement)).toBe(1);
    expect(enhancer.fail(enhancedItems[1].enhancement)).toBe(2);
    expect(enhancer.fail(enhancedItems[1].name)).toEqual('[+2] helmet');
    expect(enhancer.fail(enhancedItems[0].name)).toEqual('[+1] shortsword');
    // expect(enhancer.fail(enhancedItems[6].name)).toEqual('[+8] shortsword');
    expect(enhancer.fail(enhancedItems[6].durability)).toBe(95);
    // expect(enhancer.fail(enhancedItems[7].durability)).toBe(60);
  });
});



// describe('repair', () => {
//   test('repair item to durability of 100', () => {
//     expect(enhancer.repair(enhancedItems[5].durability)).toEqual(100);
//   });
// });
