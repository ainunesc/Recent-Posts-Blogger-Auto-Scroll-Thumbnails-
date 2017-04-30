<script src="https://cdn.rawgit.com/ainunesc/Recent-Posts-Blogger-Auto-Scroll-Thumbnails-/158e497e/-ainun-post.blogspot.co.id-Recent%20Posts%20Blogger%20(Auto%20Scroll%20%26%20Thumbnails)%201.3.2-jquery.min.js" type="text/javascript"></script>
<style type="text/css" media="screen">

<!--

#spylist {
overflow:hidden;
margin-top:5px;
padding:0px 0px;
height:350px;
}
#spylist ul{
width:355px;
overflow:hidden;
list-style-type: none;
padding: 0px 0px;
margin:0px 0px;
}
#spylist li {
width:335px;
padding: 5px 5px;
margin:0px 0px 5px 0px;
list-style-type:none;
float:none;
height:70px;
overflow: hidden;
background:#fff url(http://i879.photobucket.com/albums/ab351/bloggerblogimage/blogger/post.jpg) repeat-x;
border:1px solid #ddd;
}

#spylist li a {
text-decoration:none;
color:#4B545B;
font-size:11px;
height:18px;
overflow:hidden;
margin:0px 0px;
padding:0px 0px 2px 0px;
}
#spylist li img {
float:left;
margin-right:5px;
background:#EFEFEF;
border:0;
}
.spydate{
overflow:hidden;
font-size:10px;
color:#0284C2;
padding:2px 0px;
margin:1px 0px 0px 0px;
height:15px;
font-family:Tahoma,Arial,verdana, sans-serif;
}

.spycomment{
overflow:hidden;
font-family:Tahoma,Arial,verdana, sans-serif;
font-size:10px;
color:#262B2F;
padding:0px 0px;
margin:0px 0px;
}

-->
</style>

    <script language='javascript'>
imgr = new Array();
imgr[0] = "http://i43.tinypic.com/orpg0m.jpg";
imgr[1] = "http://i43.tinypic.com/orpg0m.jpg";
imgr[2] = "http://i43.tinypic.com/orpg0m.jpg";
imgr[3] = "http://i43.tinypic.com/orpg0m.jpg";
imgr[4] = "http://i43.tinypic.com/orpg0m.jpg";
showRandomImg = true;
boxwidth = 300;
cellspacing = 6;
borderColor = "#232c35";
bgTD = "#000000";
thumbwidth = 60;
thumbheight = 60;
fntsize = 12;
acolor = "#666";
aBold = true;
icon = " ";
text = "Reply(s)";
showPostDate = false;
summaryPost = 40;
summaryFontsize = 10;
summaryColor = "#666";
icon2 = " ";
numposts = 10;
home_page = "http://ainun-pos.blogspot.co.id/";
limitspy=5
intervalspy=6000
</script>

<div id="spylist">
    <script type='text/javascript'>
//<![CDATA[
 /*
 * Script dikombinasikan dari bloggerstricks.com
 * spy effect dari jqueryfordesigners.com
 * Oleh Abu Farhan (www.abu-farhan.com)
 * Modifikasi oleh buka-rahasia.blogspot.com
 */
jQuery(function(){jQuery("ul.spy").simpleSpy(limitspy,intervalspy).bind("mouseenter",function(){jQuery(this).trigger("stop")}).bind("mouseleave",function(){jQuery(this).trigger("start")})});(function(e){e.fn.simpleSpy=function(f,g){f=f||4;g=g||5000;return this.each(function(){var l=e(this),k=true,i=[],m=f,o=0,h=l.find("> li:first").height();l.find("> li").each(function(){i.push("<li>"+e(this).html()+"</li>")});o=i.length;l.wrap('<div class="spyWrapper" />').parent().css({height:h*f});l.find("> li").filter(":gt("+(f-1)+")").remove();l.bind("stop",function(){k=false}).bind("start",function(){k=true});function n(){if(k){var p=e(i[m]).css({height:0,opacity:0,display:"none"}).prependTo(l);l.find("> li:last").animate({opacity:0},1000,function(){p.animate({height:h},1000).animate({opacity:1},1000);e(this).remove()});m++;if(m>=o){m=0}}setTimeout(n,g)}n()})}})(jQuery);function showrecentposts(z){document.write('<ul class="spy">');j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var o=0;o<numposts;o++){var w=z.feed.entry[o];var g=w.title.$t;var f;var p;if(o==z.feed.entry.length){break}for(var l=0;l<w.link.length;l++){if(w.link[l].rel=="alternate"){p=w.link[l].href;break}}for(var l=0;l<w.link.length;l++){if(w.link[l].rel=="replies"&&w.link[l].type=="text/html"){f=w.link[l].title.split(" ")[0];break}}if("content" in w){var r=w.content.$t}else{if("summary" in w){var r=w.summary.$t}else{var r=""}}postdate=w.published.$t;if(j>imgr.length-1){j=0}img[o]=imgr[j];s=r;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){img[o]=d}cmtext=(text!="no")?'<i><font color="'+acolor+'">('+f+" "+text+")</font></i>":"";var q=[1,2,3,4,5,6,7,8,9,10,11,12];var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var u=postdate.split("-")[2].substring(0,2);var h=postdate.split("-")[1];var t=postdate.split("-")[0];for(var e=0;e<q.length;e++){if(parseInt(h)==q[e]){h=x[e];break}}var n=(showPostDate)?'<i><font color="'+acolor+'"> ('+u+" "+h+" "+t+")</font></i>":"";g=(aBold)?"<b>"+g+"</b>":g;var v='<li><a href="'+p+'"><img src="'+img[o]+'" width="'+thumbwidth+'" height="'+thumbheight+'" class="recent-thumb"/></a><a href="'+p+'" class="recent-link">'+g+'</a><div class="spydate">'+n+'</div><div class="spycomment">'+cmtext+"</div>";document.write(v);j++}document.write("</ul>")}document.write('<script src="'+home_page+"feeds/posts/default?max-results="+numposts+'&orderby=published&alt=json-in-script&callback=showrecentposts"><\/script>');
//]]>
</script>
</div>