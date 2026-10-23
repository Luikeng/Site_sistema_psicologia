// Motor das telas do sistema em ação.
// No computador, cada capítulo tem um palco fixo à esquerda que troca de tela
// conforme o passo que passa pelo meio da janela. No celular, cada passo tem a
// sua própria tela, que roda quando aparece e para quando sai de vista.
// Cada roteiro só mexe dentro da própria tela (atributos data-r), então a mesma
// tela pode existir duas vezes na página (palco e celular) sem conflito.

type Ctx = {
  tela: HTMLElement;
  palco: Palco;
  vivo: () => boolean;
  r: (nome: string) => HTMLElement;
  rs: (nome: string) => HTMLElement[];
};
type Roteiro = { zerar(c: Ctx): void; final(c: Ctx): void; rodar(c: Ctx): Promise<void> };

const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
const espera = (ms: number) => new Promise<void>((ok) => setTimeout(ok, ms));
const moeda = (n: number) => 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

class Palco {
  el: HTMLElement;
  cursor: SVGElement | null;
  aviso: HTMLElement | null;
  pos = { x: 0, y: 0 };
  vez = 0;
  atual: string | null = null;
  relogio = 0;

  constructor(el: HTMLElement) {
    this.el = el;
    this.cursor = el.querySelector(':scope > .cursor');
    this.aviso = el.querySelector(':scope > .aviso');
  }

  ponto(alvo: Element, fx = 0.55, fy = 0.55) {
    const p = this.el.getBoundingClientRect();
    const r = alvo.getBoundingClientRect();
    return { x: r.left - p.left + r.width * fx, y: r.top - p.top + r.height * fy };
  }

  cursorEm(x: number, y: number) {
    this.pos = { x, y };
    this.cursor?.animate([{ transform: `translate(${x}px, ${y}px)` }], { duration: 0, fill: 'forwards' });
  }

  entrarCursor() {
    this.cursorEm(this.el.clientWidth - 48, this.el.clientHeight - 56);
    this.cursor?.classList.add('visivel');
  }

  sairCursor() {
    this.cursor?.classList.remove('visivel');
  }

  async moverAte(alvo: Element | null, dur = 700) {
    if (!alvo || !this.cursor) return;
    const { x, y } = this.ponto(alvo);
    const de = `translate(${this.pos.x}px, ${this.pos.y}px)`;
    this.pos = { x, y };
    await this.cursor
      .animate([{ transform: de }, { transform: `translate(${x}px, ${y}px)` }], {
        duration: dur,
        easing: 'cubic-bezier(.77,0,.175,1)',
        fill: 'forwards',
      })
      .finished.catch(() => {});
  }

  async clicar(alvo: Element | null) {
    if (!alvo) return;
    this.cursor?.animate([{ scale: '1' }, { scale: '0.82' }, { scale: '1' }], { duration: 220, easing: 'ease-out' });
    (alvo as HTMLElement).animate([{ scale: '1' }, { scale: '0.96' }, { scale: '1' }], { duration: 220, easing: 'ease-out' });
    await espera(240);
  }

  async digitar(alvo: HTMLElement | null, texto: string, vivo: () => boolean, ritmo = 34) {
    if (!alvo) return;
    alvo.textContent = '';
    for (const ch of texto) {
      if (!vivo()) return;
      alvo.textContent += ch;
      await espera(ritmo);
    }
  }

  avisar(texto: string) {
    if (!this.aviso) return;
    const s = this.aviso.querySelector('span');
    if (s) s.textContent = texto;
    this.aviso.classList.add('mostra');
    clearTimeout(this.relogio);
    this.relogio = window.setTimeout(() => this.aviso?.classList.remove('mostra'), 3400);
  }

  limpar() {
    clearTimeout(this.relogio);
    this.aviso?.classList.remove('mostra');
    this.sairCursor();
  }

  executar(nome: string, tela: HTMLElement) {
    const roteiro = ROTEIROS[nome];
    const meu = ++this.vez;
    const vivo = () => meu === this.vez;
    this.limpar();
    if (!roteiro) return;
    const c: Ctx = {
      tela,
      palco: this,
      vivo,
      r: (n) => tela.querySelector(`[data-r~="${n}"]`) as HTMLElement,
      rs: (n) => [...tela.querySelectorAll(`[data-r~="${n}"]`)] as HTMLElement[],
    };
    roteiro.zerar(c);
    if (reduz) {
      roteiro.final(c);
      return;
    }
    requestAnimationFrame(() => {
      roteiro.rodar(c).catch(() => {});
    });
  }

  mostrar(nome: string) {
    if (nome === this.atual) return;
    this.atual = nome;
    const telas = [...this.el.querySelectorAll(':scope > .tela')] as HTMLElement[];
    telas.forEach((t) => t.classList.toggle('ativa', t.dataset.tela === nome));
    const tela = telas.find((t) => t.dataset.tela === nome);
    if (tela) this.executar(nome, tela);
  }

