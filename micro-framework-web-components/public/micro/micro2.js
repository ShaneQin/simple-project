class MicroApp2Element extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log(`[micro-app-2]：执行 connectedCallback 生命周期回调函数`);
    this.mount();
  }
  disconnectedCallback() {
    console.log(
      `[micro-app-2]：执行 disconnectedCallback 生命周期回调函数`
    );
    this.unmount();
  }
  mount() {
    const $micro = document.createElement('h1');
    $micro.textContent = '微应用2';
    this.appendChild($micro);
  }
  unmount() {
  }
}
window.customElements.define('micro-app-2', MicroApp2Element);