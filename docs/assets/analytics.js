window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0F7DLF486T');

          document.addEventListener('click', function (e) {
            var el = e.target && e.target.closest ? e.target.closest('[data-ga-event]') : null;
            if (!el) return;
            var href = el.getAttribute('href') || '';
            var section = el.getAttribute('data-ga-section') || '';
            var label = el.getAttribute('data-ga-label') || (el.textContent || '').trim().slice(0, 100);
            var outbound = /^https?:\/\//i.test(href) && href.indexOf(window.location.host) === -1;
            gtag('event', el.getAttribute('data-ga-event'), {
              link_text: label,
              link_url: href,
              section: section,
              outbound: outbound,
              page_path: window.location.pathname,
              page_title: document.title,
            });
          }, true);
