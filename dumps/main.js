const state_1=sessionStorage.getItem("opened");"done"===state_1?$("#wel_load").remove():(setTimeout(t=>{$("#wel_load").remove(),$("#wel_new").css("display","grid")},2e3),sessionStorage.setItem("opened","done"));var val_na,lang_en={title:"C61 Web",pra1:"<b>C61 Web</b> is an Online Introductory Course to Web Development. By Taking This Course You will Learn The Basics of an Operating System and You will be able to Build Static and Dynamic Websites. ",opt_t1:"Completely Free",opt1:"Completely Free without any sort of Fees",opt_t2:"Online",opt2:"You can Learn it Whenever you Get The Time",opt_t3:"Practical",opt3:"The only Way you will be able to get access to the next Lacture is by doing the giving Tasks",opt_t4:"Flexable",opt4:"The Lactures will be in English But Based on our Students We will Provide Lactures in Dari Too",opt_t5:"For Everyone",opt5:"It Does't matter if you are fimilar with Basics of a Computer or not, We Will start from the Beginning",btn1:"Apply Now",btn2:"About us",aply_t:"Provide The Following Information About Yourself",aply_pra:"We are going to Check Your Information and You will be Notified if you are Selected or not",in1:"Name",in2:"Surname",in3:"Age",in4:"Email Address",in5:"Phone Number ",in6:"Gender",in6_0:"Not Selected",in6_1:"Male",in6_2:"Female",in6_3:"Non Binary",in7:"Your Study Level",in7_0:"Not Selected",in7_1:"University",in7_2:"High School",in7_3:"Middle School",in7_4:"None of Above",in7_5:"Not Selected",in7_6:"Graduated",in7_7:"Student",in7_8:"Dropped out",in7_9:"Haven't Attened any School",abo_pra:"We are a Team of Web Developers. <br>Who Just Want you to Learn Web Development.",in8:"How much You know About Web Development (HTML-CSS-Javascript) ",in8_0:"Not Selected",in8_1:"a bit",in8_2:"Only The Basics",in8_3:"Good Understanding",in8_4:"Nothing",btn3:"Submit",btn4:"Back to Home Page",btn5:"back ",ap_tx1:"You Already Applied",ap_tx2:"You can't Apply Again",ap_tx3:"Note",ap_tx4:"You can only Apply Once <br> Please, Enter Your Information Carefully",ap_tx5:"You have successfully Applied",ap_tx6:"You will be notified using WhatsApp or Email Address.<br>Make sure to Add our WhatsApp Number",ap_btn:"Close"},lang_dr={title:"C61 Web",pra1:"C61 Web یک کورس آنلاین برای آموزش تکنالوژی ها برای ساختن ویب سایت  میباشد. با گرفتن این کورس شما با مباحث ابتدایی یک کمبیوتر اشنا میشوید و شما قادر به این خواهید بود تا یک ویب سایت بسازید.",opt_t1:" رایگان",opt1:"این کورس کاملا رایگان است بدون هیچ گونه هزینه",opt_t2:"آنلاین",opt2:"شما می توانید هر زمان که وقت داشتید یاد بگیرید",opt_t3:"عملی",opt3:" تنها راهی که می توانید به درس ها بعدی دسترسی پیدا کنید،  انجام دادن همان پروژه های کوچک است",opt_t4:"قابل انعطاف",opt4:"دروس ما به زبان انگلیسی خواهد بود، اما بر اساس شاکردان ، ما به زبان دری نیز دروس میسازیم",opt_t5:"برای همه",opt5:"فرقی نمی کند که با مبانی کامپیوتر آشنایی داشته باشید یا نه، ما از ابتدا شروع می کنیم",btn1:"ثبت نام",btn2:"درباره ما",aply_t:"اطلاعات ‌ذیل را درباره خود ارائه دهید",aply_pra:"مااطلاعات شما را بررسی می کنیم و در صورت انتخاب شدن یا عدم انتخاب به شما اطلاع داده خواهد شد",in1:"اسم",in2:"تخلص",in3:"سن شما",in4:"ایمل ادرس",in5:"شماره تلفون ( واتسب ) ",in6:"جنسیت",in6_1:"مرد",in6_2:"زن",in6_3:"غیر-باینری",in7:"اندازه تحصیل شما",in7_0:"انتخاب نشده",in7_1:"پوهنتون",in7_2:"مکتب ۹-۱۲",in7_3:"مکتب ۱-۹",in7_4:"هیچ کدام",in7_5:"انتخاب نشده",in7_6:"فارغ تحصیل",in7_7:"شاگرد / محصل",in7_8:"ترک تحصیل / ناکام",in7_9:"هیچ یکی",in8:"با تکنالوژی ها ویب چه قدر آشنایی دارید ؟ (HTML-CSS-Javascript) ",in8_0:"انتخاب نشده",in8_1:"آشنایی بسیار کم",in8_2:"آشنایی کم",in8_3:"آشنایی متوسط",in8_4:"هیج",abo_pra:"ما یک تیم از برنامه نویسان ویب هستیم .<br>فقد هدف ما آموزش تکنالوژي های ویب برای شما است.",btn3:"ارسال ",btn4:"برگشت به صفحه اصلی",btn5:"برگشت ",ap_tx1:"شما قبلآ ثبت  نام نموده اید",ap_tx2:"شما نمیتوانید دوباره ثبت نام نماید",ap_tx3:"نوت",ap_tx4:"شما فقد یکبار میتوانید ثبت نام نماید <br> لطفاَ معلومات خود را درست درج نماید",ap_tx5:"شما موفقانه ثبت نام نمودید",ap_tx6:"ما برای شما از طریق WhatsApp یا Email خبر میدهیم.<br> باید شماره   WhatsApp ما را اظافه نماید.",ap_btn:"بستن"};const curr_lang=sessionStorage.getItem("curr_lang");val_na="dr"===curr_lang?($("#body").css("direction","rtl"),$("#lang").css("left","6px"),$("#title").text(lang_dr.title),$("#pra").html(lang_dr.pra1),$("#opt_t1").text(lang_dr.opt_t1),$("#opt1").text(lang_dr.opt1),$("#opt_t2").text(lang_dr.opt_t2),$("#opt2").text(lang_dr.opt2),$("#opt_t3").text(lang_dr.opt_t3),$("#opt3").text(lang_dr.opt3),$("#opt_t4").text(lang_dr.opt_t4),$("#opt4").text(lang_dr.opt4),$("#opt_t5").text(lang_dr.opt_t5),$("#opt5").text(lang_dr.opt5),$("#btn1").text(lang_dr.btn1),$("#btn4").text(lang_dr.btn2),$("#aply_t").text(lang_dr.aply_t),$("#aply_pra").text(lang_dr.aply_pra),$("#in1").text(lang_dr.in1),$("#in2").text(lang_dr.in2),$("#in3").text(lang_dr.in3),$("#in4").text(lang_dr.in4),$("#in5").text(lang_dr.in5),$("#in5").text(lang_dr.in5),$("#in6").text(lang_dr.in6),$("#in6_0").text(lang_dr.in6_0),$("#in6_1").text(lang_dr.in6_1),$("#in6_2").text(lang_dr.in6_2),$("#in7").text(lang_dr.in7),$("#in7_0").text(lang_dr.in7_0),$("#in7_1").text(lang_dr.in7_1),$("#in7_2").text(lang_dr.in7_2),$("#in7_3").text(lang_dr.in7_3),$("#in7_4").text(lang_dr.in7_4),$("#in7_5").text(lang_dr.in7_5),$("#in7_6").text(lang_dr.in7_6),$("#in7_7").text(lang_dr.in7_7),$("#in7_8").text(lang_dr.in7_8),$("#in7_9").text(lang_dr.in7_9),$("#in8").text(lang_dr.in8),$("#in8_0").text(lang_dr.in8_0),$("#in8_1").text(lang_dr.in8_1),$("#in8_2").text(lang_dr.in8_2),$("#in8_3").text(lang_dr.in8_3),$("#in8_4").text(lang_dr.in8_4),$("#btn2").text(lang_dr.btn3),$("#btn3").text(lang_dr.btn4),$("#btn5").text(lang_dr.btn5),$("#btn6").text(lang_dr.btn5),$("#btn7").text(lang_dr.btn5),$("#abo_pra").html(lang_dr.abo_pra),$("#ap_tx1").text(lang_dr.ap_tx1),$("#ap_tx2").text(lang_dr.ap_tx2),$("#ap_tx3").html(lang_dr.ap_tx3),$("#ap_tx4").html(lang_dr.ap_tx4),$("#ap_tx5").html(lang_dr.ap_tx5),$("#ap_tx6").html(lang_dr.ap_tx6),$("#ap_btn").html(lang_dr.ap_btn),{va_re:"لازمی میباشد",va_1:"بدون اسم نمی توانید ثبت نام نماید",va_2:"از ۳ حرف نباید کوچکتر باشد",va_3:"لطفاٌ تخلص تان را بنویسید",va_4:"از ۳ حرف نباید کوچکتر باشد",va_6:"از ۳ عدد برزگتر نباید باشد",va_7:"فقد باید از اعداد استفاده کرد",va_9:"ایمل درست نمیباشد",va_11:"از ۱۰ عدد کمتر نباید باشد",va_12:"از ۱۰ عدد زیادتر نباید باشد",va_14:"جنسیت خود را انتخاب نماید"}):($("#body").css("direction","ltr"),$("#lang").css("right","6px"),$("#title").text(lang_en.title),$("#pra").html(lang_en.pra1),$("#opt_t1").text(lang_en.opt_t1),$("#opt1").text(lang_en.opt1),$("#opt_t2").text(lang_en.opt_t2),$("#opt2").text(lang_en.opt2),$("#opt_t3").text(lang_en.opt_t3),$("#opt3").text(lang_en.opt3),$("#opt_t4").text(lang_en.opt_t4),$("#opt4").text(lang_en.opt4),$("#opt_t5").text(lang_en.opt_t5),$("#opt5").text(lang_en.opt5),$("#btn1").text(lang_en.btn1),$("#btn4").text(lang_en.btn2),$("#btn4").text(lang_en.btn2),$("#aply_t").text(lang_en.aply_t),$("#aply_pra").text(lang_en.aply_pra),$("#in1").text(lang_en.in1),$("#in2").text(lang_en.in2),$("#in3").text(lang_en.in3),$("#in4").text(lang_en.in4),$("#in5").text(lang_en.in5),$("#in5").text(lang_en.in5),$("#in6").text(lang_en.in6),$("#in6_0").text(lang_en.in6_0),$("#in6_1").text(lang_en.in6_1),$("#in6_2").text(lang_en.in6_2),$("#in6_3").text(lang_en.in6_3),$("#in7").text(lang_en.in7),$("#in7_0").text(lang_en.in7_0),$("#in7_1").text(lang_en.in7_1),$("#in7_2").text(lang_en.in7_2),$("#in7_3").text(lang_en.in7_3),$("#in7_4").text(lang_en.in7_4),$("#in7_5").text(lang_en.in7_5),$("#in7_6").text(lang_en.in7_6),$("#in7_7").text(lang_en.in7_7),$("#in7_8").text(lang_en.in7_8),$("#in7_9").text(lang_en.in7_9),$("#in8").text(lang_en.in8),$("#in8_0").text(lang_en.in8_0),$("#in8_1").text(lang_en.in8_1),$("#in8_2").text(lang_en.in8_2),$("#in8_3").text(lang_en.in8_3),$("#in8_4").text(lang_en.in8_4),$("#btn2").text(lang_en.btn3),$("#btn3").text(lang_en.btn4),$("#btn5").text(lang_en.btn5),$("#btn6").text(lang_en.btn5),$("#btn7").text(lang_en.btn5),$("#abo_pra").html(lang_en.abo_pra),$("#ap_tx1").text(lang_en.ap_tx1),$("#ap_tx2").text(lang_en.ap_tx2),$("#ap_tx3").html(lang_en.ap_tx3),$("#ap_tx4").html(lang_en.ap_tx4),$("#ap_tx5").html(lang_en.ap_tx5),$("#ap_tx6").html(lang_en.ap_tx6),$("#ap_btn").html(lang_en.ap_btn),{va_re:"Required",va_1:"You can't Apply without your name",va_2:"can't be less then 3 letters",va_3:"Please, Provide your Surname",va_4:"Can't be less then 3 letters",va_6:"Can't be Higher then 3 digits",va_7:"Only Digits",va_9:"Not a Valid Email",va_11:"Can't Less Then 10 Digits",va_12:"Can't Longer Then 10 Digits",va_14:"Select Your Gender"}),$("#lang_sel").click(t=>{"en"===t.target.value&&(sessionStorage.setItem("curr_lang","en"),location.reload()),"dr"===t.target.value&&(sessionStorage.setItem("curr_lang","dr"),location.reload())}),$("#btn1").click(t=>{window.location.href="https://jasxteam.github.io/c61-project/dumps/apply.html"}),$("#btn4").click(t=>{window.location.href="https://jasxteam.github.io/c61-project/dumps/abo.html"}),$("#btn3").click(t=>{window.location.href="https://jasxteam.github.io/c61-project/index.html"}),$("#btn5").click(t=>{window.location.href="https://jasxteam.github.io/c61-project/index.html"}),$("#btn6").click(t=>{window.location.href="https://jasxteam.github.io/c61-project/index.html"}),$("#btn7").click(t=>{window.location.href="https://jasxteam.github.io/c61-project/index.html"});