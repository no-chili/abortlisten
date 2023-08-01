type EventTypeName = keyof WindowEventMap
export function createCanAbortListener<K extends EventTypeName>(event: K | K[], callback: (e: WindowEventMap[K]) => any, option?: boolean | AddEventListenerOptions, target?: EventTarget) {
	let _target = target || window
	let listenerOption: AddEventListenerOptions = {}
	if (typeof option === 'boolean') {
		listenerOption.capture = option
	} else {
		listenerOption = option || {}
	}
	const controller = new AbortController()
	if (Array.isArray(event)) {
		event.forEach((item) => {
			_target.addEventListener(
				item,
				(e: any) => {
					callback(e)
				},
				Object.assign(
					{
						signal: controller.signal,
					},
					option
				)
			)
		})
	} else {
		_target.addEventListener(
			event,
			(e: any) => {
				callback(e)
			},
			Object.assign(
				{
					signal: controller.signal,
				},
				option
			)
		)
	}
	return controller.abort
}
