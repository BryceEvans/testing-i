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
  expect(enhancer.success(enhancedItems[0].enhancement)).toBe(1);
})

// test('repair item to durability of 100', () => {
//   expect(repairItem4.durability).toEqual(100);
// })