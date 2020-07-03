# art-grid-layout

## Install
```
npm install art-grid-layout
```
## Usage
```
import ArtGridLayout from 'art-grid-layout'
Vue.use(ArtGridLayout)
```

```
<grid-layout :rowHeight="5">
    <grid-item :zIndex="1" :x="49" :y="32" :w="156" :h="20" :i="1">
      ...
    </grid-item>
    <grid-item :zIndex="2" :x="69" :y="52" :w="56" :h="20" :i="2">
      ...
    </grid-item>
</grid-layout>

