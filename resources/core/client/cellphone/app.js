window.addEventListener('keydown', e => {
  if (e.key === 'Backspace') {
    if ('alt' in window) {
      alt.emit('close:Phone')
    }
  }
});