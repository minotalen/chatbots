// code for dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

let css = document.styleSheets[0].cssRules[0].style;
const currentSize = localStorage.getItem('font-size') ? localStorage.getItem('font-size') : null;

if (currentSize) {
  console.log("loaded size", currentSize)
  css.setProperty('--font-size', currentSize);
}

function switchTheme() {
  let toggle = $('#checkbox')[0];
  console.log(toggle);
  if (toggle.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
  } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); 
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
    background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") right center no-repeat",
    "padding-right": "25px"
  });    
});

// findet de erste Überschrift und überschreibt den Titel
var firstH1 = $('h1:first');
if(firstH1.length == 1) {
  $(document).prop('title', firstH1[0].textContent);
}
          
// versteckt 'back to index' auf Hauptseite
if(window.location.pathname == "/"){
  $('.back').hide();
};

// generiert Breadcrumbs aus der url
if(window.location.pathname != "/"){
  let url = window.location.pathname;
  url = url.replace('/','');      // ersetzt erstes /
  url = url.split('/').join(': ') // / wird :
  url = url.split('_').join(' ')  // _ wird Leerzeichen
  url = url.replace('.md','');    // ersetzt Dateiendung
  // rendert Breadcrumb in der Titelleiste
  $('.crumbs').text(url)
} else {
    $('.crumbs').text("Index")
}


$('.theme-switch-wrapper').mousedown(function( event ) {
  event.preventDefault();
});

// let sizes = ["x-small", 
//               "small", 
//               "medium", 
//               "large", 
//               "x-large",
//               "xx-large"];

let sizes = [  "50%", 
               "58%", 
               "65%", 
               "75%",
               "88%",
              "100%", 
              "112%",
              "125%",
              "140%",
              "155%",
              "180%",
              "205%"];

function growText() {
  let css = document.styleSheets[0].cssRules[0].style;
  let textSize = css.getPropertyValue("--font-size");

  for(let size in sizes){
    // console.log(sizes[size], textSize, size, sizes.length-1);
    if(sizes[size] == textSize && size < sizes.length-1){
      textSize = sizes[++size];
      break;
    }
  }
  css.setProperty('--font-size', textSize);
  localStorage.setItem('font-size', textSize);
};

function shrinkText() {
  let textSize = css.getPropertyValue("--font-size");

  for(let size in sizes){
    // console.log(sizes[size], textSize, size, sizes.length-1);
    if(sizes[size] == textSize && size > 0){
      textSize = sizes[--size];
      break;
    }
  }
  css.setProperty('--font-size', textSize);
  localStorage.setItem('font-size', textSize);
};

// keyboard shortcuts
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  } else if ( event.keyCode === 187 && !event.ctrlKey) {
    growText();
  } else if (event.keyCode === 189 && !event.ctrlKey) {
    shrinkText();
  } else if (event.keyCode === 68) {
    console.log("sane");
    toggleSwitch.checked = !toggleSwitch.checked;
    switchTheme(toggleSwitch);
  }
});