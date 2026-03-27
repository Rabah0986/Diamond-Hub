let currentDirectLink = ""; 

// 1. قاعدة البيانات (ضع روابطك هنا)
const data = {
    mods: [
        { id: 'm1', name: 'مود التحليل السريع للموارد', img: 'Ta.jpg', desc:'هل تعبت من التحليل البطيئ في عالمك هذا المود سيقدم لك خيار التحليل السريع للموارد مثل الجافا', stars: '⭐⭐⭐⭐', link:'https://drive.google.com/file/d/16OfO55F-afNLmnNLyPUma54PW3UyG2K0/view?usp=drivesdk' },
        { id: 'm2', name: 'اللغة العربية اخر اصدار', img:'Ar.jpg', desc:'مود سيحول اللعبة كلها الى العربية وسيسهل لك فهم اللعبة', stars: '⭐⭐⭐⭐⭐', link: 'https://drive.google.com/file/d/1EgXrj9-dR1vSWrCNKZ0T2pEWmqQ_xlrV/view?usp=drivesdk' }, 
        
         { id: 'm3', name: 'كيانات نيون', img:'Ni.jpg', desc:'هل أنتم يا أصدقاء تبحثون عن حزمة جلد 6D رائعة في Minecraft؟ إذاً هذا الإضافة الصغيرة مخصصة لكم، الجلود رائعة جداً والتصميم مميز جداً، لا أطيل عليكم، جربوها فقط واستمتعوا باللعب ', stars: '⭐⭐⭐⭐⭐', link: 'https://drive.google.com/file/d/1SKqF4ogeNpI660fhh0HKcSHXgBfho0FF/view?usp=drivesdk' }, 
         
           { id: 'm4', name:'رسوس باك برتقالي', img:'Or.jpg', desc:'هل أنت لاعب PVP يحاول العثور على حزمة جيدة من التّقنيات ذات اللّون البرتقالي؟ إذا كان الأمر كذلك، فقد جئت إلى المكان المناسب.', stars: '⭐⭐⭐', link: 'https://drive.google.com/file/d/1wdG2rQt0_CLz0u6neh0IlNbitCClhTkD/view?usp=drivesdk' }, 
           
           
           { id: 'm5', name: 'الصعوبة المستحيلة', img:'lm.jpg', desc:'لقد جمع مود Minecraft But Pack جميع التحديات في مجموعة واحدة. سيكون عليك البقاء على قيد الحياة في اللعبة، حيث سيكون من الصعب للغاية الوصول إلى تنين إيند والتغلب عليه', stars: '⭐⭐⭐⭐', link: 'https://drive.google.com/file/d/1GYJpMMZSIoJDBLwDpKQZojHq1aREpJKF/view?usp=drivesdk' }
         
         ],
    maps: [{ id: 'p1', name: 'One Block', img: 'one.jpg', desc: 'ماب البلوكة الواحدة في السماء اختبر مهرات بقائك على بلوكة واحدة متجددة', stars: '⭐⭐⭐⭐⭐', link: 'https://drive.google.com/file/d/10GKytFdZlqleM_TQn84tqFdDYAL_niOE/view?usp=drivesdk' }, 
    
    { id: 'p2', name: 'ارتفاع الحمم', img: 'bor.jpg', desc:'كن سريعًا وماهراً لإكمال السباق عبر العقبات بينما ترتفع الحمم البركانية!', stars: '⭐⭐⭐', link: 'https://drive.google.com/file/d/1eMLgfJbCd-3sgJGJnW2VCGt7jZNl7M8s/view?usp=drivesdk' }, 
    
    { id: 'p3', name: 'ماب التدريب pvp', img: 'pvp.jpg', desc: 'هل رغبت يومًا في أن تصبح أفضل في Skywars أو Bedwars أو أي نمط PvP آخر؟ إذن فأنت بحاجة إلى هذه الخريطة! يمكنك تنزيلها الآن. إنها الخريطة التي حلمت بها دائمًا! يمكنك التدريب في 11 نمطًا مختلفًا من اللعبة. التدريب على جمع لآلئ الهامش: سيكون لديك عدد لا نهائي من لآلئ الهامش والكتل، حتى تتمكن من جمعها جميعً', stars: '⭐⭐⭐⭐⭐', link: 'https://drive.google.com/file/d/1F84TkAoXZC_d5J6w-1TKphO4Ei8kQA-S/view?usp=drivesdk' }
    
     ],
    mc: [{ id: 'v1', name: 'TINY TAKEDVER 26.10', img: 'Mi.png', desc: 'التحديث الرسمي.', stars: '⭐⭐⭐⭐⭐', link: 'https://drive.google.com/file/d/1DQXhKiTxLbOo7aN2jZh-XSgK66jbybun/view?usp=drivesdk' }
        
    ],
    skins: [{ id: 's1', name: 'Goku UI', img: 'Sk.png', desc: 'سكن أسطوري.', stars: '⭐⭐⭐⭐⭐', link: '#' }]
};

// ⚡ تحويل رابط درايف لمباشر
function getDirect(url) {
    if (url.includes('drive.google.com')) {
        let fileId = url.split('/d/')[1].split('/')[0];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return url;
}

function playClick() {
    const s = document.getElementById("click-sound");
    if(s) { s.currentTime = 0; s.play().catch(()=>{}); }
}

function renderAll() {
    Object.keys(data).forEach(type => {
        const container = document.getElementById(`${type}-list`);
        if (container) {
            container.innerHTML = data[type].map(item => `
                <div class="mod-box" onclick="openDetail('${type}', '${item.id}')">
                    <div class="mod-img-container"><img src="${item.img}"></div>
                    <h3>${item.name}</h3>
                    <p>محتوى مميز</p>
                    <div class="stars">${item.stars}</div>
                    <button class="download-btn" onclick="playClick(); event.stopPropagation();">تنزيل</button>
                </div>
            `).join('');
        }
    });
}

function openDetail(type, id) {
    playClick();
    const item = data[type].find(i => i.id === id);
    if(item) {
        document.getElementById("mod-name").innerText = item.name;
        document.getElementById("mod-img").src = item.img;
        document.getElementById("mod-desc").innerText = item.desc;
        currentDirectLink = getDirect(item.link || "#");
        document.getElementById("mod-detail").style.display = "flex";
    }
}

function downloadMod() {
    playClick();
    if (currentDirectLink !== "#") {
        window.open(currentDirectLink, '_blank');
    } else { alert("جارٍ التنزيل..."); }
}

function closeModDetail() { playClick(); document.getElementById("mod-detail").style.display = "none"; }
function closeModDetailOutside(e) { if(e.target.id === "mod-detail") closeModDetail(); }

function showTab(tabId, el) {
    playClick();
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = "none");
    document.getElementById(tabId).style.display = "block";
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

window.onload = () => {
    renderAll();
    setTimeout(() => {
        const s = document.getElementById("splash");
        if(s) { s.style.opacity = "0"; setTimeout(() => s.style.display = "none", 800); }
    }, 3000);
};