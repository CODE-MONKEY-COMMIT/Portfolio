const projectData = [
  {
    img: './images/img01.png',
    icon: './images/icon01.png',
    name: 'BRANZ (가상 쇼핑몰)',
    period: '2026.07.03 ~ 2026.07.18',
    intro:
      '가상 온라인 편집샵 쇼핑몰 제작 프로젝트. 무신사와 29CM 사용자로서 뺴곡한 상품의 나열과 관심 없는 콘텐츠에 대한 무방비한 노출은 시각적인 피로도를 준다는 불편함을 가지고 있다. 신제품과 신진 브랜드 노출 증가를 위한 목적을 이루면서도 보다 정돈된 방식으로 디자인하고자 큐레이션과 제품 노출 영역을 아코디언 방식으로 리디자인하였다. 사용자는 자신이 관심있는 큐레이션만을 클릭해 자세한 내용을 확인할 수 있다. 쇼핑몰보다는 셀렉샵의 정의에 보다 가까운 큐레이션 매거진 형식으로 기획된 사이트다. 또한 SCSS 방식의 스타일 작업을 새롭게 시도해보았다.',
    roles: [
      '기획',
      '디자인',
      '퍼블리싱',
      '프론트엔드(상품 정렬, 가격대 필터링, 상품 구매 선택 및 가격 업데이트, 리뷰 데이터 로드 및 리뷰 이미지 모달창 구현)',
    ],
    skills: ['HTML5, CSS, SCSS, JavaScript', 'VS Code'],
    responsive: 'Y (PC, Tablet, Mobile)',
    github: 'https://github.com/CODE-MONKEY-COMMIT/BRANZ',
    demolive: [
      { title: '메인', url: 'https://code-monkey-commit.github.io/BRANZ/' },
      {
        title: '상품 목록 페이지',
        url: 'https://code-monkey-commit.github.io/BRANZ/HTML/sub.html',
      },
      {
        title: '상품 상세 페이지',
        url: 'https://code-monkey-commit.github.io/BRANZ/HTML/content.html',
      },
    ],
  },

  {
    img: './images/img02.png',
    icon: './images/icon02.png',
    name: '국립 중앙도서관',
    period: '2026.06.22 ~ 2026.07.01',
    intro:
      '공공기관 홈페이지인 국립중앙도서관을 리디자인했다. 공공기관의 차분하고 정돈된 스타일을 유지하면서도 넉넉한 여백과 친근감있는 색감을 더해 시각적인 안정감과 개방감을 더했다. 특히, 도서관 홈페이지는 도서 검색의 목적으로 이용하는 경우가 많기 떄문에 도서를 검색하는 영역을 상단에 포인트 컬러로 위치시켰다. 이외에도 추천 도서에 입체적인 애니메이션 효과를 더해 인터랙티브 디자인을 구현했다.',
    roles: [
      '기획',
      '디자인',
      '퍼블리싱',
      '프론트엔드(데이터 로드, 추천 도서 입체 애니메이션 기능)',
    ],
    skills: ['HTML5, CSS, JavaScript', 'VS Code'],
    responsive: 'Y (PC, Tablet, Mobile)',
    github: 'https://github.com/CODE-MONKEY-COMMIT/National-Library',
    demolive: [
      {
        title: '메인',
        url: 'https://code-monkey-commit.github.io/National-Library/',
      },
      {
        title: '상세페이지01',
        url: 'https://code-monkey-commit.github.io/National-Library/HTML/content01.html',
      },
      {
        title: '상세페이지02',
        url: 'https://code-monkey-commit.github.io/National-Library/HTML/content02.html',
      },
    ],
  },

  {
    img: './images/img03.png',
    icon: './images/icon03.png',
    name: '카카오뱅크 메인 클론',
    period: '2026.06.16 ~ 2026.06.20',
    intro:
      '카카오뱅크 메인을 클론코딩하였다. 기존 홈페이지를 그대로 차용한 것이 아니라 시각적인 요소를 보고 직접 구현하는 과정이었다.',
    roles: ['기획', '디자인', '퍼블리싱'],
    skills: ['HTML5, CSS, JavaScript', 'VS Code'],
    responsive: 'Y (PC, Tablet, Mobile)',
    github: 'https://github.com/CODE-MONKEY-COMMIT/KakaoBank-Clone',
    demolive: [
      {
        title: '메인',
        url: 'https://code-monkey-commit.github.io/KakaoBank-Clone/',
      },
    ],
  },
  {
    img: './images/img04.png',
    icon: './images/icon04.png',
    name: '[실제 프로젝트] 민복진 미술관',
    period: '2021년경',
    intro:
      '양주시의 민복진 미술관 홈페이지의 백엔드 작업을 제외한 메인, 콘텐츠 등 모든 페이지 코딩 작업. 작업 당시의 홈페이지와 수정된 사항 없음',
    roles: ['퍼블리싱'],
    skills: ['HTML5, CSS, JavaScript', 'VS Code'],
    responsive: 'Y (PC, Tablet, Mobile)',
    demolive: [
      {
        title: '메인',
        url: 'https://www.yangju.go.kr/minbokjin/index.do',
      },
    ],
  },
  {
    icon: './images/icon05.png',
    name: '그 외 프로젝트',
    period: '2019~2021년경',
    intro: '그 외 실제 프로젝트 정리',
    roles: ['퍼블리싱'],
    skills: ['HTML5, CSS, JavaScript'],
    responsive: 'Y (PC, Tablet, Mobile)',
    demolive: [
      {
        title: '노션',
        url: 'https://app.notion.com/p/PORTFOLIO-1f878e5f2faa804caed5ee70acb65542',
      },
    ],
  },
];

