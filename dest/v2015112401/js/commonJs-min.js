/*! cross - v0.1.2 - 2016-05-08 */function widgetA(){document.getElementById("widget-a").innerText="widget 'A'导入完成"}function widgetB(){document.getElementById("widget-b").innerText="widget 'B'导入完成"}!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=function(b){var c=b.$dialog,d=a(window),e=a(document),f=b.options.fixed,g=f?0:e.scrollLeft(),h=f?0:e.scrollTop(),i=d.width(),j=d.height(),k=c.width(),l=c.height(),m=(i-k)/2+g,n=382*(j-l)/1e3+h,o=c[0].style;o.left=Math.max(parseInt(m),g)+"px",o.top=Math.max(parseInt(n),h)+"px"},c=function(a){this.$main,this.$dialog,this.$shadow,this.$closeBtn,this.$buttonBox,this.options,this.originalOptions,this.buttonTarget,this.onshow,this.init(a)},d=0,e=['<div class="d-dialog">','<div class="d-wrapper">','<div class="d-close"></div>','<div class="d-main">','<div class="d-title">#{title}</div>','<div class="d-content">#{content}</div>','<div class="d-bottom"></div>',"</div>","</div>","</div>",'<div class="d-shadow"></div>'].join("");c.DEFAULTS={id:new Date-0+d,title:"Dialog",content:"这是Dialog",width:"auto",height:"auto",okValue:"确定",cancelValue:"取消",cancelDisplay:!0,buttonTarget:null,fixed:!0,autofocus:!0},a.extend(c.prototype,{init:function(b){this.options=this.getOptions(b),this.originalOptions=this.options;var c=Utility.template(e,this.options),f=this.options.id,g=this;this.$main=a(c),this.$closeBtn=this.$main.find(".d-close"),this.$dialog=this.$main.siblings(".d-dialog"),this.$shadow=this.$main.siblings(".d-shadow"),this.$buttonBox=this.$main.find(".d-bottom"),this.$dialog.attr("id",f),a(document).on("click",".d-close",function(a){g.remove(),a.stopPropagation()}),d++},create:function(){this.options=this.getOptions(this.originalOptions),a.isArray(this.options.button)||(this.options.button=[]),this.options.title||this.$main.find(".d-title").remove(),this.options.ok&&this.options.button.push({id:"ok",value:this.options.okValue,callback:this.options.ok,autofocus:!0}),this.options.cancel&&this.options.button.push({id:"cancel",value:this.options.cancelValue,callback:this.options.cancel,display:this.options.cancelDisplay}),this.setButton(this.options.button),this.options.button.length||this.$main.find(".d-bottom").remove()},getDefaults:function(){return c.DEFAULTS},getOptions:function(b){return a.extend(!0,{},this.getDefaults(),b)},setData:function(a){return this.data=a,this},show:function(){this.create(),a("body").append(this.$main),b(this),this.$dialog.show(),this.$shadow.show(),this.options.onshow&&(this.onshow=this.options.onshow,this.onshow());var c=this.$dialog.find("input, textarea, select").not("input[type='button']"),d=this.$dialog.find("input[type='button'], input[type='submit'], button, a");return setTimeout(function(){c.length?c[0].focus():d[0]&&d[0].focus()},0),this},close:function(){return this.$main.hide(),this},remove:function(){return this.$main.remove(),delete a.dialog.list[this.id],this.options.onremove&&this.options.onremove(),this},setButton:function(b){b=b||[];var c=this,d="",e=0;return this.callbacks={},"string"==typeof b?(d=b,e++):a.each(b,function(b,f){var g=f.id=f.id||f.value,h="";c.callbacks[g]=f.callback,f.display===!1?h=' style="display:none"':e++,d+='<button type="button" class="btn" i-id="'+g+'"'+h+(f.disabled?" disabled":"")+(f.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+f.value+"</button>",c.$buttonBox.on("click","[i-id="+g+"]",function(b){var d=a(this);d.attr("disabled")||c._trigger(g),b.preventDefault()})}),this.$buttonBox.html(d),this},setTitle:function(a){return this.$main.find(".d-title").text(a),this},setBtnTarget:function(a){return this.buttonTarget=a,this},focus:function(){},blur:function(){},_trigger:function(a){var b=this.callbacks[a];return"function"!=typeof b||b.call(this)!==!1?this.close().remove():this}}),a.dialog=function(b){var d=c.DEFAULTS.id;return b.id&&(d=b.id),a.dialog.list[d]=new c(b)},a.dialog.list={},a.dialog.get=function(b){return void 0===b?a.dialog.list:a.dialog.list[b]},a.tips=function(b,c){var d=a.dialog({title:"提示",content:b,cancel:function(){},cancelValue:"关闭",onremove:function(){c&&c()}});d.show()}}),function(a,b){$.extend(a,{log:function(a){b.console&&void 0},template:function(a,b,c){var d;if($.support.checkOn){d=[];var e,f=a.length;for(e=0;f>e;e++)d.push(a[e]);d=d.join("")}else d=a;var g=new RegExp("#{([a-z0-9_]+)}","ig");return d=d.replace(g,function(a,d,e,f){return b[d]?b[d]:c?a:""})},switchOrigin:function(a,b){return"http://"+location.host.replace(a,b)}}),b.Utility=a}("undefined"!=typeof Utility?Utility:{},window),function(a,b){"function"==typeof define&&define.amd?define(["../vendor/jquery/jquery.min.js"],b):"object"==typeof module&&module.exports?module.exports=b():this[a]=b(jQuery)}("ServiceA",function(a){var b=function(){document.getElementById("service-a").innerText="service a is running"};return b});