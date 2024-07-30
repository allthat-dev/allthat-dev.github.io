(function (document, localStorage) {
  const root = document.documentElement;
  const themeCheck = document.getElementById('themeCheck');

  function setTheme(theme) {
    switch (theme) {
      case 'light':
        root.classList.remove('dark-theme');
        root.classList.add('light-theme');
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#333333');
        break;
      case 'dark':
        root.classList.remove('light-theme');
        root.classList.add('dark-theme');
        root.style.setProperty('--bg-color', '#333333');
        root.style.setProperty('--text-color', '#ffffff');
        break;
        // use system theme
        break;
    }
    localStorage.setItem('theme', theme);
  }
  themeCheck.addEventListener('change', (e) => setTheme(e.target.checked ? 'dark' : 'light'));

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const savedTheme = localStorage.getItem('theme') || systemTheme;
  themeCheck.checked = savedTheme;
  setTheme(savedTheme);

  const logos = ['(*_*)', '(o_o)', '(-_-)', '(`_`)', '(>_<)'];
  let logoIndex = 0;
  const logoEl = document.querySelector('pre > code');
  setInterval(() => {
    logoEl.innerHTML = logos[logoIndex];
    logoIndex = ++logoIndex % logos.length;
  }, 1000);
})(document, localStorage);
