const querys = location.search
const queryURL = new URLSearchParams(querys)

const Preferences = {
  get(prop) {
    return queryURL.get(prop)
  },
  query() {
    const background = this.get(queryURL.bg)
    const messageBackground = this.get(queryURL.msg)
    const textColor = this.get(queryURL.text)

    return { background, messageBackground, textColor }
  }
}

export { Preferences }