  parar() {
    this.vez++;
    this.atual = null;
    this.limpar();
  }
}

/* ---------------- Roteiros, um por tela ---------------- */

const ROTEIROS: Record<string, Roteiro> = {
  agenda: {
    zerar(c) {
      c.r('julia').className = 'bloco s-ambar d3 oculto';
      c.r('ana').className = 'bloco s-azul d1';
      c.r('pop').classList.remove('aberto');
      c.r('aprovar').textContent = 'Aprovar';
    },
    final(c) {
      c.r('julia').className = 'bloco s-azul d3';
      c.r('ana').className = 'bloco s-verde d1';
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(700); if (!vivo()) return;
      r('julia').classList.remove('oculto');
      await espera(900); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('julia'), 800); if (!vivo()) return;
      await palco.clicar(r('julia'));
      posicionarPop(r('pop'), r('julia'));
      r('pop').classList.add('aberto');
      await espera(700); if (!vivo()) return;
      await palco.moverAte(r('aprovar'), 500); if (!vivo()) return;
      await palco.clicar(r('aprovar'));
      r('aprovar').textContent = 'Aprovando...';
      await espera(600); if (!vivo()) return;
      r('pop').classList.remove('aberto');
      r('julia').className = 'bloco s-azul d3';
      palco.avisar('Reserva aprovada. A Júlia recebe a confirmação por e-mail.');
      await espera(1600); if (!vivo()) return;
      palco.sairCursor();
      await espera(1200); if (!vivo()) return;
      r('ana').className = 'bloco s-verde d1';
      palco.avisar('A sessão de hoje da Ana S. foi paga com o crédito dela.');
    },
  },

  reserva: {
    zerar(c) {
      c.r('dia').classList.remove('sel');
      c.r('hora').classList.remove('sel');
      c.r('nome').textContent = '';
      c.r('email').textContent = '';
      c.r('sucesso').classList.remove('mostra');
    },
    final(c) {
      c.r('dia').classList.add('sel');
      c.r('hora').classList.add('sel');
      c.r('nome').textContent = 'Júlia A.';
      c.r('email').textContent = 'julia.a@exemplo.com';
      c.r('sucesso').classList.add('mostra');
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(500); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('dia'), 700); if (!vivo()) return;
      await palco.clicar(r('dia')); r('dia').classList.add('sel');
      await palco.moverAte(r('hora'), 500); if (!vivo()) return;
      await palco.clicar(r('hora')); r('hora').classList.add('sel');
      await palco.moverAte(r('nome'), 450); if (!vivo()) return;
      await palco.clicar(r('nome'));
      await palco.digitar(r('nome'), 'Júlia A.', vivo); if (!vivo()) return;
      if (r('email').offsetParent) {
        await palco.moverAte(r('email'), 400); if (!vivo()) return;
        await palco.clicar(r('email'));
        await palco.digitar(r('email'), 'julia.a@exemplo.com', vivo); if (!vivo()) return;
      }
      await palco.moverAte(r('solicitar'), 500); if (!vivo()) return;
      await palco.clicar(r('solicitar'));
      await espera(300); if (!vivo()) return;
      r('sucesso').classList.add('mostra');
      await espera(900); palco.sairCursor();
    },
  },

  lembrete: {
    zerar(c) { c.r('mail').classList.remove('chegou'); },
    final(c) { c.r('mail').classList.add('chegou'); },
    async rodar(c) {
      await espera(350); if (!c.vivo()) return;
      c.r('mail').classList.add('chegou');
    },
  },

  conta: {
    zerar(c) {
      c.r('modal').classList.remove('aberto');
      c.r('veu').classList.remove('aberto');
      c.r('valor').textContent = '';
      c.r('recebido').textContent = 'R$ 0,00';
      c.rs('selo').forEach((s) => s.classList.add('oculto-ui'));
      c.r('coberto').classList.remove('mostra');
      c.r('receb').classList.remove('registrado');
    },
    final(c) {
      c.r('recebido').textContent = 'R$ 800,00';
      c.rs('selo').forEach((s) => s.classList.remove('oculto-ui'));
      c.r('coberto').classList.add('mostra');
      c.r('receb').classList.add('registrado');
    },
    async rodar(c) {
      const { palco, vivo, r, rs } = c;
      await espera(500); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('receber'), 700); if (!vivo()) return;
      await palco.clicar(r('receber'));
      r('veu').classList.add('aberto'); r('modal').classList.add('aberto');
      await espera(350); if (!vivo()) return;
      await palco.moverAte(r('valor'), 450); if (!vivo()) return;
      await palco.clicar(r('valor'));
      await palco.digitar(r('valor'), '800,00', vivo); if (!vivo()) return;
      await palco.moverAte(r('registrar'), 450); if (!vivo()) return;
      await palco.clicar(r('registrar'));
      r('modal').classList.remove('aberto'); r('veu').classList.remove('aberto');
      palco.sairCursor();
      r('receb').classList.add('registrado');
      await contar(r('recebido'), 0, 800, 700, vivo);
      for (const s of rs('selo')) { if (!vivo()) return; s.classList.remove('oculto-ui'); await espera(160); }
      r('coberto').classList.add('mostra');
    },
  },

  documentos: {
    zerar(c) {
      c.rs('v').forEach((v) => v.classList.remove('mostra'));
      c.r('status').className = 'ui-selo'; c.r('status').textContent = 'Pendente';
      c.r('emitir').classList.remove('sumiu');
    },
    final(c) {
      c.rs('v').forEach((v) => v.classList.add('mostra'));
      c.r('status').className = 'ui-selo verde'; c.r('status').textContent = 'Confirmada';
      c.r('emitir').classList.add('sumiu');
    },
    async rodar(c) {
      const { palco, vivo, r, rs } = c;
      await espera(300);
      for (const v of rs('v')) { if (!vivo()) return; v.classList.add('mostra'); await espera(130); }
      await espera(300); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('emitir'), 700); if (!vivo()) return;
      await palco.clicar(r('emitir'));
      r('status').className = 'ui-selo azul'; r('status').textContent = 'Gerada';
      await espera(1000); if (!vivo()) return;
      r('status').className = 'ui-selo verde'; r('status').textContent = 'Confirmada';
      palco.sairCursor();
      await espera(400); r('emitir').classList.add('sumiu');
    },
  },

  prontuario: {
    zerar(c) {
      c.r('texto').innerHTML = '';
      c.r('texto').classList.add('ed-cursor');
    },
    final(c) {
      c.r('texto').classList.remove('ed-cursor');
      c.r('texto').innerHTML = `<p>${EVOLUCAO[0]}</p><p>${EVOLUCAO[1]}</p>`;
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(500); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('texto'), 700); if (!vivo()) return;
      await palco.clicar(r('texto'));
      palco.sairCursor();
      const caixa = r('texto');
      for (const frase of EVOLUCAO) {
        const p = document.createElement('p');
        caixa.appendChild(p);
        await palco.digitar(p, frase, vivo, 22); if (!vivo()) return;
        await espera(200);
      }
      caixa.classList.remove('ed-cursor');
      palco.entrarCursor();
      await palco.moverAte(r('salvar'), 700); if (!vivo()) return;
      await palco.clicar(r('salvar'));
      palco.sairCursor();
      palco.avisar('Evolução salva na sessão de 19/10.');
    },
  },

  anamnese: {
    zerar(c) {
      c.r('p1').textContent = ''; c.r('p2').textContent = '';
      c.r('prog').style.transform = 'scaleX(.2)';
      c.r('sucesso').classList.remove('mostra');
    },
    final(c) {
      c.r('p1').textContent = 'Ansiedade no trabalho';
      c.r('p2').textContent = 'Sim, por um ano';
      c.r('prog').style.transform = 'scaleX(1)';
      c.r('sucesso').classList.add('mostra');
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(500); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('p1'), 700); if (!vivo()) return;
      await palco.clicar(r('p1'));
      await palco.digitar(r('p1'), 'Ansiedade no trabalho', vivo); if (!vivo()) return;
      r('prog').style.transform = 'scaleX(.55)';
      await palco.moverAte(r('p2'), 450); if (!vivo()) return;
      await palco.clicar(r('p2'));
      await palco.digitar(r('p2'), 'Sim, por um ano', vivo); if (!vivo()) return;
      r('prog').style.transform = 'scaleX(.85)';
      await palco.moverAte(r('enviar'), 500); if (!vivo()) return;
      await palco.clicar(r('enviar'));
      r('prog').style.transform = 'scaleX(1)';
      await espera(250); if (!vivo()) return;
      r('sucesso').classList.add('mostra');
      palco.sairCursor();
    },
  },

  humor: {
    zerar(c) {
      c.r('grafico').classList.remove('desenha');
      c.r('novo').classList.add('oculto-ui');
    },
    final(c) {
      c.r('grafico').classList.add('desenha');
      c.r('novo').classList.remove('oculto-ui');
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(400); if (!vivo()) return;
      r('grafico').classList.add('desenha');
      await espera(1900); if (!vivo()) return;
      r('novo').classList.remove('oculto-ui');
      palco.avisar('Ana S. registrou o humor de hoje.');
    },
  },

  documento: {
    zerar(c) { mostrarDoc(c, 'decl'); },
    final(c) { mostrarDoc(c, 'decl'); },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(1400); if (!vivo()) return;
      palco.entrarCursor();
      for (const tipo of ['atest', 'recibo']) {
        await palco.moverAte(r(`chip-${tipo}`), 600); if (!vivo()) return;
        await palco.clicar(r(`chip-${tipo}`));
        r('doc').classList.add('troca');
        await espera(250); if (!vivo()) return;
        mostrarDoc(c, tipo);
        r('doc').classList.remove('troca');
        await espera(1700); if (!vivo()) return;
      }
      palco.sairCursor();
    },
  },

  grupo: {
    zerar(c) {
      c.r('aba-pront').classList.add('ativa'); c.r('aba-fin').classList.remove('ativa');
      c.r('vista-pront').hidden = false; c.r('vista-fin').hidden = true;
    },
    final(c) {
      c.r('aba-pront').classList.remove('ativa'); c.r('aba-fin').classList.add('ativa');
      c.r('vista-pront').hidden = true; c.r('vista-fin').hidden = false;
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(1200); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('aba-fin'), 700); if (!vivo()) return;
      await palco.clicar(r('aba-fin'));
      r('aba-pront').classList.remove('ativa'); r('aba-fin').classList.add('ativa');
      r('vista-pront').hidden = true; r('vista-fin').hidden = false;
      palco.sairCursor();
      await espera(800); if (!vivo()) return;
      palco.avisar('A sessão do casal aparece no portal dos dois.');
    },
  },

  painel: {
    zerar(c) {
      c.r('recebido').textContent = 'R$ 0';
      c.r('barras').classList.remove('cresce');
      c.r('previsao').textContent = 'R$ 0';
    },
    final(c) {
      c.r('recebido').textContent = 'R$ 8.600';
      c.r('barras').classList.add('cresce');
      c.r('previsao').textContent = 'R$ 98.400';
    },
    async rodar(c) {
      const { vivo, r } = c;
      await espera(300); if (!vivo()) return;
      r('barras').classList.add('cresce');
      await Promise.all([
        contar(r('recebido'), 0, 8600, 1100, vivo, true),
        contar(r('previsao'), 0, 98400, 1400, vivo, true),
      ]);
    },
  },

  mensalidade: {
    zerar(c) {
      c.r('nova').hidden = true;
      c.r('gerar').classList.remove('sumiu');
    },
    final(c) {
      c.r('nova').hidden = false;
      c.r('gerar').classList.add('sumiu');
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(700); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('gerar'), 700); if (!vivo()) return;
      await palco.clicar(r('gerar'));
      r('nova').hidden = false;
      r('nova').animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.23,1,.32,1)' });
      r('gerar').classList.add('sumiu');
      palco.sairCursor();
      palco.avisar('Mensalidade de novembro gerada.');
    },
  },

  cancelamento: {
    zerar(c) {
      c.r('horas').textContent = '12';
      c.rs('atalho').forEach((a) => a.classList.toggle('sel', a.dataset.h === '12'));
      c.r('regra').textContent = '12h';
      c.r('regra2').textContent = '12h';
    },
    final(c) {
      c.r('horas').textContent = '24';
      c.rs('atalho').forEach((a) => a.classList.toggle('sel', a.dataset.h === '24'));
      c.r('regra').textContent = '24h';
      c.r('regra2').textContent = '24h';
    },
    async rodar(c) {
      const { palco, vivo, r, rs } = c;
      await espera(800); if (!vivo()) return;
      palco.entrarCursor();
      const alvo = rs('atalho').find((a) => a.dataset.h === '24') || null;
      await palco.moverAte(alvo, 700); if (!vivo()) return;
      await palco.clicar(alvo);
      rs('atalho').forEach((a) => a.classList.toggle('sel', a === alvo));
      r('horas').textContent = '24'; r('regra').textContent = '24h'; r('regra2').textContent = '24h';
      await espera(600); if (!vivo()) return;
      await palco.moverAte(r('salvar'), 600); if (!vivo()) return;
      await palco.clicar(r('salvar'));
      palco.sairCursor();
      palco.avisar('Política salva.');
    },
  },

  nota: {
    zerar(c) {
      c.r('status').className = 'ui-selo'; c.r('status').textContent = 'Pendente';
      c.r('emitir').hidden = false;
      c.r('total').textContent = 'R$ 3.000,00';
    },
    final(c) {
      c.r('status').className = 'ui-selo verde'; c.r('status').textContent = 'Confirmada';
      c.r('emitir').hidden = true;
      c.r('total').textContent = 'R$ 3.400,00';
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(700); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('emitir'), 700); if (!vivo()) return;
      await palco.clicar(r('emitir'));
      r('status').className = 'ui-selo azul'; r('status').textContent = 'Gerada';
      await espera(1000); if (!vivo()) return;
      r('status').className = 'ui-selo verde'; r('status').textContent = 'Confirmada';
      r('emitir').hidden = true;
      palco.sairCursor();
      await contar(r('total'), 3000, 3400, 600, vivo, false, true);
      palco.avisar('Nota enviada por e-mail para Bruno M.');
    },
  },

  receita: {
    zerar(c) {
      c.r('erro').hidden = false; c.r('ok').hidden = true;
      c.r('gerar').classList.add('sumiu');
      c.r('baixar').hidden = true;
    },
    final(c) {
      c.r('erro').hidden = true; c.r('ok').hidden = false;
      c.r('gerar').classList.add('sumiu');
      c.r('baixar').hidden = false;
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(900); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('corrigir'), 700); if (!vivo()) return;
      await palco.clicar(r('corrigir'));
      r('erro').hidden = true; r('ok').hidden = false;
      r('gerar').classList.remove('sumiu');
      await espera(500); if (!vivo()) return;
      await palco.moverAte(r('gerar'), 600); if (!vivo()) return;
      await palco.clicar(r('gerar'));
      r('gerar').classList.add('sumiu');
      r('baixar').hidden = false;
      palco.sairCursor();
      palco.avisar('Arquivo pronto para enviar ao Receita Saúde.');
    },
  },

  equipe: {
    zerar(c) {
      c.r('nova').className = 'bloco s-cinza p2 oculto';
      c.r('sala').textContent = 'Sala 2';
      c.r('alerta').classList.remove('mostra');
    },
    final(c) {
      c.r('nova').className = 'bloco s-azul p2';
      c.r('sala').textContent = 'Sala 1';
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(700); if (!vivo()) return;
      r('nova').classList.remove('oculto');
      await espera(500); if (!vivo()) return;
      r('nova').className = 'bloco s-vermelho p2';
      r('alerta').classList.add('mostra');
      await espera(2200); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('nova'), 700); if (!vivo()) return;
      await palco.clicar(r('nova'));
      r('alerta').classList.remove('mostra');
      r('sala').textContent = 'Sala 1';
      r('nova').className = 'bloco s-azul p2';
      palco.sairCursor();
      palco.avisar('Sessão marcada na Sala 1, sem choque de horário.');
    },
  },

  convite: {
    zerar(c) {
      c.r('email').textContent = '';
      c.rs('liga').forEach((x) => x.classList.remove('on'));
    },
    final(c) {
      c.r('email').textContent = 'recepcao@clinicareis.com.br';
      c.rs('liga').forEach((x) => x.classList.add('on'));
    },
    async rodar(c) {
      const { palco, vivo, r, rs } = c;
      await espera(500); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('email'), 700); if (!vivo()) return;
      await palco.clicar(r('email'));
      await palco.digitar(r('email'), 'recepcao@clinicareis.com.br', vivo, 26); if (!vivo()) return;
      for (const caixa of rs('liga')) {
        await palco.moverAte(caixa, 380); if (!vivo()) return;
        await palco.clicar(caixa);
        caixa.classList.add('on');
      }
      await palco.moverAte(r('enviar'), 600); if (!vivo()) return;
      await palco.clicar(r('enviar'));
      palco.sairCursor();
      palco.avisar('Convite enviado. Ler prontuário ficou desligado.');
    },
  },

  repasse: {
    zerar(c) { c.rs('valor').forEach((v) => (v.textContent = 'R$ 0,00')); },
    final(c) { c.rs('valor').forEach((v) => (v.textContent = moeda(Number(v.dataset.fim)))); },
    async rodar(c) {
      await espera(300); if (!c.vivo()) return;
      await Promise.all(c.rs('valor').map((v) => contar(v, 0, Number(v.dataset.fim), 1000, c.vivo)));
    },
  },

  clinica: {
    zerar(c) { c.rs('prof').forEach((p) => p.classList.remove('sel')); },
    final(c) { c.r('rafael').classList.add('sel'); },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(900); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('rafael'), 800); if (!vivo()) return;
      await palco.clicar(r('rafael'));
      r('rafael').classList.add('sel');
      palco.sairCursor();
      palco.avisar('A reserva vai direto para a agenda do Rafael.');
    },
  },

  portal: {
    zerar(c) {
      c.rs('face').forEach((f) => f.classList.remove('sel'));
      c.r('registrado').classList.remove('mostra');
    },
    final(c) {
      c.r('bem').classList.add('sel');
      c.r('registrado').classList.add('mostra');
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(900); if (!vivo()) return;
      palco.entrarCursor();
      await palco.moverAte(r('bem'), 800); if (!vivo()) return;
      await palco.clicar(r('bem'));
      r('bem').classList.add('sel');
      r('registrado').classList.add('mostra');
      palco.sairCursor();
    },
  },

  /* Páginas internas */
  compartilhamento: {
    zerar(c) {
      c.rs('modo').forEach((m) => m.classList.toggle('sel', m.dataset.m === 'active'));
      c.r('janela').hidden = false;
    },
    final(c) {
      c.rs('modo').forEach((m) => m.classList.toggle('sel', m.dataset.m === 'private'));
      c.r('janela').hidden = true;
    },
    async rodar(c) {
      const { palco, vivo, r, rs } = c;
      await espera(900); if (!vivo()) return;
      palco.entrarCursor();
      const privado = rs('modo').find((m) => m.dataset.m === 'private') || null;
      await palco.moverAte(privado, 750); if (!vivo()) return;
      await palco.clicar(privado);
      rs('modo').forEach((m) => m.classList.toggle('sel', m === privado));
      await r('janela').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, easing: 'ease-out' }).finished.catch(() => {});
      if (!vivo()) return;
      r('janela').hidden = true;
      await espera(500); if (!vivo()) return;
      await palco.moverAte(r('salvar'), 600); if (!vivo()) return;
      await palco.clicar(r('salvar'));
      palco.sairCursor();
      palco.avisar('Configuração salva.');
    },
  },

  historico: {
    zerar(c) {
      const nova = c.r('nova');
      nova.hidden = true;
      nova.classList.remove('destaque');
    },
    final(c) {
      c.r('nova').hidden = false;
    },
    async rodar(c) {
      const { vivo, r } = c;
      await espera(900); if (!vivo()) return;
      const nova = r('nova');
      nova.hidden = false;
      nova.classList.add('destaque');
      const altura = nova.offsetHeight;
      nova.style.overflow = 'hidden';
      await nova
        .animate(
          [
            { height: '0px', opacity: 0, paddingTop: '0px', paddingBottom: '0px' },
            { height: `${altura}px`, opacity: 1, paddingTop: '7px', paddingBottom: '7px' },
          ],
          { duration: 480, easing: 'cubic-bezier(.23,1,.32,1)' },
        )
        .finished.catch(() => {});
      nova.style.overflow = '';
      await espera(1800); if (!vivo()) return;
      nova.classList.remove('destaque');
    },
  },

  cadastro: {
    zerar(c) {
      ['nome', 'email', 'senha', 'senha2'].forEach((n) => (c.r(n).textContent = ''));
      c.r('titulo').textContent = 'Criar Conta';
      c.r('form').hidden = false;
      c.r('ok').hidden = true;
    },
    final(c) {
      c.r('titulo').textContent = 'Confirme seu e-mail';
      c.r('form').hidden = true;
      c.r('ok').hidden = false;
    },
    async rodar(c) {
      const { palco, vivo, r } = c;
      await espera(700); if (!vivo()) return;
      palco.entrarCursor();
      const campos: [string, string, number][] = [
        ['nome', 'Paula Reis', 40],
        ['email', 'paula@consultorioreis.com.br', 26],
        ['senha', '••••••••', 45],
        ['senha2', '••••••••', 45],
      ];
      for (const [nome, texto, ritmo] of campos) {
        await palco.moverAte(r(nome), 520); if (!vivo()) return;
        await palco.clicar(r(nome));
        await palco.digitar(r(nome), texto, vivo, ritmo); if (!vivo()) return;
      }
      await palco.moverAte(r('criar'), 520); if (!vivo()) return;
      await palco.clicar(r('criar'));
      palco.sairCursor();
      await r('form').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, easing: 'ease-out' }).finished.catch(() => {});
      if (!vivo()) return;
      r('form').hidden = true;
      r('titulo').textContent = 'Confirme seu e-mail';
      r('ok').hidden = false;
      r('ok').animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 380, easing: 'cubic-bezier(.23,1,.32,1)' });
    },
  },

  acessos: {
    zerar(c) {
      c.r('conta').textContent = '0';
      c.r('vazio').hidden = false;
      c.r('acesso').hidden = true;
    },
    final(c) {
      c.r('conta').textContent = '1';
      c.r('vazio').hidden = true;
      c.r('acesso').hidden = false;
    },
    async rodar(c) {
      const { vivo, r } = c;
      await espera(1100); if (!vivo()) return;
      await r('vazio').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, easing: 'ease-out' }).finished.catch(() => {});
      if (!vivo()) return;
      r('vazio').hidden = true;
      r('conta').textContent = '1';
      const acesso = r('acesso');
      acesso.hidden = false;
      acesso.animate(
        [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }],
        { duration: 420, easing: 'cubic-bezier(.23,1,.32,1)' },
      );
    },
  },
};

