/* eslint-disable */
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

export const preventDefault = e => {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

export const preventDefaultForScrollKeys = e => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

export const disableScroll = () => {
  document.onkeydown = preventDefaultForScrollKeys;

  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('mousewheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
}

export const enableScroll = () => {
  document.onkeydown = null;

  window.removeEventListener('wheel', preventDefault, { passive: false });
  window.removeEventListener('mousewheel', preventDefault, { passive: false });
  window.removeEventListener('touchmove', preventDefault, { passive: false });
}
