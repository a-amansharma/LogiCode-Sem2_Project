document.querySelectorAll('.sidebar .icon').forEach(el => {
    el.addEventListener('click', () => {
      alert('This button can be wired to sidebar navigation!');
    });
  });
  
  