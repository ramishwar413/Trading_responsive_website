document.getElementById('menu-toggle').addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('main');
  
    event.stopPropagation();
  
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');
  });
  
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
  
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      sidebar.classList.remove('open');
      const mainContent = document.querySelector('main');
      mainContent.classList.remove('shifted');
    }
  });
  

