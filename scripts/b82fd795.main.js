console.log("'Allo 'Allo!"),function(){"use strict";var a=[{name:"13 Card Sorts",icon:"cards.png",text:"We developed card sorting later in our research phase as a low-commitment, more casual way to approach families waiting for a loved one in surgery. The primary purpose of the card sort was to learn the information that is most important to families in the waiting room. We also wanted to learn why certain information was important. As families talked through their thinking, the reasons behind their choices became clear."},{name:"82 Surveys",icon:"survey.png",text:"We implemented a survey study to collect data across a large sample of families in the waiting room so we could draw comparisons. The survey allowed us to collect general information about these families as well as get a sense of their satisfaction with the information received during the operation. We also used the survey to help us understand families’ feeling of obligation to stay in the waiting room."},{name:"8 Directed Storytellings",icon:"story.png",text:"As interviewing families in a high-anxiety state was not appropriate, we focused our interview efforts on hospital staff. These expert interviews shed light on the waiting room landscape. Hospital workers regularly interface with families and so they have observed longitudinal trends. Their experience provided insights to issues not necessarily observable on a single day."},{name:"13 Diaries",icon:"diary.png",text:"We conducted a diary study to help understand the human component of the waiting room. Diaries provided information about the thoughts and feelings of waiting families as well as issues experienced by desk attendants. In a sensitive environment like a hospital, formal interviews with families are not necessarily appropriate. Diaries offered a way to circumvent this sensitivity. Diaries also provided longitudinal data about how waiting room experiences change over time. By answering the same questions every hour, we hoped to see trends throughout the day."},{name:"12 Observations",icon:"observe.png",text:"Observations provided insight into how families interact in the waiting room, how people actually use waiting room technologies, and the role of hospital staff. Additionally, observations made in non-surgical waiting rooms provided understanding into how departmental differences impact the waiting room experience."}],b=_.template($("#profile-template").html()),c={maya:{name:"Maya Kreidieh",bio:"Maya is a co-founder of Lamba Labs, an arts and technology collective in Beirut. She graduated with a bachelor’s degree in Computer and Communications Engineering and since then has worked on a series of projects ranging from computer vision to building Lebanon’s first open elections data platform. Maya is currently a masters student in Carnegie Mellon’s Human-Computer Interaction Institute."},julie:{name:"Julie Eckstrom",bio:"Julie is a co-founder of the User Experience team at Branding Brand. Before working at Branding Brand, Julie was an interaction designer for the Carnegie Mellon start-up Autoref.com and manned its booth at the 2012 CES. As an undergraduate at Carnegie Mellon, Julie majored in information systems and human-computer interaction (HCI). She is continuing to pursue her passion for HCI through the accelerated HCI masters program."},nissa:{name:"Nissa Nishiyama",bio:"Nissa graduated Summa Cum Laude from La Sierra University in 2013 with a bachelor's degree in Computer Science and minors in Art and Mathematics. Her interest in user experience design brought Nissa to Carnegie Mellon to pursue a master’s degree in Human-Computer Interaction. Nissa currently calls Washington State her home, and some of her favorite pastimes include printmaking and puzzles."},john:{name:"John Pryzborski",bio:"John has over 15 years professional experience in commercial television, including videography, post-production, and visual effects. John has considerable experience developing for Apple's iOS platform, releasing several apps to the App Store. John is currently a masters student in Carnegie Mellon’s Human-Computer Interaction Institute where he is pursuing his interest in human-centered design as a means of identifying and solving real problems with technology."},sabrina:{name:"Sabrina Li",bio:"Sabrina received a BFA in Communication Design from Carnegie Mellon with an additional major in HCI. She is interested in user experiences and leveraging a combination of methods and tools from her areas of study to deliver effective visual and interaction design. Sabrina is currently an accelerated MHCI student."}};$("#team").on("click",".team-member",function(){var a=this.id;$(".profile").html(b(c[a])),$(".profile").css({display:"block"}),$("#team-members").addClass("out"),setTimeout(function(){$(".profile").removeClass("out")},150),setTimeout(function(){$("#team-members").css({display:"none"})},310)}),$("#team").on("click",".back",function(){$("#team-members").css({display:"block"}),$(".profile").addClass("out"),setTimeout(function(){$("#team-members").removeClass("out")},150),setTimeout(function(){$(".profile").css({display:"none"})},310)}),$("li").find("a").click(function(a){a.preventDefault();var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top},500)});var d=0,e=_.template($("#research-template").html());d=(d+1)%a.length,$("#research-content").html(e(a[d])),function(){$(".next").on("click",function(){var b=_.template($("#research-template").html());d=(d+1)%a.length,$("#research-content").html(b(a[d]))}),$(".back").on("click",function(){var b=_.template($("#research-template").html());d=0==d?a.length-1:d-1,$("#research-content").html(b(a[d]))})}();var f=0,g=["lo-fi","mid-fi","hi-fi"],h=["low","mid","high"];$(".dside").css({display:"none"}),$(".prototype-back").fadeOut(1),$("#low").fadeIn(1),$("#"+g[f]).css({display:"block"}),$("#prototype-inner").on("click",".next",function(){f=(f+1)%g.length,$("#prototype-inner").css({"background-image":'url("../images/midfi.jpg")'}),$(".dside").css({display:"none"}),$("#"+g[f]).css({display:"block"}),$(".prototype-back").fadeOut(400),$("#"+h[f]).fadeIn(400)}),$("#prototype-inner").on("click",".back",function(){f=0==f?g.length-1:f-1,$("#prototype-inner").css({"background-image":'url("../images/midfi.jpg")'}),$(".dside").css({display:"none"}),$("#"+g[f]).css({display:"block"}),$(".prototype-back").fadeOut(400),$("#"+h[f]).fadeIn(400)})}();