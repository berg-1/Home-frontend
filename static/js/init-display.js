// 当网页向下滑动 20px 出现"返回顶部" 按钮, 跟踪toc位置
window.onscroll = function () {
    scrollFunction()
    catalogTrack()
};

const catalogTrack = () => {
    let $currentHeading = $('h1');
    for (let heading of $('h1,h2')) {
        const $heading = $(heading);
        if ($heading.offset().top - $(document).scrollTop() > 20) {
            break;
        }
        $currentHeading = $heading;
    }
    const anchorName = $currentHeading.attr('id');
    const $catalog = $(`a[href="#${anchorName}"]`);
    if (!$catalog.hasClass('active')) {
        $('ul.navbar-nav .active').removeClass('active');
        $catalog.addClass('active');
    }
};

// toggle between dark theme or light theme
function togglePrismTheme() {
    const light = document.getElementById("light-theme"),
        dark = document.getElementById("dark-theme");
    if (light.disabled === true) {
        light.disabled = undefined;
        // wait theme perfectly changed :)
        setTimeout(function () {
            dark.disabled = "disabled";
        }, 300);
    } else {
        dark.disabled = undefined;
        setTimeout(function () {
            light.disabled = "disabled";
        }, 300);
    }
}

function toc() {
    $(function () {
        const navSelector = "#table_of_content";
        const $myNav = $(navSelector);
        Toc.init($myNav);
        $("#article").scrollspy({
            target: navSelector
        });
    });
}

const renderer = new marked.Renderer();
renderer.code = function (code, lang, escaped) {
    code = this.options.highlight(code, lang);
    if (!lang) {
        return `<pre><code class="language-text">${code}</code></pre>`;
    }
    const langClass = "language-" + lang;
    return `<pre class="${langClass} rainbow-braces line-numbers"><code class="${langClass} match-braces">${code}</code></pre>`;
}

marked.setOptions({
    renderer: renderer,
    highlight: function (code, lang) {
        try {
            console.log("Prism initialization")
            return Prism.highlight(code, Prism.languages[lang], lang);
        } catch {
            return code;
        }
    },
});

// $.ajax({
//     "type": 'get',
//     "url": 'http://localhost:8080/downloadFile?id=1134629f-c718-4a7f-966e-c0483adf0d12',
//     "dataType": "text",
//     "permissions": "http://localhost:8080/",
//     "success": function (data) {
//         document.getElementById('content').innerHTML = marked(data);
//         console.log("ajax:" + new Date())
//         Prism.highlightAll();  // Rerun Prism syntax highlighting on the current page
//     }
// })

toc()
jQuery(function () {
    // Handler for .ready() called.
    console.log("document is ready!")
    $('ul.navbar-nav .active').removeClass('active');
});
