// 스크롤에 맞춰 움직이는 효과. 모든 브라우저에서 같게 동작하도록 GSAP ScrollTrigger를 쓴다.
// JS가 없거나 움직임을 줄이도록 설정한 사용자에게는 전부 정지 화면으로 보인다.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Range = Pick<ScrollTrigger.Vars, 'trigger' | 'start' | 'end'>;

// 요소 자신의 높이 기준: 0은 위쪽 끝이 화면 아래에 닿을 때, 1은 전부 들어왔을 때.
const entry = (el: HTMLElement, from: number, to: number): Range => ({
  trigger: el,
  start: () => `top+=${el.offsetHeight * from} bottom`,
  end: () => `top+=${el.offsetHeight * to} bottom`,
});

// 요소가 화면을 지나는 전체 구간 기준: 0은 들어오기 시작할 때, 1은 완전히 나갔을 때.
const cover = (el: HTMLElement, from: number, to: number): Range => ({
  trigger: el,
  start: () => `top bottom-=${(innerHeight + el.offsetHeight) * from}`,
  end: () => `top bottom-=${(innerHeight + el.offsetHeight) * to}`,
});

function play(target: Element, from: gsap.TweenVars, to: gsap.TweenVars, range: Range) {
  gsap.fromTo(target, from, { ...to, ease: 'none', scrollTrigger: { ...range, scrub: 0.3 } });
}

const all = (selector: string) => [...document.querySelectorAll<HTMLElement>(selector)];
// 소프트웨어 고정 무대 안의 요소는 무대가 위치를 직접 옮기므로 스크롤 연출에서 뺀다.
const inStage = (el: HTMLElement) => !el.closest('[data-sw-viewport]');
const riseFrom = { opacity: 0, y: 40 };
const riseTo = { opacity: 1, y: 0 };
const motion = '(prefers-reduced-motion: no-preference)';

gsap.matchMedia().add(motion, () => {
  gsap.fromTo('.scroll-progress', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  // --i는 순번. 같은 줄의 항목이 하나씩 차례로 나타난다.
  for (const el of all('.reveal').filter(inStage)) {
    const i = Number(el.style.getPropertyValue('--i')) || 0;
    play(el, riseFrom, riseTo, entry(el, i * 0.08, 0.6 + i * 0.08));
  }

  // 소프트웨어 카드: 카드는 투명해지지 않고 위로만 올라오며, 썸네일 아래쪽만 흐리다가 또렷해진다.
  for (const el of all('.rise')) {
    const i = Number(el.style.getPropertyValue('--i')) || 0;
    play(el, { y: 40 }, { y: 0 }, entry(el, i * 0.08, 0.6 + i * 0.08));
  }
  for (const el of all('.thumb-fade')) {
    play(el, { '--fade': 0.35 }, { '--fade': 1 }, entry(el.parentElement!, 0, 0.8));
  }

  // 사진이 가장자리부터 열리면서 안쪽 이미지가 제자리를 찾는다.
  for (const el of all('.wipe')) {
    const range = cover(el, 0, 0.45);
    play(el, { clipPath: 'inset(10% round 1.5rem)' }, { clipPath: 'inset(0% round 1.5rem)' }, range);
    for (const child of el.children) play(child, { scale: 1.15 }, { scale: 1 }, range);
  }

  for (const el of all('.hero-out')) play(el, { opacity: 1, y: 0 }, { opacity: 0.4, y: -80 }, { trigger: el, start: 'top top', end: 'bottom top' });
  for (const el of all('.hero-zoom')) play(el, { scale: 1 }, { scale: 1.1 }, { trigger: el, start: 'top top', end: 'bottom top' });

  // 개발 과정 타임라인의 선이 스크롤을 따라 내려온다.
  for (const el of all('.timeline-line')) play(el, { scaleY: 0, transformOrigin: 'top' }, { scaleY: 1 }, cover(el, 0.15, 0.85));
});

// 넓은 화면: 입력부터 수행까지, 이어서 학습까지 흐름 순서대로 나타난다.
gsap.matchMedia().add(`${motion} and (min-width: 80rem)`, () => {
  const figure = document.querySelector<HTMLElement>('.diagram-figure')!;
  for (const el of all('[data-step]')) {
    const step = Number(el.dataset.step);
    play(el, riseFrom, riseTo, cover(figure, 0.14 + step * 0.04, 0.22 + step * 0.04));
  }
});

// 좁은 화면: 세로로 길어 스크롤하는 대로 하나씩 나타난다.
gsap.matchMedia().add(`${motion} and (max-width: 79.99rem)`, () => {
  for (const el of all('.diagram-stage')) play(el, riseFrom, riseTo, entry(el, 0, 0.6));
});

document.fonts.ready.then(() => ScrollTrigger.refresh());
