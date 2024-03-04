import './style.css'
const colorpalaete = {
  '#74CB5E': 'Raisin Black',
  '#B994B5': 'Blue Bell',
  '#CE8080': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}
const changecolor = (e) => {
  const newcolor = e.target.value
  
  const h2 = document.querySelector('.clr')
  h2.textContent = `you selected`

  document.body.style.backgroundColor = newcolor
}

const select = document.querySelector('#color-picker')
for (const [key, value] of Object.entries(colorpalaete)) {
  console.log(key)
  const option = document.createElement('option')
  option.value = key
  option.textContent = value
  select.appendChild(option)
}
const colorpickerselect = document.querySelector('#color-picker')
colorpickerselect.addEventListener('change', changecolor)
