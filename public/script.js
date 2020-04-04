// code for dark mode toggle

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }    
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// code for external link favicon
$("a[href^='http']").each(function() {
  $(this).css({
    background: "url(http://www.google.com/s2/favicons?domain=" + this.hostname + ") right center no-repeat",
    "padding-right": "25px"
  });    
});

// code for setting a dynamic title if there is a h1 present
var firstH1 = $('h1:first');
if(firstH1) $(document).prop('title', firstH1[0].textContent);
          