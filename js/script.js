/**
 *  Welcome to the the theme toggle experience! Feel free to reuse this code as you wish.
 *  This site was made during my education at Medieinstitutet in Stockholm, Sweden. This
 * 
 *  Feel free to connect with me on Linkedin: https://www.linkedin.com/in/joeldelpilar/
 */


 const themeToggleBtn = document.querySelector('.theme_toggle');
 
 themeToggleBtn.addEventListener('click', switchTheme);
 
 function switchTheme() {
     document.querySelector('main').classList.toggle('dark');
 }