const querys = location.search
const queryURL = new URLSearchParams(querys)

const Preferences = {
  get(prop) {
    return queryURL.get(prop)
  },
  query() {
    const background = this.get("bg")
    const messageBackground = this.get("msg")
    const textColor = this.get("text")

    return { background, messageBackground, textColor }
  }
}

export { Preferences }