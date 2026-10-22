// 개별 페이지 생성기: node tools/build.mjs
// index.html의 데이터(CAMS, CAM_MORE, DEFECTS, RES, FILMS)와 스타일을 읽어
// camera/<slug>/, film/<slug>/, faq/ 페이지와 assets/site.css, sitemap.xml을 만들고
// index.html 안의 <!-- pages:... --> 표시 사이에 링크 목록을 채운다.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {UPDATED, UPDATED_KO, CAM_SLUG, FILM_PAGES, PROCESS, FAQ, PHOTO_CREDIT, LABS, LABS_SRC, MAIL_LABS} from './pages-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://hoochi1213.github.io/36exp/';
const indexPath = path.join(ROOT, 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');

const grab = (start, end) => {
  const i = index.indexOf(start); if (i < 0) throw new Error('not found: ' + start);
  const j = index.indexOf(end, i); return index.slice(i + start.length, j + end.length - 1);
};
const lit = src => Function('return ' + src.trim().replace(/;$/, ''))();
const CAMS = lit(grab('const CAMS=', '\n  ];'));
const CAM_MORE = lit(grab('const CAM_MORE=', '\n  };'));
const DEFECTS = lit(grab('const DEFECTS=', '\n  ];'));
const RES = lit(grab('const RES=', '\n  };'));
const FILMS = lit(grab('const FILMS=', '\n  ];'));
const P = lit(grab('const P=', ';'));
const credits = [...index.matchAll(/<li><b>[^<]*<\/b> <a href="([^"]+)">.*?<\/li>/g)];

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const filmRow = n => FILMS.find(f => f[0] === n);
const filmBySlug = Object.fromEntries(FILM_PAGES.map(f => [f.slug, f]));
const filmByName = Object.fromEntries(FILM_PAGES.map(f => [f.n, f]));
const camByKey = Object.fromEntries(CAMS.map(c => [c.img, c]));
const filmLink = n => filmByName[n] ? `../../film/${filmByName[n].slug}/` : `../../#film`;

// 1) 공용 스타일
const css = index.slice(index.indexOf('<style>\n') + 8, index.indexOf('</style>', index.indexOf('<style>\n')));
fs.mkdirSync(path.join(ROOT, 'assets'), {recursive: true});
fs.writeFileSync(path.join(ROOT, 'assets/site.css'), css.trim() + `
/* 개별 페이지 */
.crumb{font-size:12px;color:var(--ink-2);margin:28px 0 10px}
.crumb a{color:var(--ink-2)}
.page h1{font-family:var(--f-display);font-weight:500;font-size:clamp(30px,5vw,44px);letter-spacing:-.02em;line-height:1.2;margin:0 0 8px}
.page .lede{font-size:16px;max-width:66ch;margin:0 0 6px}
.page .meta{font-size:12px;color:var(--ink-2)}
.page-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:40px;margin-top:28px}
@media (max-width:820px){.page-grid{grid-template-columns:minmax(0,1fr);gap:28px}}
.page h2{font-family:var(--f-display);font-weight:500;font-size:22px;letter-spacing:-.01em;margin:32px 0 8px;padding-top:12px;border-top:1px solid var(--rule)}
.page-grid>div>h2:first-child{margin-top:0}
.page p{margin:0 0 10px;max-width:68ch}
.page ul{margin:0 0 10px;padding-left:20px}
.page li{margin:3px 0}
.gallery{display:grid;gap:18px;margin:0}
.gallery figure{margin:0}
.gallery img{display:block;width:100%;height:auto;background:var(--rule)}
.gallery figcaption{font-size:12.5px;color:var(--ink-2);margin-top:6px}
.checks{list-style:none;padding:0!important}
.checks>li{padding:12px 0;border-bottom:1px solid var(--rule);margin:0}
.checks figure{margin:10px 0 0;border:1px solid var(--rule);background:var(--panel)}
.checks img{display:block;width:100%;max-height:340px;object-fit:cover}
.checks figcaption{font-size:12.5px;color:var(--ink-2);padding:8px 12px}
.bigprice{font-family:var(--f-display);font-size:24px;margin:0 0 4px}
.facts{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;font-size:14px;margin:0 0 10px}
.facts dt{font:500 10.5px/2 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2)}
.facts dd{margin:0}
.links{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 12px}
.links a{text-decoration:none}
.nextprev{display:flex;justify-content:space-between;gap:12px;margin:40px 0 0;padding-top:16px;border-top:1px solid var(--ink);font-size:14px}
.faq-list{max-width:760px}
.faq-list details{border-bottom:1px solid var(--rule);padding:14px 0}
.faq-list summary{cursor:pointer;font-family:var(--f-display);font-size:18px;font-weight:500}
.faq-list details p{margin:10px 0 0}
.labtbl{font-size:13.5px}
.labtbl td,.labtbl th{padding:9px 12px 9px 0;border-bottom:1px solid var(--rule);vertical-align:top}
.labtbl td.n{white-space:nowrap;font-variant-numeric:tabular-nums}
.labtbl .addr{display:block;font-size:12px;color:var(--ink-2)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin:18px 0 8px}
.stats div{border:1px solid var(--rule);padding:12px 14px;background:var(--panel)}
.stats b{display:block;font-family:var(--f-display);font-size:22px;font-weight:500}
.stats span{font-size:12px;color:var(--ink-2)}
.pagefoot{margin-top:48px;padding:28px 0 40px;border-top:1px solid var(--ink);font-size:12.5px;color:var(--ink-2)}
.pagefoot ul{list-style:none;padding:0;margin:8px 0 0}
`);

// 2) 공용 틀
const head = ({title, desc, url, img, ld}) => `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="36 EXP.">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${BASE}photos/${img}">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@300;500;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+KR:wght@400;500;700&display=swap">
<link rel="stylesheet" href="../../assets/site.css">
<script>try{const t=localStorage.getItem('36exp-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<header class="bar">
  <div class="wrap">
    <a class="logo" href="../../"><b>36 EXP.</b><span class="mono">Film Archive</span></a>
    <nav class="nav" aria-label="메뉴">
      <a href="../../#quiz">필름 테스트</a><a href="../../camera/">카메라</a><a href="../../film/">필름</a><a href="../../#develop">현상</a><a href="../../lab/">현상소</a><a href="../../faq/">자주 묻는 질문</a>
    </nav>
  </div>
</header>
<main class="wrap page">
`;
const creditList = photos => {
  const items = [...new Set(photos)].map(p => PHOTO_CREDIT[p] && credits.find(m => m[1].includes(PHOTO_CREDIT[p]))).filter(Boolean);
  return items.length ? `<p class="mono" style="color:var(--ink)">사진 출처 · Wikimedia Commons</p><ul>${items.map(m => m[0].replace('<b>', '<b>').replace(/<\/?b>/g, '')).join('')}</ul>` : '';
};
const foot = photos => `
</main>
<footer class="wrap pagefoot">
  <p>36 EXP.는 필름 사진을 처음 시작하는 사람을 위한 개인 아카이브입니다. 가격은 ${UPDATED_KO} 기준의 대략적인 참고치입니다.</p>
  ${creditList(photos)}
</footer>
</body>
</html>
`;
const crumbLd = items => ({'@type':'BreadcrumbList',itemListElement:items.map(([n,u],i)=>({'@type':'ListItem',position:i+1,name:n,item:u}))});
const write = (rel, html) => { fs.mkdirSync(path.join(ROOT, rel), {recursive: true}); fs.writeFileSync(path.join(ROOT, rel, 'index.html'), html); };
const urls = [BASE];

// 3) 카메라 페이지
const camOrder = CAMS.map(c => c.img);
for (const c of CAMS) {
  const m = CAM_MORE[c.img], slug = CAM_SLUG[c.img], url = `${BASE}camera/${slug}/`;
  const pics = [['cam-' + c.img + '.jpg', c.cap], ...m.pics];
  const defectPics = [];
  const checks = m.buy.map(t => { const d = DEFECTS.find(x => t.includes(x[0])); if (d) defectPics.push(d[1]);
    return `<li>${esc(t)}${d ? `<figure><img src="../../photos/${d[1]}" alt="" loading="lazy"><figcaption>${esc(d[2])}</figcaption></figure>` : ''}</li>`; }).join('');
  const i = camOrder.indexOf(c.img), prev = CAMS[(i + CAMS.length - 1) % CAMS.length], next = CAMS[(i + 1) % CAMS.length];
  const title = `${c.n} 입문 가이드 — 원리·추천 기종·중고 체크·시세 | 36 EXP.`;
  const desc = `${c.n}(${c.en}) 필름 카메라 가이드. ${c.d} 중고로 살 때 확인할 것과 ${UPDATED_KO} 기준 대략 시세(${m.price}).`;
  urls.push(url);
  write(`camera/${slug}`, head({title, desc, url, img: 'cam-' + c.img + '.jpg', ld: {'@context':'https://schema.org','@graph':[
    {'@type':'Article',headline:`${c.n} 입문 가이드`,description:desc,image:`${BASE}photos/cam-${c.img}.jpg`,dateModified:UPDATED,inLanguage:'ko',mainEntityOfPage:url},
    crumbLd([['36 EXP.',BASE],['카메라',BASE+'camera/'],[c.n,url]])]}}) + `
<p class="crumb"><a href="../../">36 EXP.</a> / <a href="../">카메라</a> / ${esc(c.n)}</p>
<h1>${esc(c.n)} <span class="mono" style="font-size:12px;color:var(--ink-2)">${esc(c.en)} · ${esc(c.f)}</span></h1>
<p class="lede">${esc(c.d)}</p>
<p class="meta">${c.new ? '입문 추천 · ' : ''}${UPDATED_KO} 업데이트</p>
<div class="page-grid">
  <div><div class="gallery">${pics.map(p => `<figure><img src="../../photos/${p[0]}" alt="${esc(p[1])}" loading="lazy"><figcaption>${esc(p[1])}</figcaption></figure>`).join('')}</div></div>
  <div>
    <h2>어떻게 찍히나요</h2><p>${esc(m.how)}</p>
    <h2>이런 분께 추천</h2><ul>${m.who.map(w => `<li>${esc(w)}</li>`).join('')}</ul>
    <h2>좋은 점과 아쉬운 점</h2><dl class="facts"><dt>좋은 점</dt><dd>${esc(c.p)}</dd><dt>아쉬운 점</dt><dd>${esc(c.c)}</dd></dl>
    <h2>대표 기종</h2><p>${esc(c.ex)}</p>
    <h2>대략적인 가격</h2><p class="bigprice">${esc(m.price)}</p><p class="meta">${esc(m.pn)} ${UPDATED_KO} 기준, 상태와 시기에 따라 차이가 큰 참고용 금액입니다.</p>
    ${m.films.length ? `<h2>어울리는 필름</h2><div class="links">${m.films.map(f => `<a class="chip" href="${filmLink(f)}">${esc(f)}</a>`).join('')}</div>` : ''}
  </div>
</div>
<h2>중고로 살 때 확인할 것</h2>
<ul class="checks">${checks}</ul>
<nav class="nextprev" aria-label="다른 카메라"><a href="../${CAM_SLUG[prev.img]}/">◂ ${esc(prev.n)}</a><a href="../${CAM_SLUG[next.img]}/">${esc(next.n)} ▸</a></nav>
` + foot([...pics.map(p => p[0]), ...defectPics]));
}

// 4) 필름 페이지
const KIND = {c41:'컬러 네거티브',bw:'흑백 네거티브',e6:'슬라이드(리버설)',ecn:'영화용 컬러 네거티브'};
const filmFull = f => { const r = f.res ? RES[f.res] : {}; const row = filmRow(f.n) || [];
  return {...r, ...f, iso: f.iso ?? r.iso, p: f.p ?? r.p, img: f.img ?? r.img, formats: row[3], short: row[4]}; };
FILM_PAGES.forEach((f0, i) => {
  const f = filmFull(f0), url = `${BASE}film/${f.slug}/`, pr = PROCESS[f.p];
  const prev = FILM_PAGES[(i + FILM_PAGES.length - 1) % FILM_PAGES.length], next = FILM_PAGES[(i + 1) % FILM_PAGES.length];
  const title = `${f.n} 특징·노출 팁·가격 — 필름 가이드 | 36 EXP.`;
  const desc = `${f.n}(ISO ${f.iso}, ${pr[0]}) 필름 리뷰. ${f.why} ${UPDATED_KO} 기준 35mm 가격 ${f.price}.`;
  urls.push(url);
  write(`film/${f.slug}`, head({title, desc, url, img: f.img, ld: {'@context':'https://schema.org','@graph':[
    {'@type':'Article',headline:`${f.n} 필름 가이드`,description:desc,image:`${BASE}photos/${f.img}`,dateModified:UPDATED,inLanguage:'ko',mainEntityOfPage:url},
    crumbLd([['36 EXP.',BASE],['필름',BASE+'film/'],[f.n,url]])]}}) + `
<p class="crumb"><a href="../../">36 EXP.</a> / <a href="../">필름</a> / ${esc(f.n)}</p>
<h1>${esc(f.n)}</h1>
<p class="lede">${esc(f.why)}</p>
<p class="meta">ISO ${f.iso} · ${esc(pr[0])} · ${UPDATED_KO} 업데이트</p>
<div class="page-grid">
  <div><div class="gallery"><figure><img src="../../photos/${f.img}" alt="${esc(f.n)}로 찍은 사진" loading="lazy"><figcaption>${esc(f.n)}로 찍은 사진</figcaption></figure></div></div>
  <div>
    <h2>한눈에 보기</h2>
    <dl class="facts"><dt>감도</dt><dd>ISO ${f.iso}</dd><dt>종류</dt><dd>${KIND[f.p]} · ${esc(pr[0])} 현상</dd>${f.formats ? `<dt>판형</dt><dd>${esc(f.formats)}</dd>` : ''}<dt>이럴 때</dt><dd>${esc(f.when)}</dd><dt>가격</dt><dd>${esc(f.price)} <span class="meta">(35mm 36컷, ${UPDATED_KO} 국내 대략)</span></dd></dl>
    <h2>특징</h2><ul>${f.char.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
    <h2>찍을 때 팁</h2><p>${esc(f.tip)}</p>
  </div>
</div>
<h2>이 필름에 대해</h2><p>${esc(f.more)}</p>
<h2>현상</h2><p>${pr[1]}</p>
<h2>어울리는 카메라</h2><div class="links">${f.cams.map(k => `<a class="chip" href="../../camera/${CAM_SLUG[k]}/">${esc(camByKey[k].n)}</a>`).join('')}</div>
<h2>비슷한 필름</h2><div class="links">${f.alt.map(s => `<a class="chip" href="../${s}/">${esc(filmBySlug[s].n)}</a>`).join('')}</div>
<nav class="nextprev" aria-label="다른 필름"><a href="../${prev.slug}/">◂ ${esc(prev.n)}</a><a href="../${next.slug}/">${esc(next.n)} ▸</a></nav>
` + foot([f.img]));
});

// 5) 목록 페이지 (카메라 / 필름)
const listPage = (rel, name, desc, items, img) => { const url = `${BASE}${rel}/`; urls.push(url);
  write(rel, (head({title: `${name} — 36 EXP.`, desc, url, img, ld: {'@context':'https://schema.org','@graph':[crumbLd([['36 EXP.',BASE],[name,url]])]}}) + `
<p class="crumb"><a href="../">36 EXP.</a> / ${esc(name)}</p>
<h1>${esc(name)}</h1><p class="lede">${esc(desc)}</p>
<div class="cams" style="margin-top:24px">${items.map(it => `<a class="cam" href="${it.href}" style="text-decoration:none;color:inherit;cursor:pointer"><figure class="shot"><img src="../photos/${it.img}" alt="" loading="lazy"></figure><h4>${esc(it.n)} <span class="mono">${esc(it.tag)}</span></h4><p>${esc(it.d)}</p><span class="more">자세히 보기</span></a>`).join('')}</div>
` + foot(items.map(it => it.img))).replaceAll('../../', '../'));
};
listPage('camera', '필름 카메라 종류별 가이드', '판형과 형식에 따라 나눈 10가지 필름 카메라. 원리, 추천 기종, 중고로 살 때 확인할 것, 대략적인 시세를 정리했습니다.',
  CAMS.map(c => ({href: `${CAM_SLUG[c.img]}/`, img: `cam-${c.img}.jpg`, n: c.n, tag: c.f, d: c.d})), 'camera.jpg');
listPage('film', '필름별 가이드', '처음 고르기 좋은 필름 10종의 특징, 노출 팁, 현상 방법, 가격을 정리했습니다.',
  FILM_PAGES.map(f0 => { const f = filmFull(f0); return {href: `${f.slug}/`, img: f.img, n: f.n, tag: `ISO ${f.iso}`, d: f.why}; }), 'film.jpg');

// 6) FAQ
{ const url = `${BASE}faq/`; urls.push(url);
  write('faq', head({title: '필름 사진 자주 묻는 질문 12가지 — 36 EXP.', desc: '공항 엑스레이, 유통기한 지난 필름, 현상 비용, ISO 고르기 등 필름 사진을 시작할 때 가장 많이 묻는 질문과 답.', url, img: 'og.jpg',
    ld: {'@context':'https://schema.org','@graph':[{'@type':'FAQPage',mainEntity:FAQ.map(x => ({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a.replace(/<[^>]+>/g, '')}}))},
      crumbLd([['36 EXP.',BASE],['자주 묻는 질문',url]])]}}).replaceAll('../../', '../') + `
<p class="crumb"><a href="../">36 EXP.</a> / 자주 묻는 질문</p>
<h1>자주 묻는 질문</h1><p class="lede">필름 사진을 시작할 때 가장 많이 묻는 질문들입니다. 질문을 누르면 답이 펼쳐집니다.</p>
<div class="faq-list" style="margin-top:20px">${FAQ.map((x, i) => `<details${i < 3 ? ' open' : ''}><summary>${esc(x.q)}</summary><p>${x.a}</p></details>`).join('')}</div>
` + foot([]).replaceAll('../../', '../'));
}

