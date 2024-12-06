export default function getScrollAnimation() {
	return ({
    offscreen: {
      y: 0,
      opacity: 0,
    },
    onscreen: ({duration = 2} = {}) =>  ({
      y: -20,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}