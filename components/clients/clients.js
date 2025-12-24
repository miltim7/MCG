document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.clients');
    if (!section) return;

    const track = section.querySelector('.clients-track');
    if (!track) return;

    const originals = Array.from(track.children);
    const count = originals.length;

    track.style.setProperty('--count', String(count));

    originals.forEach((node) => {
        track.appendChild(node.cloneNode(true));
    });

    track.style.willChange = 'transform';
});
