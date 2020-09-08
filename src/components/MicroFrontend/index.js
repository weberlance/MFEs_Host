import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    // TODO: temporary just use bundle.js
    // TODO: possible improve logic here or somewhere else
    // to get name and appropriate link of microfrontend
    //
    // fetch(`${host}/asset-manifest.json`)
    //   .then(res => res.json())
    //   .then(manifest => {
    //     const script = document.createElement('script');
    //     script.id = scriptId;
    //     script.src = `${host}${manifest['main.js']}`;
    //     script.onload = this.renderMicroFrontend;
    //     document.head.appendChild(script);
    //   });
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `${host}/bundle.js`;
    script.onload = this.renderMicroFrontend;
    document.head.appendChild(script);
  }

  componentWillUnmount() {
    const { name, host } = this.props;

    try {
      window[`unmount${name}`](`${name}-container`);
    } catch(e){
      // TODO: replace bundle with appropriate name
      console.log(`Error while 'unmount${name}' function execution 
      from '${host}/bundle.js' file`);
    }
  }

  renderMicroFrontend = () => {
    const { name, host, history } = this.props;

    try {
      window[`render${name}`](`${name}-container`, history);
      // E.g.: window.renderInnerApp1('InnerApp1-container', history);
    } catch(e) {
      // TODO: replace bundle with appropriate name
      console.log(`Error while 'render${name}' function execution 
      from '${host}/bundle.js' file`);
    }
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

export default MicroFrontend;
