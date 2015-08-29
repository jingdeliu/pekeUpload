/*
 *  PekeUpload 2.0 - jQuery plugin
 *  written by Pedro Molina
 *  http://www.pekebyte.com/
 *
 *  Copyright (c) 2015 Pedro Molina (http://pekebyte.com)
 *  Dual licensed under the MIT (MIT-LICENSE.txt)
 *  and GPL (GPL-LICENSE.txt) licenses.
 *
 *  Built for jQuery library
 *  http://jquery.com
 *
 */
(function($) {

  $.fn.pekeUpload = function(options){

    // default configuration properties
    var defaults = {
      dragSupport:        false,
      dragText:           'Drag and Drop your files here',
      bootstrap:          false,
      btnText:            'Browse files...',



      onSubmit:           false,
      

      url:                "upload.php",
      theme:              "custom",
      field:              "file",
      data:               null,
      multi:              true,
      showFilename:       true,
      showPercent:        true,
      showErrorAlerts:    true,
      allowedExtensions:  "",
      invalidExtError:    "Invalid File Type",
      maxSize:      0,
      sizeError:      "Size of the file is greather than allowed",
      onFileError:        function(file,error){},
      onFileSuccess:      function(file,data){}
    };

    var options = $.extend(defaults, options);

    var pekeUpload = {
      obj : $(this),
      files : [],
      container: null,
      init : function(){
        this.replacehtml();
      },
      replacehtml: function(){
        var html = null;
        switch(options.dragSupport){
          case true:
            switch(options.bootstrap){
              case true:
                html = '<div class="well well-lg" style="cursor:pointer"><h4>'+options.dragText+'</h4></div>';
              break;
              case false:
                html = '<div class="pekeupload-drag-area" syle="cursor:pointer"><h4>'+options.dragText+'</h4></div>';
              break;
            }
          break;
          case false:
            switch(options.bootstrap){
              case true:
                html = '<a href="javascript:void(0)" class="btn btn-primary btn-upload"> <i class="glyphicon glyphicon-upload"></i> '+options.btnText+'</a><div class="pekecontainer"></div>';
              break;
              case false:
                html = '<a href="javascript:void(0)" class="pekeupload-btn-file">'+options.btnText+'</a><div class="pekecontainer"></div>';
              break;
            }
          break;
        }
        this.obj.after(html);
        this.obj.hide();
        this.container = this.obj.next('div.pekecontainer');
      },
    };
    
    //Do the magic
    pekeUpload.init();
  };
})(jQuery);