<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta HTTP-EQUIV="Pragma" content="no-cache">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/nono.css">
        <link rel="stylesheet" type="text/css" href="css/jquery.svg.css"> 
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div id="Main">
            <!-- <div class="Meter" id="Meter"><object id="MeterSVG" data="assets/meter_fin_nono3.svg" type="image/svg+xml"></object> <img src="smiley.gif" alt="Smiley face" height="42" width="42">  -->
            <div class="Meter" id="Meter"><img src="assets/meter_fin_nono2.png"></div> 
            <div id="arrows">
                <div class="Arrow" id="Arrow1SVG"><img src="assets/arrow2.png"></div> 
                <div class="Arrow" id="Arrow2SVG"><img src="assets/arrow2.png"></div> 
                <div class="Arrow" id="Arrow3SVG"><img src="assets/arrow2.png"></div> 
                <div class="Arrow" id="Arrow4SVG"><img src="assets/arrow2.png"></div> 
                <div class="Arrow" id="Arrow5SVG"><img src="assets/arrow2.png"></div> 
            </div>
            <div id="digits">
                <div id="digit1" class="Digit"></div>
                <div id="digit2" class="Digit"></div>
                <div id="digit3" class="Digit"></div>
                <div id="digit4" class="Digit"></div>
                <div id="digit5" class="Digit"></div>
                <div id="digit6" class="Digit"></div>
                <div id="digit7" class="Digit"></div>
            </div>
        </div>

        <!-- <div id="Meter2"><object id="MeterSVG" data="assets/logo_ap_book_.svg" type="image/svg+xml"></object></div> -->


        <script src="js/settings.js"></script>
        <script src="js/vendor/jquery-1.9.0.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/vendor/jquery.svg.js"></script>        
        <script src="js/vendor/jquery.svgdom.js"></script>
        <script src="js/vendor/jquery.svganim.js"></script> 
        <script src="js/vendor/jQueryRotate.2.2.js"></script> 
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <script>
            jQuery(document).ready(function(){
                setTimeout(init,1000);
            });
        </script>

    </body>
</html>
