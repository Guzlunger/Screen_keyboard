let letters = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','ё','я','ч','с','м','и','т','ь','б','ю', ' ']

let display = document.querySelector('.display')
let buttons = document.querySelectorAll('.key')
let buttonClear = document.querySelector('.clear')
buttons.forEach((item, index) => {
  item.addEventListener('click', (event) => {
  let index = item.id.replace(/[^0-9]/g,"")
    console.log(letters[index]);
    display.append(letters[index])
  })
})
buttonClear.addEventListener('click', (event) => {
  display.textContent = ''
})