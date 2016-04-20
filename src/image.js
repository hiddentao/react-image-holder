var omit = require('lodash/omit'),
  React = require('react'),
  ReactDOM = require('react-dom'),
  qs = require('query-string');


var DEFAULT_PROPS = {
  usePlaceholder: false,
  placeholder: {
    /* See https://github.com/imsky/holder#placeholder-options for info on more props and themes */
    theme: 'vine',
    auto: true,
  },
};


var Img = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    usePlaceholder: React.PropTypes.bool,
    placeholder: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return DEFAULT_PROPS;
  },

  render: function() {
    let props = this.props;

    let { width, height } = this.props;

    let attrs = omit(props, 'src', 'usePlaceholder', 'placeholder');

    // placeholder
    if (props.usePlaceholder) {
      let query = qs.stringify(props.placeholder);

      let src = `holder.js/${width}x${height}?${query}`;

      let placeholderAttrs = omit(attrs, 'width', 'height');

      return (
        <img {...placeholderAttrs} ref="placeholder" data-src={src} />
      );
    } 
    // real
    else {
      return (
        <img {...attrs} src={props.src} />
      );
    }
  },

  componentDidMount: function() {
    this._initPlaceholderImage();
  },


  componentDidUpdate: function(oldProps) {
    this._initPlaceholderImage();
  },


  _initPlaceholderImage: function() {
    if (!this.props.usePlaceholder) {
      return;
    }

    let node = ReactDOM.findDOMNode(this.refs.placeholder);

    // require in here to prevent errors during server-side rendering
    let Holder = require('holderjs');

    Holder.run({
      domain: 'holder.js',
      images: node,
      object: null,
      bgnodes: null,
      stylenodes: null,
    });
  },

});


// make 
Img.DEFAULT_PROPS = DEFAULT_PROPS;


module.exports = Img;
