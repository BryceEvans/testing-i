const enhancer = require('./enhancer');
const items = require('./items');

const enhancedItems = items.map(enhancer.success);

test('', () => {
  expect(enhancer.success(enhancedItems[0])).toEqual({
    name: 'shortsword',
    type: 'weapon',
    durability: 100,
    enhancement: ''
  });
})

// test('', () => {
  
// })

// test('', () => {
  
// })