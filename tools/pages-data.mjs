// 개별 페이지 전용 데이터. 카메라·필름의 기본 데이터는 index.html(CAMS, CAM_MORE, DEFECTS, RES, FILMS)에서 읽어 온다.
export const UPDATED = '2026-10-22';
export const UPDATED_KO = '2026년 10월';

// 카메라 img 키 → 주소
export const CAM_SLUG = {
  ps: 'point-and-shoot', slr: 'manual-slr', af: 'af-slr', rf: 'rangefinder', half: 'half-frame',
  tlr: 'tlr', mf: 'medium-format', lf: 'large-format', toy: 'toy-camera', inst: 'instant',
};

// 필름 페이지. res: index.html의 RES 키(있으면 why/when/cam/tip을 가져옴)
export const FILM_PAGES = [
  {slug:'portra-400',res:'portra400',n:'Kodak Portra 400',
    char:['피부 톤이 자연스럽고 채도는 차분한 편','ISO 400치고 입자가 고움','과다 노출에 매우 강함: +2~3스톱까지 무난'],
    usd:['$18.50','Brooklyn Film Camera (미국)','https://pellica.app/blog/film-prices-2026-guide/'],cams:['ps','slr','mf'],alt:['portra-160','gold-200'],
    more:'"실패 없는 첫 컬러 필름"을 묻는다면 가장 먼저 나오는 이름입니다. 맑은 날부터 흐린 날, 그늘, 해 질 녘까지 한 롤로 다 찍을 수 있을 만큼 관용도가 넓고, 현상소 스캔으로도 색이 크게 흔들리지 않습니다. 가격이 오른 것이 유일한 단점입니다.'},
  {slug:'portra-160',res:'portra160',n:'Kodak Portra 160',
    char:['채도가 낮고 톤이 아주 부드러움','입자가 매우 고와 중형·대형에서 진가','감도가 낮아 빛이 충분한 곳 전용'],
    cams:['slr','mf','tlr'],alt:['portra-400','ektar-100'],
    more:'인물 사진가와 웨딩 사진가가 오래 써 온 필름입니다. 같은 Portra라도 400보다 색이 한층 담백하고 매끈해서, 맑은 날 창가나 그늘 아래 인물에서 가장 곱게 나옵니다. 120 중형으로 찍으면 입자를 거의 느낄 수 없습니다.'},
  {slug:'gold-200',res:'gold',n:'Kodak Gold 200',
    char:['노랗고 따뜻한 색, 향수 어린 느낌','입자는 적당히 보이는 편','가격이 저렴해 연습용으로 좋음'],
    usd:['$8.99','Film Supply Club (미국)','https://pellica.app/blog/film-prices-2026-guide/'],cams:['ps','half','toy'],alt:['portra-400','ektar-100'],
    more:'"필름 느낌"이라고 할 때 떠올리는 그 따뜻한 색을 가장 저렴하게 내는 필름입니다. 빛이 좋은 낮에 강하고, 그늘이나 실내에서는 다소 탁해질 수 있습니다. 첫 롤이나 여행 스냅용으로 부담 없이 쓰기 좋습니다.'},
  {slug:'ektar-100',res:'ektar',n:'Kodak Ektar 100',
    char:['컬러 네거티브 중 가장 선명하고 채도가 높음','입자가 매우 고움','노출이 부족하면 색이 쉽게 틀어짐'],
    usd:['$16.00','Brooklyn Film Camera (미국)','https://pellica.app/blog/film-prices-2026-guide/'],cams:['slr','mf','lf'],alt:['fujifilm-velvia-50','portra-160'],
    more:'슬라이드 필름처럼 쨍한 색을 컬러 네거티브의 편안함으로 얻고 싶을 때 고르는 필름입니다. 파란 하늘, 단풍, 도시의 간판 색이 진하게 살아납니다. 다만 피부는 붉게 나오기 쉬워 인물보다 풍경에 어울립니다.'},
  {slug:'fujifilm-velvia-50',res:'velvia',n:'Fujifilm Velvia 50',
    char:['극채도: 초록과 빨강이 특히 강함','관용도가 좁아 ±½스톱 안에서 맞춰야 함','라이트박스에서 보는 슬라이드 그 자체가 결과물'],
    usd:['$35.99','Film Supply Club (미국), 품절 표시','https://pellica.app/blog/fujifilm-discontinuation-guide-2026/'],cams:['slr','mf','lf'],alt:['kodak-ektachrome-e100','ektar-100'],
    more:'풍경 사진가들의 전설적인 슬라이드 필름입니다. 정확히 노출된 Velvia 한 장은 디지털로 흉내 내기 어려운 깊은 색을 냅니다. 대신 노출계가 정확한 카메라와 삼각대, E-6를 받는 현상소가 필요합니다. 많은 사용자가 ISO 40으로 놓고 찍습니다.'},
  {slug:'cinestill-800t',res:'cinestill',n:'CineStill 800T',
    char:['영화용 필름을 C-41로 현상할 수 있게 개조','렘젯층이 없어 강한 광원 주위로 붉은 헐레이션','텅스텐(실내 조명) 기준 색온도'],
    usd:['$17.99','Film Supply Club (미국)','https://pellica.app/blog/film-prices-2026-guide/'],cams:['rf','slr'],alt:['portra-400','ilford-hp5-plus'],
    more:'밤 사진을 위한 필름입니다. 가로등, 네온, 자동차 불빛 주위로 번지는 붉은 빛이 이 필름의 상징입니다. 낮에 그냥 찍으면 전체가 파랗게 나오므로, 낮에는 85번 필터를 쓰거나 ISO 500 정도로 놓고 찍습니다.'},
  {slug:'ilford-hp5-plus',res:'hp5',n:'Ilford HP5 Plus',
    char:['부드러운 계조, 적당한 입자','푸시에 강함: 800~3200까지 올려 현상 가능','집에서 흑백 현상 연습하기에 좋음'],
    usd:['$10.00','Film Supply Club (미국), 10롤 묶음 기준 1롤','https://pellica.app/blog/film-prices-2026-guide/'],cams:['slr','rf','tlr'],alt:['kodak-tri-x-400','ilford-fp4-plus'],
    more:'흑백을 처음 시작할 때 가장 무난한 필름입니다. 어두운 실내나 흐린 날에는 1600으로 놓고 찍은 뒤 현상소에 "+2 푸시"를 요청하면 됩니다. 가격도 흑백 필름 중 합리적인 편이라 연습용으로도 좋습니다.'},
  {slug:'kodak-tri-x-400',res:'trix',n:'Kodak Tri-X 400',
    char:['굵고 힘 있는 입자, 깊은 대비','거리·다큐멘터리 사진의 고전','푸시 현상에도 계조가 잘 버팀'],
    usd:['$9.16','Film Supply Club (미국), 10롤 묶음 기준 1롤','https://pellica.app/blog/film-prices-2026-guide/'],cams:['rf','slr'],alt:['ilford-hp5-plus','ilford-fp4-plus'],
    more:'수십 년 동안 보도 사진가와 거리 사진가가 써 온 흑백 필름입니다. HP5보다 대비가 조금 더 강하고 입자가 또렷해, 강한 햇빛 아래 그림자가 진 거리에서 특히 멋이 납니다.'},
  {slug:'ilford-fp4-plus',n:'Ilford FP4 Plus',iso:125,p:'bw',img:'x-fp4.jpg',
    why:'입자가 곱고 계조가 넓은 저감도 흑백. 밝은 날 섬세한 흑백을 남기고 싶을 때 고릅니다.',
    when:'맑은 날 풍경·건축, 인물',cam:'레인지파인더, 중형, 대형',
    tip:'빛이 부족하면 삼각대를 쓰거나 HP5로 바꾸세요. 하이라이트가 잘 버팁니다.',
    char:['ISO 125, 고운 입자','하이라이트부터 그림자까지 넓은 계조','중형·대형에서 특히 섬세함'],
    cams:['rf','mf','lf'],alt:['ilford-hp5-plus','kodak-tri-x-400'],
    more:'HP5가 "어디서나 쓰는 흑백"이라면 FP4는 "빛이 좋을 때 꺼내는 흑백"입니다. 입자가 거의 드러나지 않아 큰 인화에도 매끈하고, 회색 단계가 풍부하게 남습니다. 사진 예시는 Leica M3로 찍은 FP4입니다.'},
  {slug:'kodak-ektachrome-e100',n:'Kodak Ektachrome E100',iso:100,p:'e6',img:'x-ektachrome.jpg',
    why:'깨끗하고 살짝 차가운 색의 슬라이드 필름. Velvia보다 자연스러운 채도를 원할 때 고릅니다.',
    when:'맑은 날 풍경, 여행, 라이트박스 감상',cam:'노출계가 정확한 수동 SLR, 중형',
    tip:'관용도가 좁아요. 밝은 부분에 노출을 맞추고, 애매하면 반 스톱 어둡게.',
    char:['중립에서 약간 차가운 색','입자가 매우 고움','관용도 ±½~1스톱으로 좁음'],
    usd:['$24.01','Film Supply Club (미국), 같은 날 품절 언급 있음','https://pellica.app/blog/film-prices-2026-guide/'],cams:['slr','mf'],alt:['fujifilm-velvia-50','ektar-100'],
    more:'2018년에 다시 생산되기 시작한 Kodak의 슬라이드 필름입니다. Velvia처럼 과장된 색이 아니라 실제에 가까운 깨끗한 색을 내고, 피부 톤도 비교적 자연스럽습니다. E-6 현상을 받는 현상소를 먼저 확인하세요.'},
  {slug:'portra-800',n:'Kodak Portra 800',iso:800,p:'c41',img:'f-portra800.jpg',
    why:'Portra의 부드러운 톤을 어두운 곳까지 가져가는 고감도 컬러 필름. 해 질 녘과 실내에서 꺼냅니다.',
    when:'저녁, 실내, 흐린 날 인물',cam:'자동 똑딱이, 수동 SLR, 중형',
    tip:'저녁 실내라면 노출계를 믿고, 애매하면 한 스톱 밝게. 낮에는 조리개를 조이거나 빠른 셔터로.',
    char:['ISO 800인데도 Portra 특유의 따뜻하고 차분한 색','어두운 곳에서 손떨림 없이 찍을 여유','감도만큼 입자는 400보다 조금 굵음'],
    usd:['$19.95','B&H (미국)','https://www.bhphotovideo.com/c/buy/35mm-film/ci/39569'],cams:['ps','slr','mf'],alt:['portra-400','cinestill-800t'],
    more:'"Portra 400으로는 조금 어둡다" 싶은 상황을 위한 필름입니다. 저녁 골목, 조명이 켜진 카페, 흐린 날의 인물에서 색을 크게 잃지 않고 부드럽게 남깁니다. 예시 사진은 Olympus XA로 찍은 Portra 800입니다.'},
  {slug:'kodak-ultramax-400',n:'Kodak UltraMax 400',iso:400,p:'c41',img:'f-ultramax.jpg',
    why:'진한 색과 넉넉한 감도를 저렴하게. 일상과 여행을 부담 없이 찍는 범용 컬러 필름입니다.',
    when:'여행, 일상 스냅, 흐린 날',cam:'자동 똑딱이, 하프프레임, 수동 SLR',
    tip:'맑은 날과 그늘을 오가도 무난합니다. 실내는 창가처럼 빛이 있는 곳에서.',
    char:['채도가 높고 대비가 또렷한 편','ISO 400이라 흐린 날·그늘에서도 여유','35mm 전용, 가격이 저렴'],
    usd:['$9.99','Film Supply Club (미국)','https://pellica.app/blog/film-prices-2026-guide/'],cams:['ps','half','slr'],alt:['gold-200','portra-400'],
    more:'Gold 200보다 감도가 한 스톱 높아 쓸 수 있는 상황이 넓고, Portra 400보다 훨씬 저렴합니다. 색이 진하고 선명하게 나와 "필름 느낌"을 가볍게 즐기기 좋습니다. 예시 사진은 Zenit ET로 찍은 UltraMax 400입니다.'},
  {slug:'cinestill-400d',n:'CineStill 400D',iso:400,p:'c41',img:'film.jpg',cap:'CineStill 필름 카트리지 (사진은 800T, 400D 예시 사진은 준비 중)',
    why:'영화용 필름을 바탕으로 한 주광용 컬러 필름. 800T의 낮 버전처럼 쓸 수 있습니다.',
    when:'맑은 날 여행, 야외 인물, 영화 같은 색감',cam:'수동 SLR, 레인지파인더, 자동 똑딱이',
    tip:'낮에 바로 쓸 수 있는 주광 밸런스입니다. 강한 빛 주위로 약한 붉은 번짐이 생길 수 있어요.',
    char:['주광(햇빛) 기준 색온도','C-41로 현상, 일반 현상소에 그대로 맡김','밝은 광원 주위로 헐레이션이 생길 수 있음'],
    usd:['$17.99','B&H (미국)','https://www.bhphotovideo.com/c/product/1702256-REG/cinestill_film_400d36exp_400dynamic_color_negative_film.html'],cams:['slr','rf','ps'],alt:['cinestill-800t','portra-400'],
    more:'CineStill 800T가 밤과 실내용이라면 400D는 낮을 위한 필름입니다. 영화 필름 계열의 색감을 낮 야외에서 쓰고 싶을 때 고릅니다. B&H 기준 일시 품절 상태였으니 구매 전 재고를 확인하세요.'},
  {slug:'harman-phoenix-200',n:'Harman Phoenix 200',iso:200,p:'c41',img:'f-phoenix.jpg',
    why:'흑백 필름 회사 Harman(일포드)이 만든 실험적인 컬러 필름. 강한 대비와 빛 번짐이 개성입니다.',
    when:'맑은 날 야외, 실험적인 색을 원할 때',cam:'수동 SLR, 자동 똑딱이',
    tip:'노출을 넉넉히(한 스톱 밝게) 주는 편이 색이 안정적입니다. 결과가 매번 다를 수 있다는 걸 즐기세요.',
    char:['대비가 강하고 색이 독특하게 틀어짐','밝은 빛 주위로 헐레이션이 두드러짐','입자가 보이는 편'],
    usd:['$13.99','CineStill 온라인 스토어','https://cinestillfilm.com/products/phoenix200-color-negative-film-35mm'],cams:['slr','ps'],alt:['kodak-ultramax-400','cinestill-400d'],
    more:'"무난한 색"이 아니라 "우연한 색"을 원할 때 고르는 필름입니다. 같은 롤 안에서도 빛에 따라 결과가 크게 달라집니다. 이후 개선판인 Phoenix II도 나왔습니다. 예시 사진은 Olympus Pen FT로 찍은 Phoenix 200입니다.'},
  {slug:'ilford-xp2-super',kind:'흑백 네거티브',n:'Ilford XP2 Super',iso:400,p:'c41',img:'f-xp2.jpg',
    why:'컬러 현상(C-41)으로 처리하는 흑백 필름. 흑백을 찍고 싶은데 흑백 현상소가 멀 때 정답입니다.',
    when:'거리, 여행, 흑백을 처음 시도할 때',cam:'자동 똑딱이, 수동 SLR',
    tip:'노출 관용도가 넓어 감도를 조금 바꿔 찍어도 무난합니다. 현상소에 "C-41 흑백"이라고 말하면 됩니다.',
    char:['결과는 흑백, 현상은 컬러 공정(C-41)','입자가 곱고 계조가 부드러움','어느 컬러 현상소에나 맡길 수 있음'],
    usd:['$17.49','B&H (미국, 이전 가격일 수 있음)','https://www.bhphotovideo.com/c/buy/35mm-film/ci/39569'],cams:['ps','slr'],alt:['ilford-hp5-plus','kodak-tri-x-400'],
    more:'흑백 필름은 받는 현상소가 적고 며칠 더 걸리는데, XP2 Super는 컬러 필름과 똑같이 맡기면 됩니다. 결과는 매끄럽고 부드러운 흑백입니다. 예시 사진은 XP2 Super로 찍은 영국 레스터의 건물입니다.'},
  {slug:'ilford-delta-3200',n:'Ilford Delta 3200',iso:3200,p:'bw',img:'x-negative.jpg',cap:'현상된 35mm 네거티브 (Delta 3200 예시 사진은 준비 중)',
    why:'어두운 곳 전용 초고감도 흑백 필름. 공칭 감도는 약 1000이고, 3200으로 찍어 푸시 현상하는 것이 일반적입니다.',
    when:'밤 거리, 공연장, 어두운 실내',cam:'밝은 렌즈의 수동 SLR, 레인지파인더',
    tip:'ISO 3200으로 찍었다면 현상소에 "3200으로 현상"이라고 꼭 적으세요. 한 롤은 같은 감도로.',
    char:['어두운 곳에서도 손으로 들고 찍을 수 있는 감도','굵고 뚜렷한 입자','실제 감도는 약 1000, 3200은 푸시 기준'],
    usd:['$18.99','B&H (미국)','https://www.bhphotovideo.com/c/product/142802-REG/Ilford_1887710_Delta_3200_Professional_135_36_B_W.html'],cams:['slr','rf'],alt:['ilford-hp5-plus','kodak-tri-x-400'],
    more:'플래시 없이 밤을 찍고 싶을 때 쓰는 흑백 필름입니다. 입자가 굵게 드러나는데, 이 거친 질감이 밤 사진의 분위기를 만듭니다. 맑은 낮에는 너무 밝아 쓰기 어렵습니다.'},
  {slug:'kodak-t-max-400',n:'Kodak T-Max 400',iso:400,p:'bw',img:'f-tmax400.jpg',
    why:'ISO 400인데 입자가 매우 고운 흑백 필름. 선명하고 매끈한 흑백을 원할 때 고릅니다.',
    when:'건축, 풍경, 선명한 거리 사진',cam:'수동 SLR, 중형, 대형',
    tip:'현상 시간에 민감한 편이라 자가현상이라면 시간과 온도를 정확히 지키세요.',
    char:['T-그레인 구조로 400치고 입자가 고움','선명도가 높고 계조가 깔끔함','135·120·시트로 나옴'],
    usd:['$12.99','B&H (미국)','https://www.bhphotovideo.com/c/buy/35mm-film/ci/39569'],cams:['slr','mf','lf'],alt:['kodak-tri-x-400','ilford-hp5-plus'],
    more:'같은 Kodak의 ISO 400 흑백인 Tri-X가 거칠고 힘 있는 입자라면, T-Max 400은 매끈하고 현대적인 흑백입니다. 크게 인화하거나 디테일이 중요한 사진에 잘 맞습니다. 예시 사진은 Zeiss Ikon Nettar로 찍은 T-Max 400입니다.'},
  {slug:'fomapan-100',n:'Fomapan 100 Classic',iso:100,p:'bw',img:'f-fomapan.jpg',
    why:'체코에서 만드는 저렴한 클래식 흑백 필름. 옛날 사진 같은 톤을 부담 없이 냅니다.',
    when:'맑은 날 풍경, 흑백 자가현상 연습',cam:'수동 SLR, 중형',
    tip:'감도가 낮아 맑은 날 낮에 쓰세요. 자가현상 연습용으로 여러 롤을 써 보기 좋습니다.',
    char:['클래식하고 부드러운 흑백 톤','ISO 100, 입자가 고운 편','가격이 저렴해 연습용으로 인기'],
    cams:['slr','mf'],alt:['ilford-fp4-plus','kodak-t-max-400'],
    more:'흑백 자가현상을 처음 배울 때 "망쳐도 부담 없는 필름"으로 많이 씁니다. 빛이 좋은 날에는 부드럽고 고전적인 흑백이 나옵니다. 예시 사진은 Fomapan 100으로 찍은 모스크바 강변입니다. '},
  {slug:'kentmere-pan-400',n:'Kentmere Pan 400',iso:400,p:'bw',img:'x-negative.jpg',cap:'현상된 35mm 네거티브 (Kentmere Pan 400 예시 사진은 준비 중)',
    why:'Harman(일포드)이 만드는 저가 흑백 필름. HP5보다 싸게 ISO 400 흑백을 연습할 수 있습니다.',
    when:'흑백 연습, 거리 스냅, 흐린 날',cam:'수동 SLR, 자동 똑딱이',
    tip:'HP5보다 대비가 조금 강한 편입니다. 그림자에 노출을 넉넉히 주세요.',
    char:['저렴한 ISO 400 흑백','HP5보다 대비가 다소 강함','연습용·대량 촬영용으로 인기'],
    usd:['$8.49','Film Supply Club (미국, 품절 표시)','https://pellica.app/blog/film-prices-2026-guide/'],cams:['slr','ps'],alt:['ilford-hp5-plus','fomapan-100'],
    more:'흑백을 많이 찍고 싶은데 필름값이 부담될 때 고르는 필름입니다. 결과는 HP5와 비슷한 계열이지만 조금 더 대비가 있고 거친 편입니다. 2026년 10월 기준 해외 판매처에서 품절 표시가 있어 재고를 확인하세요.'},
  {slug:'fujifilm-provia-100f',usd:['$35.99','Film Supply Club (미국), 품절 표시','https://pellica.app/blog/fujifilm-discontinuation-guide-2026/'],n:'Fujifilm Provia 100F',iso:100,p:'e6',img:'f-provia.jpg',
    why:'중립적이고 정확한 색의 슬라이드 필름. Velvia보다 차분하고 자연스러운 색을 원할 때 고릅니다.',
    when:'풍경, 여행, 라이트박스 감상',cam:'노출계가 정확한 수동 SLR, 중형, 대형',
    tip:'슬라이드는 관용도가 좁습니다. 밝은 부분에 노출을 맞추고, 중요한 장면은 반 스톱씩 나눠 여러 장.',
    char:['중립적이고 정확한 색 재현','입자가 매우 고움','관용도가 좁은 슬라이드 필름'],
    cams:['slr','mf','lf'],alt:['fujifilm-velvia-50','kodak-ektachrome-e100'],
    more:'Velvia가 과장된 색으로 풍경을 극적으로 만든다면, Provia는 본 그대로에 가까운 색을 남깁니다. 예시 사진은 4×5 대형 카메라와 Provia 100F로 찍은 데스밸리 자브리스키 포인트입니다.'},
];

