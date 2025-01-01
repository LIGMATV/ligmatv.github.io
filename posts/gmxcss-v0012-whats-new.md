---
title: "GMX.css v0.0.12: What's new?"
description: The new minor update from GMX.css just launched now. What's the difference?
cover: /img/gmxcss-v0012.webp
released: 2024/12/12
---

The new minor update from GMX.css just launched now. What's the difference?

## Progress

The progress element displays an indicator showing the completion progress of a task, typically displayed as a progress bar. And also, there's a different attribute to run this element, you can make the progress element with normal bar or circular look, and make it runs statically by `value` or leave it intermedinate.

The code is simple, just create the progress element for intermedinate.
```
<progress></progress>
```

Or, you can give it `value` and `max` too.
```
<progress value="30" max="100"></progress>
```

Wants the circular version? Add the `circle` class with `--value` variable.
```
<progress class="circle" value="30" max="100" style="--value: 30;"></progress>
```

Circle but intermedinate and spinning? Sure.
```
<progress class="circle spin" style="--value: 30;"></progress>
```

Try the demo here:

## More

Not just add progress, we also made the web more responsive.
See the difference and try inspect: [v0.0.10](https://rawcdn.githack.com/LIGMATV/gmx.css/1d9c56ed5042de3c552b9dbacb1daaa3fb7ee144/index.html) vs [v0.0.12](https://rawcdn.githack.com/LIGMATV/gmx.css/eabede68d4a0d216b709d29638e16eb09c6ef959/index.html)

---

Cool right? Getting started now by add single line in your HTML file!

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/LIGMATV/gmx.css@main/gmx.css">
```

[GMX.css repository](https://github.com/LIGMATV/gmx.css)  
[GMX.css website](https://ligmatv.is-a.dev/gmx.css/)