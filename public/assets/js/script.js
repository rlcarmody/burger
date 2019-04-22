const devourButtons = document.querySelectorAll('.devour');
devourButtons.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    M.toast({ html: 'Nom nom nom!' })
    const id = e.target.getAttribute('data-id')
    
    fetch(`/api/burger/${id}`, { method: 'PUT' })
      .then(location.reload());
  })
})

const addBurger = (event) => {
  event.preventDefault();

  const burgerName = document.getElementById('addburger').value;
  M.toast({ html: `${burgerName} added!` })

  fetch('/api/burger', {
    method: 'POST',
    body: JSON.stringify({ name: burgerName }),
    headers: { 'Content-Type': 'application/json' }
  }).then(location.reload());
}

document.getElementById('submit-burger').addEventListener('submit', addBurger);