export const PROCESS = {
  c41:['C-41','컬러 네거티브 현상. 국내 대부분의 현상소에서 바로 맡길 수 있고, 35mm 한 롤 현상+기본 스캔은 대략 5천~8천 원, 고해상도 스캔은 1만 원 안팎입니다. <a href="../../lab/">현상소 목록과 가격</a>'],
  bw:['흑백','흑백 현상. 35mm 한 롤 현상+스캔은 대략 8천~1만 4천 원이고, 받는 현상소가 C-41보다 적어 며칠~1주 이상 걸리기도 합니다. 집에서 직접 현상하기에 가장 쉬운 필름입니다.'],
  e6:['E-6','슬라이드 현상. 35mm 한 롤 현상+스캔은 대략 1만~1만 7천 원으로 C-41보다 비쌉니다. 맡기기 전에 E-6 가능 여부를 꼭 문의하세요.'],
  ecn:['ECN-2','영화용 현상. ECN-2를 받는 현상소에 맡겨야 합니다.'],
};

// 현상소: 출처 5ft magazine 현상소 목록(https://5ftmag.com/labs/, 2026.10.06 반영) 및 각 업체 공지.
// c: 135 컬러 현상+스캔 [기본, 고해상], bw: 135 흑백, sl: 135 슬라이드, m: 120 컬러 (원)
export const LABS_SRC = {name:'5ft magazine 현상소 목록', url:'https://5ftmag.com/labs/', date:'2026년 10월 6일 반영'};
export const LAB_REGIONS = ['서울','경기','인천','강원','대전','충남','충북','대구','경북','부산','울산','경남','광주·전남','전북','제주'];
export const LABS = [
  {r:'서울',n:'망우삼림',a:'중구 을지로 108 3·4층',c:[5000,10000],bw:9000,sl:14000,m:8000,u:'https://www.instagram.com/mangwoosamlim/'},
  {r:'서울',n:'연남 필름',a:'마포구 성미산로29안길 11',c:[null,8000],m:8000,u:'https://ynfilm.co.kr/'},
  {r:'서울',n:'고래사진관',a:'중구 마른내로2길 31 3층',c:[6000,9000],bw:8000,sl:10000,m:7000,u:'https://www.slowlens.net/'},
  {r:'서울',n:'옥상필름',a:'중구 동호로 349 4층',c:[5000,9000],bw:8000,sl:13000,u:'http://instagram.com/ox.film'},
  {r:'서울',n:'일삼오삼육',a:'중구 수표로6길 41 302호',c:[5500,10000],bw:10000,sl:10000,m:9000,u:'http://www.instagram.com/film_135_36'},
  {r:'서울',n:'중앙칼라',a:'중구 을지로44길 12 지하1층',c:[5000,12000],bw:8000,sl:14000,m:8000,u:'https://www.instagram.com/joongangcolor/'},
  {r:'서울',n:'헤르츠삼오 홍대점',a:'마포구 동교로 223 1층',c:[5500,9000],bw:10000,sl:15000,m:5500,u:'https://www.instagram.com/hertz.film.lab'},
  {r:'서울',n:'포토마루',a:'중구 수표로6길 2-1',c:[7000,11000],bw:10000,sl:14000,m:9000,u:'https://www.fotomaru.com/'},
  {r:'서울',n:'인스튜디오',a:'중구 서소문로 111 201호',c:[5000,15000],bw:10000,sl:10000,m:7000,u:'https://www.instagram.com/filmscanstudioin'},
  {r:'서울',n:'갤러리사진관',a:'강남구 삼성로 642 1층',c:[5000,11000],bw:11000,sl:11000,m:9000,u:'https://www.instagram.com/gallery_studio_official/'},
  {r:'경기',n:'야탑포토',a:'성남시 분당구 야탑로69번길 24-8',c:[3000,null],bw:9000,sl:5000,m:5000,mail:true,u:'http://yatapphoto.co.kr/'},
  {r:'경기',n:'리틀베어 스튜디오',a:'고양시 일산동구 무궁화로 32-34',c:[6000,null],bw:10000,m:11500,u:'https://blog.naver.com/lbstudio'},
  {r:'부산',n:'토픽칼라',a:'중구 중앙대로 44 1층',c:[4500,null],bw:6500,sl:10000,m:5500,u:'https://blog.naver.com/mhg1109'},
  {r:'부산',n:'화목포토',a:'해운대구 세실로 64 121호',c:[5000,6000],m:7000,u:'https://blog.naver.com/7047717'},
  {r:'대구',n:'포토매직',a:'중구 중앙대로 284',c:[5000,null],bw:10000,sl:10000,m:6000,u:'http://www.photomagic.co.kr/'},
  {r:'대구',n:'세하포토랩',a:'북구 팔달로35길 4 3층',c:[6000,7000],bw:8000},
  {r:'인천',n:'해당화사진관',a:'중구 제물량로 288 1층',c:[5000,9000],bw:12000,u:'https://www.instagram.com/hdh_studio/'},
  {r:'인천',n:'카메라사진관',a:'남동구 성말로44번길 11-13 2층',c:[6000,null],bw:10000,m:6000,note:'암실 체험 가능'},
  {r:'인천',n:'정우 현상소',a:'중구 제물량로 167-1',c:[6000,8000]},
  {r:'강원',n:'필름로그 강릉',a:'강릉시 하슬라로20번길 8 1층',c:[5000,9000],bw:8000,sl:10000,m:9000,note:'안드로메다에 맡기는 드롭 포인트',u:'http://www.filmlog.co.kr/'},
  {r:'강원',n:'동인스튜디오',a:'강릉시 하평3길 37',c:[10000,null],note:'2026년 9월 기준'},
  {r:'강원',n:'준포토',a:'춘천시 중앙로 86-1',c:[13000,null],bw:16000,note:'월·목에만 현상, 2026년 9월 기준'},
  {r:'대전',n:'포토닉스',a:'유성구 궁동로18번길 31 2층',c:[6000,null],u:'https://photonics.modoo.at/'},
  {r:'대전',n:'슈퍼포토마켓',a:'서구 둔산북로 36 107호',c:[8000,null],u:'http://storefarm.naver.com/superphoto'},
  {r:'충남',n:'달팽이 사진관',a:'천안시 동남구 명동길 59',c:[7000,null],bw:8000,m:8000,note:'흑백 필름 전문, 암실 교육',u:'https://blog.naver.com/aggeee'},
  {r:'충남',n:'행복한날 스튜디오',a:'천안시 서북구 서부대로 764',c:[5000,null]},
  {r:'충북',n:'화양연화',a:'청주시 상당구 중앙로 5-2 2층',c:[8000,13000],bw:13000},
  {r:'경북',n:'필름로그 경주점',a:'경주시 중앙로 10 2층',c:[5000,9000],bw:8000,sl:10000,m:9000,u:'http://www.filmlog.co.kr/'},
  {r:'경북',n:'디지털 희망칼라',a:'포항시 북구 중흥로 257',c:[8000,null],note:'월·수·금 현상',u:'https://www.instagram.com/heemang_photo/'},
  {r:'울산',n:'부광사진관',a:'남구 왕생로66번길 30 1층',c:[8000,null],u:'https://www.instagram.com/bk_photo_film/'},
  {r:'울산',n:'에이티사진관',a:'중구 새즈믄해거리 40',c:[null,null],bw:5000,note:'흑백 현상 전문',u:'https://instagram.com/a.t_hyunkussi'},
  {r:'경남',n:'공단 칼라',a:'창원시 성산구 원이대로 587',c:[6000,10000],bw:16000,sl:16000,note:'월·수·금 현상',u:'http://blog.naver.com/gdcolor'},
  {r:'광주·전남',n:'영상칼라',a:'광주 서구 경열로 121-1',c:[10000,null]},
  {r:'광주·전남',n:'필름로그 순천',a:'순천시 역전2길 10',c:[5000,9000],bw:8000,sl:10000,m:9000,note:'심다 책방에 맡기는 드롭 포인트',u:'http://www.filmlog.co.kr/'},
  {r:'전북',n:'베르베르스튜디오 (매직포토)',a:'전주시 덕진구 용소로 75',c:[6000,7000],m:10000,u:'https://blog.naver.com/olive21cc'},
  {r:'전북',n:'코아칼라현상소',a:'전주시 완산구 팔달로 190',c:[8000,null]},
  {r:'제주',n:'필름로그 제주',a:'제주시 서광로11길 37',c:[8500,11500],bw:11500,u:'http://www.filmlog.co.kr/'},
  {r:'제주',n:'동방사진관',a:'제주시 국기로 27',c:[8000,null]},
];
// 택배 접수를 공식 안내하는 곳
export const MAIL_LABS = [
  {n:'엘리카메라',d:'35mm 컬러 현상+스캔 5,000원, 120은 6,000원. 이름·연락처·롤 수를 적은 쪽지를 동봉해 보내고, 택배비는 고객 부담.',u:'https://www.allycamera.com/filmlab_online'},
  {n:'파란포토',d:'현상만 3,000원, 현상+스캔 5,000원. 선불 택배로 보내면 작업 후 연락, 비용은 계좌이체.',u:'https://paranphoto.com/bbs/board.php?bo_table=notice&wr_id=19'},
  {n:'야탑포토',d:'경기 성남. 우편 접수를 받는다고 안내.',u:'http://yatapphoto.co.kr/'},
];

