      const links = document.querySelectorAll("nav ul li a");

      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href");
          const targetElement = document.querySelector(targetId);
          const targetPosition = targetElement.offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000;
          let start = null;

          function step(timestamp) {
            if (!start) {
              start = timestamp;
            }
            const progress = timestamp - start;
            window.scrollTo(
              0,
              easeInOutCubic(progress, startPosition, distance, duration)
            );
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          }

          window.requestAnimationFrame(step);
        });
      });

      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
          return (c / 2) * t * t * t + b;
        }
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

