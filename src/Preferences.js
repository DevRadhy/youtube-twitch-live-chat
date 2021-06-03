const querys = location.search
const queryURL = new URLSearchParams(querys)

const Preferences = {
  get(params) {
    const paramsHasPresent = queryURL.has(params)

    if(!paramsHasPresent) return
    
    const userPreference = queryURL.get(params)

    if(userPreference === "none") return "none"

    return `#${userPreference}`
  },
  getAll() {
    return {
      background: this.get("bg"),
      messageColor: this.get("msg"),
      textColor: this.get("text"),
    }
  },
}

export { Preferences }