const ICON_COPY = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>`;

const ICON_CHECK = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;

document.querySelectorAll('h3').forEach(h3 => {
  if (h3.textContent.trim().startsWith('Troubleshooting')) {
    h3.classList.add('troubleshooting-heading');
  }
});

document.querySelectorAll('pre').forEach(pre => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.innerHTML = ICON_COPY;
  btn.title = 'Copiar código';
  btn.addEventListener('click', () => {
    const code = pre.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.innerHTML = ICON_CHECK;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = ICON_COPY;
        btn.classList.remove('copied');
      }, 2000);
    });
  });
  pre.appendChild(btn);
});