export const FAQ = [
  {q:'필름 카메라를 처음 사려면 무엇부터 고르나요?',
    a:'찍는 재미부터 느끼고 싶다면 <a href="../camera/point-and-shoot/">자동 똑딱이</a>, 노출을 배우고 싶다면 <a href="../camera/manual-slr/">수동 SLR</a>을 권합니다. 필름은 ISO 400 컬러 네거티브(예: <a href="../film/portra-400/">Portra 400</a>, <a href="../film/gold-200/">Gold 200</a>) 한 롤이면 대부분의 상황에서 실패가 적습니다.'},
  {q:'공항 엑스레이 검색대를 통과해도 괜찮나요?',
    a:'기내에 들고 타는 짐의 검색대 엑스레이는 ISO 800 이하 필름이라면 몇 번 통과해도 보통 문제가 없습니다. 위험한 것은 <b>위탁 수하물(부치는 짐)</b>의 CT 스캐너입니다. 필름은 반드시 기내에 들고 타고, ISO 800 이상이거나 여러 번 통과해야 한다면 검색 요원에게 손 검사(핸드 체크)를 요청하세요.'},
  {q:'유통기한이 지난 필름을 써도 되나요?',
    a:'냉장 보관된 필름이라면 대체로 괜찮습니다. 흔히 쓰는 기준은 <b>유통기한에서 10년 지날 때마다 1스톱 더 밝게</b> 찍는 것입니다. 실온에 오래 둔 필름은 색이 틀어지고 뿌옇게 나올 수 있는데, 이것도 하나의 맛으로 즐기는 사람이 많습니다.'},
  {q:'필름은 어떻게 보관하나요?',
    a:'찍기 전 필름은 지퍼백에 넣어 <b>냉장실</b>에 두고, 쓰기 2~3시간 전에 꺼내 실온에 맞춥니다(바로 열면 이슬이 맺힙니다). 찍은 필름은 되도록 빨리 현상하세요. 현상한 네거티브는 슬리브에 넣어 습기 없는 곳에 둡니다. 자세한 내용은 <a href="../#keep">보관</a> 섹션에 있습니다.'},
  {q:'현상 비용과 기간은 어느 정도인가요?',
    a:'국내 현상소 기준 35mm 컬러 네거티브(C-41) 한 롤 <b>현상+기본 스캔은 대략 5천~8천 원</b>, 고해상도 스캔은 1만 원 안팎입니다. 흑백은 8천~1만 4천 원, 슬라이드는 1만~1만 7천 원 선이고, 컬러는 빠르면 당일에 받습니다. 지역별 현상소와 가격은 <a href="../lab/">현상소 목록</a>에 정리했습니다.'},
  {q:'한 롤에 몇 장을 찍을 수 있나요?',
    a:'35mm(135)는 24장 또는 36장, <a href="../camera/half-frame/">하프프레임</a>은 그 두 배(36장 롤로 72장)입니다. 120 중형 필름은 화면 크기에 따라 6×4.5는 15~16장, 6×6은 12장, 6×7은 10장, 6×9는 8장입니다.'},
  {q:'ISO(감도)는 무엇을 골라야 하나요?',
    a:'맑은 날 야외는 100~200, 흐린 날과 그늘·실내를 오가면 <b>400</b>, 밤이나 어두운 실내는 800 이상이 기준입니다. 한 롤로 여러 상황을 찍는다면 400이 가장 무난합니다.'},
  {q:'컬러 네거티브, 흑백, 슬라이드는 무엇이 다른가요?',
    a:'컬러 네거티브(C-41)는 색이 반전된 음화로 찍혀 관용도가 넓고 어디서나 현상됩니다. 흑백은 현상소가 적지만 집에서 직접 현상하기 쉽습니다. 슬라이드(E-6)는 색이 그대로 찍힌 양화라 라이트박스에서 바로 보이지만 노출이 까다롭습니다. 필름별 특징은 <a href="../#film">필름</a> 섹션에서 비교할 수 있습니다.'},
  {q:'다 감기 전에 뒷판을 열어 버렸어요.',
    a:'필름 통 밖으로 나와 있던 부분이 빛을 맞습니다. 보통 <b>가장 최근에 찍은 몇 컷</b>과 다음 몇 컷이 날아가고, 통 안에 이미 감겨 들어간 앞쪽 컷은 살아남는 경우가 많습니다. 바로 닫고, 남은 필름을 끝까지 찍은 뒤 현상해 보세요.'},
  {q:'사진이 너무 하얗거나 까맣게 나왔어요.',
    a:'네거티브가 투명하게(사진이 어둡고 탁하게) 나왔다면 노출 부족, 아주 진하게 나왔다면 노출 과다입니다. 롤 전체가 그렇다면 배터리나 노출계, 셔터 고장을 의심하세요. 특정 컷에 붉은 줄이 있다면 <a href="../camera/manual-slr/">차광재 손상</a>으로 빛이 샌 것입니다.'},
  {q:'푸시 현상이 무엇인가요?',
    a:'필름을 원래 감도보다 높게 놓고 찍은 뒤, 현상을 길게 해서 밝기를 보충하는 방법입니다. 예를 들어 ISO 400 필름을 1600으로 찍고 현상소에 <b>"+2 푸시"</b>를 요청합니다. 대비와 입자가 강해지며, 한 롤 전체를 같은 감도로 찍어야 합니다.'},
  {q:'스캔 해상도는 어느 정도로 맡기면 되나요?',
    a:'SNS에 올리거나 휴대폰으로 볼 용도라면 현상소의 기본(저·중해상도) 스캔으로 충분합니다. 크게 인화하거나 잘라 쓸 계획이 있다면 고해상도를 고르세요. 원본 네거티브만 잘 보관하면 나중에 다시 스캔할 수 있습니다.'},
];

