import { Power2 } from 'gsap'

export const layoutAppearance = {
  duration: 0.8,
  from: {
    opacity: 0,
    top: -20
  },
  to: {
    opacity: 1,
    top: 0,
    ease: Power2.easeIn
  }
};

export const layoutHiding = {
  duration: 0.8,
  to: {
    opacity: 0
  }
}