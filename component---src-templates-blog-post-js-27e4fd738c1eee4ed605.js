(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{142:function(M,N,I){"use strict";I.r(N),I.d(N,"pageQuery",function(){return t});I(257);var g=I(7),D=I.n(g),T=I(0),z=I.n(T),j=I(168),c=I(220),A=I.n(c),w=I(232),i=I.n(w),L=I(233),e=I.n(L),u=I(167),a=function(M){function N(){return M.apply(this,arguments)||this}return D()(N,M),N.prototype.render=function(){var M=A()(this.props,"data.contentfulBlogPost");return z.a.createElement("div",null,z.a.createElement(j.a,null),z.a.createElement("div",{className:"container"},z.a.createElement("div",{className:"row mt-5"},null!==M.postImg?z.a.createElement("img",{src:M.postImg.fixed.src,alt:M.slug,className:"img-fluid mx-auto"}):z.a.createElement("img",{src:i.a,alt:"blog",width:"200",className:"img-fluid mx-auto"})),z.a.createElement("div",{className:"row mt-5"},z.a.createElement("div",{className:"col-12 px-4"},z.a.createElement("h3",null,M.title))),z.a.createElement("div",{className:"row mt-2"},z.a.createElement("div",{className:"col-md-4 px-4"},z.a.createElement("p",null,z.a.createElement("img",{src:e.a,alt:"clock",className:"mr-3"}),M.readTime,"min read")),z.a.createElement("div",{className:"col-8"},z.a.createElement("p",{className:"ml-3"},z.a.createElement("img",{src:i.a,alt:"clock",className:"mr-3",width:"25",height:"25"}),M.authorName))),z.a.createElement("div",{className:"row mt-2"},z.a.createElement("div",{className:"col px-4"},z.a.createElement("div",{dangerouslySetInnerHTML:{__html:M.content.childContentfulRichText.html}})))),z.a.createElement(u.a,null))},N}(T.Component);N.default=a;var t="1695813349"},166:function(M,N,I){var g=I(11),D=I(19),T=I(20),z=/"/g,j=function(M,N,I,g){var D=String(T(M)),j="<"+N;return""!==I&&(j+=" "+I+'="'+String(g).replace(z,"&quot;")+'"'),j+">"+D+"</"+N+">"};M.exports=function(M,N){var I={};I[M]=N(j),g(g.P+g.F*D(function(){var N=""[M]('"');return N!==N.toLowerCase()||N.split('"').length>3}),"String",I)}},232:function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwMHB4IiBoZWlnaHQ9IjEwMDBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTUgKDc4MDc2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAyNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSIjcGxheWdyb3VuZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1Ij4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMTAwMCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0idGwtbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5LjAwMDAwMCwgMjMzLjAwMDAwMCkiIGZpbGw9IiNGQjFENUMiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCw0NjcgTDAuMDAxNjUzNjg3ODgsMzc4LjExMzM1MyBDMC4wMTU2NDMxNDgzLDM3MS43NjQ5MzMgMS44Nzg5NjAxLDM2NS41NDAxMDYgNS4zOTEzMjM5MiwzNjAuMTA3OTU1IEM5LjcwMjgxMTg0LDM1My44ODMyNzUgMTUuNzkzNDQ2MSwzNDguOTEzODI0IDIyLjk3MTkxNDksMzQ1Ljc2MzY1NSBMMjE2LjQyMjU3OCwyNTEuNDc1Mzg5IEMyMzMuOTAwNDMsMjQzLjU1MzU5NyAyNTIuMjgzMDkxLDIzNy41MTMxMzMgMjcxLjIxNzU1OSwyMzMuNDY5OTkxIEMyNjAuOTUxNTIxLDIzMS4wNjkyNzEgMjUxLjI2Mjk0NywyMjguNDI4NDggMjQyLjIxNiwyMjUuNjY3NjUyIEMyMzMuMzcyODMsMjIyLjg5MDcyOSAyMjQuNzg4ODUyLDIxOS40MzgwNTUgMjE2LjU1MDkwNCwyMTUuMzQ0NTU3IEwyMi45NzE5MTQ5LDEyMS41OTY0NTMgQzE1Ljc5MzQ0NjEsMTE4LjQ0NjI4NCA5LjcwMjgxMTg0LDExMy40NzY4MzMgNS4zOTEzMjM5MiwxMDcuMjUyMTUzIEMxLjgwMjUyMzQzLDEwMS42OTY4MDQgLTAuMDYzNTgzMjcxNiw5NS4zMTcxOTQ1IDAuMDAxNjUzNjg3ODgsODguODI2NjI5IEwwLDAgTDQyMiwyMDguMjYyNDM0IEw0MjIsMjU4LjU1NzUxMiBMMCw0NjcgWiIgaWQ9ImFycm93Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDU2LjAwMTcwNCw0MjguNjY2NTkxIEM0NTUuOTQ1OTQyLDQxNy4zODY2MiA0NTguMDg3ODQyLDQwNi4yMDIyNDUgNDYyLjMwOTYwMiwzOTUuNzI4NjAyIEM0NjYuMzQxNTAzLDM4NS44NjcwNDcgNDcyLjMyNDU1LDM3Ni45MDcxNiA0NzkuOTA1MzE3LDM2OS4zNzgyMTEgQzQ4Ny41ODU0NDMsMzYxLjg4NTEzOSA0OTYuNTg4MTU2LDM1NS44NTYxNjggNTA2LjQ2NDg4OCwzNTEuNTkxNjk3IEM1MTYuOTUwNzQ3LDM0Ny4xMzQwNjYgNTI4LjI1NzAxMywzNDQuODkwNjIyIDUzOS42NjQzNTEsMzQ1LjAwNDEgQzU1MC44NTEwOTEsMzQ0Ljk1MzE0NSA1NjEuOTI3NzkxLDM0Ny4xOTU4OTIgNTcyLjE5OTgyNSwzNTEuNTkxNjk3IEM1ODIuMTM4Mzk2LDM1NS43NDM2MzIgNTkxLjE2MTM0MiwzNjEuNzg2MTUzIDU5OC43NTkzOTYsMzY5LjM3ODIxMSBDNjA2LjMxODA4NSwzNzYuOTI1MDMxIDYxMi4yOTgwMTQsMzg1Ljg4MDI0OSA2MTYuMzU1MTExLDM5NS43Mjg2MDIgQzYyMC44Mjk2NjEsNDA2LjEzNzU1NyA2MjMuMDkwMTMzLDQxNy4zNTA4OTkgNjIyLjk5NTAwNCw0MjguNjY2NTkxIEM2MjMuMTIxMDg4LDQzOS45ODUxNzUgNjIwLjg1OTM1Niw0NTEuMjA0NzY5IDYxNi4zNTUxMTEsNDYxLjYwNDU4IEM2MTIuMTU2NDExLDQ3MS4zNzc5NDkgNjA2LjE5MzI3LDQ4MC4zMDgwMjUgNTk4Ljc1OTM5Niw0ODcuOTU0OTcxIEM1OTEuMTYyNzM1LDQ5NS40NjYzOCA1ODIuMTMzODAzLDUwMS40MDA5MzYgNTcyLjE5OTgyNSw1MDUuNDEyMTA1IEM1NjEuOTA5NCw1MDkuNzQ5NTI0IDU1MC44NDQ5NTIsNTExLjk4OTc5MSA1MzkuNjY0MzUxLDUxMS45OTk3MDMgQzUyOC4yNjUwNzgsNTEyLjAyOTY4MiA1MTYuOTc1NjcyLDUwOS43ODk1ODMgNTA2LjQ2NDg4OCw1MDUuNDEyMTA1IEM0OTYuNTY2MzUzLDUwMS4zMzQ2MjMgNDg3LjU0OTcwNiw0OTUuNDA4MTQxIDQ3OS45MDUzMTcsNDg3Ljk1NDk3MSBDNDcyLjIzMzIxMSw0ODAuNTAwNDY5IDQ2Ni4yMzY3ODksNDcxLjUyMDU1MSA0NjIuMzA5NjAyLDQ2MS42MDQ1OCBDNDU4LjA3MzI1Niw0NTEuMTM1MTY4IDQ1NS45MzA4MDgsNDM5Ljk0NzkzNCA0NTYuMDAxNzA0LDQyOC42NjY1OTEgWiIgaWQ9InBvaW50Ij48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},233:function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5vdXRsaW5lLWFsYXJtLTI0cHg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iaWNvbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3LjAwMDAwMCwgLTQ3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ib3V0bGluZS1hbGFybS0yNHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ni4wMDAwMDAsIDQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDE5IDAgMTkgMTkgMCAxOSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuNDAxODcwNTcsNS45MDUzOTg3MSBMOC4xOTUwNTIwNCw1LjkwNTM5ODcxIEw4LjE5NTA1MjA0LDEwLjY2MDIyNzggTDEyLjAxNjY0NCwxMi45MTg3NzE3IEwxMi42MjAwNTMzLDExLjk0NDAzMTcgTDkuNDAxODcwNTcsMTAuMDY1ODc0MiBMOS40MDE4NzA1Nyw1LjkwNTM5ODcxIFogTTEzLjI5MzQ1OCwxIEwxNyw0LjA0NzA1MyBMMTUuOTcwMTgxNSw1LjI2MzQ5Njc4IEwxMi4yNjEyMjU5LDIuMjE4MDI4NzMgTDEzLjI5MzQ1OCwxIFogTTQuNzA1NzM3NDIsMSBMNS43MzcxNjQ5OCwyLjIxNzIzNjI2IEwyLjAyOTgxODQ3LDUuMjYzNDk2NzggTDEsNC4wNDYyNjA1MyBMNC43MDU3Mzc0MiwxIFogTTguOTk5NTk3NzMsMi43MzU1MTI2MyBDNS4wMDEwMDU2OCwyLjczNTUxMjYzIDEuNzU4Njg2NTgsNS45MjkxNzI4NiAxLjc1ODY4NjU4LDkuODY3NzU2MzIgQzEuNzU4Njg2NTgsMTMuODA2MzM5OCA1LjAwMTAwNTY4LDE3IDguOTk5NTk3NzMsMTcgQzEyLjk5ODE4OTgsMTcgMTYuMjQwNTA4OSwxMy44MDYzMzk4IDE2LjI0MDUwODksOS44Njc3NTYzMiBDMTYuMjQwNTA4OSw1LjkyOTE3Mjg2IDEyLjk5ODE4OTgsMi43MzU1MTI2MyA4Ljk5OTU5NzczLDIuNzM1NTEyNjMgWiBNOC45OTk1OTc3MywxNS40MTUwNTcgQzUuODk0MDUxMzksMTUuNDE1MDU3IDMuMzY3Nzc3OTUsMTIuOTI2Njk2NCAzLjM2Nzc3Nzk1LDkuODY3NzU2MzIgQzMuMzY3Nzc3OTUsNi44MDg4MTYyNSA1Ljg5NDA1MTM5LDQuMzIwNDU1NjcgOC45OTk1OTc3Myw0LjMyMDQ1NTY3IEMxMi4xMDUxNDQxLDQuMzIwNDU1NjcgMTQuNjMxNDE3NSw2LjgwODgxNjI1IDE0LjYzMTQxNzUsOS44Njc3NTYzMiBDMTQuNjMxNDE3NSwxMi45MjY2OTY0IDEyLjEwNTE0NDEsMTUuNDE1MDU3IDguOTk5NTk3NzMsMTUuNDE1MDU3IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZCMUQ1QyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},257:function(M,N,I){"use strict";I(166)("fixed",function(M){return function(){return M(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-27e4fd738c1eee4ed605.js.map