// 사진 파일 → 하단 출처 목록(index.html)에서 찾을 위키미디어 파일명 일부
export const PHOTO_CREDIT = {
  'cam-ps.jpg':'Olympus_%CE%BC_mju_II','cam-slr.jpg':'Pentax_K1000','cam-af.jpg':'Nikon_F100.jpg','cam-rf.jpg':'Leica_M6',
  'cam-half.jpg':'Olympus_Pen_EE-2','cam-tlr.jpg':'Retro_Rolleiflex','cam-mf.jpg':'Hasselblad_500c','cam-lf.jpg':'Sinar_F',
  'cam-toy.jpg':'Holga_120N','cam-inst.jpg':'Polaroid_SX-70','camera.jpg':'Nikon_FM2_camera','shoot.jpg':'Nikon_FM2_-_arri',
  'm-bigmini.jpg':'Konica_Big_Mini','m-t2.jpg':'Contax_T2','m-ae1.jpg':'Canon_AE-1','m-om1.jpg':'Olympus_OM-1',
  'm-eos5.jpg':'Canon_EOS_5','m-dynax7.jpg':'Minolta_Dynax_7','m-canonet.jpg':'Canonet-QL17','m-bessar.jpg':'Bessa_R',
  'm-penf.jpg':'Olympus_Pen_F.jpg','m-penee3.jpg':'Olympus_Pen_EE3','m-yashicamat.jpg':'Yashica_Mat-124G','m-c330.jpg':'Mamiya_C_330',
  'm-rb67.jpg':'Mamiya_RB67','m-technika.jpg':'Linhof_Technika','m-dianaf.jpg':'Diana_F','m-lca.jpg':'Lomo_LC-A',
  'm-instax.jpg':'Instax_mini_25','m-onestep.jpg':'Polaroid_600','d-fungus.jpg':'Lens_fungus','d-corrosion.jpg':'Battery_Terminal',
  'd-rangefinder.jpg':'Rangefinder_window','d-bellows.jpg':'Camera_Bellows','d-selenium.jpg':'Olympus_Trip_35',
  'x-leak.jpg':'Blossom_with_Light_Leak','x-fp4.jpg':'Gyermekvasut','x-halfframe.jpg':'Half-Frame_4442',
  'portra.jpg':'Colorado_River','gold.jpg':'IJ_NDSM','velvia.jpg':'Autumn_house_Velvia','hp5.jpg':'Landungsbruecken',
  'trix.jpg':'Unitarian_Meeting_House','x-ektar.jpg':'Moscow_trolleybus','x-cine-road.jpg':'Long_Exposure_at_Night',
  'lab.jpg':'Fujifilm_Frontier','f-portra800.jpg':'Olympus_XA_-_Kodak_portra_800','f-ultramax.jpg':'Zenit_ET_Kodak_Ultramax','f-phoenix.jpg':'Bonneville_Flat_Salts','f-xp2.jpg':'Leicester_Lifeguard','f-tmax400.jpg':'Kodak_T-MAX_400','f-fomapan.jpg':'Moscow_2014_-_Fomapan','f-provia.jpg':'Zabriskie_Badlands','x-negative.jpg':'Negativ-2','m-mju2.jpg':'Olympus_Stylus_Epic_1118','develop.jpg':'LPL_35mm','scan.jpg':'Photographer%27s_Mate','keep.jpg':'Kodak_Tri-X_400_Film_(6639715393)','film.jpg':'Cinestill_800Tungsten',
  'x-ektachrome.jpg':'%D0%91%D0%B0%D1%80','x-portra160b.jpg':'First_United_Methodist',
};

