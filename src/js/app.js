var React = require('react'),
  Img = require('react-image-holder');


React.render(
  <Img src="./img/test1.jpg" />, 
  $('section.example1 .output').get(0)
);


React.render(
  <Img src="./img/test1.jpg" width="200" height="50" />, 
  $('section.example2 .output').get(0)
);


React.render(
  <Img src="./img/test1.jpg" width="400" height="100" usePlaceholder={true} />, 
  $('section.example3 .output').get(0)
);


React.render(
  <Img 
    src="./img/test1.jpg" 
    width="400" 
    height="100" 
    usePlaceholder={true} 
    placeholder={{
      theme: 'lava',
      size: 50,
    }} />, 
  $('section.example4 .output').get(0)
);

