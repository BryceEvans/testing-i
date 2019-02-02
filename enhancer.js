module.exports = {

  success: (item) => {
      if (item.enhancement <= 19) {
        // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
        // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
        if (item.enhancement <= 14 && item.durability > 25 || item.enhancement >= 15 && item.durability > 10) {
          if (item.enhancement >= 0 && item.enhancement <= 14 ) {
            item.enhancement = item.enhancement+1;
            let enhanceLevel = '[+' + item.enhancement + ']';
            item.name = enhanceLevel + ' ' + item.name;
          } else if (item.enhancement === 15) {
            let enhanceLevel = '[PRI]';
            item.name = enhanceLevel + ' ' + item.name;
          } else if (item.enhancement === 16) {
            let enhanceLevel = '[DUO]';
            item.name = enhanceLevel + ' ' + item.name;
          } else if (item.enhancement === 17) {
            let enhanceLevel = '[TRI]';
            item.name = enhanceLevel + ' ' + item.name;
          } else if (item.enhancement === 18) {
            let enhanceLevel = '[TET]';
            item.name = enhanceLevel + ' ' + item.name;
          } else if (item.enhancement === 19) {
            let enhancementLevel = '[PEN]';
            item.name = enhancementLevel + ' ' + item.name;
          }
        }
      } else if (item.enhancement === 20) {
        let enhanceLevel = '[PEN]';
        item.name = enhanceLevel + ' ' + item.name;
      }
    return item;
  },

  // fail: (item) => {
  //     // The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
  //     // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
  //     // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).

  // },

  // repair: (item) => {
  //   item.durability = 100;
  //   return item;
  // }

};