const EVOLUCAO = [
  'Retomamos o tema do trabalho e da rotina de sono.',
  'Combinamos observar, ao longo da semana, os momentos de mais ansiedade.',
];

function mostrarDoc(c: Ctx, tipo: string) {
  ['decl', 'atest', 'recibo'].forEach((t) => {
    c.r(`chip-${t}`)?.classList.toggle('sel', t === tipo);
    const bloco = c.r(`doc-${t}`);
    if (bloco) bloco.hidden = t !== tipo;
  });
}

function posicionarPop(pop: HTMLElement, alvo: HTMLElement) {
  const area = (pop.parentElement as HTMLElement).getBoundingClientRect();
  const r = alvo.getBoundingClientRect();
  let left = r.right - area.left + 8;
  if (left + pop.offsetWidth > area.width - 8) left = r.left - area.left - pop.offsetWidth - 8;
  pop.style.left = Math.max(8, left) + 'px';
  pop.style.top = Math.max(8, Math.min(r.top - area.top - 4, area.height - pop.offsetHeight - 8)) + 'px';
}

async function contar(el: HTMLElement, de: number, ate: number, dur: number, vivo: () => boolean, inteiro = false, comCentavos = false) {
  if (!el) return;
  const inicio = performance.now();
  await new Promise<void>((ok) => {
    const passo = (t: number) => {
      const p = Math.min(1, (t - inicio) / dur);
      const v = de + (ate - de) * (1 - Math.pow(1 - p, 3));
      el.textContent = inteiro ? 'R$ ' + Math.round(v).toLocaleString('pt-BR') : moeda(comCentavos ? Math.round(v) : Math.round(v));
      if (p < 1 && vivo()) requestAnimationFrame(passo);
      else ok();
    };
    requestAnimationFrame(passo);
  });
}

