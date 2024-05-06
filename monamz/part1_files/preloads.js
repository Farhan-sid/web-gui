
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.4f11d4f337e73607a58a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.latest.en.50422968477bb42463d7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/910.latest.en.48f0c0c407dcf3c0ec73.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.latest.en.acb2b4a872cf6cabdfa2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.1aac94ab2076e8f84503.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.latest.en.4ee215791a93f8eeed8e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.251751f1b1eaca6e5d24.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.latest.en.222f26622f6ff8ccbe95.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/879.latest.en.70e2c9565324e9aec200.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.3b33adcdf82703a5913e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.3fd283037459b7116a79.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.latest.en.cb97d8c0c0262885bcdb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.7cb816443ebc83362061.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.050352a58f43f75db889.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/playfair_display/playfairdisplay_n4.9cf7fc4f6a5a48eb27738cad395f0eba18922755.woff2?h1=cGsuc2FuaWFtYXNrYXRpeWEuY29t&hmac=cc5d1adc2c6709a33d673820240306c3ae2088a4f3ce19ea6310535394716144","https://fonts.shopifycdn.com/playfair_display/playfairdisplay_n7.1e0ea1cc7a9e4ffdfd6c80b1742be1b89bbe2665.woff2?h1=cGsuc2FuaWFtYXNrYXRpeWEuY29t&hmac=a89a65b637f026de0ee3c577fd783113585081f8c3f0f3733ef75a0a96c8e220"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0660/4164/3225/files/loading_x320.webp?v=1663487325","https://cdn.shopify.com/s/files/1/0660/4164/3225/files/brandimg_ec60716b-40da-4aab-bd7a-b4418981c2c8_2000x.jpg?v=1665116537"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  