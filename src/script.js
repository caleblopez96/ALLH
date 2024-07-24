document.querySelector('.theme-controller').addEventListener('change', function() {
  if(this.checked) {
    document.documentElement.setAttribute('data-theme', 'dim')
  } else {
    document.documentElement.setAttribute('data-theme', 'emerald')
  }
});