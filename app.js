const row = document.querySelector('.row')
const navItems = document.querySelectorAll('.nav-item')

// TARGETING THE PARENT CLASS
row.addEventListener('click', function (e) {
  const current = e.target.closest('.nav-item')
  if (!current) return
  navItems.forEach((item) => item.classList.remove('active'))
  current.classList.add('active')
})

// HIDE ITEM CLICKING BODY ELEMENT
document.addEventListener('mouseup', function (e) {
  navItems.forEach((item) => item.classList.remove('active'))
})
