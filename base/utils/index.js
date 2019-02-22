import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const generateItemKey = index => (
  String(Symbol(`React Key - Index: ${index}`))
);

export const nextENV = publicRuntimeConfig;

export const smoothScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const { hash } = e.target || '';
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