/* ---------------- Ligação com a página ---------------- */

document.documentElement.classList.add('js');
const estreito = matchMedia('(max-width: 1100px)');
type ComPalco = HTMLElement & { __palco?: Palco };

function iniciarComputador() {
  document.querySelectorAll<HTMLElement>('[data-capitulo]').forEach((cap) => {
    const el = cap.querySelector<ComPalco>(':scope > .cap-palco');
    if (!el) return;
    const palco = new Palco(el);
    el.__palco = palco;
    const passos = [...cap.querySelectorAll<HTMLElement>('[data-passo]')];
    const meio = new IntersectionObserver(
      (itens) => {
        itens.forEach((e) => {
          if (!e.isIntersecting) return;
          const alvo = e.target as HTMLElement;
          passos.forEach((p) => p.classList.toggle('ativo', p === alvo));
          if (alvo.dataset.tela) palco.mostrar(alvo.dataset.tela);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    passos.forEach((p) => meio.observe(p));
    new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) palco.parar();
    }).observe(cap);
  });
}

function iniciarCelular() {
  document.querySelectorAll<ComPalco>('.palco-movel').forEach((el) => {
    const palco = new Palco(el);
    el.__palco = palco;
    const telas = [...el.querySelectorAll<HTMLElement>(':scope > .tela')];
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const nome = el.dataset.atual || telas[0]?.dataset.tela;
          if (nome) {
            palco.atual = null;
            palco.mostrar(nome);
          }
        } else palco.parar();
      },
      { threshold: 0.55 },
    ).observe(el);
  });
}