// 가이드 페이지. body는 신뢰하는 HTML(직접 작성). 링크는 /guide/<slug>/ 기준 상대 경로.
export const GUIDES = [
  {slug:'first-roll',t:'필름 카메라 첫 롤 완주 가이드',s:'카메라 고르기부터 현상·스캔까지 8단계',img:'film.jpg',
    d:'필름 카메라를 처음 시작하는 사람이 첫 롤을 끝까지 찍고 사진 파일로 받기까지의 8단계. 카메라·필름 고르기, 필름 넣기, 노출, 되감기, 현상소 맡기기, 스캔, 보관.',
    body:`<p>필름 사진은 "찍고 바로 본다"가 없어서 처음엔 막막합니다. 아래 8단계만 따라가면 첫 롤을 끝까지 찍고 사진 파일로 받아 볼 수 있습니다.</p>
<ol class="steps">
<li><div><b>카메라 고르기.</b> 찍는 재미부터 느끼고 싶다면 <a href="../../camera/point-and-shoot/">자동 똑딱이</a>, 노출을 배우고 싶다면 <a href="../../camera/manual-slr/">수동 SLR</a>. 필름값을 아끼고 싶다면 한 롤에 72장인 <a href="../../camera/half-frame/">하프프레임</a>도 좋습니다. 중고라면 <a href="../../camera/manual-slr/">중고 체크 항목</a>을 꼭 확인하세요.</div></li>
<li><div><b>필름 고르기.</b> 첫 롤은 ISO 400 컬러 네거티브가 가장 실패가 적습니다. <a href="../../film/portra-400/">Portra 400</a>이 무난하고, 저렴하게 시작하려면 <a href="../../film/gold-200/">Gold 200</a>. 고민되면 <a href="../../#quiz">필름 테스트</a>로 골라 보세요.</div></li>
<li><div><b>필름 넣기.</b> 그늘에서 뒷판을 열고, 리더를 감김 축에 끼운 뒤 공셔터 2~3번. 자세한 순서는 <a href="../load-film/">35mm 필름 넣는 법</a>에 있습니다.</div></li>
<li><div><b>노출 맞추기.</b> 자동 카메라는 신경 쓸 필요가 없고, 수동이라면 노출계를 따르되 애매하면 한 스톱 밝게. 노출계가 없다면 <a href="../sunny-16/">써니 16</a> 규칙을 쓰세요.</div></li>
<li><div><b>끝까지 찍고 되감기.</b> 감기 레버가 뻑뻑해지면 마지막 컷입니다. 억지로 감지 말고 되감기 버튼을 누른 뒤 끝까지 되감으세요. <b>되감기 전에 뒷판을 열면 안 됩니다.</b></div></li>
<li><div><b>현상소에 맡기기.</b> 처음에는 "현상 + 스캔"이면 충분합니다. 35mm 컬러는 대략 5천~8천 원. 가까운 곳은 <a href="../../lab/">현상소 목록</a>에서 찾고, 없으면 택배로 보내도 됩니다.</div></li>
<li><div><b>스캔 파일 받기.</b> 보통 메일이나 다운로드 링크로 옵니다. 휴대폰·SNS용이면 기본 스캔, 크게 인화할 계획이면 고해상도. 스캔 방식은 <a href="../scan-film/">필름 스캔 방법</a>에서 비교했습니다.</div></li>
<li><div><b>네거티브 보관하기.</b> 현상된 네거티브는 슬리브에 넣어 서늘하고 건조한 곳에. 나중에 언제든 다시 스캔하거나 인화할 수 있습니다. <a href="../storage/">필름 보관법</a>을 참고하세요.</div></li>
</ol>
<h2>첫 롤에서 자주 하는 실수</h2>
<ul>
<li><b>필름이 안 감긴 채로 36장을 찍음</b>: 감을 때 되감기 노브가 같이 도는지 확인하면 막을 수 있습니다.</li>
<li><b>실내에서 ISO 100~200 필름</b>: 어둡게 나오기 쉽습니다. 실내가 섞이면 ISO 400을 쓰세요.</li>
<li><b>모든 컷을 조심스럽게 아껴 찍음</b>: 첫 롤은 연습입니다. 다양한 빛에서 찍어 봐야 다음 롤이 좋아집니다.</li>
</ul>`},
  {slug:'load-film',t:'35mm 필름 넣는 법과 되감기',s:'수동 SLR 기준, 필름이 안 감기는 사고 막기',img:'shoot.jpg',
    d:'35mm 필름 카메라에 필름을 넣는 순서와 다 찍은 뒤 되감는 법. 필름이 안 감기는 사고와 뒷판을 잘못 열었을 때 대처까지.',
    body:`<p>필름 넣기는 한 번만 제대로 배우면 1분이면 끝납니다. 아래는 수동 SLR 기준이며, 자동 카메라는 리더를 표시선까지 당겨 놓고 뒷판을 닫으면 알아서 감깁니다.</p>
<h2>필름 넣기</h2>
<ol class="steps">
<li><div><b>그늘에서 뒷판 열기.</b> 직사광선 아래에서는 필름이 빛을 먹을 수 있습니다. 대부분 되감기 노브를 위로 끝까지 당기면 뒷판이 열립니다.</div></li>
<li><div><b>필름을 왼쪽 칸에 넣고</b> 되감기 노브를 눌러 내려 고정합니다.</div></li>
<li><div><b>리더(앞쪽 좁은 부분)를 오른쪽 감김 축의 홈에 끼웁니다.</b> 필름 위아래 구멍이 톱니(스프로킷)에 걸리는지 봅니다.</div></li>
<li><div><b>한 번 감고 셔터.</b> 뒷판을 연 채로 필름이 팽팽하게 감기는지 확인합니다.</div></li>
<li><div><b>뒷판을 닫고 카운터가 1이 될 때까지 공셔터 2~3번.</b> 앞부분은 빛을 먹은 구간입니다.</div></li>
<li><div><b>감을 때 되감기 노브가 같이 도는지 확인.</b> 돌지 않으면 필름이 안 감기고 있는 것입니다. 36장을 찍었는데 아무것도 없는 사고 대부분이 여기서 생깁니다.</div></li>
</ol>
<h2>다 찍은 뒤 되감기</h2>
<ol class="steps">
<li><div><b>감기 레버가 뻑뻑해지면 멈춥니다.</b> 마지막 컷입니다. 억지로 감으면 필름이 찢어질 수 있습니다.</div></li>
<li><div><b>바닥의 되감기 버튼을 누릅니다.</b> 감김 축의 잠금을 푸는 버튼입니다.</div></li>
<li><div><b>되감기 크랭크를 펴고 화살표 방향으로 돌립니다.</b> 처음엔 약간 저항이 있다가, 필름이 감김 축에서 빠지는 순간 "툭" 하고 가벼워집니다.</div></li>
<li><div><b>몇 바퀴 더 돌려 끝까지 감은 뒤 뒷판을 엽니다.</b> 리더까지 다 감아 넣으면 찍은 롤과 새 롤이 헷갈리지 않습니다.</div></li>
</ol>
<h2>실수했을 때</h2>
<ul>
<li><b>되감기 전에 뒷판을 열었다면</b>: 바로 닫으세요. 통 밖에 나와 있던 최근 몇 컷이 빛을 맞고, 이미 통 안에 감겨 들어간 부분은 살아남는 경우가 많습니다.</li>
<li><b>카운터가 36을 넘어도 계속 감긴다면</b>: 필름이 감김 축에 걸리지 않았을 가능성이 큽니다. 어두운 곳(이불 속 등)에서 확인하세요.</li>
</ul>`},
  {slug:'sunny-16',t:'써니 16 노출법: 노출계 없이 찍기',s:'맑은 날 f/16에 셔터 1/ISO',img:'x-ektar.jpg',
    d:'노출계가 없거나 고장 난 필름 카메라로 찍는 써니 16 규칙. 빛 상황별 조리개와 ISO별 셔터 속도 표, 컬러 네거티브와 슬라이드의 노출 요령.',
    body:`<p><b>써니 16</b>은 "맑은 날엔 조리개 f/16에, 셔터 속도는 1/ISO"라는 오래된 규칙입니다. 노출계가 없는 카메라나 고장 난 카메라로도 대부분의 낮 사진을 찍을 수 있습니다.</p>
<h2>빛 상황별 조리개</h2>
<p>셔터 속도는 필름 감도에 맞춰 고정하고(ISO 100이면 1/125, 200이면 1/250, 400이면 1/500), 빛에 따라 조리개만 바꿉니다.</p>
<div class="scroll"><table class="labtbl"><thead><tr><th>빛 상황</th><th>조리개</th><th>ISO 100</th><th>ISO 200</th><th>ISO 400</th></tr></thead><tbody>
<tr><td>눈밭·백사장의 맑은 날</td><td class="n">f/22</td><td class="n">1/125</td><td class="n">1/250</td><td class="n">1/500</td></tr>
<tr><td>맑은 날, 또렷한 그림자</td><td class="n">f/16</td><td class="n">1/125</td><td class="n">1/250</td><td class="n">1/500</td></tr>
<tr><td>옅은 구름, 그림자 흐릿</td><td class="n">f/11</td><td class="n">1/125</td><td class="n">1/250</td><td class="n">1/500</td></tr>
<tr><td>흐린 날, 그림자 없음</td><td class="n">f/8</td><td class="n">1/125</td><td class="n">1/250</td><td class="n">1/500</td></tr>
<tr><td>짙게 흐림 · 맑은 날 그늘</td><td class="n">f/5.6</td><td class="n">1/125</td><td class="n">1/250</td><td class="n">1/500</td></tr>
<tr><td>해 지기 직전</td><td class="n">f/4</td><td class="n">1/125</td><td class="n">1/250</td><td class="n">1/500</td></tr>
</tbody></table></div>
<p class="meta">실내와 밤은 써니 16의 범위를 벗어납니다. 이때는 노출계 앱(휴대폰)이나 ISO 800 이상 필름을 쓰세요. 감도와 빛을 고르면 같은 노출의 조합을 모두 보여 주는 <a href="../../#shoot">써니 16 계산기</a>도 있습니다.</p>
<h2>조리개와 셔터는 맞바꿀 수 있습니다</h2>
<p>조리개를 한 칸 열면(f/16→f/11) 셔터를 한 칸 빠르게(1/250→1/500) 하면 같은 노출입니다. 배경을 흐리게 하고 싶으면 조리개를 열고 셔터를 빠르게, 움직임을 멈추고 싶으면 셔터를 빠르게 하세요. 손으로 들고 찍을 땐 1/60보다 빠르게 두는 게 안전합니다.</p>
<h2>필름 종류별 요령</h2>
<ul>
<li><b>컬러 네거티브·흑백</b>: 노출 부족에 약하고 과다에 강합니다. 애매하면 한 스톱 밝게.</li>
<li><b>슬라이드</b>: 반대로 하이라이트가 날아가면 끝입니다. 밝은 부분 기준으로 맞추고, 중요한 장면은 ±½스톱씩 여러 장 찍어 두세요.</li>
</ul>`},
  {slug:'home-bw-develop',t:'집에서 흑백 필름 현상하기',s:'준비물, 순서, 필름별 현상 시간',img:'develop.jpg',
    d:'흑백 필름 자가 현상 방법. 준비물과 비용, 현상·정지·정착·수세 순서, HP5·Tri-X·FP4 필름별 현상 시간(20°C), 교반 요령과 폐액 처리.',
    body:`<p>흑백 필름은 상온(20°C)에서 현상할 수 있어 집에서 시작하기 좋습니다. 처음 장비를 갖추면 그 뒤로는 롤당 비용이 크게 줄고, 현상 시간으로 대비를 직접 조절하는 재미가 생깁니다.</p>
<h2>준비물</h2>
<ul>
<li>현상 탱크와 릴 (스테인리스 또는 플라스틱)</li>
<li>체인징 백: 필름을 릴에 감을 휴대용 암실</li>
<li>온도계, 계량컵(500ml 이상), 깔때기</li>
<li>현상액(D-76, ID-11, HC-110, 로디널 등), 정지액(또는 물), 정착액, 웨팅제</li>
<li>필름 오프너 또는 병따개, 가위, 필름 클립 2개</li>
</ul>
<h2>순서 (20°C 기준)</h2>
<ol class="steps">
<li><div><b>체인징 백 안에서 필름을 꺼내 릴에 감고 탱크에 넣습니다.</b> 뚜껑을 닫으면 그다음부터는 밝은 곳에서 해도 됩니다. 버리는 필름으로 미리 연습해 두세요.</div></li>
<li><div><b>현상</b>: 아래 표의 시간만큼. 처음 30초는 천천히 계속 뒤집고, 이후 매분 처음 10초에 4번 뒤집은 뒤 탱크를 바닥에 톡톡 쳐 기포를 뺍니다.</div></li>
<li><div><b>정지</b>: 1분. 정지액이나 물로 현상을 멈춥니다.</div></li>
<li><div><b>정착</b>: 5분. 남은 은염을 녹여 빛에 안전한 네거티브로 만듭니다.</div></li>
<li><div><b>수세</b>: 10분. 흐르는 물이나 물 갈아 주기로 정착액을 씻어 냅니다.</div></li>
<li><div><b>웨팅</b>: 1분. 물 얼룩을 막습니다. 그 뒤 클립으로 매달아 먼지 없는 곳에서 말립니다.</div></li>
</ol>
<h2>필름별 현상 시간 (20°C, 수동 교반)</h2>
<div class="scroll"><table class="labtbl"><thead><tr><th>필름 · 현상액</th><th>현상 시간</th></tr></thead><tbody>
<tr><td>Kodak Tri-X 400 · D-76 원액</td><td class="n">6분 45초</td></tr>
<tr><td>Kodak Tri-X 400 · D-76 1+1</td><td class="n">9분 45초</td></tr>
<tr><td>Ilford HP5 Plus · ID-11/D-76 원액</td><td class="n">7분 30초</td></tr>
<tr><td>Ilford HP5 Plus · ID-11/D-76 1+1</td><td class="n">13분</td></tr>
<tr><td>Ilford HP5 Plus · 로디널 1+50</td><td class="n">11분</td></tr>
<tr><td>Ilford FP4 Plus · ID-11/D-76 원액</td><td class="n">8분 30초</td></tr>
<tr><td>Ilford FP4 Plus · ID-11/D-76 1+1</td><td class="n">11분</td></tr>
<tr><td>Kodak T-Max 400 · D-76 원액</td><td class="n">8분</td></tr>
</tbody></table></div>
<p class="meta">제조사 자료와 널리 쓰이는 차트를 참고한 출발점입니다. 수온이 1°C 높으면 대략 10% 줄이고, 내 결과를 보며 ±10% 안에서 조정하세요. 단계별로 알려 주는 <a href="../../#develop">현상 타이머</a>도 있습니다.</p>
<h2>폐액 처리</h2>
<p>사용한 정착액에는 은이 녹아 있습니다. 하수구에 버리지 말고 모아서 지자체 지정 폐기물 처리 방법을 따르거나, 폐액을 받는 현상소에 문의하세요.</p>`},
  {slug:'scan-film',t:'필름 스캔 방법 4가지 비교',s:'현상소 스캔, 평판, 전용 스캐너, 카메라 스캔',img:'scan.jpg',
    d:'필름을 디지털 파일로 옮기는 4가지 방법 비교. 현상소 스캔, 평판 스캐너, 필름 전용 스캐너, 디지털 카메라 스캔의 장단점과 컬러 네거티브 반전 요령.',
    body:`<p>요즘 필름 사진은 대부분 스캔 파일로 처음 만납니다. 같은 네거티브도 어떤 장비로, 누가 색을 잡느냐에 따라 톤이 꽤 달라집니다.</p>
<div class="scroll"><table class="labtbl"><thead><tr><th>방법</th><th>장점</th><th>단점</th><th>추천 대상</th></tr></thead><tbody>
<tr><td><b>현상소 스캔</b><span class="addr">후지 프론티어, 노리츠 등</span></td><td>가장 간편, 현상과 한 번에</td><td>색감이 현상소 기사님 손에 달림</td><td>대부분의 사람</td></tr>
<tr><td><b>평판 스캐너</b></td><td>중형·대형 필름에 유리</td><td>35mm는 해상도 한계</td><td>120 필름을 많이 찍는 사람</td></tr>
<tr><td><b>필름 전용 스캐너</b></td><td>35mm 디테일이 좋음</td><td>느림, 한 장씩</td><td>고해상도가 필요한 사람</td></tr>
<tr><td><b>카메라 스캔</b><span class="addr">디지털 카메라 + 매크로 렌즈 + 라이트패드</span></td><td>빠르고 고해상도</td><td>반전·색 보정을 직접 익혀야 함</td><td>장비가 있고 직접 만지고 싶은 사람</td></tr>
</tbody></table></div>
<h2>현상소 스캔을 고를 때</h2>
<ul>
<li><b>기본 vs 고해상도</b>: 휴대폰·SNS용이면 기본으로 충분합니다. 크게 인화하거나 잘라 쓸 계획이면 고해상도(대략 1만 원 안팎). <a href="../../lab/">현상소별 가격</a></li>
<li><b>JPG vs TIFF</b>: 바로 쓸 거면 JPG, 보정 여유가 필요하면 TIFF.</li>
<li><b>하프프레임</b>: 한 컷씩 받을지, 두 컷 붙여서 받을지 접수할 때 적으세요.</li>
</ul>
<h2>직접 스캔한다면</h2>
<p>컬러 네거티브에는 주황빛 오렌지 마스크가 깔려 있어 단순히 색을 뒤집으면 파랗게 질린 사진이 나옵니다. 마스크를 빼고 채널마다 따로 레벨을 맞춰야 하므로, 전용 반전 플러그인이나 소프트웨어를 쓰는 게 시간을 아낍니다. 스캔 전에는 블로워로 먼지를 날리고, 필름은 가장자리만 잡으세요. 지문은 영구히 남습니다.</p>`},
  {slug:'storage',t:'필름 보관법과 공항 엑스레이',s:'찍기 전, 찍은 뒤, 현상 후',img:'keep.jpg',
    d:'필름 보관 방법 정리. 미개봉 필름 냉장·냉동 보관, 찍은 필름과 현상한 네거티브 관리, 여행 시 공항 엑스레이·CT 스캐너 대처법.',
    body:`<p>필름은 살아 있는 재료처럼 다뤄야 합니다. 찍기 전에도, 찍은 뒤에도, 현상한 뒤에도 <b>열과 습기</b>가 가장 큰 적입니다.</p>
<h2>찍기 전</h2>
<ul>
<li>미개봉 필름은 냉장고에, 오래 둘 거면 냉동실에 보관합니다.</li>
<li>꺼낸 뒤 2~3시간(냉동은 더 길게) 실온에 두고 개봉하세요. 바로 열면 이슬이 맺힙니다.</li>
<li>유통기한 지난 필름은 대략 10년마다 1스톱씩 더 노출합니다. 고감도·컬러 필름일수록 노화가 빠릅니다.</li>
</ul>
<h2>찍은 뒤</h2>
<ul>
<li>잠상은 서서히 약해지니 가능하면 빨리 현상하세요.</li>
<li>여름철 자동차 실내와 직사광선은 금지입니다.</li>
<li>필름 통에 롤마다 날짜·장소·푸시 여부를 메모해 두면 현상 맡길 때 편합니다.</li>
</ul>
<h2>현상 후</h2>
<ul>
<li>네거티브는 아카이벌 슬리브(PP, 글라신)에 6컷씩 넣습니다.</li>
<li>서늘하고 건조하고 어두운 곳에, 바인더에 세로로 세워 보관합니다.</li>
<li>만질 땐 가장자리만 잡거나 면장갑·니트릴 장갑을 쓰세요.</li>
</ul>
<h2>공항 엑스레이</h2>
<p>필름은 <b>위탁 수하물에 넣지 말고 기내에 가지고 타세요.</b> 위탁 수하물용 CT 스캐너는 필름을 흐리게 만들 수 있습니다. 기내 검색대에서는 필름만 지퍼백에 담아 핸드 체크(수동 검사)를 요청하는 게 가장 안전하며, ISO 800 이상이거나 여러 번 통과할 필름이라면 특히 그렇습니다. 요청을 받아 줄지는 공항마다 다릅니다.</p>`},
];

