'use strict';
let glob = require('glob');

// 获取所有入口文件
let getEntry = function(globPath) {
  let entries = {
    vendor: ['jquery','react','react-dom'] // 类库
  };

  glob.sync(globPath).forEach(entry => {
    let pathname = entry.split('/').splice(-2).join('/').split('.')[0];
    entries[pathname] = [entry];
  });
  return entries;
};

module.exports = getEntry;
