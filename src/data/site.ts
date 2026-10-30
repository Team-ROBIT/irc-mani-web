// 사이트의 모든 문구·수치·팀 정보. 디자인(페이지·컴포넌트)은 이 파일만 읽는다.
// `pending: true`는 내용이 확정 전이라는 뜻이며 화면에 "확정 전" 표시가 붙는다.

export const project = {
  name: 'SAFE LAB',
  team: 'ROBIT',
  contest: '2026 IRC 매니퓰레이터 대회',
  // 문구 초안: 팀 검토 후 수정
  headline: '사람이 떠난 연구실, 남겨진 위험을 로봇이 찾아서 치웁니다.',
  summary:
    'SAFE LAB은 연구실 안전사고에 대처하는 자율 로봇입니다. VLM과 직접 제작한 Manipulator로 퇴실 후 남겨진 화재·전기 위험을 판단하고 물리적으로 제거합니다.',
};

// 사진·영상이 들어갈 자리. 파일을 src/assets/media/<id>.(jpg|png|webp)로 넣으면 자동으로 교체된다.
export const media = {
  hero: { id: 'hero/robot', label: '로봇 대표 사진', spec: '16:9 · 가로 2400px 이상 · 연구실 배경' },
  manipulator: { id: 'hardware/manipulator', label: 'Manipulator 사진', spec: '4:3 · 가로 1600px 이상' },
  leaderArm: { id: 'hardware/leader-arm', label: '리더암 사진', spec: '4:3 · 가로 1600px 이상' },
  station: { id: 'hardware/station', label: '스테이션 사진', spec: '4:3 · 가로 1600px 이상' },
};

// 페이지 내 섹션 목록(내비게이션 순서)
export const nav = [
  { id: 'top', label: '소개' },
  { id: 'why', label: '배경' },
  { id: 'tasks', label: '수행 Task' },
  { id: 'system', label: '시스템 구성' },
  { id: 'hardware', label: '하드웨어' },
  { id: 'software', label: '소프트웨어' },
  { id: 'team', label: '팀' },
];

export const why = {
  title: '왜 연구실 안전인가',
  stats: [
    { value: '396', unit: '건', label: '연구실 안전사고 (2024)' },
    { value: '54.5', unit: '%', label: '그중 대학에서 발생 (216건)' },
    { value: '93', unit: '%', label: '대학 연구활동종사자 중 학사·대학원생' },
  ],
  causes: [
    { title: '퇴실 후 미조치', body: '퇴근·야간 시간대 전열기구와 플러그 미분리, 배터리 방치로 인한 화재·전기 사고' },
    { title: 'Li-Po 배터리', body: '과충전이나 스웰링이 생기면 열폭주로 대형 화재까지 번질 수 있음' },
    { title: '무인 시간대 사각지대', body: '체크리스트·수동 점검은 부주의를 막지 못하고, 아무도 없을 때는 초동 대처가 불가능' },
  ],
  sources: [
    '과학기술정보통신부, 「연구실안전관리실태조사」 2024 (KOSIS 연구실 사고 현황)',
    '과학기술정보통신부, 「연구실안전관리실태조사」 2025',
  ],
  cases: [
    { title: '대학원 연구실 배터리 화재', url: 'https://www.youtube.com/watch?v=WIwHCSgCqlc' },
    { title: '관리자 전원 미차단으로 인한 사고', url: 'https://www.youtube.com/watch?v=1PmRYAUTcbI' },
    { title: '4족 로봇 실험 중 화재', url: 'https://www.youtube.com/watch?v=K7Z1AZFtdnM' },
  ],
};

// 08.13 컨셉 기준. 최종 시연 task와 AI 역할은 확정 전.
export const tasks = {
  title: '수행하는 Task',
  intro: '사람이 연구실을 나가면 로봇이 위험요소를 찾아 우선순위를 정하고, 가장 위험한 것부터 직접 처리합니다.',
  pending: true,
  priorities: [
    { rank: 1, name: '열', level: 'high' },
    { rank: 2, name: '배터리', level: 'high' },
    { rank: 3, name: '멀티탭', level: 'medium' },
    { rank: 4, name: '정리', level: 'low' },
  ],
  items: [
    { name: '위험요소 판별', action: '사람이 나간 것을 인식하고 책상 위 위험요소를 찾아 우선순위를 정합니다.', cause: '퇴실 후 미조치' },
    { name: '인두기 코드 뽑기', action: '켜진 인두기의 전원 코드를 뽑습니다.', cause: '열·전기' },
    { name: '배터리 분리', action: '충전기에 꽂힌 드릴 배터리를 뽑아 둡니다.', cause: '배터리 과충전' },
    { name: '멀티탭 끄기', action: '멀티탭 스위치를 꺼서 전원을 차단합니다.', cause: '전기' },
    { name: '작업대 정리', action: '흩어진 공구를 정리하고, 사람이 건넨 물건도 받아서 치웁니다.', cause: '정리' },
  ],
};

