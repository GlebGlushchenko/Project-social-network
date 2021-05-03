export const handlerKeyUp = (event, func) => {
  if (event.keyCode === 13) {
    func()
  }
}
