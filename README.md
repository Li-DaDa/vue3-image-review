# vue3-virtual-list

基于vue3的图片放大查看

## 安装

### npm

```js
npm install @webdevil/vue3-image-review --save
```

### yarn

```js
yarn add @webdevil/vue3-image-review
```

## 使用

```js

import { review } from '@webdevil/vue3-image-review'
import "@webdevil/vue3-image-review/lib/index.css"

export default defineComponent({
  setup() {
    const pics = [
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      'https://up.enterdesk.com/edpic_source/53/0a/da/530adad966630fce548cd408237ff200.jpg'
    ]

    const clickHandler = () => {
      review(pics)
    }
    
    return {
      
    }
  }
})
```

## 函数参数

```js
review(pics: string | string[])
```

## 源码地址

[github](https://github.com/Li-DaDa/vue3-image-review)
