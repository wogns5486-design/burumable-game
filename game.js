// ===== 부루마블 보드 데이터 (9x9, 테두리 32칸, 시계방향) =====
const CELLS = [
  // ── 하단 (좌→우) 0~8 ──
  { name: '출발', icon: '🚀', type: 'corner', side: 'bottom', colorGroup: -1,
    event: { msg: '출발! 여행을 시작합니다! +50점', points: 50 } },
  { name: '제주도', icon: '🏝️', type: 'property', side: 'bottom', colorGroup: 0, price: '5만',
    event: { msg: '🏝️ 제주도 올레길 산책! +10점', points: 10 } },
  { name: '황금열쇠', icon: '🔑', type: 'golden', side: 'bottom', colorGroup: -1, event: null },
  { name: '부산', icon: '🌊', type: 'property', side: 'bottom', colorGroup: 0, price: '8만',
    event: { msg: '🌊 해운대 파도소리! +15점', points: 15 } },
  { name: '세금', icon: '💰', type: 'tax', side: 'bottom', colorGroup: -1,
    event: { msg: '💰 여행세 납부! -20점', points: -20 } },
  { name: '서울', icon: '🏙️', type: 'property', side: 'bottom', colorGroup: 1, price: '10만',
    event: { msg: '🏙️ 남산타워 야경! +20점', points: 20 } },
  { name: '찬스', icon: '❓', type: 'chance', side: 'bottom', colorGroup: -1, event: null },
  { name: '도쿄', icon: '🗼', type: 'property', side: 'bottom', colorGroup: 1, price: '12만',
    event: { msg: '🗼 시부야 스크램블! +20점', points: 20 } },
  { name: '무인도', icon: '🏖️', type: 'corner', side: 'corner', colorGroup: -1,
    event: { msg: '🏖️ 무인도에 표류... 1턴 쉼!', points: 0, skip: true } },

  // ── 우측 (아래→위) 9~15 ──
  { name: '베이징', icon: '🏯', type: 'property', side: 'right', colorGroup: 2, price: '14만',
    event: { msg: '🏯 만리장성 등반! +15점', points: 15 } },
  { name: '황금열쇠', icon: '🔑', type: 'golden', side: 'right', colorGroup: -1, event: null },
  { name: '마닐라', icon: '🌴', type: 'property', side: 'right', colorGroup: 2, price: '10만',
    event: { msg: '🌴 열대 과일 파티! +10점', points: 10 } },
  { name: '싱가포르', icon: '🦁', type: 'property', side: 'right', colorGroup: 3, price: '16만',
    event: { msg: '🦁 마리나베이 야경! +25점', points: 25 } },
  { name: '찬스', icon: '❓', type: 'chance', side: 'right', colorGroup: -1, event: null },
  { name: '카이로', icon: '🔺', type: 'property', side: 'right', colorGroup: 3, price: '15만',
    event: { msg: '🔺 피라미드 발굴! +20점', points: 20 } },
  { name: '이스탄불', icon: '🕌', type: 'property', side: 'right', colorGroup: 4, price: '18만',
    event: { msg: '🕌 그랜드 바자르! +20점', points: 20 } },

  // ── 우상 코너 ──
  { name: '우주여행', icon: '🚀', type: 'corner', side: 'corner', colorGroup: -1,
    event: { msg: '🚀 우주여행 보너스! +30점', points: 30 } },

  // ── 상단 (우→좌) 17~23 ──
  { name: '아테네', icon: '🏛️', type: 'property', side: 'top', colorGroup: 4, price: '16만',
    event: { msg: '🏛️ 파르테논 신전! +15점', points: 15 } },
  { name: '황금열쇠', icon: '🔑', type: 'golden', side: 'top', colorGroup: -1, event: null },
  { name: '코펜하겐', icon: '🧜', type: 'property', side: 'top', colorGroup: 5, price: '20만',
    event: { msg: '🧜 인어공주의 축복! +25점', points: 25 } },
  { name: '세금', icon: '💰', type: 'tax', side: 'top', colorGroup: -1,
    event: { msg: '💰 관광세! -15점', points: -15 } },
  { name: '스톡홀름', icon: '👑', type: 'property', side: 'top', colorGroup: 5, price: '22만',
    event: { msg: '👑 노벨상 시상식! +30점', points: 30 } },
  { name: '찬스', icon: '❓', type: 'chance', side: 'top', colorGroup: -1, event: null },
  { name: '베른', icon: '⛰️', type: 'property', side: 'top', colorGroup: 6, price: '25만',
    event: { msg: '⛰️ 알프스 정상! +25점', points: 25 } },

  // ── 좌상 코너 ──
  { name: '사회기금', icon: '🏦', type: 'corner', side: 'corner', colorGroup: -1,
    event: { msg: '🏦 기부는 아름다워! -10점', points: -10 } },

  // ── 좌측 (위→아래) 25~31 ──
  { name: '베를린', icon: '🧱', type: 'property', side: 'left', colorGroup: 6, price: '24만',
    event: { msg: '🧱 역사의 현장! +20점', points: 20 } },
  { name: '찬스', icon: '❓', type: 'chance', side: 'left', colorGroup: -1, event: null },
  { name: '마드리드', icon: '💃', type: 'property', side: 'left', colorGroup: 7, price: '28만',
    event: { msg: '💃 플라멩코의 열정! +25점', points: 25 } },
  { name: '황금열쇠', icon: '🔑', type: 'golden', side: 'left', colorGroup: -1, event: null },
  { name: '파리', icon: '🗼', type: 'property', side: 'left', colorGroup: 7, price: '35만',
    event: { msg: '🗼 에펠탑 꼭대기! +35점', points: 35 } },
  { name: '런던', icon: '🎡', type: 'property', side: 'left', colorGroup: 7, price: '40만',
    event: { msg: '🎡 런던아이에서 야경! +40점', points: 40 } },
  { name: '뉴욕', icon: '🗽', type: 'property', side: 'left', colorGroup: 7, price: '50만',
    event: { msg: '🗽 자유의 여신상! +50점', points: 50 } },
];