/* Páginas internas: a tela solta roda quando aparece, em qualquer largura */
function iniciarSoltos() {
  document.querySelectorAll<ComPalco>('.palco-solto').forEach((el) => {
    const palco = new Palco(el);
    el.__palco = palco;
    const nome = el.querySelector<HTMLElement>(':scope > .tela')?.dataset.tela;
    if (!nome) return;
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          palco.atual = null;
          palco.mostrar(nome);
        } else palco.parar();
      },
      { threshold: 0.55 },
    ).observe(el);
  });
}

/* Abas e vitrine (rascunho): uma tela por vez, escolhida pelos botões. Com data-auto,
   passa sozinha para a próxima até a pessoa escolher uma. */
function iniciarAbas() {
  document.querySelectorAll<HTMLElement>('[data-abas]').forEach((grupo) => {
    const el = grupo.querySelector<ComPalco>('.palco-abas');
    if (!el) return;
    const palco = new Palco(el);
    el.__palco = palco;
    const botoes = [...grupo.querySelectorAll<HTMLButtonElement>('button[data-aba]')];
    const intervalo = Number(grupo.dataset.auto) || 0;
    let atual = 0;
    let relogio = 0;
    let visivel = false;
    let escolheu = false;
    const ir = (k: number) => {
      atual = (k + botoes.length) % botoes.length;
      botoes.forEach((b, j) => b.setAttribute('aria-pressed', String(j === atual)));
      palco.atual = null;
      palco.mostrar(botoes[atual].dataset.aba as string);
      clearTimeout(relogio);
      if (intervalo && !escolheu && visivel && !reduz) relogio = window.setTimeout(() => ir(atual + 1), intervalo);
    };
    botoes.forEach((b, j) =>
      b.addEventListener('click', () => {
        escolheu = true;
        ir(j);
      }),
    );
    new IntersectionObserver(
      ([e]) => {
        visivel = e.isIntersecting;
        if (visivel) ir(atual);
        else {
          clearTimeout(relogio);
          palco.parar();
        }
      },
      { threshold: 0.4 },
    ).observe(el);
  });
}