// 6-2) 현상소
{ const url = `${BASE}lab/`; urls.push(url);
  const won = v => v == null ? '–' : v.toLocaleString('ko-KR');
  const base = LABS.map(l => l.c[0]).filter(v => v != null).sort((a, b) => a - b);
  const hi = LABS.map(l => l.c[1]).filter(v => v != null).sort((a, b) => a - b);
  const med = a => a.length % 2 ? a[(a.length - 1) / 2] : Math.round((a[a.length / 2 - 1] + a[a.length / 2]) / 2);
  const regions = [...new Set(LABS.map(l => l.r))];
  write('lab', head({title: `필름 현상소 목록과 가격 비교 (${UPDATED_KO}) — 36 EXP.`, desc: `서울·경기·부산·대구 필름 현상소 ${LABS.length}곳의 35mm 컬러·흑백·슬라이드·120 현상+스캔 가격 비교와 택배 접수 현상소, 맡기는 법.`, url, img: 'lab.jpg',
    ld: {'@context':'https://schema.org','@graph':[crumbLd([['36 EXP.',BASE],['현상소',url]])]}}).replaceAll('../../', '../') + `
<p class="crumb"><a href="../">36 EXP.</a> / 현상소</p>
<h1>필름 현상소 목록과 가격</h1>
<p class="lede">35mm 컬러 필름 한 롤을 현상하고 스캔까지 받는 데 드는 비용은 생각보다 저렴합니다. 지역별 현상소 ${LABS.length}곳의 가격을 한 표로 비교했습니다.</p>
<p class="meta">가격 기준: <a href="${LABS_SRC.url}">${LABS_SRC.name}</a> (${LABS_SRC.date}) 및 각 현상소 공지. 가격과 운영 여부는 수시로 바뀌니 맡기기 전에 꼭 확인하세요.</p>
<div class="stats">
  <div><b>${won(base[0])}~${won(base[base.length - 1])}원</b><span>35mm 컬러 현상+기본 스캔</span></div>
  <div><b>${won(med(base))}원</b><span>기본 스캔 중간값 (${base.length}곳)</span></div>
  <div><b>${won(med(hi))}원</b><span>고해상도 스캔 중간값 (${hi.length}곳)</span></div>
</div>
${regions.map(r => `<h2>${r}</h2>
<div class="scroll"><table class="labtbl"><thead><tr><th>현상소</th><th>35mm 컬러<br>기본 / 고해상</th><th>35mm 흑백</th><th>35mm 슬라이드</th><th>120 컬러</th></tr></thead><tbody>
${LABS.filter(l => l.r === r).map(l => `<tr><td>${l.u ? `<a href="${l.u}" rel="nofollow noopener">${esc(l.n)}</a>` : esc(l.n)}${l.mail ? ' <span class="tag" style="margin:0">택배</span>' : ''}<span class="addr">${esc(l.a)}</span></td><td class="n">${won(l.c[0])} / ${won(l.c[1])}</td><td class="n">${won(l.bw)}</td><td class="n">${won(l.sl)}</td><td class="n">${won(l.m)}</td></tr>`).join('')}
</tbody></table></div>`).join('')}
<p class="meta">단위: 원. "–"는 해당 서비스가 없거나 가격이 확인되지 않은 경우입니다. 더 많은 현상소는 <a href="${LABS_SRC.url}">${LABS_SRC.name}</a>에서 볼 수 있습니다.</p>
<h2>택배로 맡길 수 있는 곳</h2>
<p>근처에 현상소가 없다면 택배 접수를 받는 곳에 보내면 됩니다. 파일은 메일이나 다운로드 링크로 받습니다.</p>
<ul>${MAIL_LABS.map(l => `<li><a href="${l.u}" rel="nofollow noopener">${esc(l.n)}</a> — ${esc(l.d)}</li>`).join('')}</ul>
<h2>처음 맡길 때 알아 둘 것</h2>
<ul>
<li><b>기본은 "현상 + 스캔"</b>입니다. 인화는 파일을 받아 본 뒤 마음에 드는 컷만 주문해도 됩니다.</li>
<li><b>기본 스캔과 고해상도 스캔</b>: 휴대폰·SNS용이면 기본으로 충분하고, 크게 인화할 계획이면 고해상도를 고르세요.</li>
<li><b>흑백과 슬라이드</b>는 받는 곳이 적고 며칠 더 걸립니다. 표에서 가격이 있는 곳을 고르세요.</li>
<li><b>푸시 현상(+1, +2)</b>이나 하프프레임 스캔 방식은 접수할 때 롤마다 적어 주세요.</li>
<li>맡기는 순서와 요청 사항 쓰는 법은 <a href="../#lab">현상소 맡기는 법</a>에 정리했습니다.</li>
</ul>
` + foot(['lab.jpg']).replaceAll('../../', '../'));
}

// 7) index.html에 정적 링크 채우기 (검색 로봇이 따라갈 수 있도록)
const fill = (key, html) => { const re = new RegExp(`(<!-- pages:${key} -->)[\\s\\S]*?(<!-- /pages:${key} -->)`);
  if (!re.test(index)) throw new Error('marker missing: ' + key); index = index.replace(re, `$1${html}$2`); };
fill('cams', `<p class="pagelinks"><span class="mono">카메라별 가이드</span> ${CAMS.map(c => `<a href="camera/${CAM_SLUG[c.img]}/">${esc(c.n)}</a>`).join(' · ')}</p>`);
fill('films', `<p class="pagelinks"><span class="mono">필름별 가이드</span> ${FILM_PAGES.map(f => `<a href="film/${f.slug}/">${esc(f.n)}</a>`).join(' · ')}</p>`);
fs.writeFileSync(indexPath, index);

// 8) 사이트맵
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${UPDATED}</lastmod>\n  </url>`).join('\n')}
</urlset>
`);
console.log(`built ${urls.length} urls`);