const TOTAL = CELLS.length;

// ===== 랜덤 이벤트 =====
const GOLDEN_EVENTS = [
  { msg: '🔑 복권 당첨! +40점', points: 40 },
  { msg: '🔑 길에서 돈 발견! +20점', points: 20 },
  { msg: '🔑 은행 이자! +15점', points: 15 },
  { msg: '🔑 생일 축하금! +30점', points: 30 },
  { msg: '🔑 교통비 환급! +10점', points: 10 },
  { msg: '🔑 갑작스런 세금! -25점', points: -25 },
  { msg: '🔑 병원비 지출! -15점', points: -15 },
];

const CHANCE_EVENTS = [
  { msg: '❓ 횡재! +35점', points: 35 },
  { msg: '❓ 행운의 별! +20점', points: 20 },
  { msg: '❓ 주식 대박! +45점', points: 45 },
  { msg: '❓ 과속 딱지! -20점', points: -20 },
  { msg: '❓ 기부 요청! -10점', points: -10 },
  { msg: '❓ 보너스 지급! +25점', points: 25 },
];

// ===== 상태 =====
let playerPos = 0;
let moveCount = 0;
let totalPoints = 0;
let isRolling = false;
let gameComplete = false;
let skipNextTurn = false;

// ===== 그리드 좌표 (9x9) =====
function getGridPositions() {
  const p = [];
  for (let c = 0; c <= 8; c++) p.push({ row: 8, col: c });       // 하단
  for (let r = 7; r >= 1; r--) p.push({ row: r, col: 8 });        // 우측
  for (let c = 8; c >= 0; c--) p.push({ row: 0, col: c });        // 상단
  for (let r = 1; r <= 7; r++) p.push({ row: r, col: 0 });        // 좌측
  return p;
}
const GRID = getGridPositions();

