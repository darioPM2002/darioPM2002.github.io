'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "46ca76904b3a274bec6e63cda89002e4",
".git/config": "e3dd256f4875795cfd96ffb15654d3a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a349fe1682ed5be6ee919d71a3dc0731",
".git/HEAD": "c315e9391b90ac88b0534d8e3a67768a",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b604c85525c42c1bba581f2e260db0f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0481747cc1848ceea008954b5f52e78a",
".git/logs/refs/heads/web_page": "670be8cbb1f5d1c1c327c229493cf6b8",
".git/logs/refs/remotes/origin/web_page": "13a15b2d60d766823bef55a62bcb96c5",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/02/46cab018e8bd3628c58eb1d58ada732540a4f1": "5af2cd37eb58c395ece79bdf37221d7b",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/42c8a910054b6eb9e08ed41d75a66b0da87f64": "482fc6dbda858e2c273b4d044dc67d83",
".git/objects/0e/417dfb218aa1751fe9950410a926434c35dabb": "344942f840e9f7b534ceca066d66d8d9",
".git/objects/0f/14d85f617e025556ea08db98ab48440b5f737d": "a42d87908f4361780d8ba06259ef878c",
".git/objects/11/9bce6ac01156639a6dab8fcb49bade4110a4f4": "654bcc69e311b2bc0cce10a00da411e6",
".git/objects/12/78e5640caef87e61e81d013c728c9e47408ec9": "2a994d9a35ab3fd902bd5cb64b3ef9eb",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/e58a246bda43103d65cd8858f35ad1328f1f76": "ce79c4c9604040910873272c2f594da2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/c70b646df582552600cf91b0716054964b28d6": "394798b61714b90a794b8d9e11084780",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/98185f91196401dbc85c5df64aef69d0517fb3": "a1653167cbf54f3f5ba5fd68382ca446",
".git/objects/2d/42c0a7f49949c8ec0896a009b9175fbc8aaf40": "9139e7c8c64946bcf2d90f217247a0f5",
".git/objects/2f/01e36f1a2a8d598daeea4ddebff0eb9381528c": "c185af9f1bc3af2fc6cd187f5c274fba",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/39/5eddc02cddf8c331a1066d328714969434cbde": "588633af35f34be04f2b8f3f4ec76828",
".git/objects/42/421a968aa5ab40467b72b4bd89e23eda13e3f7": "c4b91f0dc8cf8414883abc35d862fa93",
".git/objects/45/aa9a3b3a976fcf9731da7a95ae40027ff3c6f4": "e5adbfe889a9c647bc183cd07654f120",
".git/objects/46/139a6dfc3fd65357258ed661f016d9786bf92a": "4db464bd63217ed4e7b5b2290fce7b86",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/a4c4e9439ed1d9ae3353cc0d7f6537e77710e0": "c03343349271d932aaab85fdc8932858",
".git/objects/49/c2a768f28cf76d34bf02525a89b7928be4dd6d": "9ee46902b855a26e5541d2efec4438b6",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/cf5076335dcb7d103b59e685efb8940cc94413": "78f240ff1a2fd5d202f7eaadf1dc103e",
".git/objects/53/059c495351d7bef1800235961a00ddb5649248": "6ebf6c94486a8d0234ab2d17c27aaaf4",
".git/objects/54/4f73716eca1d5d51985d12030c1bbbc8779577": "bbc52add8dc734f189b980c91d78d53e",
".git/objects/59/c2f4c4b95ccb9724f859ef52dbaaa50298cefa": "5da89547164277af5c117b351dd4d844",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/66/07b2a1e9c3fcac90eea30677ff9f9be71891dc": "684245be313d65e36dd2dae97a255ed5",
".git/objects/68/7eea96919d73cabaefe0e2d4a529994bbca241": "874fba08f96d4bb4b214221f39d03605",
".git/objects/69/d85c70f05b631ab0bba751021f41f256b2e47d": "ab1f2eac96286ed19746af1ba06c0e53",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/317ae4a9713be307fd7d8ef7d27d4c91bc88ac": "20c2eff17ec1026f318aba24b4eac51b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/4ea9adb0c22583217e0bb080fcf562ea5bda01": "66811b89a742ff9c3111eadb0f28a342",
".git/objects/83/46f0cd04f1e380aa090e8633ead58cded1a597": "4d398aa7614124d6842a610cccf1f3ae",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/f604a3311216638343f0a79d5e76c8a5f2cf03": "528bc5a0448f8ec16a0eeaddae780f86",
".git/objects/88/65018baf2bc5a851ebc7c00ba3d4fa24dae623": "625a05bca83205903f0dc16d49e8abfb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/98d23d938c843889b17d679473a936de869b14": "f0bc1a0616aeef73f0a0a3680a2632f0",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9d/bfa02e695fa9b903827d68551b96421901ef53": "e56bf7d20a1ac5fe169df1cdd672bc1e",
".git/objects/a0/853e6430c1a13e56ed664870555fd5dcca5a2e": "cec5ee59bb7896dbc94ca17d64cdaa14",
".git/objects/a1/a01043fda9a2518db18310cac61816af376e2d": "60cdc4c1897bb3443c6e263647bb0321",
".git/objects/a3/fe16959d70ee914a35b5791a439bc0da839d3a": "b9c85bd5637552c825163b9d9ca193a5",
".git/objects/a7/eee46daba7ba06451bd66dfc7c09e2a3bfc725": "188cb9e8419c1731b2a36c960e48f3b1",
".git/objects/ac/09ddf08adad6df1b5632ced085fd8fa95c2fc6": "e78e69c80c7f67000ee39d996ad39417",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/6caea80938b0402b3b06f688a842bd16b4ef21": "d1c86bea6d8364799bd6819b3f1b87b3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/a210e641ed3274ba882323d993e263a2b9e390": "893b1222521861a6c88813ef8a45de1e",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/cf/38036e4ef33200caee113e28d47d844e06c022": "267c5cbc8a19c05c6c66bc1d385204a6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/5a4f3d697c7c757ac719f1283354470151084f": "309d865f66a3b6090c96eb517c2fe30e",
".git/objects/db/71f204427fbd73182bace4971ed8e200733d97": "83076dd5e02c6e9ac6feda7617af7b65",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/40c891a4d4087bb183daf40aa75814d9f6ba3d": "d0a5296a43aa7db20061f0a35ec34220",
".git/objects/f0/4470bc18c207fce429a5985511da92b441ac62": "b8962d79178c2987e8bc227f3fa0145d",
".git/objects/f1/fc9e4b9a5ff13e5bf91368487d10022c2b610c": "88876e7355f9d47b45d138e01143b28c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d0d5d40abdd8c9b982ae36fce5abaeb353082f": "4b5161478f63c72ba3a7fb420b245042",
".git/objects/f5/fe51c4318169ad6ccea6b6f2ba9eef7d379c03": "a11d5f9d349df64502fddbc1e2cedf40",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fd/22b1b7a0f536ade2913c105f38c0a8cbd70c9d": "11282b9069b41465a3ca8856bdb4f3be",
".git/ORIG_HEAD": "7c4c96bfbca137f509f51f4d95c464c8",
".git/refs/heads/web_page": "7c4c96bfbca137f509f51f4d95c464c8",
".git/refs/remotes/origin/web_page": "7c4c96bfbca137f509f51f4d95c464c8",
"assets/AssetManifest.bin": "848260a3edc45c5e30908e687bddcc1e",
"assets/AssetManifest.bin.json": "af025d7d85ee37d94a0fd6e997f9905a",
"assets/AssetManifest.json": "9125a2e60138260e1e1e731ac276d9d7",
"assets/assets/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "151a0e9ac8091f037a565d460a3bbc1d",
"assets/NOTICES": "5f60bccc1ad61176d73182f23457ded1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3e887ec8144f0fc5226e441aa00ba312",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "6351e606c0b713213f8b78438606eb44",
"icons/Icon-maskable-512.png": "1b9367c3649ccc2b451432bb9568226a",
"index.html": "5dbf57baac39aadcc4bc17ca50446b7f",
"/": "5dbf57baac39aadcc4bc17ca50446b7f",
"main.dart.js": "493a45d3968f986869b42389717a9772",
"manifest.json": "6b06c205fd5ddd5a2cd1ee35b52a4cc9",
"version.json": "9dec00cd7b192714c98c95f151cab140"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
