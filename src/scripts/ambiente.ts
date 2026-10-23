// O movimento do fundo da abertura é só CSS (componente Ambiente). Aqui ele apenas para
// quando a abertura sai da tela, para não gastar bateria com o que ninguém está vendo.
document.querySelectorAll<HTMLElement>('.ambiente').forEach((ambiente) => {
  new IntersectionObserver(([e]) => ambiente.classList.toggle('parado', !e.isIntersecting)).observe(ambiente);
});
