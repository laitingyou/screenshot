let page = require('webpage').create();
page.viewportSize = { width: 1920, height: 1080 };
page.open('http://javascript.ruanyifeng.com/tool/phantomjs.html#toc1', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');

  }
  phantom.exit();
});
