---
title: "GMX.css: Create a simple layout"
description: GMX.css, an CSS framework that comnes with a lot of beautiful styled components...
cover: /img/gmx-css-layout.webp
released: 2024/12/12
---

Make a simple web page can be difficult, because a lot of ugly and unstyled components built in by browser. But of course, you can customize all of it with CSS. But styling can waste your times, makes you not serious about building applications.

GMX.css, an CSS framework that comnes with a lot of beautiful styled components with Material Design based, you can building your web apps many times easier and faster. This is how you can make an simple layout with GMX.css.

First, you need to import the CSS and Iconify Icon. We recommended to use the JSDelivr CDN.

```
<link rel="stylesheet" href="https://unpkg.com/gmx.css">
<script src="https://unpkg.com/iconify-icon"></script>
```

Second, we built the simple navigation. And also it was really responsive! In desktop, it will showed in left and vertical, meanwhille in mobile, it will showed in bottom and horizontal.

```
<main>
  <aside>
    <nav>
      <li class="active">
        <i>
          <iconify-icon icon="material-symbols:home"></iconify-icon>
        </i>
        <span>Home</span>
      </li>
      <li>
        <a href="https://github.com/LIGMATV/gmx.css">
          <i>
            <iconify-icon icon="mdi:github"></iconify-icon>
          </i>
          <span>GitHub</span>
        </a>
      </li>
    </nav>
    <article>
    </article>
  </aside>
</main>
```

Third, built some container with typography and button. You can learn from here.

```
  ...
  </aside>
  <article>
    <h1>Hello, GMX.</h1>
    <br>
    <button>Action...</button>
  </article>
</main>
```

You now can built an simple web app with GMX.css. For more explore, visit the website to see the demos and examples of the elements you want to copy 👇🏻
https://ligmatv.is-a.dev/gmx.css/ [(Source code)](https://github.com/LIGMATV/gmx.css)
