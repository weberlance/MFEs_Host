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

    // case with correct mime
    // const script = document.createElement('script');
    // script.id = scriptId;
    // script.src = `${host}/bundle.js`;
    // script.onload = this.renderMicroFrontend;
    // document.head.appendChild(script);

    // for Demo purposes only. Use script as a text due to wrong mime type from github
    fetch(`${host}/bundle.js`)
      .then(res => res.text())
      .then(rawScript => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.append(rawScript);
        document.head.append(script);
        this.renderMicroFrontend();
      });
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
    const { name, host } = this.props;
    return (
      <div>
        <h1>{name} MicroFrontend</h1>
        <p>from '{host}'</p>
        <main id={`${this.props.name}-container`} />
      </div>
    );
  }
}

export default MicroFrontend;
