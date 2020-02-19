import { minify } from 'html-minifier';

export default (head, assets, htmlContent, clientInitial) => {
  // Use pre-defined assets in development. "main" is the default webpack generated name.
  const envAssets = __DEV__ ? { js: '/assets/main.js' } : assets;

  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()} prefix="og: //ogp.me/ns#">
      <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PHR4JM8');</script>
        <!-- End Google Tag Manager -->

        <meta charset="utf-8">
        <meta name=“robots” content=“noindex” />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, maximum-scale=1">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="shortcut icon" type="image/png" href="https://cdn.mantl.com/assets/website/favicon.png">
        <link href="https://fonts.googleapis.com/css?family=Rubik|Vidaloka&display=swap" rel="stylesheet">

        <!-- slick -->
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <!-- slick -->
        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <style>
          .noTransition * {
            transition: none !important;
          }
        </style>

        <!-- Insert bundled styles into <link> tag -->
        ${Object.keys(envAssets)
          .map(key =>
            key.substr(key.length - 3) === 'css'
              ? `<link href="${
                  envAssets[key]
                }" media="screen, projection" rel="stylesheet" type="text/css">`
              : ''
          )
          .join('')}

      </head>
      <body class="noTransition">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHR4JM8"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${__INJECT_HTML__ ? htmlContent : ''}</div>

        <!-- Store the initial state into window -->
        <script>
          window.__APOLLO_STATE__=${JSON.stringify(clientInitial)};
        </script>

        <!-- Insert bundled scripts into <script> tag -->
        ${Object.keys(envAssets)
          .map(key =>
            key.substr(key.length - 2) === 'js'
              ? `<script src="${envAssets[key]}"></script>`
              : ''
          )
          .join('')}

        ${head.script.toString()}
        <!-- Perfect audience tracking tag -->
        <script type="text/javascript">
          (function() {
            window._pa = window._pa || {};
            // _pa.orderId = "myOrderId"; // OPTIONAL: attach unique conversion identifier to conversions
            // _pa.revenue = "19.99"; // OPTIONAL: attach dynamic purchase values to conversions
            // _pa.productId = "myProductId"; // OPTIONAL: Include product ID for use with dynamic ads
                
            var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
            pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.marinsm.com/serve/5d5486ec2cd3e01e170000b8.js";
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
          })();
        </script>
      </body>
    </html>
  `;

  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
  };

  // Minify html in production
  return __DEV__ ? html : minify(html, minifyConfig);
};
