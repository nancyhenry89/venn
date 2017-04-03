$('document').ready(function(){
  $.getJSON("http://github.com/nancyhenry89/venn/blob/master/data.json#L3", function(json) {
    console.log(json); // this will show the info it in firebug console
})
});
