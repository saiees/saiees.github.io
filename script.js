(function () {
  'use strict';

  var MAIL = 'saiee@duck.com';
  var SWIFTSERVICE_URL = 'https://github.com/saiees/saiees.github.io/releases/latest/download/SwiftService_Setup.exe';
  var EXOLUTE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.saieesoft.exolute&pcampaignid=web_share';
  var ASKANONYMOUS_URL = 'https://t.me/AskAnonymousBot';
  var VAULTYS_URL = 'https://t.me/VaultysBot';

  var MARQUEE_ITEMS = [
    'Windows tools',
    'Android apps',
    'Telegram bots',
    'Web design',
    '3D models',
    'Covers & graphics',
    'Photo editing',
    'Python',
    'Kotlin',
    'No telemetry'
  ];

  var STATS = [
    { value: '1', label: { en: 'developer + designer', ru: 'разработчик + дизайнер' } },
    { value: 'Code + visual', label: { en: 'from idea to release', ru: 'от идеи до релиза' } },
    { value: '4', label: { en: 'live projects', ru: 'проекта уже работают' } }
  ];

  var SERVICES = [
    {
      number: '01',
      name: { en: 'Windows Utilities', ru: 'Утилиты для Windows' },
      description: {
        en: 'Small tools for cleanup, network and Windows settings. No useless background processes.',
        ru: 'Небольшие утилиты для очистки, сети и настройки Windows. Без лишних фоновых процессов.'
      }
    },
    {
      number: '02',
      name: { en: 'Android Applications', ru: 'Android-приложения' },
      description: {
        en: 'Native apps with a clear interface. Online or offline — whatever the project needs.',
        ru: 'Нативные приложения с понятным интерфейсом. Онлайн или офлайн — как нужно задаче.'
      }
    },
    {
      number: '03',
      name: { en: 'Telegram Bots', ru: 'Telegram-боты' },
      description: {
        en: 'Bots for a specific job: messages, automation, payments and Telegram Business.',
        ru: 'Боты под конкретную задачу: сообщения, автоматизация, платежи и Telegram Business.'
      }
    },
    {
      number: '04',
      name: { en: 'Web Design, Covers & Photo Graphics', ru: 'Дизайн сайтов, обложки и графика' },
      description: {
        en: 'Web design, covers, banners and photo editing. Clean and without visual noise.',
        ru: 'Дизайн сайтов, обложки, баннеры и обработка фото. Чисто и без визуального шума.'
      }
    },
    {
      number: '05',
      name: { en: 'Websites & Custom Tools', ru: 'Сайты и софт на заказ' },
      description: {
        en: 'Websites and small custom software for one clear task. No bloated all-in-one apps.',
        ru: 'Сайты и небольшой софт под конкретную задачу. Без универсальных комбайнов.'
      }
    },
    {
      number: '06',
      name: { en: '3D Modeling & Visualization', ru: '3D-моделирование и визуализация' },
      description: {
        en: 'Models, parts and renders for projects, visuals or 3D printing.',
        ru: 'Модели, детали и рендеры для проектов, визуала или 3D-печати.'
      }
    }
  ];

  var PROJECTS = [
    {
      id: 'exolute',
      number: '01',
      category: { en: 'Android App', ru: 'Android-приложение' },
      name: 'Exolute Converter',
      href: EXOLUTE_PLAY_URL,
      cta: { en: 'Google Play', ru: 'Google Play' },
      onlineHref: '/exolute/',
      onlineCta: { en: 'Try online', ru: 'Попробовать онлайн' },
      images: ['src/projects/exolute.png'],
      cardTopTitle: { en: 'Works offline', ru: 'работает офлайн' },
      cardTopSub: {
        en: 'Keeps the latest rates on your phone, so it still works without internet.',
        ru: 'Сохраняет последние курсы на телефоне и не ломается без интернета.'
      },
      cardTopTag: 'GOOGLE PLAY',
      cardBottomTitle: { en: 'what it does', ru: 'что умеет' },
      cardBottomList: {
        en: [
          'A long list of currencies',
          'Fresh rates and history charts',
          'Commission calculation',
          'A clean interface without overload'
        ],
        ru: [
          'большой список валют',
          'актуальные курсы и графики',
          'расчёт комиссии',
          'чистый интерфейс без перегруза'
        ]
      },
      mainVisualTitle: 'EXOLUTE CONVERTER',
      mainVisualSubtitle: {
        en: 'Currency converter for Android. Rates, charts, commission and offline mode.',
        ru: 'Конвертер валют для Android. Курсы, графики, комиссия и офлайн-режим.'
      },
      iconName: 'smartphone'
    },
    {
      id: 'askanonymousbot',
      number: '02',
      category: { en: 'Telegram Bot', ru: 'Telegram-бот' },
      name: '@AskAnonymousBot',
      href: ASKANONYMOUS_URL,
      cta: { en: 'Open in Telegram', ru: 'Открыть в Telegram' },
      images: ['src/projects/askanonymousbot.png'],
      cardTopTitle: { en: 'Anonymous and simple', ru: 'анонимно и просто' },
      cardTopSub: {
        en: 'Share your link, get anonymous messages and reply right inside Telegram.',
        ru: 'Делишься ссылкой, получаешь анонимные сообщения и отвечаешь прямо в Telegram.'
      },
      cardTopTag: 'TELEGRAM',
      cardBottomTitle: { en: 'what it does', ru: 'что умеет' },
      cardBottomList: {
        en: [
          'Receives and sends anonymous messages',
          'Publishes messages to a channel',
          'Manages personal links',
          'Includes anti-spam controls'
        ],
        ru: [
          'принимает и отправляет анонимные сообщения',
          'публикует сообщения в канал',
          'управляет персональными ссылками',
          'защищает от спама'
        ]
      },
      mainVisualTitle: '@ASKANONYMOUSBOT',
      mainVisualSubtitle: {
        en: 'Telegram bot for anonymous messages.',
        ru: 'Telegram-бот для анонимных сообщений.'
      },
      iconName: 'message-square'
    },
    {
      id: 'vaultysbot',
      number: '03',
      category: { en: 'Telegram Bot', ru: 'Telegram-бот' },
      name: '@VaultysBot',
      href: VAULTYS_URL,
      cta: { en: 'Open in Telegram', ru: 'Открыть в Telegram' },
      images: ['src/projects/vaultysbot.png'],
      cardTopTitle: { en: 'Catches what disappeared', ru: 'ловит то, что исчезло' },
      cardTopSub: {
        en: 'Shows edited and deleted messages, and saves one-time media.',
        ru: 'Показывает изменённые и удалённые сообщения, сохраняет одноразовые медиа.'
      },
      cardTopTag: 'TELEGRAM',
      cardBottomTitle: { en: 'what it does', ru: 'что умеет' },
      cardBottomList: {
        en: [
          'Alerts about edits and deletions',
          'Saves one-time photos and videos',
          'Keeps disappearing voice and video notes',
          'Works right inside Telegram'
        ],
        ru: [
          'сообщает об изменении и удалении сообщений',
          'сохраняет одноразовые фото и видео',
          'сохраняет исчезающие голосовые и кружки',
          'работает прямо в Telegram'
        ]
      },
      mainVisualTitle: '@VAULTYSBOT',
      mainVisualSubtitle: {
        en: 'Telegram bot for deleted messages and one-time media.',
        ru: 'Telegram-бот для удалённых сообщений и одноразовых медиа.'
      },
      iconName: 'eye'
    },
    {
      id: 'swiftservice',
      number: '04',
      category: { en: 'Windows Utility', ru: 'Утилита Windows' },
      name: 'SwiftService',
      href: SWIFTSERVICE_URL,
      cta: { en: 'Download .exe', ru: 'Скачать .exe' },
      images: ['src/projects/swiftservice.png'],
      cardTopTitle: { en: 'Nothing running behind your back', ru: 'ничего лишнего в фоне' },
      cardTopSub: {
        en: 'Cleanup and system settings run locally. No telemetry or hidden background work.',
        ru: 'Очистка и настройка работают локально. Без телеметрии и скрытой работы в фоне.'
      },
      cardTopTag: 'WINDOWS 10 / 11',
      cardBottomTitle: { en: 'what it does', ru: 'что умеет' },
      cardBottomList: {
        en: [
          'Cleans temporary files',
          'Checks and repairs the registry',
          'Sets up network and DNS',
          'Tunes background processes for games'
        ],
        ru: [
          'чистит временные файлы',
          'проверяет и исправляет реестр',
          'настраивает сеть и DNS',
          'отключает лишнее для игр'
        ]
      },
      mainVisualTitle: 'SWIFTSERVICE ENGINE',
      mainVisualSubtitle: {
        en: 'A small Windows utility for cleanup, repair and system settings.',
        ru: 'Небольшая утилита для очистки, исправления и настройки Windows.'
      },
      iconName: 'cpu'
    }
  ];

  var STACK = [
    { name: 'Telegram Bot API', category: { en: 'Business & Stars API', ru: 'Business и Stars API' }, level: 'Sr' },
    { name: 'Python', category: { en: 'Backend / Desktop / Bots', ru: 'Бэкенд / Десктоп / Боты' }, level: 'Sr' },
    { name: 'JavaScript / HTML / CSS', category: { en: 'Frontend & Web UI', ru: 'Фронтенд и веб-интерфейсы' }, level: 'Sr' },
    { name: 'UI & Web Design', category: { en: 'UI/UX, Sites & Layouts', ru: 'UI/UX, дизайн сайтов' }, level: 'Mid' },
    { name: 'Graphics & Photo', category: { en: 'Covers, Visuals & Retouch', ru: 'Обложки, фото и графика' }, level: 'Mid' },
    { name: '3D Modeling & CAD', category: { en: '3D Models, Renders & Print', ru: '3D-модели, рендеры и печать' }, level: 'Mid' },
    { name: 'Kotlin / Android SDK', category: { en: 'Mobile Development', ru: 'Мобильная разработка' }, level: 'Sr' },
    { name: 'CustomTkinter / WinAPI', category: { en: 'Windows Utilities', ru: 'Утилиты под Windows' }, level: 'Mid' },
    { name: 'SQL / SQLite / PostgreSQL', category: { en: 'Databases', ru: 'Базы данных' }, level: 'Mid' },
    { name: 'Docker, Linux & Git', category: { en: 'Deployment & Infra', ru: 'Деплой и инфраструктура' }, level: 'Sr' }
  ];

  var SOCIALS = [
    {
      id: 'telegram',
      label: 'Telegram',
      handle: '@nullwr',
      href: 'https://t.me/nullwr',
      icon: 'send'
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'github.com/saiees',
      href: 'https://github.com/saiees',
      icon: 'github'
    },
    {
      id: 'email',
      label: 'Email',
      handle: MAIL,
      copy: MAIL,
      icon: 'copy'
    },
    {
      id: 'support',
      label: 'Support by PayPal',
      handle: 'paypal.me/mentalhash',
      href: 'https://www.paypal.com/paypalme/mentalhash',
      icon: 'heart'
    }
  ];

  var I18N = {
    en: {
      'nav.about': 'about',
      'nav.services': 'services',
      'nav.projects': 'projects',
      'nav.stack': 'stack',
      'hero.status': 'online · open to work',
      'hero.uptime': 'up',
      'hero.subtitle': 'I make useful apps, bots and visuals — without the clutter',
      'hero.contactBtn': 'Write to me',
      'hero.projectsBtn': 'Projects',
      'about.title': 'about me',
      'about.text': 'Independent developer and designer. I make apps for Android and Windows, Telegram bots, websites, 3D and graphics. If an idea is useful, I am interested.',
      'services.title': 'services',
      'projects.title': 'projects',
      'projects.badge': 'live projects',
      'stack.title': 'stack & tools',
      'links.title': 'where to find me',
      'links.copyEmail': 'Copy email',
      'links.copied': 'Copied',
      'links.support': 'Support me',
      'links.ctaTitle': 'Need an app, bot, website or design?',
      'links.ctaSub': 'Write to me. We will figure it out.',
      'links.ctaBtn': 'Write to me',
      'footer.meta': 'opensource ◡ since 2024',
      'footer.copy': '© 2026 saiee · built by me.',
      'footer.contact': 'write to me',
      'modal.eyebrow': 'Contact',
      'modal.title': 'Write to me',
      'modal.desc': 'Tell me what you need. A couple of sentences is enough.',
      'modal.namePlaceholder': 'Your name',
      'modal.emailPlaceholder': 'Your email',
      'modal.msgPlaceholder': 'What do you need?',
      'modal.sendBtn': 'Send',
      'modal.sending': 'Sending...',
      'modal.sentOk': 'Message sent. Thank you!',
      'modal.sendFallback': 'Send via the contact service',
      'modal.activationPending': 'The contact form is awaiting email confirmation. Please email ' + MAIL + ' directly for now.',
      'modal.sentErr': 'Could not send the message. Please email ' + MAIL + ' directly.'
    },
    ru: {
      'nav.about': 'обо мне',
      'nav.services': 'услуги',
      'nav.projects': 'проекты',
      'nav.stack': 'стек',
      'hero.status': 'в сети · беру заказы',
      'hero.uptime': 'онлайн',
      'hero.subtitle': 'делаю полезные приложения, ботов и дизайн — без лишнего',
      'hero.contactBtn': 'написать',
      'hero.projectsBtn': 'проекты',
      'about.title': 'обо мне',
      'about.text': 'Я независимый разработчик и дизайнер. Делаю приложения для Android и Windows, ботов для Telegram. Ещё — сайты, 3D, обложки и обработку фото. Если идея полезная — мне интересно.',
      'services.title': 'услуги',
      'projects.title': 'проекты',
      'projects.badge': 'уже работают',
      'stack.title': 'стек и инструменты',
      'links.title': 'ссылки',
      'links.copyEmail': 'скопировать email',
      'links.copied': 'скопировано',
      'links.support': 'поддержать',
      'links.ctaTitle': 'Нужно приложение, бот, сайт или дизайн?',
      'links.ctaSub': 'Напиши. Обсудим.',
      'links.ctaBtn': 'написать',
      'footer.meta': 'opensource ◡ с 2024',
      'footer.copy': '© 2026 saiee · сделал сам.',
      'footer.contact': 'написать',
      'modal.eyebrow': 'связь',
      'modal.title': 'написать',
      'modal.desc': 'Напиши, что нужно. Пары предложений хватит.',
      'modal.namePlaceholder': 'имя',
      'modal.emailPlaceholder': 'email',
      'modal.msgPlaceholder': 'что нужно?',
      'modal.sendBtn': 'отправить',
      'modal.sending': 'Отправка...',
      'modal.sentOk': 'Сообщение отправлено. Спасибо!',
      'modal.sendFallback': 'Отправить через сервис связи',
      'modal.activationPending': 'Форма ожидает подтверждения почты. Пока напишите напрямую на ' + MAIL + '.',
      'modal.sentErr': 'Не удалось отправить. Пожалуйста, напишите напрямую на ' + MAIL + '.'
    }
  };

  var ICONS = {
    'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-down-right': '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'cpu': '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    'github': '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'
  };

  function icon(name, cls) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' + (cls || '') + '">' + (ICONS[name] || '') + '</svg>';
  }

  function replaceIcons(root) {
    var nodes = (root || document).querySelectorAll('i[data-icon]');
    Array.prototype.forEach.call(nodes, function (el) {
      var wrap = document.createElement('span');
      wrap.innerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('class'));
      if (wrap.firstChild) {
        el.parentNode.replaceChild(wrap.firstChild, el);
      }
    });
  }

  var currentLang = 'en';
  try {
    var saved = localStorage.getItem('saiee_lang') || localStorage.getItem('nullware_lang');
    if (saved === 'ru' || saved === 'en') currentLang = saved;
  } catch (e) {}

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  function pick(obj) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      return obj[currentLang] || obj.en || '';
    }
    return obj || '';
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('saiee_lang', lang);
    } catch (e) {}

    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-placeholder]'), function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });

    renderStats();
    renderServices();
    renderProjects();
    renderStack();
    renderSocials();
  }

  function renderMarquee() {
    var track = document.getElementById('marquee-track');
    if (!track) return;
    var chunk = MARQUEE_ITEMS.map(function (item, i) {
      var cls = i % 2 === 0 ? 'mq-solid' : 'mq-outline';
      return '<span class="marquee-item"><span class="' + cls + '">' + item + '</span><span class="marquee-sep">✦</span></span>';
    }).join('');
    track.innerHTML = chunk + chunk;
  }

  function renderStats() {
    var container = document.getElementById('stats-grid');
    if (!container) return;
    container.innerHTML = STATS.map(function (s) {
      return '' +
        '<div class="stat-box">' +
          '<span class="stat-value">' + s.value + '</span>' +
          '<span class="stat-label">' + pick(s.label) + '</span>' +
        '</div>';
    }).join('');
  }

  function renderServices() {
    var container = document.getElementById('services-list');
    if (!container) return;
    container.innerHTML = SERVICES.map(function (s) {
      return '' +
        '<div class="service-item">' +
          '<span class="service-num">' + s.number + '</span>' +
          '<div class="service-body">' +
            '<h3 class="service-title">' + pick(s.name) + '</h3>' +
            '<p class="service-desc">' + pick(s.description) + '</p>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  function renderProjects() {
    var container = document.getElementById('projects-list');
    if (!container) return;

    container.innerHTML = PROJECTS.map(function (p) {
      var imgs = Array.isArray(p.images) && p.images.length ? p.images : ['src/projects/' + p.id + '.png'];
      var firstImg = imgs[0];
      var webpSrc = 'src/projects/' + p.id + '.webp';
      var webp800 = 'src/projects/' + p.id + '-800.webp';
      var features = pick(p.cardBottomList) || [];

      var featuresHtml = features.map(function (item) {
        return '<li class="project-feature-item"><span class="feature-dot"></span><span>' + item + '</span></li>';
      }).join('');

      var galleryBtns = imgs.length > 1
        ? '<div class="gallery-controls" data-project-gallery="' + p.id + '">' +
            '<button type="button" class="gallery-btn" data-dir="-1" aria-label="Previous image">‹</button>' +
            '<button type="button" class="gallery-btn" data-dir="1" aria-label="Next image">›</button>' +
          '</div>'
        : '';

      return '' +
        '<article class="project-card" data-project-id="' + p.id + '">' +
          '<div class="project-media">' +
            '<div class="project-badges-overlay">' +
              '<span class="badge-pill">' + p.number + ' · ' + pick(p.category) + '</span>' +
              '<span class="badge-pill badge-tag">' + p.cardTopTag + '</span>' +
            '</div>' +
            '<div class="project-placeholder" id="placeholder-' + p.id + '">' +
              '<div class="placeholder-icon-wrap">' + icon(p.iconName, 'icon-lg') + '</div>' +
              '<span class="placeholder-title">' + p.mainVisualTitle + '</span>' +
              '<span class="placeholder-sub">' + firstImg + '</span>' +
            '</div>' +
            '<picture class="project-picture">' +
              '<source type="image/webp" srcset="' + webp800 + ' 800w, ' + webpSrc + ' 2752w" sizes="(max-width: 768px) 100vw, 600px">' +
              '<img src="' + firstImg + '" alt="' + p.name + ' preview" class="project-img" data-img-index="0" ' +
                'loading="lazy" decoding="async" width="800" height="450" ' +
                'onload="this.style.opacity=\'1\'; var ph=document.getElementById(\'placeholder-' + p.id + '\'); if(ph) ph.style.display=\'none\';" ' +
                'onerror="this.style.display=\'none\';" style="opacity:0;" />' +
            '</picture>' +
            galleryBtns +
          '</div>' +

          '<div class="project-content">' +
            '<div class="project-top">' +
              '<div>' +
                '<h3 class="project-name">' + p.name + '</h3>' +
                '<p class="project-sub">' + pick(p.mainVisualSubtitle) + '</p>' +
              '</div>' +
            '</div>' +

            '<div class="project-highlight">' +
              '<div class="project-highlight-title">' +
                icon('shield-check', 'icon-xs') +
                '<span>' + pick(p.cardTopTitle) + '</span>' +
              '</div>' +
              '<p class="project-highlight-desc">' + pick(p.cardTopSub) + '</p>' +
            '</div>' +

            '<div>' +
              '<ul class="project-features">' + featuresHtml + '</ul>' +
            '</div>' +

            '<div class="project-footer">' +
              '<span class="project-meta-tag">' + pick(p.cardBottomTitle) + '</span>' +
              '<div class="project-actions">' +
              '<a href="' + p.href + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">' +
                '<span>' + pick(p.cta) + '</span>' +
                icon('arrow-up-right', 'icon-xs') +
              '</a>' +
              (p.onlineHref ? '<a href="' + p.onlineHref + '" class="btn btn-secondary btn-sm project-online">' +
                '<span>' + pick(p.onlineCta) + '</span>' + icon('arrow-up-right', 'icon-xs') + '</a>' : '') +
              '</div>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join('');

    Array.prototype.forEach.call(container.querySelectorAll('.project-img'), function (img) {
      if (img.complete && img.naturalWidth > 0) {
        img.style.opacity = '1';
        var card = img.closest('.project-card');
        if (card) {
          var ph = document.getElementById('placeholder-' + card.getAttribute('data-project-id'));
          if (ph) ph.style.display = 'none';
        }
      }
    });

    initProjectGalleries();
  }

  function initProjectGalleries() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-project-gallery]'), function (ctrl) {
      var pid = ctrl.getAttribute('data-project-gallery');
      var proj = PROJECTS.find(function (x) { return x.id === pid; });
      if (!proj || !proj.images || proj.images.length < 2) return;

      var card = ctrl.closest('.project-card');
      var imgEl = card.querySelector('.project-img');
      var phEl = document.getElementById('placeholder-' + pid);

      Array.prototype.forEach.call(ctrl.querySelectorAll('[data-dir]'), function (btn) {
        btn.addEventListener('click', function () {
          var dir = parseInt(btn.getAttribute('data-dir'), 10);
          var idx = parseInt(imgEl.getAttribute('data-img-index') || '0', 10);
          var next = (idx + dir + proj.images.length) % proj.images.length;
          imgEl.setAttribute('data-img-index', String(next));
          imgEl.style.display = 'block';
          imgEl.style.opacity = '0';
          if (phEl) phEl.style.display = 'flex';
          imgEl.src = proj.images[next];
        });
      });
    });
  }

  function renderStack() {
    var container = document.getElementById('stack-list');
    if (!container) return;
    var bars = { Sr: 3, Mid: 2, Jr: 1 };
    container.innerHTML = STACK.map(function (item) {
      var n = bars[item.level] || 1;
      var dashes = '';
      for (var i = 0; i < 3; i++) {
        dashes += '<span class="lvl-dash' + (i < n ? ' on' : '') + '"></span>';
      }
      return '' +
        '<div class="stack-item">' +
          '<div class="stack-left">' +
            '<span class="stack-name">' + item.name + '</span>' +
            '<span class="stack-cat">' + pick(item.category) + '</span>' +
          '</div>' +
          '<div class="stack-level">' +
            '<span class="lvl-dashes">' + dashes + '</span>' +
            '<span class="lvl-label">' + item.level + '.</span>' +
          '</div>' +
        '</div>';
    }).join('');

    var count = document.getElementById('stack-count');
    if (count) {
      count.textContent = STACK.length + (currentLang === 'ru' ? ' пакетов' : ' packages');
    }
  }

  function renderSocials() {
    var container = document.getElementById('socials-list');
    if (!container) return;

    container.innerHTML = SOCIALS.map(function (s) {
      if (s.copy) {
        return '' +
          '<button type="button" class="social-card" data-copy-email>' +
            '<div class="social-info">' +
              '<span class="social-label" data-copy-label>' + t('links.copyEmail') + '</span>' +
              '<span class="social-handle">' + s.handle + '</span>' +
            '</div>' +
            '<span data-copy-icon>' + icon('copy', 'icon-sm accent-icon') + '</span>' +
          '</button>';
      }
      return '' +
        '<a href="' + s.href + '" target="_blank" rel="noopener noreferrer" class="social-card">' +
          '<div class="social-info">' +
            '<span class="social-label">' + s.label + '</span>' +
            '<span class="social-handle">' + s.handle + '</span>' +
          '</div>' +
          icon('arrow-up-right', 'icon-sm') +
        '</a>';
    }).join('');

    var copyBtn = container.querySelector('[data-copy-email]');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var labelEl = copyBtn.querySelector('[data-copy-label]');
        var iconEl = copyBtn.querySelector('[data-copy-icon]');
        copyTextToClipboard(MAIL, function () {
          labelEl.textContent = t('links.copied');
          iconEl.innerHTML = icon('check', 'icon-sm text-success');
          setTimeout(function () {
            labelEl.textContent = t('links.copyEmail');
            iconEl.innerHTML = icon('copy', 'icon-sm accent-icon');
          }, 2000);
        });
      });
    }
  }

  var startTime = Date.now();
  var clockEl = null;
  var tzEl = null;
  var upEl = null;
  var widgetTimer = null;

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function initLiveWidgets() {
    clockEl = document.getElementById('live-clock');
    tzEl = document.getElementById('live-tz');
    upEl = document.getElementById('live-uptime');

    if (tzEl) {
      var off = -new Date().getTimezoneOffset() / 60;
      tzEl.textContent = 'UTC' + (off >= 0 ? '+' : '−') + Math.abs(off);
    }

    updateLiveWidgets();
    startWidgetTimer();

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stopWidgetTimer();
      } else {
        updateLiveWidgets();
        startWidgetTimer();
      }
    });
  }

  function startWidgetTimer() {
    if (!widgetTimer) {
      widgetTimer = setInterval(updateLiveWidgets, 1000);
    }
  }

  function stopWidgetTimer() {
    if (widgetTimer) {
      clearInterval(widgetTimer);
      widgetTimer = null;
    }
  }

  function updateLiveWidgets() {
    if (document.hidden) return;
    var now = new Date();

    if (clockEl && clockEl.offsetParent !== null) {
      clockEl.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    }

    if (upEl) {
      var diff = Math.floor((Date.now() - startTime) / 1000);
      var mins = Math.floor(diff / 60);
      var secs = diff % 60;
      upEl.textContent = pad(mins) + 'm ' + pad(secs) + 's';
    }
  }

  function initFade() {
    var els = document.querySelectorAll('[data-fade]');
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    Array.prototype.forEach.call(els, function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.45s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
          setTimeout(function () {
            entry.target.style.transition = '';
            entry.target.style.transform = '';
          }, 500);
        }
      });
    }, { rootMargin: '120px' });

    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  function initMarqueeObserver() {
    var track = document.getElementById('marquee-track');
    if (!track || !('IntersectionObserver' in window)) return;
    var card = track.closest('.marquee-card');
    if (!card) return;

    var marqueeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        track.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    }, { rootMargin: '100px' });
    marqueeObserver.observe(card);
  }

  function initNav() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-scroll]'), function (btn) {
      btn.addEventListener('click', function () {
        var target = document.getElementById(btn.getAttribute('data-scroll'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  function copyTextToClipboard(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess, function () {
        window.location.href = 'mailto:' + text;
      });
    } else {
      window.location.href = 'mailto:' + text;
    }
  }

  function initModal() {
    var modal = document.getElementById('contact-modal');
    if (!modal) return;

    function open() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    Array.prototype.forEach.call(document.querySelectorAll('[data-open-contact]'), function (btn) {
      btn.addEventListener('click', open);
    });

    var closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.addEventListener('click', close);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    var copyBtn = document.getElementById('modal-copy-email');
    var idle = document.getElementById('modal-copy-idle');
    var done = document.getElementById('modal-copy-done');

    if (copyBtn && idle && done) {
      copyBtn.addEventListener('click', function () {
        copyTextToClipboard(MAIL, function () {
          idle.classList.add('hidden');
          done.classList.remove('hidden');
          setTimeout(function () {
            done.classList.add('hidden');
            idle.classList.remove('hidden');
          }, 2000);
        });
      });
    }
  }

  function initForm() {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('form-status');
    var btn = document.getElementById('form-submit');
    var btnText = document.getElementById('form-submit-text');
    if (!form) return;

    function setStatus(text, ok) {
      status.textContent = text;
      status.className = 'form-status ' + (ok ? 'status-ok' : 'status-err');
    }

    var fallback = document.getElementById('form-fallback');
    var sending = false;

    form.addEventListener('submit', async function (e) {
      // The provider's regular form also handles email activation and browser challenges.
      if (e.submitter === fallback && !sending) return;
      e.preventDefault();
      if (sending) return;
      sending = true;
      btn.disabled = true;
      fallback.hidden = true;
      if (btnText) btnText.textContent = t('modal.sending');
      status.className = 'form-status hidden';

      var controller = new AbortController();
      var timeout = setTimeout(function () { controller.abort(); }, 20000);
      try {
        var payload = Object.fromEntries(new FormData(form));
        var endpoint = new URL(form.action);
        endpoint.pathname = '/ajax' + endpoint.pathname;
        var response = await fetch(endpoint.href, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        var data = await response.json();
        var needsActivation = /activat|confirm|verif|check your (inbox|email)/i.test(data.message || '');
        if (needsActivation) {
          setStatus(t('modal.activationPending'), false);
          fallback.hidden = false;
          return;
        }
        if (!response.ok || (data.success !== true && data.success !== 'true')) {
          throw new Error('Contact service rejected the submission');
        }
        form.reset();
        setStatus(t('modal.sentOk'), true);
      } catch (error) {
        setStatus(t('modal.sentErr'), false);
        fallback.hidden = false;
      } finally {
        clearTimeout(timeout);
        sending = false;
        btn.disabled = false;
        if (btnText) btnText.textContent = t('modal.sendBtn');
      }
    });
  }

  renderMarquee();
  initMarqueeObserver();
  applyLanguage(currentLang);
  replaceIcons(document);
  initFade();
  initNav();
  initModal();
  initForm();
  initLiveWidgets();
})();
