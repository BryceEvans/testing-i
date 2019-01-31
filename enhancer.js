module.exports = {

  success: (item) => {
    item.enhancement = item.enhancement+1;
    // return item;
    
    let enhanceLevel = '[+' + item.enhancement + ']';
    item.name = enhanceLevel + ' ' + item.name;
    return item;
  }

  // fail: (item) => {

  // },

  // repair: (item) => {
  //   item.durability = 100;
  //   return item;
  // }

};