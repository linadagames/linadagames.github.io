/* Language: Turkish on Turkish devices (Turkish language or Turkey region), English otherwise.
   Visitors can also switch with the TR / EN button in the header; the choice is remembered. */
(function () {
  var TR = {
    'nav.home': 'Ana Sayfa',
    'nav.games': 'Oyunlar',
    'nav.privacy': 'Gizlilik',
    'footer.games': 'Oyunlar',
    'footer.privacy': 'Gizlilik Politikası',
    'hero.title': 'Her an için <span>bir oyun.</span>',
    'hero.text': 'Linada Games bağımsız bir mobil oyun stüdyosu. Rahatlatıcı bulmacalardan hızlı arcade koşularına ve yüksek hızlı yarışlara kadar, öğrenmesi kolay ama bırakması zor oyunlar yapıyoruz.',
    'tag.free': 'Ücretsiz',
    'genre.puzzle': 'Bulmaca',
    'genre.arcade': 'Arcade',
    'genre.racing': 'Yarış',
    'filter.all': 'Tümü',
    'home.games': 'Oyunlarımız',
    'home.gamesText': 'Bulmaca, arcade ve yarış oyunları: Google Play’de ücretsiz, yakında App Store’da.',
    'home.allGames': 'Tüm oyunlar',
    'games.title': '<span>Oyunlarımız</span>',
    'games.text': 'Herkes için bulmaca, arcade ve yarış oyunları. Öğrenmesi kolay, bırakması zor. Google Play’den ya da App Store’dan indirin.',
    'store.soon': 'Çok yakında',
    'store.appstore': 'App Store’da',
    'store.get': 'HEMEN İNDİRİN',
    'title.games': 'Oyunlar · Linada Games',
    'title.privacy': 'Gizlilik Politikası · Linada Games'
  };
  function deviceLang() {
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    var first = String(list[0] || 'en').toLowerCase();
    if (first.slice(0, 2) === 'tr' || /[-_]tr$/.test(first)) return 'tr';
    return 'en';
  }
  function saved() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem('lang', l); } catch (e) {} }
  var lang = saved() === 'tr' || saved() === 'en' ? saved() : deviceLang();
  var originalTitle;

  function apply(l) {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.innerHTML);
      el.innerHTML = l === 'tr' && TR[el.getAttribute('data-i18n')] ? TR[el.getAttribute('data-i18n')] : el.getAttribute('data-en');
    }
    if (originalTitle === undefined) originalTitle = document.title;
    var t = document.querySelector('meta[name="i18n-title"]');
    if (l === 'tr' && t && t.content === 'title.privacy') document.title = originalTitle.replace('Privacy Policy', 'Gizlilik Politikası');
    else document.title = l === 'tr' && t && TR[t.content] ? TR[t.content] : originalTitle;
    var soon = document.querySelectorAll('.store.disabled');
    for (var j = 0; j < soon.length; j++) soon[j].title = l === 'tr' ? 'Çok yakında' : 'Coming soon';
    document.documentElement.lang = l;
    var blocks = document.querySelectorAll('[data-lang]');
    for (var k = 0; k < blocks.length; k++) blocks[k].hidden = blocks[k].getAttribute('data-lang') !== l;
    var btn = document.getElementById('lang-switch');
    if (btn) { btn.textContent = l === 'tr' ? 'EN' : 'TR'; btn.setAttribute('aria-label', l === 'tr' ? 'Switch to English' : 'Türkçeye geç'); }
  }
  function init() {
    var nav = document.querySelector('.site-header .nav');
    if (nav && !document.getElementById('lang-switch')) {
      var b = document.createElement('button');
      b.id = 'lang-switch'; b.type = 'button'; b.className = 'lang-switch';
      b.addEventListener('click', function () { lang = lang === 'tr' ? 'en' : 'tr'; save(lang); apply(lang); });
      nav.appendChild(b);
    }
    apply(lang);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
