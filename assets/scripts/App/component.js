class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }
  createElement(tag, cssClasses, attributes) {
    const element = document.createElement(tag);
    if (cssClasses) element.className = cssClasses;
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        element.setAttribute(attr.name, attr.value);
      }
    }
    return element;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = this.createElement(tag, cssClasses, attributes);
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
