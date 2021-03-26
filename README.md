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
import Slideshow from 'react-native-fade-in-out-slideshow'


const App = () => {

return (
     <View>
         <Slideshow data={items} duration={4000} fadeDuration={1200} style={{width:300, height:300}} />
     </View>
)

}

```


| Props | |
| ------ | ------ |
| data | Pull picture sources (required) |
| style | Is to default JSX props same use |
| duration| Set duration for images (default value 5000) |
| fadeDuration | Set duration for fade animation (default value 1000) |
