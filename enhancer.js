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
          }
          else if (item.enhancement === 15) {
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
        }
        }
      }
        else if (item.enhancement === 20) {
        let enhanceLevel = '[PEN]';
        item.name = enhanceLevel + ' ' + item.name;
      }
    return item;
  }

  // fail: (item) => {

  // },

  // repair: (item) => {
  //   item.durability = 100;
  //   return item;
  // }

};