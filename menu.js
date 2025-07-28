document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('li.has-submenu > a').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const parent = anchor.parentElement;
      const isOpen = parent.classList.contains('open');
      if (!isOpen) {
        event.preventDefault();
      }
      parent.classList.toggle('open');
    });
  });
});
