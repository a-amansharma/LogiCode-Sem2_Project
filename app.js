document.querySelectorAll('.sidebar .icon').forEach(el => {
    el.addEventListener('click', () => {
      alert('This button can be wired to sidebar navigation!');
    });
  });
  const icons = document.querySelectorAll('.sidebar .icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icons.forEach(i => i.classList.remove('active'));
    icon.classList.add('active');
    // You can add logic here to switch content sections if needed
  });
});

  