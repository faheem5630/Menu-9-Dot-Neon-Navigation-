function navigate(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    // Add your logic to navigate to the corresponding screen here
   }