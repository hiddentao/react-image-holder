var _ = require('lodash'),
  React = require('react'),
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

    var attrs = _.omit(props, 'src', 'usePlaceholder', 'placeholder');

    // placeholder
    if (props.usePlaceholder) {
      let query = qs.stringify(props.placeholder);

      let src = `holder.js/${attrs.width}x${attrs.height}?${query}`;

      attrs = _.omit(attrs, 'width', 'height');
      
      return (
        <img {...attrs} ref="placeholder" data-src={src} />
      );
    } 
    // real
    else {
      return (
        attrs = _.omit(attrs, 'width', 'height');
        
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

    let node = React.findDOMNode(this.refs.placeholder);

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
