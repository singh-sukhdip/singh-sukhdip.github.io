'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "826dce7a51af6f375fa3ad934622b700",
"/": "826dce7a51af6f375fa3ad934622b700",
"styles.css": "0bcb5d98d5d70293a9e7eb12bf169883",
"main.dart.js": "d4f06b33f09f3f7d69b0349e3b8fe2e6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "0b91159a420880d2ae7150ca19c7b415",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/9b/294228e2b18b12e71a71371d1f2779647b599a": "8aa51d73d26f9c561e03aa1b49eeb650",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/6a/7d5d6afa6d8dbb35fe8ff516f167fbc1d33294": "bd4ac42e7f2090fc942d1f85f664aa08",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/dbf44c4d934d55439ddfd6cff4385e551b3f5a": "a0808fbfbd7ecfaa4bd013067b63c160",
".git/objects/51/c44bc8674daf68342d2964f2c61a473d798477": "b9f0e0ce144c2d78055d8071a21b5b24",
".git/objects/b5/72292fde9bc46ab0874a5a6a41beef18254132": "66310c9aae093f43ef7897ed637aa42e",
".git/objects/b2/4d888a80ac848ba8aefe834e77870385d9245c": "409d98bb3792fea66a5d58ef10c7ab52",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bd/1fdf9a8c84e3fa2dc02713abc55a953f86d881": "b54cc34c160ce761f94e73f75029e0ca",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/5c52e35d747cf82acf62d3e4dea87bf6e23f5d": "71b04800a8a6da8e73737d8e11608d66",
".git/objects/ca/3667b295d84f2c1a6ac62ee42bd3055636f573": "8c30bc5f2a665db4fa7e6dc81cebed74",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/9f9f00fcf2e9ef6e6133f2e5d877a5dc6dd0d3": "ff581594964d360597eb2739c88fe994",
".git/objects/11/fd3142cb432096f9fb9d3f70a76f7c5aeb7ec5": "dc81100abf2e3c93a1afb684c293d571",
".git/objects/1a/5d35627651dad33afa7e9b3189d593251fd2c8": "e7ea806bc0491056543cd1787f0904ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/2a/588bac65320b5aaa2647a07274f5643c604e4e": "3da6fa16d88aeb629859f4495e147114",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/53/b4a5819e571d1d37c9b4aa0ef258e6493d352a": "b69752f531e949b99a84c9ca432d2432",
".git/objects/01/313e9053252de343d334dfa3a0848e2a005751": "7ff063a83c9160ef16111dc5a6ad8ea3",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/0f/fcfba2e8bfeea6944bfbba39447991daeffc97": "be86291736b4013233e97f6fdfd08fb3",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/52ec5db02de2ce4573d0812ffc0314fe4c9bdc": "b4a2645893f60c0cdc2ce3c1d1947dd2",
".git/objects/b1/5c35b728fc267d00aedae2eedafe5fa61e28ca": "50184db41e85fa5c6949f52d91956d99",
".git/objects/dd/5683922833c2f23b170f51c0aaf4030131a9c7": "6b1af699ac00d9d1dd72c5e44fd157cf",
".git/objects/dc/0eb98e59e4496bf1836d03b58ce1e73ab12976": "ddb74c9ee324646069e29113ce59ff68",
".git/objects/dc/53bbef91d82fb0468aed3ac3393e4804f4c364": "8f97aa64130ab895743cab8c8db7c4ac",
".git/objects/d5/3d0c21c05c6d0e234f342959b2810e9fbe3311": "f0c8ebb903b8212bf4832e984d1eb1e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/ed7c256dff3a12fd48851fdd3c9856799afd76": "4ed084f8436143ab6774cd64f4352435",
".git/objects/a1/e2aeba300b85fdc4388cb2255516c3f4cc08cc": "8f2853382746074ed86d786fb87ce7c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d70c4e962434c06b7505bd367ce0cdb722840c": "29ba61e75a056e5798b9814c25f4a9ba",
".git/objects/a1/f75d52e29122aaf2020fff0ce9695e0d6a5a2a": "c12a12e86d20f270fafb3816e15794f9",
".git/objects/ef/af33412ceeaa48120aa94f31be9df3336f8e0a": "8da3fb7c89b29e957fc0c4b1112ffde1",
".git/objects/e1/59a67f93156e3595b3b33065113e952896e4f0": "3b4d1cbd689927d8b489c3d440f34788",
".git/objects/fa/6d06c018a8a2c1981fe37186dd8a0c231f7f72": "d727fcab53310a3c75dfce53e75578e5",
".git/objects/f8/f776a64cc0ebd2f45676d118073820ebfe7e38": "b3a76c3c6956d5c114b84c53b6728847",
".git/objects/f8/27cc63714dbad3ca80067e33dc415c345766e3": "b510f931e610a6fdd9eb24074c597cb1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/1c/015d6ad5baff8bcd320bc8c0395d2a90e50d93": "79e09c862057de1446d7f2816f08c5f3",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/47/45abb15740ced06c8fb3b6431746504e3f4ed9": "1dc577cb8fd97f90b106126e0db107a9",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/14/b49a1be9893a8b87fcd4a2933ec10460b31263": "f6d01d009bac8d7a619576e2f0dfd9a9",
".git/objects/8e/1b34c85a5df3e4fb751b3f7ccec97f935f9d5b": "b184f183c6969dfca92aa1b5a79dbf6f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f457376ee6c2e4753b39591a8d2d933f",
".git/logs/refs/heads/master": "7778d7c023361bbd8de5b88fbbd8eec6",
".git/logs/refs/heads/main": "f529bd2cd993a1bb30bfee0a1669939b",
".git/logs/refs/remotes/upload/master": "fca59148bc4f1e3bd2d9c56b9260acee",
".git/logs/refs/remotes/upload/main": "01a158ad56f18d377952d5bd6d693e10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "768a663210f3ce74520087dd95721647",
".git/refs/heads/main": "768a663210f3ce74520087dd95721647",
".git/refs/remotes/upload/master": "768a663210f3ce74520087dd95721647",
".git/refs/remotes/upload/main": "768a663210f3ce74520087dd95721647",
".git/index": "e372771e5788341987991a83410944e3",
".git/COMMIT_EDITMSG": "5fedcc89cadb4ad61024c0167f244cc2",
"assets/AssetManifest.json": "8d8aef2536c4559ea9798afebe8cabb2",
"assets/NOTICES": "e83dc49ace1c304800a742d73f457710",
"assets/FontManifest.json": "2757d52263423e81ac7c933dc692a36e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/mroznamcha.png": "51d0b5c490ed650502469eb06f58192c",
"assets/assets/images/lang_icons/germany.png": "a25c8f7162154368473055a9899f83d0",
"assets/assets/images/lang_icons/india.png": "fd9f0a7979f354c5fdfac2234e13e330",
"assets/assets/images/lang_icons/united-states.png": "60b5c13f116a3bae2e4adddd1e7b971d",
"assets/assets/images/heart.png": "60f8f098b1ba27f44783ecc0294deece",
"assets/assets/images/profile_pic2.png": "630c75b202a2d4c84a25811ac0ef5301",
"assets/assets/images/elector_search.png": "421f320c77e2be290c89e2213c66dca1",
"assets/assets/images/2.png": "3b125f533d958d1e916e5ee03526b204",
"assets/assets/images/3.png": "a287da393a7e21d3798010ea9e40eed3",
"assets/assets/images/1.png": "67fa0df3a973eec32fa576dfb13cf8ce",
"assets/assets/images/profile-pic.png": "b911d8ec913ddb4c3655c262d5a8b333",
"assets/assets/images/profile_pic.jpeg": "1199ab30021f6dda99cb72e79e5f04f1",
"assets/assets/files/Sukhdip_Singh_Resume.pdf": "203c66d4d502414e43b9d4b3109c2b3e",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
