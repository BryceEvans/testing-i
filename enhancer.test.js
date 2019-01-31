const enhancer = require('./enhancer');
const items = require('./items');

const enhancedItems = items.map(enhancer.success);

// const repairItem4 = enhancer.repair(items[4]);

// test('item at index equals item at index', () => {
//   expect(enhancer.success(items[0])).toEqual({
//     name: 'shortsword',
//     type: 'weapon',
//     durability: 100,
//     enhancement: 0
//   });
//   expect(enhancer.success(items[4])).toEqual({
//     name: 'shield',
//     type: 'armor',
//     durability: 80,
//     enhancement: 0
//   });
// })

test('when enhancement succeeds', () => {
  expect(enhancer.success(enhancedItems[1].enhancement)).toBe(2);
  expect(enhancer.success(enhancedItems[1].name)).toEqual('[+2] helmet');
  expect(enhancer.success(enhancedItems[2].name)).toEqual('[PEN] dagger');
  expect(enhancer.success(enhancedItems[3].name)).toEqual('[DUO] broadsword');
})

// test('repair item to durability of 100', () => {
//   expect(repairItem4.durability).toEqual(100);
// })