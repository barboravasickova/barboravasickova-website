export const motionEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition = {
  duration: 0.55,
  ease: motionEase
};

export const pageTransition = {
  duration: 0.35,
  ease: motionEase
};

export const staggerStep = 0.07;

export const revealViewport = {
  once: true,
  amount: "some",
  margin: "0px 0px -48px 0px"
} as const;
