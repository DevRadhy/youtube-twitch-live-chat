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
  change() {
    const body = document.querySelector('body');
    const userPreferences = this.getAll();

    body.style.background = userPreferences.background;

    const cardMessage = document.querySelector('.card-message');

    userPreferences.messageColor && cardMessage.classList.remove("bg-gray-800");
    userPreferences.textColor && cardMessage.classList.remove("text-white");

    cardMessage.style.background = userPreferences.messageColor;
    cardMessage.style.color = userPreferences.textColor;
  },
}

export { Preferences }