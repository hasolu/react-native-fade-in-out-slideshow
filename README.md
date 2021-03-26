# react-native-fade-in-out-slideshow


 
 **Make simple Slideshow your applications**
 
 
## Installation

Slideshow requires [Node.js](https://nodejs.org/) v10+ to run.
 
**npm** 
```sh
npm i react-native-fade-in-out-slideshow
```

**Import React Native**
```sh
import Slideshow from 'react-native-fade-in-out-slideshow'
```

**Example**

```sh

const items = [
  {
    image:
      'https://images.pexels.com/photos/7063754/pexels-photo-7063754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    image:
      'https://images.pexels.com/photos/7063749/pexels-photo-7063749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    image:
      'https://images.pexels.com/photos/7063746/pexels-photo-7063746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];


const App = () => {

return (
     <View>
         <Slideshow data={items} duration={4000} fadeDuration={1200} style={{width:300, height:300}} />
     </View>
)

}

```

![Alt Text](https://media1.giphy.com/media/FXNpTQvrntLsCZcpov/giphy.gif)



| Props | |
| ------ | ------ |
| data | Pull picture sources (required) |
| style | Is to default JSX props same use |
| duration| Set duration for images (default value 5000) |
| fadeDuration | Set duration for fade animation (default value 1000) |