// ===== 보드 생성 =====
function buildBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  const gridMap = Array.from({ length: 9 }, () => Array(9).fill(-1));
  GRID.forEach((pos, idx) => { gridMap[pos.row][pos.col] = idx; });

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const idx = gridMap[r][c];
      const div = document.createElement('div');

      if (idx >= 0) {
        const cell = CELLS[idx];
        const isCorner = (r === 0 || r === 8) && (c === 0 || c === 8);
        div.className = `cell type-${cell.type}`;
        if (isCorner) div.classList.add('corner');
        if (r === 8 && !isCorner) div.classList.add('side-bottom');
        else if (r === 0 && !isCorner) div.classList.add('side-top');
        else if (c === 0 && !isCorner) div.classList.add('side-left');
        else if (c === 8 && !isCorner) div.classList.add('side-right');
        div.id = `cell-${idx}`;

        if (cell.type === 'property' && cell.colorGroup >= 0) {
          const bar = document.createElement('div');
          bar.className = `cell-color-bar color-group-${cell.colorGroup}`;
          div.appendChild(bar);
        }

        const content = document.createElement('div');
        content.className = 'cell-content';
        content.innerHTML = `
          <span class="cell-icon">${cell.icon}</span>
          <span class="cell-name">${cell.name}</span>
          ${cell.price ? `<span class="cell-price">${cell.price}</span>` : ''}
        `;
        div.appendChild(content);

        if (idx === playerPos) {
          div.classList.add('active');
          const token = document.createElement('div');
          token.className = 'player-token';
          div.appendChild(token);
        }
      } else {
        div.className = 'cell inner';
      }
      board.appendChild(div);
    }
  }
}

// ===== 3D 주사위 생성 =====
const DICE_DOTS = {
  1: [0,0,0, 0,1,0, 0,0,0],
  2: [0,0,1, 0,0,0, 1,0,0],
  3: [0,0,1, 0,1,0, 1,0,0],
  4: [1,0,1, 0,0,0, 1,0,1],
  5: [1,0,1, 0,1,0, 1,0,1],
  6: [1,0,1, 1,0,1, 1,0,1],
};

// 3D 주사위의 각 면에 대한 회전값 (해당 면이 정면을 보도록)
const FACE_ROTATIONS = {
  1: 'rotateX(0deg) rotateY(0deg)',
  2: 'rotateX(0deg) rotateY(-90deg)',
  3: 'rotateX(90deg) rotateY(0deg)',
  4: 'rotateX(-90deg) rotateY(0deg)',
  5: 'rotateX(0deg) rotateY(90deg)',
  6: 'rotateX(0deg) rotateY(180deg)',
};

function buildDiceFace(value) {
  const dots = DICE_DOTS[value];
  let html = '';
  for (let i = 0; i < 9; i++) {
    html += dots[i] ? '<div class="dice-dot"></div>' : '<div class="dice-dot hidden"></div>';
  }
  return html;
}

function initDice3D(diceEl) {
  const cube = diceEl.querySelector('.dice-cube');
  cube.innerHTML = '';
  for (let f = 1; f <= 6; f++) {
    const face = document.createElement('div');
    face.className = `dice-face face-${f}`;
    face.innerHTML = buildDiceFace(f);
    cube.appendChild(face);
  }
}

function setDiceValue(diceEl, value) {
  const cube = diceEl.querySelector('.dice-cube');
  cube.style.transform = FACE_ROTATIONS[value];
}

