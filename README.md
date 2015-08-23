# react-image-holder

[![Build Status](https://secure.travis-ci.org/hiddentao/react-image-holder.png)](http://travis-ci.org/hiddentao/react-image-holder)

An `<img />` component for React which can render _real_ images as well use an offline _placeholder_ as a fallback if need be.

All placeholders are rendered using [holder.js](https://github.com/imsky/holder), meaning they will work even when offline. You can even configure the component to always render a placeholder for all its instances.

## Installation

```bash
$ npm install react-image-holder
```

## Examples

All examples assume you have `require()`-d the component:

```js
var Img = require('react-image-holder');
```

**A real image**

```js
var realImage = (
  <Img src="http://animalia-life.com/data_images/cat/cat5.jpg" />
);
```js

Output:

```html
<img src="http://animalia-life.com/data_images/cat/cat5.jpg" />
```

**Additional attributes**

```js
var realImage = (
  <Img src="http://animalia-life.com/data_images/cat/cat5.jpg" 
    width="802"
    height="450"
    className="cat-photo" />
);
```js

Output:

```html
<img width="802" height="450" class="cat-photo" src="http://animalia-life.com/data_images/cat/cat5.jpg" />
```


**Use a placeholder instead**

```js
var realImage = (
  <Img src="http://animalia-life.com/data_images/cat/cat5.jpg" 
    width="802"
    height="450"
    className="cat-photo" 
    usePlaceholder="true"
    />
);
```js

Output:

```html
<img class="cat-photo" data-src="holder.js/802x450?auto=true&theme=vine" />
```

_Holder.js then processes the above tag and renders a placeholder_.



**Setting placeholder properties**

```js
var placeholderProps = {
  theme: 'blue',
  size: 50,
  auto: false,
};

var realImage = (
  <Img src="http://animalia-life.com/data_images/cat/cat5.jpg" 
    width="802"
    height="450"
    usePlaceholder="true"
    placeholder={placeholderProps}
    />
);
```js

Output:

```html
<img data-src="holder.js/802x450?auto=false&size=50&theme=blue" />
```

_See [holder.js property list](https://github.com/imsky/holder) for all available properties_.


**Global placeholders**

Rather than passing the `usePlaceholder` property to each instance of the component you can 
also set this property's default value at the start of your app:

```js
Img.DEFAULT_PROPS.usePlaceholder = true;
```

Now all subsequent instances of the component will automatically use a 
placeholder image. And you can still override the setting on per-instance basis!


## Building

```bash
$ npm install
$ npm run build
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](https://github.com/hiddentao/react-image-holder/blob/master/CONTRIBUTING.md).


## License

MIT - see [LICENSE.md](https://github.com/hiddentao/react-image-holder/blob/master/LICENSE.md)