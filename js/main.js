//JavaScript to switch theme classes only

//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  const themeButton = document.querySelector('.theme-btn'),
  themeType = document.querySelector('.theme-type');

  themeButton.addEventListener('click', () => {

    //Apply theme
    if (document.body.classList.contains('light-theme')) {

      //Remove light theme
      document.body.classList.remove('light-theme');

      //Add dark theme
      document.body.classList.add('dark-theme');


    } else {

      //Remove dark theme
      document.body.classList.remove('dark-theme');

      //Add light theme
      document.body.classList.add('light-theme');
      

    }
  });
}
(document).ready(function() {
    ('.hover').on('touchstart touchend', function(e) {
        e.preventDefault();
        (this).toggleClass('hover_effect');
    });
})
);

