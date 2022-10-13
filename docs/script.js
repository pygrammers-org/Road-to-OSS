const userCardTemplate = document.querySelector("[user-template]")
const userCardContainer = document.querySelector("[user-cards-container]")
const searchInput = document.querySelector("[user-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("./profile.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const image = card.querySelector("[user-image]")
      const name = card.querySelector("[user-name]")
      const username = card.querySelector("[user-username]")
      const email = card.querySelector("[user-email]")
      const place = card.querySelector("[user-place]")
      const position = card.querySelector("[user-position]")
      const bio = card.querySelector("[user-bio]")
      image.textContent = user.image
      name.textContent = user.name
      username.textContent = user.gh_username
      email.textContent = user.email
      place.textContent = user.place
      position.textContent = user.current_pos
      bio.textContent = user.bio
      userCardContainer.append(card)
      return {
        image:user.image,
        name: user.name,
        username: user.gh_username,
        email: user.email,
        place: user.place,
        position: user.current_pos,
        bio:user.bio,
        element: card
      }
    })
  })