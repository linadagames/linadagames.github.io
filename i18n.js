/* Language: Turkish when the device language is Turkish, English otherwise. */
(function () {
  var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
  var lang = String(langs[0] || 'en').toLowerCase().slice(0, 2) === 'tr' ? 'tr' : 'en';
  if (lang !== 'tr') return;
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
  function apply() {
    // Privacy policies stay in English; only the menu is translated there.
    if (!document.querySelector('.doc')) document.documentElement.lang = 'tr';
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var v = TR[els[i].getAttribute('data-i18n')];
      if (v) els[i].innerHTML = v;
    }
    var t = document.querySelector('meta[name="i18n-title"]');
    if (t && TR[t.content]) document.title = TR[t.content];
    var soon = document.querySelectorAll('.store.disabled');
    for (var j = 0; j < soon.length; j++) soon[j].title = 'Çok yakında';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
