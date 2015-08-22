var React = require('react'),
  qs = require('query-string');


module.exports = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.number,
    height: React.PropTypes.string.number,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      className: undefined,
      width: undefined,
      height: undefined,
      placeholder: {
        /* See https://github.com/imsky/holder#placeholder-options for info on more props and themes */
        theme: 'vine',
        auto: true,
      }
    };
  },

  render: function() {
    var attrs = {
      className: this.props.className,
      width: this.props.width,
      height: this.props.height,
    };

    // real image
    if (this._isPlaceholderImage()) {
      let query = qs.stringify(this.props.placeholder);

      return (
        <img {...attrs} ref="placeholder" data-src={`${this.props.src}?${query}`} />
      );
    } 
    // placeholder
    else {
      return (
        <img {...attrs} src={this.props.src} />
      );
    }
  },


  componentDidMount: function() {
    this._initPlaceholderImage();
  },


  componentDidUpdate: function(oldProps) {
    if (oldProps.src !== this.props.src) {
      this._initPlaceholderImage();
    }
  },


  _initPlaceholderImage: function() {
    if (!this._isPlaceholderImage()) {
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

  _isPlaceholderImage: function() {
    return (0 === this.props.src.indexOf('holder.js'));
  },

});


