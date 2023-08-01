function createCanAbortListener(event, callback, option, target) {
	let _target = target || window
	let listenerOption = {}
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
				(e) => {
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
		window.addEventListener(
			event,
			(e) => {
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
export { createCanAbortListener }