// 인기 기종 페이지 (camera/<slug>/). 사양은 위키백과·camera-wiki, 가격은 표시한 해외 판매처 기준(2026년 10월 확인).
export const MODELS = [
  {slug:'nikon-fm2',type:'slr',n:'Nikon FM2',ko:'니콘 FM2',
    lede:'배터리 없이도 셔터가 작동하는 기계식 SLR. 최고 1/4000초 셔터로, 수동 필름 카메라 입문의 대표 기종입니다.',
    pics:[['camera.jpg','Nikon FM2'],['shoot.jpg','Nikon FM2 뒷판을 연 모습']],
    specs:[['출시','FM2 1982년, FM2n 1984년 (2001년까지 생산)'],['셔터','기계식 금속 세로주행, 1초~1/4000초 + B'],['플래시 동조','FM2 1/200초, FM2n 1/250초'],['노출계','중앙 중점 측광, LR44(SR44) 2개 — 노출계에만 사용'],['마운트','니콘 F (AI 렌즈)'],['무게','약 520~540g']],
    good:['배터리가 없어도 모든 셔터 속도가 작동','1/4000초 셔터로 밝은 날에도 조리개를 열 수 있음','니콘 F 마운트라 수동 렌즈 선택지가 매우 넓음'],
    bad:['노출 자동 기능이 없음(완전 수동)','인기 기종이라 같은 급 SLR보다 비쌈'],
    check:['셔터 속도를 1초부터 1/4000초까지 바꿔 가며 소리가 고르게 달라지는지','파인더 안 노출계 LED(+ ○ −)가 밝기에 따라 바뀌는지','필름실 차광재(스펀지)가 삭았는지','FM2와 FM2n 구분: 셔터 다이얼의 플래시 동조 표시가 250이면 FM2n, 200이면 초기 FM2'],
    price:[['Blue Moon Camera (미국) FM2n 바디','$400','6개월 보증','https://bluemooncamera.com/shop/product/ERP0626|8054525/nikon-fm2n-camera'],['Catawiki (유럽 경매) FM2/FM2N 실버','€330~380 예상가','','https://www.catawiki.com/en/l/105498520-nikon-fm2-n-chrome-single-lens-reflex-camera-slr']],
    films:['Kodak Portra 400','Ilford HP5 Plus','Kodak Tri-X 400'],
    src:'https://en.wikipedia.org/wiki/Nikon_FM2'},
  {slug:'pentax-k1000',type:'slr',n:'Pentax K1000',ko:'펜탁스 K1000',
    lede:'군더더기 없이 노출의 기본만 남긴 수동 SLR. 오랫동안 사진학과 학생의 첫 카메라로 쓰였습니다.',
    pics:[['cam-slr.jpg','Pentax K1000']],
    specs:[['생산','1976~1997년'],['셔터','기계식 천 셔터 가로주행, 1초~1/1000초 + B'],['플래시 동조','1/60초'],['노출계','평균 측광 CdS, 바늘식 — LR44/SR44 1개, 노출계에만 사용'],['마운트','펜탁스 K'],['무게','620g']],
    good:['배터리 없이 완전히 작동','구조가 단순해 고장이 적고 수리하기 쉬움','펜탁스 K 마운트 렌즈가 저렴하고 많음'],
    bad:['셀프타이머와 심도 미리보기가 없음','노출계에 전원 스위치가 없어 렌즈 캡을 씌워 두지 않으면 배터리가 닳음','최고 셔터 1/1000초'],
    check:['노출계 바늘이 밝기에 따라 움직이는지 — 배터리 접점 부식이나 노출계 셀 노후가 흔한 원인','셔터 1초와 1/1000초가 확실히 다르게 들리는지','중국 조립품(무게 525g)과 일본 조립품 구분은 바닥 표기로 확인'],
    price:[['Brooklyn Film Camera (미국) 정비품 + 50mm f/2','$360~400','외관 등급별','https://brooklynfilmcamera.com/blogs/guides/canon-ae-1-vs-pentax-k1000-which-classic-slr-is-better']],
    films:['Kodak Gold 200','Kodak Portra 400','Ilford HP5 Plus'],
    src:'https://en.wikipedia.org/wiki/Pentax_K1000'},
  {slug:'canon-ae-1',type:'slr',n:'Canon AE-1',ko:'캐논 AE-1',
    lede:'셔터 우선 자동 노출을 대중화한 SLR. 셔터 속도만 정하면 조리개는 카메라가 맞춥니다.',
    pics:[['m-ae1.jpg','Canon AE-1']],
    specs:[['생산','1976~1984년'],['셔터','전자 제어 천 셔터 가로주행, 2초~1/1000초 + B'],['노출','셔터 우선 자동, 수동'],['플래시 동조','1/60초'],['배터리','4LR44(4SR44) 6V 1개 — 없으면 셔터도 작동 안 함'],['마운트','캐논 FD'],['무게','590g']],
    good:['셔터 우선 자동이라 노출을 몰라도 시작하기 쉬움','FD 렌즈가 저렴하고 종류가 많음','디자인과 조작감이 좋아 지금도 인기'],
    bad:['배터리가 없으면 아예 작동하지 않음','"셔터 끽끽 소리"(미러 복귀 시 날카로운 소리)가 생기는 개체가 많음','캐논 EF(현행 캐논) 렌즈와 호환 안 됨'],
    check:['셔터를 누를 때 날카로운 끽 소리가 나는지 — 미러 쪽 윤활·완충재 노화 신호','새 배터리를 넣고 셔터·노출계가 모두 작동하는지','AE-1과 AE-1 Program 구분: Program은 완전 자동(P) 모드가 있음'],
    price:[['Brooklyn Film Camera (미국) 정비품 바디','$250~350','','https://brooklynfilmcamera.com/blogs/guides/canon-ae-1-vs-pentax-k1000-which-classic-slr-is-better'],['같은 곳, 정비품 + 50mm 렌즈','$400~500','','https://brooklynfilmcamera.com/blogs/guides/canon-ae-1-vs-pentax-k1000-which-classic-slr-is-better']],
    films:['Kodak Gold 200','Kodak Portra 400','Kodak UltraMax 400'],
    src:'https://en.wikipedia.org/wiki/Canon_AE-1'},
  {slug:'olympus-mju-ii',type:'ps',n:'Olympus μ[mju:]-II',ko:'올림푸스 뮤2',
    lede:'주머니에 들어가는 145g 똑딱이에 밝은 35mm f/2.8 단렌즈. 미국 이름은 Stylus Epic입니다.',
    pics:[['m-mju2.jpg','Olympus μ[mju:]-II'],['cam-ps.jpg','Olympus μ[mju:]-II Zoom 80 — 이름은 비슷하지만 줌 렌즈의 다른 기종']],
    specs:[['출시','1997년'],['렌즈','35mm f/2.8 고정(조리개 f/2.8~f/11)'],['초점','액티브 자동 초점, 최단 35cm'],['셔터','4초~1/1000초'],['방적','생활 방수(비 정도)'],['배터리','CR123A 3V'],['크기·무게','108×59×35mm, 145g']],
    good:['단렌즈라 같은 시대 줌 똑딱이보다 화질이 좋음','작고 가벼워 늘 들고 다니기 좋음','비 오는 날에도 쓸 수 있는 생활 방수'],
    bad:['전원을 켤 때마다 플래시가 자동 모드로 돌아감 — 끄려면 매번 설정','고장 나면 수리할 곳이 거의 없음','Zoom 80 등 비슷한 이름의 줌 모델과 헷갈리기 쉬움'],
    check:['렌즈 덮개를 열면 렌즈가 나오고 전원이 들어오는지','뒷면 액정에 컷 수와 배터리 표시가 정상인지','렌즈 안 흐림과 액정 번짐','모델명이 "μ[mju:]-II"인지(줌 모델은 "Zoom" 표기)'],
    price:[['The Pixel Connection (미국) 테스트 완료품','$349','','https://thepixelconnection.com/products/olympus-stylus-epic-mju-ii-qd-35mm-point-and-shoot-camera-champagne-used'],['eBay 거래 완료 (2026년 6월)','$279.51','배송비 별도','https://www.ebay.de/itm/297029115416']],
    films:['Kodak Portra 400','Kodak Gold 200','Ilford HP5 Plus'],
    src:'https://en.wikipedia.org/wiki/Olympus_Stylus_Epic'},
  {slug:'contax-t2',type:'ps',n:'Contax T2',ko:'콘탁스 T2',
    lede:'칼 자이스 조나 38mm 렌즈를 단 티타늄 고급 똑딱이. 가격이 크게 올라 지금은 "구하기 어려운 명기"가 되었습니다.',
    pics:[['m-t2.jpg','Contax T2 (60주년 한정판)']],
    specs:[['출시','1991년'],['렌즈','Carl Zeiss Sonnar T* 38mm f/2.8, 4군 5매'],['노출','조리개 우선 프로그램 자동, 보정 ±2EV'],['초점','자동 초점 + 수동 거리 선택(0.7m~무한대)'],['셔터','1초~1/500초'],['배터리','CR123A 3V'],['무게','295g (배터리 제외)']],
    good:['자이스 렌즈의 선명함과 색','조리개를 직접 정할 수 있는 고급 똑딱이','티타늄 바디의 만듦새'],
    bad:['가격이 매우 높음(정비품 약 2,000달러)','최고 셔터 1/500초라 밝은 날 조리개 개방이 어려움','고장 시 부품 수급이 어려워 수리비가 큼'],
    check:['어두운 곳·가까운 거리에서 자동 초점이 헤매지 않는지','배터리가 비정상적으로 빨리 닳지 않는지','필름 도어 주변 빛샘','정비(CLA) 이력 — 비용이 400~500달러 수준이라 이력 유무가 가격 차이를 만듦'],
    price:[['Brooklyn Film Camera (미국) 정비품 기준','약 $2,000','','https://brooklynfilmcamera.com/blogs/guides/is-the-contax-t2-worth-2-000-in-2026-an-honest-buyers-guide']],
    films:['Kodak Portra 400','Kodak Portra 160','Kodak Tri-X 400'],
    src:'https://camera-wiki.org/wiki/Contax_T2'},
];

