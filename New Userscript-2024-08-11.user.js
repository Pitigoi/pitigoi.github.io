// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-08-11
// @description  try to take over the world!
// @author       You
// @match        https://www.wcostream.tv/playlist-cat/*
// @run-at document-idle
// @resource     contentCSS    https://raw.githubusercontent.com/Pitigoi/pitigoi.github.io/main/wco.css
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wcostream.tv
// @grant GM_getResourceText
// ==/UserScript==

var style = document.createElement('style')
style.innerHTML=GM_getResourceText('contentCSS')
document.documentElement.append(style)
document.querySelector("#content > table").align='unset'
document.querySelector("#my-video").style=null
document.querySelector("#content > table > tbody > tr > td > table > tbody > tr > td > h1").style=null
document.querySelector("#wrap > table > tbody > tr > td:nth-child(2)").align="right"
document.querySelector("#wrap > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td").width="100%"
document.querySelector("#wrap > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td").height="100%"
document.querySelector("#footer > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1)").width="auto"
document.querySelector("#footer > div").style="display:none"
jw.onReady(function(e){
			jw.onPlaylistItem(function(a){
				var item = jw.getPlaylistItem(jw.getPlaylistIndex());
				var title = document.getElementById("my-v-t");
				var desc = document.getElementById("my-video-desc");
				var baslik = document.getElementById("pl-baslik");
				title.innerHTML = item.title + " Info";
				desc.innerHTML = item.description;
				baslik.innerHTML = item.title;
				console.log("test")
				$(".current-video").removeClass("current-video")
				$("a.sonra").filter(function(index){return jw.getPlaylistIndex()==index;}).addClass("current-video")
				$("a.sonra.current-video")[0].scrollIntoView()
                $("title")[0].innerHTML = item.title

			});
			var liste = jw.getPlaylist();
			for (var i=0; i < liste.length; i++) {
                var pathname = new URL(window. location. href).pathname.split( '/' );
				if(liste[i]["mediaid"] == parseInt(pathname[1])) {
					jw.playlistItem(i);
				}
			};
		});
