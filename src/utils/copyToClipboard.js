/*eslint-disable */
import getBrowserInfo from '_utils/getBrowserInfo';

const copyToClipboard = () => {
  const urlToCopy = window.location.href;

  const fakeInput = document.createElement('input');
  document.querySelector('body').appendChild(fakeInput);

  fakeInput.style.position = 'absolute';
  fakeInput.style.bottom = '0';
  fakeInput.style.opacity = '0';
  fakeInput.id = 'fake-input';
  fakeInput.value = urlToCopy;
  const { browser, platform } = getBrowserInfo();
  if (browser.name === 'Safari' && (platform.type === 'tablet' || platform.type === 'mobile')) {
    fakeInput.contentEditable = true;
    fakeInput.readOnly = true;
    const range = document.createRange();
    range.selectNodeContents(fakeInput);
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    fakeInput.setSelectionRange(0, 999999);
  } else {
    fakeInput.select();
  }
  document.execCommand('copy');
  const elem = document.getElementById('fake-input');
  elem.parentNode.removeChild(elem);
};

export default copyToClipboard;
