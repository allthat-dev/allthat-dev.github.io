(function (document, localStorage) {
  const root = document.documentElement;
  const themeSelect = document.getElementById('theme-select');

  function setTheme(theme) {
    root.classList.remove('system-theme', 'light-theme', 'dark-theme');
    switch (theme) {
      case 'system':
        root.classList.add('system-theme');
        break;
      case 'light':
        root.classList.add('light-theme');
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#333333');
        break;
      case 'dark':
        root.classList.add('dark-theme');
        root.style.setProperty('--bg-color', '#333333');
        root.style.setProperty('--text-color', '#ffffff');
        break;
    }
    localStorage.setItem('theme', theme);
  }

  themeSelect.addEventListener('change', (e) => setTheme(e.target.value));

  const savedTheme = localStorage.getItem('theme') || 'system';
  themeSelect.value = savedTheme;
  setTheme(savedTheme);

  const logos = ['(*_*)', '(o_o)', '(-_-)', '(`_`)', '(>_<)'];
  let logoIndex = 0;
  const logoEl = document.querySelector('pre > code');
  setInterval(() => {
    logoEl.innerHTML = logos[logoIndex];
    logoIndex = ++logoIndex % logos.length;
  }, 3000);
})(document, localStorage);
