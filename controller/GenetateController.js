class GenetateController{
    constructor (){
      console.log(12313131232323)
    }
     genetate(){
      return new Promise(resolve => {
        let process = require('child_process');
        exports.createDir = function (){process.exec('phantomjs',
          function (error, stdout, stderr) {
            if (error !== null) {
              console.log('exec error: ' + error);
            }else {
              resolve('ok')
            }
          });
        }

      })
    }
}
module.exports=GenetateController
