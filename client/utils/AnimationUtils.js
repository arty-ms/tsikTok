export const fadeDelay = delay => ({
  opacity: '0',
  transform: 'translateY(-10px)',
  animation: 'fade-slide-in 334ms cubic-bezier(0, 0, .2, 1) forwards',
  animationDelay: `${delay}ms`,
});

export const pulse = (background = '#E1E9EE') => ({
  background,
  animation: 'pulse .65s infinite alternate',
  borderRadius: '3px',
  boxSizing: 'border-box',
});