const projectButtons = document.querySelector('.content-buttons');
const contentList = document.querySelector('.content__list');
const taskList = document.querySelector('.task-bar__list');

//배경화면 프로젝트별 버튼 생성
projectData.forEach((data, index) => {
  if (projectData.length === 0) return;

  const buttonItem = document.createElement('li');
  buttonItem.className = 'content-buttons__item';
  buttonItem.innerHTML = `<button class="content-buttons__button" data-index="${index}"><i style="background-image:url('${data.icon}')"></i><span>${data.name}</span></button>`;
  projectButtons.appendChild(buttonItem);
});

projectButtons.addEventListener('click', (e) => {
  const projectClicker = e.target.closest('.content-buttons__button');
  if (!projectClicker) return;
  const currentIndex = projectClicker.dataset.index;
  const currentData = projectData[currentIndex];
  const isExist = getRelatedContent(currentIndex);
  if (isExist) {
    isExistEvent(isExist, currentIndex);
    return;
  }
  const newBox = document.createElement('div');
  newBox.className = 'content__item';
  newBox.setAttribute('data-index', currentIndex);
  newBox.innerHTML = `<div class="top">
                  <div class="top__content">
                    <h2 class="top__title">${currentData.name}</h2>
                    <div class="top__buttons">
                    <span class="top__button minimize-btn"
                      ><i class="fa-solid fa-minus"></i
                    >최소화</span>
                    <span class="top__button maximmize-btn"
                      ><i class="fa-regular fa-window-restore"></i
                    >최대화</span>
                    <span class="top__button close-btn"
                      ><i class="fa-solid fa-xmark"></i
                    >닫기</span>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  ${currentData.img ? `<div class="bottom__image"><img src="${currentData.img}" alt="${currentData.name} 대표 이미지" /></div>` : ''}
                  <div class="bottom__content">
                    <div class="content__title">
                      <span class="content__text">${currentData.name}</span>
                      <span class="content__date">${currentData.period}</span>
                    </div>
                    <p class="content__intro">${currentData.intro}</p>
                    <div class="content-detail" id="roles">
                      <h2 class="content-detail__subject">역할</h2>
                      <ul class="content-detail__list"></ul>
                    </div>
                    <div class="content-detail" id="skills">
                      <h2 class="content-detail__subject">사용 기술</h2>
                      <ul class="content-detail__list"></ul>
                    </div>
                    <div class="content-detail" id="responsive">
                      <h2 class="content-detail__subject">반응형: ${currentData.responsive}</h2>
                    </div>
                    <div class="content__link">
                    ${currentData.github ? `<a href="${currentData.github}" class="github" target="_blank">Github</a>` : ''}
                      <div href="" class="demo-live"><strong>라이브 페이지 보러가기 -></strong>
                      </div>
                    </div>
                  </div>
                </div>`;
  fillData(currentData, newBox);
  contentList.appendChild(newBox);
  taskUpdate(currentData, currentIndex);
});
function fillData(currentData, newBox) {
  const rolesList = newBox.querySelector('#roles .content-detail__list');
  const skillsList = newBox.querySelector('#skills .content-detail__list');
  const demoLive = newBox.querySelector('.demo-live');
  currentData.roles.forEach((role) => {
    const li = document.createElement('li');
    li.className = 'content-detail__item';
    li.textContent = role;
    rolesList.appendChild(li);
  });
  currentData.skills.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'content-detail__item';
    li.textContent = skill;
    skillsList.appendChild(li);
  });
  currentData.demolive.forEach((link) => {
    const item = document.createElement('a');
    item.className = 'demo-live__link';
    item.href = link.url;
    item.textContent = link.title;
    item.target = '_blank';
    demoLive.appendChild(item);
  });
}
function taskUpdate(currentData, currentIndex) {
  const li = document.createElement('li');
  li.className = 'task-bar__item';
  li.setAttribute('data-index', currentIndex);
  li.innerHTML = `<a href="" class="task-bar__button" title="${currentData.name}"><i style="background-image:url('${currentData.icon}')"></i>${currentData.name}</a>`;
  taskList.appendChild(li);
  activeTask(li);
}
function activeTask(li) {
  taskList.querySelectorAll('.task-bar__item').forEach((item) => {
    item.classList.remove('active');
  });
  li.classList.add('active');
}
contentList.addEventListener('click', (e) => {
  const minBtn = e.target.closest('.minimize-btn');
  const maximizeBtn = e.target.closest('.maximmize-btn');
  const closeBtn = e.target.closest('.close-btn');
  const currentItem = e.target.closest('.content__item');
  const currentIndex = currentItem.dataset.index;
  const currentTask = getRelatedTask(currentIndex);

  if (minBtn) {
    minimizeWindow(currentTask, currentItem);
  } else if (maximizeBtn) {
    currentItem.classList.toggle('max');
    const isMax = currentItem.classList.contains('max');
    maximizeBtn.querySelector('i').className = isMax
      ? 'fa-regular fa-window-maximize'
      : 'fa-regular fa-window-restore';
  } else if (closeBtn) {
    currentItem.remove();
    currentTask?.remove();
    const remaining = taskList.querySelectorAll('.task-bar__item:not(.min)');
    const last = remaining[remaining.length - 1];
    if (last) last.classList.add('active');
  }
});
function minimizeWindow(currentTask, currentItem) {
  currentTask.classList.remove('active');
  currentTask.classList.add('min');
  currentItem.classList.add('min');

  const remaining = taskList.querySelectorAll('.task-bar__item:not(.min)');
  const last = remaining[remaining.length - 1];
  if (last) last.classList.add('active');
}
let highestZIndex = 1;
function restoreWindow(currentTask, currentItem) {
  currentTask.classList.remove('min');
  currentItem.classList.remove('min');
  activeTask(currentTask);
  highestZIndex++;
  currentItem.style.zIndex = highestZIndex;
}
function getRelatedContent(index) {
  return contentList.querySelector(`.content__item[data-index="${index}"]`);
}
function getRelatedTask(index) {
  return taskList.querySelector(`.task-bar__item[data-index="${index}"]`);
}
taskList.addEventListener('click', (e) => {
  e.preventDefault();
  const taskItem = e.target.closest('.task-bar__item');
  if (!taskItem) return;

  const taskIndex = taskItem.dataset.index;
  const relatedContent = getRelatedContent(taskIndex);
  if (!relatedContent) return;

  const isMin = taskItem.classList.contains('min');
  const isActive = taskItem.classList.contains('active');

  if (isMin) {
    restoreWindow(taskItem, relatedContent);
  } else if (isActive) {
    minimizeWindow(taskItem, relatedContent);
  } else if (!isMin && !isActive) {
    activeTask(taskItem);
    highestZIndex++;
    relatedContent.style.zIndex = highestZIndex;
  }
});
function isExistEvent(isExist, currentIndex) {
  const relatedTask = getRelatedTask(currentIndex);
  isExist.classList.remove('min');
  relatedTask?.classList.remove('min');
  activeTask(relatedTask);
  highestZIndex++;
  isExist.style.zIndex = highestZIndex;
  return;
}

const dateElement = document.querySelector('.task-bar__date');
function updateClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12;

  dateElement.innerHTML = `
    ${ampm} ${hours}:${minutes}
  `;
}
updateClock();
setInterval(updateClock, 1000);

const startButton = document.querySelector('.start-btn');
const startContent = document.querySelector('.start-content');
startButton.addEventListener('click', (e) => {
  e.stopPropagation();
  startContent.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const isBarStart =
    startButton.contains(e.target) || startContent.contains(e.target);
  if (!isBarStart) {
    startContent.classList.remove('active');
  }
});