// 필름 가격·단종 현황 페이지 (prices/). 출처: Pellica 2026 가이드(2026-10-20·22 갱신), 각 판매처.
export const STATUS_SRC = [
  ['Pellica — 2026 필름 가격 가이드 (2026.10.20 갱신)','https://pellica.app/blog/film-prices-2026-guide/'],
  ['Pellica — 후지필름 단종 현황 2026 (2026.10.22 갱신)','https://pellica.app/blog/fujifilm-discontinuation-guide-2026/'],
  ['Pellica — 후지필름 흑백 필름 단종설 정리 (2026.6.8)','https://pellica.app/blog/fujifilm-black-and-white-panic-myth-2026/'],
];
export const FUJI_LIVE = [
  ['Fujifilm 200','컬러 네거 ISO 200','35mm'],['Fujifilm 400','컬러 네거 ISO 400','35mm'],
  ['Velvia 50','슬라이드 ISO 50','35mm · 120 (시트는 단종)'],['Velvia 100','슬라이드 ISO 100','35mm · 120 · 시트'],
  ['Provia 100F','슬라이드 ISO 100','35mm · 120 · 시트'],['Neopan 100 Acros II','흑백 ISO 100','35mm · 120 (일본 가격표 기준)'],
  ['Superia Premium 400','컬러 네거 (일본 한정)','36컷만 유지, 27컷은 출하 중단'],
];
export const FUJI_GONE = [
  ['Fujicolor Pro 400H','2021년','35mm는 2021년 1월, 120은 2021년 말 종료'],
  ['Fujicolor Pro 160NS','2021년 발표','마지막 판형인 120 종료'],
  ['Velvia 50 시트 필름','2021~2023년','8×10, 4×5 종료 (35mm·120은 유지)'],
  ['Superia X-Tra 400','2024년 발표','일본에서 Fujifilm 400으로 대체'],
  ['Fujicolor C200','–','미국에서 Fujifilm 200으로 대체'],
  ['Natura 1600','2017년 발표','35mm 종료'],
  ['Superia 200','2017년','35mm 종료'],
  ['Superia X-Tra 800 · Superia 1600','2016년','일본 외 지역 종료'],
];