// ===== 파티클 이펙트 =====
function spawnParticles(x, y, count, colors) {
  const container = document.getElementById('particles');
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 4;
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
    const dist = Math.random() * 120 + 40;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 30;
    const dur = Math.random() * 0.6 + 0.4;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      left: ${x}px; top: ${y}px;
      width: ${size}px; height: ${size}px;
      background: ${color};
      --tx: ${tx}px; --ty: ${ty}px;
      --rot: ${Math.random() * 720 - 360}deg;
      --duration: ${dur}s;
    `;
    container.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000);
  }
}

function getCellCenter(idx) {
  const el = document.getElementById(`cell-${idx}`);
  if (!el) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const rect = el.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

// ===== 화면 흔들림 =====
function screenShake() {
  const center = document.getElementById('board-center');
  center.classList.add('screen-shake');
  setTimeout(() => center.classList.remove('screen-shake'), 400);
}

// ===== 이벤트 카드 애니메이션 =====
function showEventCard(msg, type) {
  const card = document.getElementById('event-card');
  const text = document.getElementById('event-text');

  card.className = 'event-card';
  // 잠깐 리플로우 강제
  void card.offsetWidth;
  card.classList.add('flip');
  card.classList.add(type); // positive, negative, special

  setTimeout(() => {
    text.textContent = msg;
  }, 250); // 플립 중간에 텍스트 교체
}

// ===== 주사위 굴리기 =====
async function rollDice() {
  if (isRolling || gameComplete) return;

  if (skipNextTurn) {
    skipNextTurn = false;
    moveCount++;
    document.getElementById('move-count').textContent = moveCount;
    showEventCard('무인도에서 탈출! 다음 턴에 이동하세요.', 'special');
    return;
  }

  isRolling = true;
  const btn = document.getElementById('roll-btn');
  btn.disabled = true;

  const d1 = document.getElementById('dice1');
  const d2 = document.getElementById('dice2');
  const cube1 = d1.querySelector('.dice-cube');
  const cube2 = d2.querySelector('.dice-cube');

  // 3D 롤링 애니메이션
  cube1.classList.add('rolling');
  cube2.classList.add('rolling');

  await sleep(900);

  // 최종 결과
  const v1 = Math.ceil(Math.random() * 6);
  const v2 = Math.ceil(Math.random() * 6);
  cube1.classList.remove('rolling');
  cube2.classList.remove('rolling');
  setDiceValue(d1, v1);
  setDiceValue(d2, v2);

  const total = v1 + v2;
  const isDouble = v1 === v2;

  const resultEl = document.getElementById('dice-result');
  resultEl.innerHTML = `${v1} + ${v2} = <strong>${total}</strong>`;
  if (isDouble) {
    resultEl.innerHTML += ' <span class="double-badge">DOUBLE!</span>';
    screenShake();
    // 더블 파티클
    const diceRect = document.getElementById('dice-container').getBoundingClientRect();
    spawnParticles(
      diceRect.left + diceRect.width / 2,
      diceRect.top + diceRect.height / 2,
      20,
      ['#FF6B35', '#FCBF49', '#FF6B9D', '#4D96FF']
    );
  }

  moveCount++;
  document.getElementById('move-count').textContent = moveCount;

  // 말 이동
  await movePlayer(total);

  // 이벤트 처리
  handleCellEvent();

  // 도착 파티클
  const pos = getCellCenter(playerPos);
  const cell = CELLS[playerPos];
  const pColors = cell.event && cell.event.points > 0
    ? ['#6BCB77', '#2ecc71', '#FCBF49']
    : cell.event && cell.event.points < 0
      ? ['#FF6B6B', '#e74c3c', '#FFA06B']
      : ['#4D96FF', '#9B72CF', '#2EC4B6'];
  spawnParticles(pos.x, pos.y, 15, pColors);

  // 완주 체크
  if (playerPos === 0 && moveCount > 1) {
    gameComplete = true;
    await sleep(600);
    showCompleteModal();
  } else {
    btn.disabled = false;
    if (isDouble && !gameComplete && !skipNextTurn) {
      showEventCard(document.getElementById('event-text').textContent + ' 🎯 더블! 한 번 더!', 'special');
    }
  }

  isRolling = false;
}

// ===== 말 이동 (통통 바운스) =====
async function movePlayer(steps) {
  for (let i = 0; i < steps; i++) {
    // 이전 위치
    const prevCell = document.getElementById(`cell-${playerPos}`);
    if (prevCell) {
      prevCell.classList.remove('active');
      const tok = prevCell.querySelector('.player-token');
      if (tok) tok.remove();
    }

    playerPos = (playerPos + 1) % TOTAL;

    // 출발 통과 보너스
    if (playerPos === 0 && i < steps - 1) {
      totalPoints += 50;
      document.getElementById('points').textContent = totalPoints;
    }

    // 새 위치
    const newCell = document.getElementById(`cell-${playerPos}`);
    if (newCell) {
      newCell.classList.add('active');
      const token = document.createElement('div');
      token.className = 'player-token bounce';
      newCell.appendChild(token);

      // 바운스 끝나면 클래스 제거
      token.addEventListener('animationend', () => token.classList.remove('bounce'));
    }

    await sleep(200);
  }

  document.getElementById('current-pos').textContent = CELLS[playerPos].name;
}

// ===== 이벤트 처리 =====
function handleCellEvent() {
  const cell = CELLS[playerPos];
  let ev = cell.event;

  if (cell.type === 'golden') {
    ev = GOLDEN_EVENTS[Math.floor(Math.random() * GOLDEN_EVENTS.length)];
  }
  if (cell.type === 'chance') {
    ev = CHANCE_EVENTS[Math.floor(Math.random() * CHANCE_EVENTS.length)];
  }

  if (ev) {
    totalPoints = Math.max(0, totalPoints + ev.points);
    document.getElementById('points').textContent = totalPoints;

    const cardType = ev.points > 0 ? 'positive' : ev.points < 0 ? 'negative' : 'special';
    showEventCard(ev.msg, cardType);

    if (ev.skip) skipNextTurn = true;
  } else {
    showEventCard(`${cell.icon} ${cell.name}에 도착!`, 'special');
  }
}

// ===== 완주 모달 =====
function showCompleteModal() {
  // 축하 파티클 폭발
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      spawnParticles(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight * 0.6,
        25,
        ['#FF6B35', '#FCBF49', '#FF6B9D', '#4D96FF', '#6BCB77', '#9B72CF']
      );
    }, i * 200);
  }

  const modal = document.createElement('div');
  modal.id = 'complete-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>🎉 세계 일주 완료!</h2>
      <p style="color:#666; margin-top:4px;">축하합니다!</p>
      <div class="final-score">${totalPoints}<span class="score-unit">점</span></div>
      <p class="modal-info">${moveCount}턴 만에 완주!</p>
      <button onclick="resetGame()">🔄 다시 도전</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// ===== 리셋 =====
function resetGame() {
  playerPos = 0;
  moveCount = 0;
  totalPoints = 0;
  isRolling = false;
  gameComplete = false;
  skipNextTurn = false;

  document.getElementById('current-pos').textContent = '출발';
  document.getElementById('move-count').textContent = '0';
  document.getElementById('points').textContent = '0';
  document.getElementById('dice-result').textContent = '';
  document.getElementById('roll-btn').disabled = false;

  const card = document.getElementById('event-card');
  card.className = 'event-card';
  document.getElementById('event-text').textContent = '주사위를 굴려 게임을 시작하세요!';

  const modal = document.getElementById('complete-modal');
  if (modal) modal.remove();

  // 파티클 정리
  document.getElementById('particles').innerHTML = '';

  setDiceValue(document.getElementById('dice1'), 1);
  setDiceValue(document.getElementById('dice2'), 1);

  buildBoard();
}

// ===== 유틸 =====
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ===== 초기화 =====
initDice3D(document.getElementById('dice1'));
initDice3D(document.getElementById('dice2'));
setDiceValue(document.getElementById('dice1'), 1);
setDiceValue(document.getElementById('dice2'), 1);
buildBoard();
