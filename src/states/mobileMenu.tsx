import { atom, useRecoilState } from 'recoil';

const mobileMenuState = atom({
  key: 'mobileMenuState',
  default: false,
});

export function useMobileMenu() {
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuState);

  function toggle() {
    setMobileMenu((state) => !state);
  }

  return { toggle, state: mobileMenu };
}
