(function() {
  // 保存原始的 console.log 函数
  var originalConsoleLog = console.log;

  // 重写 console.log 函数
  console.log = function() {
    // 调用原始的 console.log 以输出内容
    originalConsoleLog.apply(console, arguments);
  };
})();