export const hardware = {
  title: '직접 설계하고 만든 하드웨어',
  intro: '로봇팔부터 구동 모터 제어기, 데이터 수집용 리더암, 스테이션까지 모두 팀이 직접 설계·가공·조립했습니다.',
  items: [
    {
      key: 'manipulator',
      name: 'Manipulator',
      role: 'QDD 매니퓰레이터',
      body: 'QDD(Quasi-Direct Drive) 모터 기반 매니퓰레이터를 직접 설계·가공하고, 모터 low-level 제어기까지 자체 제작했습니다.',
      specs: [
        { label: '자유도', value: '7' },
        { label: '가반 하중', value: '정격 3kg · 최대 5kg' },
        { label: '무게', value: '7.3kg' },
        { label: '도달 거리', value: '77cm' },
      ],
    },
    {
      key: 'leaderArm',
      name: 'Leader Arm',
      role: '모방학습 데이터 수집',
      body: '사람이 리더암을 움직여 시연 데이터를 모으고, 이 데이터로 정책을 학습합니다. 대회 시연 중에는 사용하지 않으며 로봇은 완전히 자율로 동작합니다.',
      specs: [
        { label: '자유도', value: '7' },
        { label: '용도', value: '데이터 수집' },
      ],
    },
    {
      key: 'station',
      name: 'Station',
      role: '작업 공간',
      body: '로봇이 위험요소를 찾아 처리하는 작업 공간입니다. 전원·배터리·공구 장비와 작업대를 내려다보는 탑뷰 카메라로 구성되어 있습니다.',
      specs: [
        { label: '전원', value: '멀티탭' },
        { label: '배터리', value: '배터리 충전기 · 배터리 수납함' },
        { label: '공구', value: '인두기 · 공구 수납함' },
        { label: '카메라', value: '탑뷰 카메라' },
      ],
    },
  ],
} as const;

// 자료가 정리되면 채운다. pending 섹션은 "자료 준비 중"으로 표시된다.
export const system = {
  title: '전체 시스템 구성',
  intro: '탑뷰 카메라로 위험요소를 판단하고 매니퓰레이터의 동작으로 옮기기까지의 흐름입니다. 리더암은 학습 데이터 수집에만 쓰며, 시합 중 수동 조작은 없습니다.',
  pending: true,
  diagram: {
    run: {
      label: '자율 수행',
      stages: [
        { label: '입력', nodes: [{ name: '탑뷰 카메라', note: 'Station' }] },
        {
          label: '인식·판단',
          nodes: [
            { name: 'VLM', note: '퇴실 인식, 위험요소 판별, 우선순위' },
            { name: 'Vision', note: '' },
          ],
        },
        { label: '계획', nodes: [{ name: 'Task Planner', note: '' }] },
        {
          label: '동작 생성',
          nodes: [
            { name: 'Motion Planner', note: '' },
            { name: '모방학습 정책', note: '' },
          ],
        },
        { label: '제어', nodes: [{ name: 'QDD 모터 제어기', note: 'low-level' }] },
        { label: '수행', nodes: [{ name: 'Manipulator', note: '인두기 → 배터리 → 멀티탭 → 정리' }] },
      ],
    },
    train: {
      label: '사전 학습',
      stages: [
        { name: 'Leader Arm', note: '사람이 직접 조작' },
        { name: '시연 데이터', note: '' },
        { name: '정책 학습', note: '학습한 정책을 실행에 사용' },
      ],
    },
  },
  items: ['노드 간 통신', '실행 환경'],
};

export const software = {
  title: '소프트웨어',
  intro: '[작성 예정] 위험을 판단하는 VLM부터 동작을 만드는 모방학습·플래너까지, 각 모듈의 구조와 결과를 정리합니다.',
  pending: true,
  modules: [
    { key: 'vlm', name: 'VLM', owner: '송수민', body: '사람이 나간 것을 인식하고 책상 위 위험요소를 판별해 우선순위를 정합니다.' },
    { key: 'vision', name: 'Vision', owner: '송수민', body: '[작성 예정]' },
    { key: 'imitation', name: '모방학습', owner: '김민조', body: '리더암으로 모은 시연 데이터로 동작 정책을 학습합니다.' },
    { key: 'task-planner', name: 'Task Planner', owner: '김민조', body: '[작성 예정]' },
    { key: 'motion-planner', name: 'Motion Planner', owner: '', body: '[작성 예정]' },
  ],
};

export const team = {
  title: '팀 ROBIT',
  members: [
    { name: '김민조', photo: 'team/kim-minjo', roles: ['QDD 모터 low-level 제어기 제작', '모방학습 개발', 'Task planner 개발'] },
    { name: '우정윤', photo: 'team/woo-jeongyun', roles: ['QDD 매니퓰레이터 설계 및 가공', '매니퓰레이터 조립'] },
    { name: '박기홍', photo: 'team/park-gihong', roles: ['매니퓰레이터 배선', '시연 소품 제작 및 준비', '웹 페이지 제작'] },
    { name: '송수민', photo: 'team/song-sumin', roles: ['VLM 개발', 'Vision'] },
  ],
  thanks: ['최범수'],
};
