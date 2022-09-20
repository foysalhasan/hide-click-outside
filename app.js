const form = document.querySelector('form')
const input = document.querySelector('.input')
const list = document.querySelector('.list')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const data = input.value
  if (!data) return
  const html = `<li>${data}</li>`
  list.insertAdjacentHTML('afterbegin', html)
  form.reset()
})