if (estreito.matches) iniciarCelular();
else iniciarComputador();
iniciarSoltos();
iniciarAbas();
estreito.addEventListener('change', () => location.reload());

/* Seletor da parte fiscal: troca o texto e a tela */
document.querySelectorAll<HTMLElement>('[data-seletor-fiscal]').forEach((grupo) => {
  const botoes = [...grupo.querySelectorAll<HTMLButtonElement>('button[data-valor]')];
  const cap = grupo.closest<HTMLElement>('[data-capitulo]');
  if (!cap) return;
  botoes.forEach((b) =>
    b.addEventListener('click', () => {
      const valor = b.dataset.valor as string;
      botoes.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      cap.querySelectorAll<HTMLElement>('[data-caso]').forEach((caso) => (caso.hidden = caso.dataset.caso !== valor));
      const passo = cap.querySelector<HTMLElement>('[data-passo]');
      if (passo) passo.dataset.tela = valor;
      cap.querySelector<ComPalco>(':scope > .cap-palco')?.__palco?.mostrar(valor);
      const movel = cap.querySelector<ComPalco>('.palco-movel');
      if (movel) {
        movel.dataset.atual = valor;
        if (movel.__palco) {
          movel.__palco.atual = null;
          movel.__palco.mostrar(valor);
        }
      }
    }),
  );
});

