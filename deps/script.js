const userCardTemplate = document.querySelector("[user-template]")
const userCardContainer = document.querySelector("[user-cards-container]")
const searchInput = document.querySelector("[user-search]")
const temp = document.getElementById("temp")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    let isVisible = user.name.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("info.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const image = card.querySelector("[user-image]")
      const name = card.querySelector("[user-name]")
      const username = card.querySelector("[user-username]")
      const userUrl = card.querySelector("[user-url]")
      const place = card.querySelector("[user-place]")
      const position = card.querySelector("[user-position]")
      const bio = card.querySelector("[user-bio]")
      let isImageAvailable = user.image == null || user.image == "null" || user.image == ""
      image.src = isImageAvailable ? 'images/johndoe.png' : "images/" + user.image
      name.textContent = user.name
      userUrl.href = "https://github.com/" + user.gh_username
      username.textContent = user.gh_username
      place.textContent = user.place
      position.textContent = user.current_pos
      bio.textContent = user.bio
      userCardContainer.append(card)
      return {
        name: user.name,
        element: card
      }
    })
    addDownloadEventListener()
  })

function addDownloadEventListener() {
  document.querySelectorAll('.profile-download')
    .forEach(el => el.addEventListener("click", function () {
      let card = this.parentElement.cloneNode(true)
      card.children.item(6).remove();

      let element = document.createElement("div");
      element.className = "parent-card"
      element.appendChild(card)
      temp.appendChild(element)
      html2canvas(element).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.download = "profile.png";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
      });
      element.remove()

    }));
}