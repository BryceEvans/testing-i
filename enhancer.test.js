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



// describe('repair', () => {
//   test('repair item to durability of 100', () => {
//     expect(enhancer.repair(enhancedItems[5].durability)).toEqual(100);
//   });
// });
