// Balão flutuante: ao abrir, leva o foco para a primeira ação; fecha ao tocar fora dele
// ou com Esc (e devolve o foco ao botão).
document.querySelectorAll<HTMLDetailsElement>('[data-balao]').forEach((balao) => {
  const botao = balao.querySelector('summary');
  balao.addEventListener('toggle', () => {
    if (balao.open) balao.querySelector<HTMLAnchorElement>('.balao-acao')?.focus({ preventScroll: true });
  });
  document.addEventListener('click', (e) => {
    if (balao.open && !balao.contains(e.target as Node)) balao.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && balao.open) {
      balao.open = false;
      botao?.focus();
    }
  });
});
