const moreText = document.querySelector('.moreText');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    moreText.classList.toggle('show');

    if (moreText.classList.contains('show')) {
        moreText.style.display = 'inline';  // ক্লাস টগল করার পরে, inline প্রদর্শন হবে
        btn.textContent = 'Read Less';  // বোতামের টেক্সট পরিবর্তন হবে
    } else {
        moreText.style.display = 'none';  // ক্লাস না থাকলে, টেক্সট লুকানো হবে
        btn.textContent = 'Read More..';  // বোতামের টেক্সট আবার পরিবর্তন হবে
    }
});