/* Preço mensal ou anual */
document.querySelectorAll<HTMLElement>('[data-periodo]').forEach((grupo) => {
  const botoes = [...grupo.querySelectorAll<HTMLButtonElement>('button[data-valor]')];
  botoes.forEach((b) =>
    b.addEventListener('click', () => {
      const anual = b.dataset.valor === 'anual';
      botoes.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      document.querySelectorAll<HTMLElement>('[data-mensal]').forEach((el) => {
        const novo = (anual ? el.dataset.anual : el.dataset.mensal) || '';
        if (el.textContent === novo) return;
        if (reduz) { el.textContent = novo; return; }
        el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 120, easing: 'ease-out' }).finished.then(() => {
          el.textContent = novo;
          el.animate([{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { duration: 220, easing: 'cubic-bezier(.23,1,.32,1)' });
        });
      });
    }),
  );
});

/* Entrada dos títulos e passos, uma vez só */
const entrada = new IntersectionObserver(
  (itens) => {
    for (const e of itens) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        entrada.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
);
document.querySelectorAll('.entra').forEach((el) => entrada.observe(el));

/* O nome vai da borda do palco até a margem direita */
function ajustarNome() {
  const nome = document.querySelector<HTMLElement>('.nome');
  if (!nome) return;
  if (estreito.matches) { nome.style.fontSize = ''; return; }
  const alvo = innerWidth * 0.63 - 32;
  nome.style.fontSize = '100px';
  const largura = nome.querySelector('.claro-n')?.getBoundingClientRect().width || 1;
  nome.style.fontSize = (100 * alvo) / largura + 'px';
}

/* O nome do rodapé ocupa de uma margem à outra */
function ajustarRodape() {
  const rod = document.querySelector<HTMLElement>('.rodape-nome');
  const texto = rod?.querySelector('span');
  if (!rod || !texto) return;
  if (estreito.matches) { rod.style.fontSize = ''; return; }
  rod.style.fontSize = '100px';
  const largura = texto.getBoundingClientRect().width || 1;
  rod.style.fontSize = (100 * rod.clientWidth) / largura + 'px';
}
ajustarRodape();
addEventListener('resize', ajustarRodape);
ajustarNome();
addEventListener('resize', ajustarNome);

/* Sem linha do tempo de rolagem: o nome encolhe por script */
if (!CSS.supports('animation-timeline: scroll()') && !reduz) {
  const nome = document.querySelector<HTMLElement>('.nome');
  addEventListener(
    'scroll',
    () =>
      requestAnimationFrame(() => {
        if (!nome) return;
        if (estreito.matches) { nome.style.transform = ''; return; }
        nome.style.transform = `scale(${1 - 0.07 * Math.min(1, scrollY / innerHeight)})`;
      }),
    { passive: true },
  );
}
