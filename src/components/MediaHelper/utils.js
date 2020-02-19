import {
  DESKTOP_SMALL_MEDIA_QUERY,
  TABLET_LARGE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
  MOBILE_SMALL_MEDIA_QUERY,
  DESKTOP,
  DESKTOP_SMALL,
  TABLET_LARGE,
  TABLET,
  MOBILE,
  MOBILE_SMALL,
} from '_constants';

const getViewport = (
  mediaQueryDesktopSmall,
  mediaQueryTabletLarge,
  mediaQueryTablet,
  mediaQueryMobile,
  mediaQueryMobileSmall,
) => {
  if (mediaQueryMobileSmall.matches) return MOBILE_SMALL;
  if (mediaQueryMobile.matches) return MOBILE;
  if (mediaQueryTablet.matches) return TABLET;
  if (mediaQueryTabletLarge.matches) return TABLET_LARGE;
  if (mediaQueryDesktopSmall.matches) return DESKTOP_SMALL;

  return DESKTOP;
};

export const onCheckViewport = () => (
  getViewport(
    window.matchMedia(DESKTOP_SMALL_MEDIA_QUERY),
    window.matchMedia(TABLET_LARGE_MEDIA_QUERY),
    window.matchMedia(TABLET_MEDIA_QUERY),
    window.matchMedia(MOBILE_MEDIA_QUERY),
    window.matchMedia(MOBILE_SMALL_MEDIA_QUERY),
  )
);

export const onSetScrollRestoration = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
};

export const onSetGlobalStyle = ({ platform, os }) => {
  if (!document) return;

  document.body.classList.add(os.replace(/ /g, ''));

  if (platform !== 'desktop') {
    document.body.classList.add('isMobileDevice');
  }

  document.body.classList.add(platform);
};

export const onSetVhSize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
