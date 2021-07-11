export const changeFooter = (footerRef) => {
    var r = document.querySelector(':root');
    if (!footerRef.current.classList.contains('dark-footer')) {
        r.style.setProperty('--fbg', '#f7fff7');
        r.style.setProperty('--fh3', 'rgba(0, 0, 0, 0.68)');
        r.style.setProperty('--fp', '#000000');
        r.style.setProperty('--femail', '#333333');
        r.style.setProperty('--fcbg', 'black');
        r.style.setProperty('--fctext', 'white');
        r.style.setProperty('--fct', '#000000');
        footerRef.current.classList.add('dark-footer')
    } else {
        r.style.setProperty('--fbg', '#333333');
        r.style.setProperty('--fh3', '#FFFFFF');
        r.style.setProperty('--fp', '#FFFFFF');
        r.style.setProperty('--femail', '#FFFFFF');
        r.style.setProperty('--fcbg', '#FFFFFF');
        r.style.setProperty('--fctext', 'black');
        r.style.setProperty('--fct', '#FFFFFF');
        footerRef.current.classList.remove('dark-footer')
    }
}