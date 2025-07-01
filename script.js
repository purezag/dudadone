function toggleMode() {
    const html = document.documentElement;
    const overlay = document.getElementById('overlay-fade');
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const profileImage = document.querySelector('#Profile img'); 
  
    overlay.classList.add('active');
  
    setTimeout(() => {
      html.classList.toggle('light');
  
      
      if (html.classList.contains('light')) {
        profileImage.src = './Imagens/Duda-light.png'; 
      } else {
        profileImage.src = './Imagens/Duda-light.png';  
      }
  
      fadeElements.forEach((el) => {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = '';
      });
  
      overlay.classList.remove('active');
    }, 50);
  }