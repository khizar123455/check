$(document).foundation();var testing="test",tocItems="";$(".guide-section").each(function(){var t=$(this).attr("id"),i=t.split("-");i=i.join(" "),tocItems+='<li><a href="#'+t+'">'+i+"</a></li>"}),$("#toc").html(tocItems),$(".section-output").each(function(){var t=$(this).html(),i=$(this).siblings(".section-code").children(".section-html");i.html(t)}),$("pre").each(function(){$(this).addClass("prettyprint");var t=$(this).html().trim();$(this).html("<code></code>"),/<[a-z][\s\S]*>/i.test(t)?$(this).find("code").text(t):$(this).find("code").html(t)}),$(document).foundation(),$(".slick").slick(),prettyPrint(),alert("test");var angular="app";