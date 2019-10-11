(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,a,t){"use strict";t.r(a);var c=t(7),r=t.n(c),l=t(0),n=t.n(l),s=t(163),i=t(162),m=t(166),o=t(180),d=t(165),A=t(173),E=t(181),g=t(182),N=t(183),p=t(164),u=t(308),h=t.n(u),v=t(187),w=t.n(v),f=t(172),b=t(161),y=t(190),I=t.n(y),C=t(188),B=t.n(C),k=t(189),S=t.n(k),x=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null),n.a.createElement("div",{className:"container-fluid"},n.a.createElement(m.a,{headingFirst:"Artificial",headingSecond:" Intelligence",showCard:!0,background:B.a,intro:"Inform yourself here about our AI track. Start your six months learning journey as a part of the next batch in the city of your choice. Acquire state-of-the-art tech skills by using one of our individualized tracks, local events, and professional mentoring. Within six months you will finish a tech project and be rewarded with our Digital Shaper certificate.",backgroundMobil:S.a})),n.a.createElement("div",{className:"container"},n.a.createElement(d.a,{heading:"What is Artificial Intelligence?",subheading:"See what hides behind the buzzword “AI”!",text:"AI is an expandable definition, which involves learning structures that are able to detect patterns and apply the learned patterns to predict or transform something. When we talk about AI, we talk about deep neural networks or reinforcement learning systems that are capable of solving large, complex problems like object detection, object classification, or autonomous driving. These applications are ruled by deep neural networks with millions of parameters.",image:I.a}),n.a.createElement(d.a,{heading:"Why Artificial Intelligence",subheading:"Learn more about the various applications of Artificial Intelligence!",text:"Data is the new Oil, but „AI ist the new electricity“ - Andrew Ng. Artificial Intelligence helps to mine valuable knowledge from data. Deep neural networks got a boost in popularity in 2011 when the neural network AlexNet solved the ImageNet Competition (Detection of 1000 classes of objects in images) with an error rate of 16%. Before deep neural networks ruled this competition the average error rate was way over 25%. Since then the error rate has been decreasing to less than 5%. The success of Deep Neural Networks relies on the huge amount of data that is necessary to train the millions of parameters. Since the amount of data is continuously increasing, the range of applications for AI becomes wider and deeper. While AI has been a long time an instrument to solve a single very specific task, AI is more and more developing into a generalized approach for problem solving.",image:h.a}),n.a.createElement(o.a,{intro:"See here what different learnings our AI track offers!",first:"Acquire knowledge about deep learning algorithms",second:"Learn how to build image recognition system",third:"Get to know what mathematical foundation behind the training of neural networks",fourth:"Acquire general python programming knowledge with emphasis on deep learning libraries"}),n.a.createElement(A.a,{heading:"More About the Track",subheading:"Get to know neural networks and work with the background data in our individualized tracks!",text:"The AI track comes in several versions. You can combine the deep learning part with some refreshment of your Python and machine learning knowledge. Despite this refreshment, you should already have some knowledge in Python and machine learning. You will acquire theoretical knowledge as well as practical experience. The primary applications are image classification, object detection and text mining. Furthermore, you will apply neural networks to detect objects in an image and classify those as well as find interesting patterns in text data (for example amazon reviews). Aside from the application, the track contains information about the most important mathematical foundation of neural networks. This includes back-propagation, gradient descent, and vectorizing of word.",image:w.a}),n.a.createElement(E.a,null),n.a.createElement(g.a,null),n.a.createElement(N.a,{heading:"Get a First Impression",subheading:"Check out our curriculum that is open for everybody!",firstHeading:"Introduction to Artificial Intelligence",firstImage:I.a,firstText:"Start with our free Track and learn the fundamentals of AI now and see if you want to join the Digital Shaper Program!",firstLink:"https://app.edyoucated.org/login"}),n.a.createElement(f.a,null,n.a.createElement(p.a,{question:"How do I apply for the Digital Shaper Program?",answer:"This can be done directly on our application page. Make sure to look up the application deadline for your location."}),n.a.createElement(p.a,{question:"What do you look for in an applicant?",answer:"At TechLabs we want to understand why you are motivated to join our program. We are building a vibrant and interdisciplinary team, so don’t hesitate to apply independent of your study background and previous knowledge. There is no such thing as the right answer to our questions."}),n.a.createElement(p.a,{question:"How much time is required to become Digital Shaper?",answer:"In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum. Our learning materials have a total duration of 50+ hours. Please also bear in mind that the project phase is usually linked to increased coordination effort with your project team. In any case, the invested time will be worth it!"})),n.a.createElement("div",{className:"container pb-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col text-center"},n.a.createElement(b.a,{to:"/faq",className:"btn btn-primary"},"More Questions?"))))),n.a.createElement(i.a,null))},a}(l.Component);a.default=x},164:function(e,a,t){"use strict";var c=t(7),r=t.n(c),l=t(184),n=t.n(l),s=t(0),i=t.n(s),m=t(186),o=t(177),d=t(178);t(185);function A(){var e=n()(["\n  font-weight: 900 !important;\n  font-size: 1.2rem;\n  cursor: pointer;\n"]);return A=function(){return e},e}var E=m.a.a(A()),g=function(e){function a(){for(var a,t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(a=e.call.apply(e,[this].concat(c))||this).state={isOpen:!1},a}r()(a,e);var t=a.prototype;return t.handleClick=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"faqQuestion--card w-100 mb-4"},i.a.createElement("div",{className:"py-3"},i.a.createElement(E,{className:"faq--a",onClick:function(){return e.handleClick()}},i.a.createElement("div",{className:"row h-100"},i.a.createElement("div",{className:"col-1"},i.a.createElement(o.a,{icon:d.b,className:"faqQuestion--icon mr-3 mt-3 ml-4 "+(this.state.isOpen?"faqQuestion--rotate":null)})),i.a.createElement("div",{className:"col-9 py-2"},i.a.createElement("h3",null,this.props.question)))),this.state.isOpen&&i.a.createElement("div",{className:"row justify-content-end"},i.a.createElement("div",{className:"col-11"},i.a.createElement("p",{className:"pr-5 text-justify"},this.props.answer))))))},a}(s.Component);a.a=g},165:function(e,a,t){"use strict";var c=t(0),r=t.n(c);a.a=function(e){var a=e.heading,t=e.subheading,c=e.text,l=e.image,n=e.hasButton,s=e.buttonText,i=e.buttonLink,m=e.float,o=e.leftPartSize,d=e.rightPartSize;return r.a.createElement("div",{className:"container my-5 py-5 h-100"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("p",{className:"basicSection--sub"},t))),m&&r.a.createElement("div",{className:"d-none d-md-block mt-5 row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:l,alt:"",className:"w-50 img-fluid float-right pl-3 pb-2 pt-2 ml-3"}),r.a.createElement("p",{className:"basicSection--text"},c)),r.a.createElement("div",{style:{clear:"both"}})),r.a.createElement("div",{className:m?"row mt-5 d-md-none":"row mt-5"},r.a.createElement("div",{className:"col-md-"+(o||7)+" order-2 order-md-1"},r.a.createElement("p",{className:"basicSection--text"},c),n&&r.a.createElement("div",{className:"row mt-5 ml-2"},r.a.createElement("a",{className:"btn btn-primary d-inline",href:i},s))),r.a.createElement("div",{className:"col-md-"+(d||5)+" text-center  order-1 order-md-1 mb-3"},r.a.createElement("img",{src:l,alt:"",className:"w-100 mb-3"}))))}},166:function(e,a,t){"use strict";var c=t(0),r=t.n(c),l=t(167),n=t.n(l),s=t(168),i=t.n(s),m=t(169),o=t.n(m);a.a=function(e){var a=e.headingFirst,t=e.headingSecond,c=e.intro,l=e.showCard,s=e.background,m=e.backgroundMobil;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"programmHero--hero d-none d-md-block",style:{backgroundImage:"url("+s+")"}},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-6"},r.a.createElement("h1",{className:"display-5 mt-5 programmHero--heading"},r.a.createElement("span",{className:"programmHero--highlighted-first"},a),r.a.createElement("br",null),r.a.createElement("span",{className:"programmHero--highlighted-second"},t)),r.a.createElement("p",{className:"programmHero--intro mb-5"},c)),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-md-6 d-none d-lg-block"},r.a.createElement("div",{className:"card programmHero--card"},r.a.createElement("h2",{className:"programmHero--card-heading text-center"},a," ",t),r.a.createElement("div",{className:"row pl-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Time"),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:n.a,alt:"clock",className:"align-middle"})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"6 months program",r.a.createElement("br",null),"10 hours per week"))))),r.a.createElement("div",{className:"row pl-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Certificate"),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:i.a,alt:"clock",className:"align-middle"})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Receive a graduation certificate ",r.a.createElement("br",null),"by presenting your project"))))),r.a.createElement("div",{className:"row pl-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Participants"),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:o.a,alt:"clock",className:"align-middle"})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Over 250 graduates"))))))),r.a.createElement("div",{className:"col-lg-12 d-block d-lg-none"},r.a.createElement("div",{className:"card programmHero--card"},r.a.createElement("h2",{className:"programmHero--card-heading-small text-center"},a," ",t),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:n.a,alt:"clock",width:"30"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",{className:"programmHero--card-heading-second mt-2"},"Time")),r.a.createElement("div",{className:"col-6"},r.a.createElement("p",null,"6 Months Program",r.a.createElement("br",null),"10 Hours per Week"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:i.a,alt:"clock",width:"30"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",{className:"programmHero--card-heading-second mt-2"},"Certificate")),r.a.createElement("div",{className:"col-6"},r.a.createElement("p",null,"Get a graduation certificate by submitting a project"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:o.a,alt:"clock",width:"30"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",{className:"programmHero--card-heading-second mt-2"},"Participants")),r.a.createElement("div",{className:"col-6"},r.a.createElement("p",{className:"mt-2"},"Over 250 grads"))))))))),r.a.createElement("section",{className:"programmHero--hero d-md-none",style:{backgroundImage:"url("+m+")"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-6"},r.a.createElement("h1",{className:"display-5 mt-5 programmHero--heading-mobil"},r.a.createElement("span",{className:"programmHero--highlighted-first-mobil"},a),r.a.createElement("br",null),r.a.createElement("span",{className:"programmHero--highlighted-second-mobil"},t)))),l&&r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"programmHero--card_mobil"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"programmHero--card-title_mobil"},"Time"),r.a.createElement("div",{className:"section-divider_mobil"}),r.a.createElement("p",{className:"programmHero--card-subtitle_mobil"},"10 Hours/ Week ",r.a.createElement("br",null)," 6 Month Program")),r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"programmHero--card-title_mobil"},"Certificate"),r.a.createElement("div",{className:"section-divider_mobil"}),r.a.createElement("p",{className:"programmHero--card-subtitle_mobil"},"Get a graduation certificate by submitting a project")),r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"programmHero--card-title_mobil"},"Participants"),r.a.createElement("div",{className:"section-divider_mobil"}),r.a.createElement("p",{className:"programmHero--card-subtitle_mobil"},"Over 250 grads")))))),r.a.createElement("div",{className:"row",style:{marginTop:l?"35%":"70%"}},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"programmHero--intro mb-5"},c))))))}},167:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgBzZg/VgIxEMY/8AK0dmNnB57AeAHFE8gNxBOAnSU3YC1tRDs7OYJ02sieQC3tcIZMHn9cINkEHr/3Pv/AJvtlNpnJpoJwaqwGq8mqs0jlyFUj1lD1gwAqAdcaNXKlN3lmvc2ZcBCs2RPWKewgnli3S9dFQawB65vVU3MhSFQz1oTVx2JUS3GtZlJ0RrDmxrDRLkVHDRmkpQVrrINA+tqQsB1I++/7Nuhgu4YcBM+ItVDe0CvsSguBYKdIe90FMZNwgnKDMbDGqOjLDAHPuICypty9B8sfUmSniGxPKFjpGeKiJMQOqqeaIpNTXDYQR6wpoz6mi0Xq2RjxxJqC+jBVWIdD7AdS5JtiSir6CPuB7DrqYor0n30gh06BFHMhVT8k/VSRFkICUpq6gc3KhARMlyHS0NP+Qguzw0h7iVSOdNuUtvZXtjpIAs/F1Ajx2XyeS+0veGep7abpySBNRp+HsGGftALxcSF/uNpnkBaDsJra0OtrB/zjl3XIOma9IB0560N/+7yM3rHeWQ/uA4M1u78dQFiRfCXHxO6pypKtujdhO3NrEy3WJ9Y8JVktu3yMR/B8WeliN+99zlDXt0GG7RpzhoLncBeRhxEFyNHTGesLARFapoXZiAjlETMSnUwNhWb6fxAWz5d8M3QFs8j01MwjPAZXgT8EG3KpTZKhh7DbaCmg+dJ1IjF/DlvG7mFfCobwIMSUQ25iVEVnnmPMzjzdEWTQmecf48GKT3ZSg74AAAAASUVORK5CYII="},168:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVHgB7VjtddMwFL1wOkCZALNBOgEJCzRlAcIElAlIJ6BM0GSChAWImaDpBFUnaCcAdHlPjY5rW3qp7fzpPeeeKLJk3byvPBt4io3n34557XkMI141iLvzXKAbfPGcem49J54PuRuPGuadZ4luMPP87fkW8sOzBb7GMLiFiKJrN8h08VDiCAejwCHFEQ4GgUOLIxwyBR5CHOGQIfBQ4giHhMAj5GOEZheUaAfr3LjhGu9ZQOrqNL5gEXcFEViHE0iRrcMCafGneKblTrAfyow1hef76uQhYy6JF3H7wiKObU/cBl3qPDNso+Nj1LdMV9Haa2TCkhBnkMANCNm5jsbsNiY1e+O1Dj2Ic2i+cTxfoh1bZGKImPsEcft3GGGxnAWF5zmkj5tD3DnTa4zL0nOZuon1H2KpN/4WHRYQ4o2fm2iObvzseQOxInTvDRIutohjq+10TJHV54977NpvWucCu4yGjskCYtFks2kRt4jGDuKuOkxV5D3awb+rsm1B1wlBa6z00J8NaxzEzefKRvSVrQ7tT1gPyLBu1+J4YMoqBdLW/Q+ruNC1rlvWLJD3XLpMrbPWuZBtZ4l1PPRUyXLxFVJGZujgib+KkPY8IPT9Y4hrwpginK6j+FDrRvo50+sjFVsigRy38mYM3NBZlCpmpXO3Ol5Fexx2dfEiEv8DYrnLjHOzxG31gFC/iLnO0WoM/DcQa9SBQtjiT2BErlvnKrKoHBpboGzZX8DQKgVYEmKN/cCwYPzxh9xZNvbVlQQU2JUevqczieu7nysgScDC/AHyji4bfYtj0sx1zJilwFRD8Ig+3coYq/Zr/P4RmWgSR/OP8Tyw32sqH+9qzstCF2/T/+zBX1Uh/wAwG8ll4sbBrgAAAABJRU5ErkJggg=="},169:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAlCAYAAAC6TzLyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP0SURBVHgBvVe/SyNBFJ5NISLobUQEQcxG/wD3CkFsstdplRR2Fsn9AbKptMyWdmfstDktrBQvKQSrM3eoleJqISLobvyBIGo2jYhg9t6Xm5Uod9mNu/GDZWZ338z35s28HyOwBmDbtmiaprq7u6ucnp7Kj4+PYmtrqzUwMKCPj48vksgvQRBMFjSIWJ2ZmSmJomjLsmynUilb0zQ7kUhU3yVJsufm5gySS7IgAWKQgWRlZWWT3hP0SPyfTE9qe3t7HwpAjpBmQQAkWCGICVo9WcMwNMhNT0+XHOV8gfZ3ETrs7e199yJ/dHS0ia25uLiYZX6xsLBQ4qaUvciTnEKwcT7cZEMuE8nr6+viyMiIRadYZx5AcoXR0VHr+PhYdDN9yGUusVwus3A47InYQXd3N3mkia7EfJBLmKSjo6PMGkBvb28g5FV0dXW57l8tOjs7PSnrifz29jbMGgC5XIROPLolP+QmBQ52dXUVYQ2gpaVF5ORlX+QUNNjNzY3EGgCtXMY4gv5uciSJ/v5+c2NjA26jMA+AXC6XY0NDQyaNt5gfIFIhYl1fX3uKcE5E9CpfF05sT6fTrlEO/5PJpJNcJBYEsHpkLFLC+N+kMPfk5KQBua2tLf9xvWZikcLlS8osFApIqxpSKdIt0ixWjP+QY83Azs7OrEMCndDiPKCdmpoqUXWjNTKf4EWIm1qm05vjfeXy8lImF/xEcbxM4dSgb0s43bAG9Qu+yymYm3w2g1WhXCLEXeQTSKe8mMiw9wCkGIxcDpNiQhQJbicY4+Bq8Xj8VU3nevI5oQoSrBR7CdJ8Pr/vNcDUzJUCsVNYwlUPDw9/OMUlta+E5eXl5aowSFVVdQpFhfkAlKj1BMcaz8/Pn6sKwCT4gB98lSqswAIEODAvLfCsJl6IVe3w4eTkxGBNBgixQFi3WgnDLLwsjrMPABbr1P8hXHt4+iuyj0EBfJR4pBDuWygYvFanAcBCoXF/fy95KqOaQQ6EcMtEpRlYCqwD7t8Sr2xZqK2tzeIvyWYpAFJKywJtcfj8/FzVdZ319fXpobGxsWwkEmHRaFTLZrMG7mQBBJcXwvn5eYGCypdKpfItk8mcDQ4OpuFqxJl3hBWEVUQivCKJIPBwRZJe72k0RqA7mvD09BQlwq/FYnGWyEsI0yCkeSvkYj+dxQlvNJaIUKO8HVtbW5NgHngCHrgHTNXe3m6hqHxLfHd3h4JDfnh4QCtSwcEsy8I4G3e3iYmJJUq9edzlnDFCHdMp1Cirq6sxxALyS/Hg4KA6IR4AZwWKAbyoYNjCnp4ea3h4WI/FYr/Z39xe+BeHp2KCKwP/gPlF/gASdOB9i/c9l8x/ACcw7Os8HtNEAAAAAElFTkSuQmCC"},170:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA2CAYAAAB9TjFQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALpSURBVHgB3Zo9b1oxFIbPOUCC0g6p1KbQNFL8DzoyMuYndOSnMWbs2JGRMWM2I6USiA7tUkSh3FsfO4QQ4Pp+2Ar2IyWAMPh97oe599gICinH19CodQHTa/X3G4DuxaeL7+AY+fCzC7TqAGATECaQ1gbi8v09eAa14An1dt9RIf7O+kKIOThAPkxvgNLOzhsJDcTVhwF4hKCp9uA+UmjB6VlPStmEisjptLVXUCdIunoPe4QgUYfoIVyJLtT3ZKbwK8qS2YejC1Fc2g95j6IE9XRobVVVdLEYQcoDmi2NH1GC+XyoJCbWlhVE9eC1pFvrUaMTuRdF/qeDN8566lUrxydKj7pSqgGonvSA0L6hHI66uAkQryhuB4hTFHcDxCeKsDdAXKIIBwPEI4qQGSAOUbQ1iEHUKmkChC2aS9IECFc0t6QJEKZoIUkTIDzRwpImQFiipSRNgHBES0uaAGGIVpI0AY5ftLKkCXDcogQOMHf+s37uCkPjzVcogRAXE/hH/dwVhrEqt4IjSROggKgqYq8DFO+ngOjKlFudSZoAj6KYo2i1qp1DSbRoPb21NkRTbnUqqWm+7UCKdgGk0pV5PQakdGNt+FghdCopx6rKliRda0PVedk5EC2oqob63Lb3c8cPziSLCMLytA8lKCQIcCeu2gN+4uYnpKCgEO/s5+zLPooKXn78tn5R/WLgyAWZapd1AQgy5S/QAxFkyt1qBSTIFL9pDkyQKVb+CFCQyV/IClSQyVeSDFiQsReXAxdksqcJIhBkDk/4RCLI7J+6i0iQ2Z2EjUyQ2Z5Oj1CQ2SyMiFSQMUtcIhZkSP6YfvEtqOEy5CsIMnRw9eJzKgrq8iNmLFTc4FyQIevWrboHmXzlRy+CDAHi4fAuBJnayvZ5b4IMqfNx/ypJV4IK0W6PMlZJehVkSHxuDQFX26IOBZ/gMuRLUcShb0HdzfqJlL/O4WTWAqK53vKe0IMQn6PLPyM1reBuI2bwH7eBOPq0qJDlAAAAAElFTkSuQmCC"},171:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJpSURBVHgB5du7TiMxFAbgY5PVZneboJVWg5QifoMtU+YReIR9tH0ESsqUKSnpnALEcJGgQSQC5uAzhHCdsT05xrL520zyz6dIk4l9RkDg6KNyDFKOAXEAAkqoxEwN/xxAwCAizI9PG3sFBIw+OZ9AVU3evYC9fTX8PYMA0QYM5UVrr4RAaQRTxP1Ea90H7s428Kp3Pp/3g6BbwXXQgH8NgLPTBl71Iv4csKPt4Kd8WwBT3MDPvaxodzAeKrV9BQzxAz/29oApzmDEK7j9vg8M8QK/6GW5enuC/3N8yx3A696N0amBKRuhUwRTOqNTBVM6oVMGU7zRqYMpXugcwBRndC5gihM6JzDFis4NTGlF5wimNKJzBVM+ROcMprxD5w6mvEJ/BTBljf4qYEq9chIDXCcCmCL10dnfGMWxeikSJI6tRwUojtZr0gOEwnrUFu6pIW9xtF6gb1oI+4ei2NWXl6zr1NF6gdBVZd9eQTGAm+U/1hOI1Wsi1bCYgaym1iOZTyBWL6X+yVI7O9MoJ1AUUXrf3JGdmN9NObG/y1xVf5ir6jbXDUr5qb0f3HvnD2/4l5U3vOX/dL5wy8pJnnCHNbL84I6roXnBPda984F77nDkAe+wl5U+vOOuZdrwDfan04VvOImQJpxh5iQ9ONN0UVpwtoHYlOBsE4NeCxHXt7vAECWE30LEqpd1TNIZLnCkteZZdvKBr3rZB2Kd4f0+25qXF9z0Bhl9doIvFiVwdjrCxXJZBhtyb4VX1VQpxTb6vO60wU3vaDRaBH2cgVLvWcHdGMRWUV9BJcxUUQR5lOEpj89wnDf2PgBqV+9r/ozRSwAAAABJRU5ErkJggg=="},172:function(e,a,t){"use strict";var c=t(0),r=t.n(c);a.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"py-5 my-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"FAQ´s"),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("p",{className:"basicSection--sub"},"Do you have more questions?"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e.children)))))}},173:function(e,a,t){"use strict";var c=t(0),r=t.n(c);a.a=function(e){var a=e.heading,t=e.subheading,c=e.text,l=e.image,n=e.float,s=e.leftPartSize,i=e.rightPartSize;return r.a.createElement("div",{className:"container my-5 h-100 py-5"},r.a.createElement("div",{className:"row my-5 mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("p",{className:"basicSection--sub"},t))),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-none d-md-block row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:l,alt:"",className:"w-50 img-fluid float-left pr-3 pb-2 pt-2 mr-3"}),r.a.createElement("p",{className:"basicSection--text"},c))),r.a.createElement("div",{style:{clear:"both"}})),r.a.createElement("div",{className:n?"row mt-5 d-md-none":"row mt-5"},r.a.createElement("div",{className:"col-md-"+(s||5)+" text-center mb-3"},r.a.createElement("img",{src:l,alt:"",className:"w-100"})),r.a.createElement("div",{className:"col-md-"+(i||7)},r.a.createElement("p",{className:"basicSection--text"},c))))}},174:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPpSURBVHgBjVRpaFxVFD7n3vvem5lkrGnN0iwTixHFJi4gsdSFKooLiBvFksxEC/6uIvpPg3/E3/0jInGpWdqiVSxiqyixabRI0SpYrNqWJDOxNk2amITJW+49x/sGJ0zEIT3vx7vLud8957vfOQhXYGFbdjcw3iuAx1RhaGA9f7GeAzc814iI9W5hsM/ObuXmvtvWO6MqJyube9qVctoJYc6b2nc6XiMv6CHSR+OxZB4gAXfb4anShS2924wUXWHkf5G68OFUGQcrQaNMrh+YRwXITmLdBCyOWZD7vPzgK7BKRe4dFDAMRM8zwSgLuCAAdzn5oSf+N1IGWnTzw8ft8Dg37a6P3PBxydDJjbkGvDg4w/U7ayOmDjBwu/KXsjh7eCk+pzO9T0E1TgXBJLdmO0op/PXeJQfFODOe0C7s4Wt7t+lE4jVkGAOJ42XAsLWvmwknqoJKwd9EWOKsZJphEwj81nL0izbQTwzfacnHIBKpivxeUiD2VuKs4ZTbc1uI6EkCuBoIivaWtCAOGfkaBphnwE0ItMIgNtiIZxmhCRE2sqF+d3rkpzWgYWtPt41ouyDxuxR6MkK1o8hmpJbEI5Kjk76TDGUU7nBE4stlXKnzWN7jBImPTdJ/gzTslRIeMoQtBOZoojDyOQaZZ7aSCZoSyb/H8eyRIL5kIdNTlybMshB3ajKvOiifNsBdiLyBCF4WAt+yef0Q+PR67cz+i6vKyOT2INEfKmZOoaPLgCUahI3T1EQxraFh6SiaR8ApKyEXjNCWjggFRjXo8+qZxlyNVYaxyXMp/SDTe5MEsZWJlpUJT0eu84CzWPuRqSneLwWdgmTiEiyFXUWpJ1JGpSMJ253I+Uw70QvM4lNbFV1Wt3cJhsOqMPzJmocqNu9q86T7qAHtAeFlKcRGg6iRTB0gLtsXaLBiXrQquMoKPrC6rrMR+wrkPvy3AmNbI/5kOrUQFv3LXn7kQImjLdlbIDT2wSkNSj6mCL+KQM+74AAWBr+PfUxb9sXlqDgD1XTqrwTdLtBYeU6hWBFC3YDSaVPSGTCALQJUVwA8V/bROjqS9NwHq4IKpjTmD/xZIr7jYc9Damb76jIxewgn3j8jlTxEwDcrtKVrFRL7uTUNv7KB6ytx1qQv7RdsfvZGofz6MJDNBsS4i5QpK8MCL4StuZ9J8JTV507dllsEf+48oIyqRipT7tfg2W7F7nkvP3wwVfhg2tb1pG1xrfF+3BoZ9Zw7OfSjraC3NYQnIytexf6bVSPF396Nm8SZyrUI/LOIiTvssICu6HQXg9HyXiJ/8Jz9nYP/GMIVWFzGVvDX2S424UzvP7Ge/z9DWdVcVHK+lwAAAABJRU5ErkJggg=="},175:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMdSURBVHgBpVXLS5RRFD/nPmbM3iT0GD/TsE1QiyCoLAg3YYsioiBnDDHwD8h1BW3NRcskyHDURe2lRauiTaG0Mwo1tUyJSqZMv/s4nfuNDjOINNAZhss9995zfud3Hh8Ci4lytwnwABApQNLFVUhBkOwdoRbIOgJJABoBWY9hrwFBAoQ3oAjhlS6oW2gasi3eU2N6bngI/iG0t2NrQdhox/zIBNXnmmGZFkELF7Muzbo4yvVJ8p8EOtgtvJiCKiRWvm2LVr10qHunQeoxW/FKnPZtHFNvOOfIxjzK7SE8b5SnaoymVtPPYZt/i5P9S1R/sw+c/ALGyhXWhXOJ0lu0Dk3UcR7ItzKHhvnRCW/omcOEMxX49SiKPPMfEVTglBLeeWU+EcTaHvYg4SMFzjmS+Cw1O/gG/lNsQ+4agY8EMORAwWYXKeo8AVWK45AJOEOWDWrH+00kxvgCHexogmrEMzgCJ5ggZ8BtSJTZ33EmrCmQL2KiCrS0v7s2bsye3GA0iZi8YIxO21QF0rihvZvr43LR+pYxSeJs5etCLRi6ajO5G+VaCdJLJCuIKzVO2xJSG7Vf4opD/Tnfkzif719m5+9oX/ZICdD8yLfvVt4hpMY4ynaVh+8QGSl6D8YniaL6zsNcWjtTM/mH5QishpdxCo6X6/YtDP7Wc0P3EKDJ1OfOlcJHYKOJiCLSmoUZrsFd7L2Cw5qp/Hsu1mOBy3J90RjWrCo1kYSP0oHnRK3hxsTRx9FVoVaeSMRWk7l+qtwACcldU2hY38eZ7EluhCZla+9umx74mkQEgc1glHi2rCMNhiefLgmhHpCUR8uRWW/GrRQXEwd1XduBU6xm848TzkuPjQ9IQ6tRCiorCqcHVnjpr6BgbviDi3IqOGJDBVZt6EDLjcQjcp3T6sQTjVu9cnrTC464pNY4jaE64WyPLpqa15udKy2L4RPJVaF9HVQpGeaQmrPww8ewm38/ed3F+iUfI0+9jBRiFqm5LW3/1LWghExpAsgQa5gNIqkKbmgUgSrOIFe0lsirs+GTo7hPFN/QwvMkQfylZ/P3/wIkVngBJMXprQAAAABJRU5ErkJggg=="},176:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDgtMjJUMTg6Mjk6MDMrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA5LTA2VDE0OjE3OjI2KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA5LTA2VDE0OjE3OjI2KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmRjYjQ5NTg3LWY3NjUtNGU0YS05M2FjLWFiNTNjNGQ1MmMwMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpkY2I0OTU4Ny1mNzY1LTRlNGEtOTNhYy1hYjUzYzRkNTJjMDEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkY2I0OTU4Ny1mNzY1LTRlNGEtOTNhYy1hYjUzYzRkNTJjMDEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRjYjQ5NTg3LWY3NjUtNGU0YS05M2FjLWFiNTNjNGQ1MmMwMSIgc3RFdnQ6d2hlbj0iMjAxOS0wOC0yMlQxODoyOTowMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7kQOVAAAA0hJREFUOMutVN1LFFEU357Mwj7V/Zh774xmtQoZSVJJH4qRGZqljO7MvXd2XcvswwctoQ0fNg0UJAiCoIceSqjnoH+hvySC6DHKna/ldu7M7rqhG0ItLHt35tzf+Z3fOecXEfHpPQ7mix5iay5mk5H/8fEU45xHrMvyDKB3RZy3/zNoARmXbEQHQ1CaFfFM8m/xPrayRcznfuFUombQF6TXu5hnipjN+5i9FPC/VqyD6M2iyu+7KutyCX23I9YC89M+NkdqS8Vz36J8b3imy0LLxHYE7BM65BDasd07G9OHUNEjkGACGvtJRHnzzthqmd2g7Qz8HvgzGdcdzAyh8vaCxnoBsMXD/FlB5S1bQFw80V3E1pqP+RsPs49CYSdFsxH1EZ+CUUs5yBx1CbsjcPriFgKxySa4s+YiOusRvgIVslI32Q07wYfdOOuC0pZ8ZAUvfMXURdtsnUwiY2pWBsw9kEVq7SJ2S2j8TKBhEbEFRzEXge0HX5bYNlhXBhKH6D5fY0bN5iVYj43Z9UqjgUwEBL8qlIljATuVjfkkPR4EE+O8h6xBCS6I2RpcQqwXup7zCFv1CH0cPtPr5VTA7M7A87yIG40RuU02Mo+GUpgjErjM4kd8ulGyrrDCNBdojmm3T9h6ocVUy+82FIq+wsqHgZAdmnAkyApSCGzVnFO5SdDxZVjnV6DfZ5FI4e01gTJhfLSAKTKv+SQzHCRQ6FlboUO+wnXwA1L2hso9xFcgBlWNIkgxtUt06BAIl0VcJ2F56Sse+IBQrMOedC4VzoiPAqv1ENSY3CTD8hvIUqSGkGwOmp2Hql84yOiUJtJdLgPE77cxH4DGHATwpzJQ+gFcel8aP2NTX56TpiIrconJ3QT4AVgnAC+EoJAxCFStPqGk+0Wrvr96Nn3EXoeGYoxtgrL5n5oec9XUKZkcFmUJluAtVPUgBC3ZGAReKChmnziebbCxOVAF8Ly8KJVNhMty96VPOFF6Ihwvq9MH+wxAN5BeYsp6BABLUClFpevIyleDfu+4B6D0tojpTU4ikxQJIyk6eSRIICVyw5kbd8AwgNGTALgx2wAbxoO9R+aUdKYyqPw6KjdB81XZUEfLJB1wrfB+ek7O+m9j8qbuZPHKsQAAAABJRU5ErkJggg=="},180:function(e,a,t){"use strict";var c=t(0),r=t.n(c);a.a=function(e){var a=e.intro,t=e.first,c=e.second,l=e.third,n=e.fourth;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"What Will You Learn?"),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("p",null,a))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"learn--card"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"learn--color"})),r.a.createElement("div",{className:"col-11 mt-3"},r.a.createElement("p",null,t)))))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"learn--card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"learn--color"})),r.a.createElement("div",{className:"col-11 mt-3"},r.a.createElement("p",null,c)))))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"learn--card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"learn--color"})),r.a.createElement("div",{className:"col-11 mt-3"},r.a.createElement("p",null,l)))))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"learn--card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement("div",{className:"learn--color"})),r.a.createElement("div",{className:"col-11 mt-3"},r.a.createElement("p",null,n)))))))}},181:function(e,a,t){"use strict";var c=t(0),r=t.n(c),l=t(174),n=t.n(l),s=t(175),i=t.n(s),m=t(176),o=t.n(m);a.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Projects From Our Participants"),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("p",{className:"basicSection--sub"},"Have a look at these completed projects and get inspired!"))),r.a.createElement("div",{className:"row d-flex"},r.a.createElement("div",{className:"col-md-4 py-5 justify-content-center align-self-center"},r.a.createElement("div",{className:"card h-75 mt-5"},r.a.createElement("h3",{className:"text-center projects--heading"},r.a.createElement("span",{className:"highlighted"},"Financial Planner")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"projects--text"},"An application that basically keeps track of your entire financial transactions."),r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:i.a,alt:""})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Web Development"))),r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:o.a,alt:""})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Data Science")))),r.a.createElement("a",{className:"btn btn-primary mt-5",href:"https://medium.com/techlabsms/why-is-there-always-so-much-month-left-at-the-end-of-the-money-453ba6a5f256"},"More information")))),r.a.createElement("div",{className:"col-md-4 py-5 justify-content-center align-self-center"},r.a.createElement("div",{className:"card h-100 mt-5"},r.a.createElement("h3",{className:"text-center projects--heading"},r.a.createElement("span",{className:"highlighted"},"The zeb Project")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"projects--text"},"An application that recognizes the brand and model of a car by taking a picture and identifying key statistical features of the used car."),r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:n.a,alt:""})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Artificial Intelligence"))),r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:i.a,alt:""})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Web Development"))),r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:o.a,alt:""})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Data Science")))),r.a.createElement("a",{className:"btn btn-primary mt-5",href:"https://medium.com/techlabsms/zeb-project-f239ac0abc8c"},"More information")))),r.a.createElement("div",{className:"col-md-4 py-5 justify-content-center align-self-center"},r.a.createElement("div",{className:"card h-75 mt-5"},r.a.createElement("h3",{className:"text-center projects--heading"},r.a.createElement("span",{className:"highlighted"},"Smart-City")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"projects--text"},"Analysis of the bicycle infrastructure in Münster to identify bottlenecks which might slow down the traffic."),r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:o.a,alt:""})),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,"Data Science")))),r.a.createElement("a",{className:"btn btn-primary mt-5",href:"https://medium.com/techlabsms/smart-city-visualizing-bike-traffic-in-m%C3%BCnster-af8445cca8db"},"More information"))))))}},182:function(e,a,t){"use strict";var c=t(0),r=t.n(c),l=t(161),n=t(170),s=t.n(n),i=t(171),m=t.n(i);a.a=function(){return r.a.createElement("section",{className:"callToAction"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 col-md-1"},r.a.createElement("img",{src:s.a,alt:"arrow",className:"float-right  callToAction--arrow"})),r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h1",{className:"foundYourOwn--last text-center text-md-left  callToAction--text"},"You can´t wait to acquire the most"," ",r.a.createElement("span",{className:"foundYourOwn--cta"}," in demand tech skills?"))),r.a.createElement("div",{className:"col-3 col-md-5"},r.a.createElement("img",{src:m.a,alt:"arrow",className:"float-left rightArrow callToAction--arrow"}))),r.a.createElement("div",{className:"row mt-5 py-5"},r.a.createElement("div",{className:"col-3 col-md-5"},r.a.createElement("img",{src:s.a,alt:"arrow",className:"float-right callToAction--arrow"})),r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h1",{className:"foundYourOwn--last text-center callToAction--text"},"Are you ready ",r.a.createElement("span",{className:"foundYourOwn--cta"},"to learn?"))),r.a.createElement("div",{className:"col-3 col-md-1"},r.a.createElement("img",{src:m.a,alt:"arrow",className:"float-left rightArrow callToAction--arrow"}))),r.a.createElement("div",{className:"container my-5 pb-5"},r.a.createElement("div",{className:"row text-center mt-5"},r.a.createElement("div",{className:"col-12"},r.a.createElement(l.a,{className:"btn btn-primary",to:"/apply"},"Apply now")))))}},183:function(e,a,t){"use strict";var c=t(0),r=t.n(c);a.a=function(e){var a=e.heading,t=e.subheading,c=e.firstHeading,l=e.firstImage,n=e.firstText,s=e.firstLink,i=e.secondHeading,m=e.secondImage,o=e.secondText,d=e.secondLink;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-5 firstImpression"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"section-divider"}),r.a.createElement("p",{className:"basicSection--sub"},t))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 py-5"},r.a.createElement("div",{className:"firstImpression--card"},r.a.createElement("h3",{className:"firstImpression--card-heading text-center"},c),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("img",{src:l,alt:"",className:"w-50"})),r.a.createElement("p",{className:"firstImpression--card-text text-center"},n),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:s,className:"noDec"},r.a.createElement("div",{className:"firstImpression--card-btn"},"Start now"))))),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-lg-2 d-none d-lg-flex"},r.a.createElement("div",{className:"row m-auto h-100 align-items-center d-none d-md-flex"},r.a.createElement("div",{className:"firstImpression--card-circle-1 firstImpression--card-circle"}),r.a.createElement("div",{className:"firstImpression--card-circle-2 firstImpression--card-circle ml-4"}),r.a.createElement("div",{className:"firstImpression--card-circle-3 firstImpression--card-circle ml-4"}))),r.a.createElement("div",{className:"col-12 col-md-5 py-5"},r.a.createElement("div",{className:"firstImpression--card"},r.a.createElement("h3",{className:"firstImpression--card-heading text-center"},i),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("img",{src:m,alt:"",className:"w-50"})),r.a.createElement("p",{className:"firstImpression--card-text text-center"},o),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:d,className:"noDec"},r.a.createElement("div",{className:"firstImpression--card-btn"},"Start now"))))))))}},187:function(e,a,t){e.exports=t.p+"static/david-49d5bbd7f6e9a4e64562914422945abb.png"},188:function(e,a,t){e.exports=t.p+"static/ds_background-cb02ffd841e112655a0a008fe1c5b886.png"},189:function(e,a,t){e.exports=t.p+"static/courseMobil-86ee13a0df8b3b7747eb35724bc88f59.png"},190:function(e,a,t){e.exports=t.p+"static/ai-robot-d3b4ef52f283bc4fca734797c001c3cb.png"},308:function(e,a,t){e.exports=t.p+"static/ai_cover-a65f6680d1242c75aa1bed8456bf6edf.png"}}]);
//# sourceMappingURL=component---src-pages-ai-js-82ee8c4781a50d4887a1.js.map