const buttons = document.querySelectorAll('.discover__button');
const cards = document.querySelectorAll('.discover__cards');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {
      button.classList.remove('active'); 
    });
    
    const cardFor = button.dataset.for;
    cards.forEach(card => {
      card.classList.remove('active');
    })

    cards.forEach(card => {
      const tab = card.dataset.tab;
      if (tab === cardFor) {
        card.classList.add('active');
      }
    });
    button.classList.add('active');
  });
});