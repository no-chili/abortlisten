## 取消监听

createCanAbortListener 接收的参数和 window.addEventListen 一模一样，但是他会返回一个函数，当调用此函数时会取消监听

```js
import { createCanAbortListener } from 'abortlisten'
const abort = createCanAbortListener('click', (e) => {
	// todo something...
})
abort() // 取消监听
```

或者

```js
import { createCanAbortListener } from 'abortlisten'
const abort = createCanAbortListener(['click', 'error', 'resize'], (e) => {
	// todo something...
})
abort() // 同时取消对'click', 'error', 'resize'的监听
```

为非 window 对象绑定监听

```js
import { createCanAbortListener } from 'abortlisten'
const root = document.getElementById('root')
const abort = createCanAbortListener(
	'click',
	(e) => {
		// todo something...
	},
	{},
	root
)
abort() // 取消对root的'click'事件的监听
```
