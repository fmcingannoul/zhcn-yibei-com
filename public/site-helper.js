(function () {
    'use strict';

    var config = {
        siteName: '易倍体育',
        siteUrl: 'https://zhcn-yibei.com',
        tags: ['体育', '竞猜', '赛事', '比分', '直播'],
        hints: [
            '请确保使用最新浏览器访问',
            '建议开启JavaScript以获得最佳体验',
            '每日更新赛事数据',
            '所有数据仅供参考，请理性参与'
        ]
    };

    function createBadge(text) {
        var span = document.createElement('span');
        span.className = 'keyword-badge';
        span.textContent = text;
        span.style.cssText = 'display:inline-block;background:#f0f4ff;color:#1a3d6e;border:1px solid #b8d0f0;border-radius:12px;padding:4px 12px;margin:4px;font-size:0.85em;transition:background 0.2s;';
        span.addEventListener('mouseenter', function () {
            this.style.background = '#dce6f5';
        });
        span.addEventListener('mouseleave', function () {
            this.style.background = '#f0f4ff';
        });
        return span;
    }

    function createHintCard(text, index) {
        var card = document.createElement('div');
        card.className = 'hint-card';
        card.textContent = (index + 1) + '. ' + text;
        card.style.cssText = 'background:#ffffff;border-left:4px solid #336699;box-shadow:0 1px 4px rgba(0,0,0,0.08);padding:10px 16px;margin:6px 0;border-radius:4px;font-size:0.95em;color:#222;';
        return card;
    }

    function initComponent() {
        var container = document.createElement('div');
        container.id = 'site-helper-widget';
        container.style.cssText = 'max-width:600px;margin:30px auto;padding:20px;background:#fafcff;border:1px solid #dbe4f0;border-radius:12px;font-family:sans-serif;';

        var title = document.createElement('h2');
        title.textContent = '🔖 ' + config.siteName + ' · 页面助手';
        title.style.cssText = 'font-size:1.4em;color:#1f3a6b;margin:0 0 10px 0;';

        var urlLine = document.createElement('p');
        urlLine.textContent = '站点: ' + config.siteUrl;
        urlLine.style.cssText = 'font-size:0.9em;color:#4a6a8a;margin:0 0 14px 0;word-break:break-all;';

        var tagWrap = document.createElement('div');
        tagWrap.style.cssText = 'margin:6px 0 14px 0;';
        config.tags.forEach(function (tag) {
            tagWrap.appendChild(createBadge(tag));
        });

        var hintTitle = document.createElement('p');
        hintTitle.textContent = '📌 访问说明';
        hintTitle.style.cssText = 'font-weight:600;color:#1f3a6b;margin:10px 0 4px 0;';

        var hintWrap = document.createElement('div');
        config.hints.forEach(function (hint, idx) {
            hintWrap.appendChild(createHintCard(hint, idx));
        });

        var footer = document.createElement('p');
        footer.textContent = '由 site-helper 自动生成 · 纯前端展示';
        footer.style.cssText = 'font-size:0.8em;color:#778ca3;margin:16px 0 0 0;text-align:right;';

        container.appendChild(title);
        container.appendChild(urlLine);
        container.appendChild(tagWrap);
        container.appendChild(hintTitle);
        container.appendChild(hintWrap);
        container.appendChild(footer);

        var ref = document.getElementById('site-helper-widget');
        if (ref) {
            ref.parentNode.replaceChild(container, ref);
        } else {
            document.body.appendChild(container);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponent);
    } else {
        initComponent();
    }
})();