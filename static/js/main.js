// 顶部隐藏’返回顶部‘按钮，其他显示
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upward").style.visibility = "visible";
        document.getElementById("upward").style.opacity = "1";
    } else {
        document.getElementById("upward").style.visibility = "hidden";
        document.getElementById("upward").style.opacity = "0";
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 更改主题(黑夜-白天)  根据系统颜色做出自动调整
const themeSwitch = document.querySelector('input');
themeSwitch.addEventListener('change', () => {
    const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQueryListDark.matches) {
        document.body.classList.toggle('light-theme');
    } else {
        document.body.classList.toggle('dark-theme');
    }
    togglePrismTheme()  // switch prism theme
});

jQuery(function () {
    // Handler for .ready() called.
    // init page theme
    // const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
    // if (mediaQueryListDark.matches) {
    //     document.body.classList.add('dark-theme');
    //     console.log('Current System theme: dark-theme')
    // } else {
    //     document.body.classList.add('light-theme');
    //     console.log('Current System theme: light-theme')
    // }
});

