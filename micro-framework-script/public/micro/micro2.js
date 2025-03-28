// 立即执行的匿名函数可以防止变量 root 产生冲突
(function () {
  let root;
  window.micro2_mount = function (slot) {
    // 以下其实可以是 React 框架或者 Vue 框架生成的 Document 元素，这里只是做一个简单的示例
    root = document.createElement('h1');
    root.textContent = '微应用2';
    // 在微应用插槽上挂载 DOM 元素
    const $slot = document.querySelector(slot);
    $slot.appendChild(root);
  }
  window.micro2_unmount = function () {
    if (!root) return;
    root.parentNode.removeChild(root);
  }
})();