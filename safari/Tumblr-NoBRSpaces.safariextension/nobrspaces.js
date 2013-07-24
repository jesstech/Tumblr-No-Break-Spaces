var injectCode = '(' + function() {

   // For tumblr's TinyMCE editors
   var tiny = window.tinyMCE;
   if(tiny) {
      tiny.onAddEditor.add(function(mgr,ed) {
         // console.log('tiny.onAddEditor', ed.id);
         ed.onPostProcess.add(function(ed, o) {
            o.content = o.content.replace(/\s{1}&nbsp;/ig,'&nbsp;&nbsp;');
            // console.debug('onPostProcess: ' + o.content);
         });
      });
   }

   // For the ask form's regular textarea
   asktxt = document.getElementById('question');
   if (asktxt && asktxt.tagName.toLowerCase() != 'textarea')
      asktxt = document.getElementById('ask_form').getElementsByTagName('textarea')[0];
   if (asktxt) {
      asktxt.onblur = function(){
         asktxt.value = asktxt.value.replace("  ",'\xA0\xA0');
      };
   }


} + ')();';

var script = document.createElement('script');
script.textContent = injectCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);