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
  { id: 'results', label: '시연 결과' },
  { id: 'system', label: '시스템 구성' },
  { id: 'hardware', label: '하드웨어' },
  { id: 'software', label: '소프트웨어' },
  { id: 'process', label: '개발 과정' },
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

// 영상과 성공률은 측정 후 채운다. youtubeId를 넣으면 영상이 나오고, '—'는 아직 측정 전인 값.
export const results = {
  title: '실제 시연 결과',
  intro: '로봇이 Task를 처음부터 끝까지 수행하는 영상과 Task별 성공률입니다.',
  pending: true,
  youtubeId: 'OLy96QEyY1U',
  items: [
    { name: '위험요소 판별', rate: '—' },
    { name: '인두기 코드 뽑기', rate: '—' },
    { name: '배터리 분리', rate: '—' },
    { name: '멀티탭 끄기', rate: '—' },
    { name: '작업대 정리', rate: '—' },
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
  intro: '탑뷰 카메라와 Vision이 입력을 받고, VLM이 상황을 판단한 뒤 Task Planner가 실행을 연결하는 흐름입니다. 리더암은 학습 데이터 수집에만 쓰며, 시연 중 수동 조작은 없습니다.',
  pending: true,
  diagram: {
    run: {
      label: '자율 수행',
      stages: [
        {
          label: '입력',
          nodes: [
            { name: '탑뷰 카메라', note: 'Station' },
            { name: 'Vision', note: '객체·상태·위험 인식' },
          ],
        },
        {
          label: '판단·계획',
          nodes: [
            { name: 'VLM', note: '퇴실 인식, 위험요소 판별, 우선순위' },
          ],
        },
        { label: '실행', nodes: [{ name: 'Task Planner', note: '' }] },
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
  communication: {
    title: '노드 간 통신',
    intro: '각 모듈이 서로 무엇을 주고받는지 정리했습니다. 화살표는 데이터가 가는 방향입니다.',
    groups: [
      {
        name: '인식 입력',
        links: [
          { from: 'RGB·깊이 카메라', to: 'Vision', data: '영상·거리 정보' },
          { from: 'RGB·깊이 카메라', to: 'VLM · 작업 계획', data: 'RGB 영상' },
          { from: 'Vision', to: 'VLM · 작업 계획', data: '물체 종류·상태·관계, 사람 상태·조작 연관 정보' },
        ],
      },
      {
        name: '계획과 실행',
        links: [
          { from: 'VLM · 작업 계획', to: '계획 검증·구체화', data: '작업 종류·대상·순서' },
          { from: '계획 검증·구체화', to: 'Task Planner', data: '검증된 작업 계획' },
          { from: 'Vision', to: 'Task Planner', data: '최신 물체 위치·접근 자세' },
          { from: 'Task Planner', to: '계획 검증·구체화', data: '수락·진행·완료·실패, 다음 계획 요청' },
          { from: '계획 검증·구체화', to: 'VLM · 작업 계획', data: '실행 결과·남은 작업' },
          { from: '계획 검증·구체화', to: 'Vision', data: '현재·다음 작업 대상' },
        ],
      },
      {
        name: '음성 입력',
        links: [
          { from: 'USB 마이크', to: '음성 인식', data: '음성' },
          { from: '음성 인식', to: '음성 대화 제어', data: '인식 문장' },
          { from: '음성 대화 제어', to: 'VLM · 작업 계획', data: '분류한 사용자 요청' },
          { from: 'Vision', to: '음성 대화 제어', data: '사람 접근·침범·이탈 상태' },
        ],
      },
      {
        name: '음성 안내',
        links: [
          { from: '계획 검증·구체화', to: '음성 대화 제어', data: '요청 접수·처리 순서' },
          { from: 'Task Planner', to: '음성 대화 제어', data: '실행 상태·결과' },
          { from: '음성 대화 제어', to: '음성 인식', data: '안내 후 청취 시작·종료' },
          { from: '음성 대화 제어', to: '음성 합성 · USB 스피커', data: '안내·응답' },
        ],
      },
    ],
  },
  environment: {
    title: '실행 환경',
    rows: [
      { item: '연산 장치', value: 'NVIDIA Jetson AGX' },
      { item: '실행 방식', value: 'Vision·VLM 온디바이스 로컬 실행' },
      { item: '모듈 연동 환경', value: 'ROS 2 Jazzy' },
      { item: 'RGB·깊이 입력', value: 'Intel RealSense D455 · USB 3 연결' },
      { item: '음성 입력', value: 'AGX에 연결된 USB 마이크' },
      { item: '음성 출력', value: 'AGX에 연결된 USB 스피커' },
    ],
  },
};

export const software = {
  title: '소프트웨어',
  intro: '위험을 판단하는 VLM부터 동작을 만드는 모방학습·플래너까지, 각 모듈의 구조와 결과를 정리합니다.',
  pending: true,
  modules: [
    { key: 'vlm', name: 'VLM', owner: '송수민', body: '카메라 화면과 책상 상태를 보고 무엇을 어떤 순서로 처리할지 계획합니다. 위험 우선순위를 따르고, 불명확하면 보류합니다.', detail: '#software-vlm' },
    { key: 'imitation', name: '모방학습', owner: '김민조', body: '리더암으로 모은 시연 데이터로 ACT 정책을 학습해, 코드 뽑기·스위치 끄기 같은 정밀한 조작을 로봇이 스스로 수행합니다.', detail: '#software-imitation' },
    { key: 'vision', name: 'Vision', owner: '송수민', body: 'RGB·깊이·열화상으로 책상 위 물체의 종류와 위치, 열 상태를 파악해 로봇이 쓸 수 있는 정보로 바꿉니다.', detail: '#software-vision' },
    { key: 'motion-planner', name: 'Motion Planner', owner: '김민조', body: 'Vision이 찾은 물체 앞 자세까지 MoveIt으로 경로를 계획해 팔을 옮기고, 그다음 조작을 모방학습 정책에 넘깁니다.', detail: '#software-motion-planner' },
  ],
};

// 측정값이 null이면 "미측정"으로 표시된다. 값은 측정한 것만 넣는다.
export const vision = {
  easy: '로봇이 책상 위 물건이 무엇인지, 어디에 있는지, 지금 다뤄도 되는 상태인지를 파악하도록 돕는 눈을 만들었습니다.',
  summary:
    'RGB·깊이·열화상 정보를 결합해 책상 위 물체의 종류와 위치, 열 상태를 파악하고 로봇이 사용할 수 있는 작업 환경 정보로 변환하는 비전 시스템을 개발했습니다. 물체 인식부터 가림 후 추적 복구, 사람 접근·침범 감지, 충전 상태 판단까지 연결하고, SAM2 기반 물체 영역 분리와 공구 형상 분석으로 파지 위치와 방향을 계산합니다.',
  principle: {
    title: '확실하지 않으면 추측하지 않고 보류합니다',
    body: '깊이 값을 믿을 수 없으면 위치를 쓰지 않고, 플러그가 헷갈리면 분류하지 않으며, 관측할 수 없는 상태를 "접촉 없음"으로 단정하지 않습니다. 불명확한 상태를 추측으로 채우지 않고 보류로 남기도록 설계했습니다.',
  },
  sensors: [
    { name: 'RGB 카메라', model: 'Intel RealSense D455', spec: '1280×720 · 30fps', role: '물체·사람·손 인식의 입력 영상' },
    { name: '깊이 카메라', model: 'Intel RealSense D455 (스테레오 깊이)', spec: '640×360 · 30fps', role: '물체의 3차원 위치 계산. RGB에 정렬된 깊이를 RGB 크기로 사용' },
    { name: '열화상 카메라', model: 'Thermoeye TMC160BB (센서 FLIR Lepton 3.5)', spec: '160×120', role: '색으로 구분하기 어려운 인두기의 잔열과 고온 상태 확인' },
  ],
  mounting: '책상을 내려다보는 고정 탑뷰 구성이며, 열화상 카메라도 RGB-D 카메라 근처에 고정했습니다.',
  alignment: [
    { label: 'RGB–깊이', body: 'RealSense SDK의 depth-to-color alignment와 카메라 내부 파라미터를 사용' },
    { label: '카메라–로봇', body: '카메라 광학 좌표에서 로봇 기준 좌표로 TF 변환' },
    { label: 'RGB–열화상', body: '대응하는 물체를 기준으로 이동·회전과 열화상 투영 파라미터를 수동으로 맞추고 YAML로 저장해 재사용' },
  ],
  features: [
    {
      key: 'detection',
      name: '물체 인식과 추적',
      easy: '책상 위 공구, 배터리, 인두기, 전원 코드가 각각 무엇인지 구분합니다.\n로봇 팔이 물건을 잠깐 가려도 바로 다른 물건으로 취급하지 않고, 다시 보인 정보가 충분할 때 같은 물건으로 연결합니다.',
      tags: ['YOLO11n', 'TensorRT', '추가 학습', '자체 C++ Tracker', 'OCCLUDED', 'ObjectArchive', 'OcclusionRecovery'],
      tech: 'Ultralytics YOLO11n 사전학습 가중치에서 추가 학습했습니다. 공구 1종 모델과 배터리·배터리 코드·인두기 코드·인두기 4종 모델로 나누어 학습하고, AGX에서는 TensorRT 엔진으로 실행합니다. 추적은 3D 거리를 우선하고 필요하면 2D bbox IoU로 물체를 프레임 사이에서 연결하며, EMA 등으로 위치 변동을 줄입니다. OCCLUDED·ObjectArchive·OcclusionRecovery를 직접 구현해 가림 전후의 물체 ID를 연결합니다.',
      metrics: [
        { label: 'mAP@50 · 배터리·전원 4종', value: '99.2%' },
        { label: 'mAP@50 · 일반 공구', value: '97.0%' },
        { label: '가림 후 ID 복구 성공률', value: null },
      ],
      improvements: [
        { problem: '모델마다 검출 주기가 달라, 검출하지 않은 주기를 물체 소실로 오인', solution: '해당 모델이 실제로 실행된 결과인지 구분해 Tracker의 누락 판단에 반영합니다.' },
        { problem: '로봇 팔이 가린 뒤 같은 물체가 새 ID로 나타남', solution: '같은 클래스, 호환되는 좌표·ROI, 6cm 이내, 크기 조건을 비교해 양방향으로 유일하게 대응될 때만 기존 ID로 연결합니다. 가림 중의 과거 pose는 무효로 처리합니다.' },
      ],
      limit: '제자리 재등장이 기본입니다. 외형이 같은 여러 물체를 가린 뒤에는 실물 identity를 보장하지 않으며, 크게 이동한 물체나 사람이 작업 중 끊긴 ID는 위치만으로 연결하지 않습니다.',
      image: { id: 'software/vision-detection', label: '물체 인식과 추적 결과 화면' },
    },
    {
      key: 'position',
      name: '3차원 위치·파지 계산',
      easy: '화면 속 물체가 로봇 기준으로 어디에 있는지 계산하고, 공구는 어디를 어느 방향으로 잡아야 하는지도 계산합니다. 깊이 값을 믿을 수 없으면 위치를 쓰지 않습니다.',
      tags: ['Aligned depth', '역투영', 'TF 변환', 'SAM2.1 Tiny', '형상 분석', '평면 투영'],
      tech: '깊이 표본의 중앙값·MAD 기반 이상치 제거 → 카메라 내부 파라미터로 역투영 → TF로 로봇 기준 좌표 변환. 유효한 깊이가 없으면 pose를 무효로 처리합니다. 공구는 사전학습 SAM2.1 Tiny로 영역을 분할하고, 형상을 분석해 평면에 투영한 뒤 파지 위치와 방향을 계산합니다.',
      metrics: [
        { label: '3D 위치 절대 오차', value: null },
        { label: '파지점·방향 오차', value: null },
        { label: '실제 파지 성공률', value: null },
      ],
      improvements: [
        { problem: '깊이 영상의 지연과 시각 불일치가 손·물체 판정에 영향', solution: '원본 aligned depth와 필터 depth의 사용 경로를 나누고, timestamp와 최신성(freshness)을 검사합니다.' },
        { problem: '검출 박스만으로는 공구를 잡을 위치와 방향을 알기 어려움', solution: '드라이버는 손잡이, 니퍼는 축과 헤드를 분석해 파지점과 방향을 계산합니다. 일부만 검출되면 관련 원시 박스로 분할 프롬프트를 보완합니다.' },
      ],
      limit: '검은색·반사 금속·작은 물체는 깊이 누락과 이상점이 생길 수 있습니다. 강건한 표본 처리와 유효성 검사를 적용하지만 항상 복원되지는 않습니다. SAM2 분할이 조각나거나 공구 형태가 불명확하면 파지 방향을 보류하며, 공구 종류 전반에 대한 범용 파지 성능은 검증하지 않았습니다.',
      image: { id: 'software/vision-grasp', label: '3D 위치와 공구 파지 결정 화면' },
    },
    {
      key: 'table',
      name: '책상 면 추정',
      easy: '물체가 놓인 책상 면을 찾아 기준으로 삼습니다. 물체나 로봇이 추정을 흔들지 않도록 걸러 냅니다.',
      tags: ['RANSAC', 'MAD', '평면 적합'],
      tech: 'RANSAC·MAD 기반의 강건한 평면 적합으로 책상 면을 추정합니다. 아래 측정값은 로봇이 움직이지 않는 정지 관측이고 로봇 필터를 거치지 않은 조건입니다.',
      metrics: [
        { label: '약 30초 정지 관측 시 평면 offset 변동폭', value: '2.324mm' },
        { label: 'stable 판정 횟수', value: '147회' },
      ],
      improvements: [
        { problem: '책상 위 물체·로봇·깊이 이상점이 책상 평면을 흔듦', solution: '제외 마스크, 강건한 평면 적합, 공간 분포와 시간 안정성 검사를 함께 씁니다.' },
      ],
      image: { id: 'software/vision-table', label: '책상 면 추정 화면' },
    },
    {
      key: 'thermal',
      name: '열 상태 확인',
      easy: '눈으로는 차가워 보이는 인두기도 뜨거울 수 있어, 열화상으로 열 상태를 따로 확인합니다.',
      tags: ['Thermoeye TMC160BB', 'FLIR Lepton 3.5', '수동 정렬'],
      tech: 'RGB와 열화상은 대응하는 물체를 기준으로 이동·회전과 투영 파라미터를 수동으로 맞추고, 그 값을 YAML로 저장해 다시 씁니다.',
      metrics: [{ label: '온도 오차 · ON/OFF 정확도', value: null }],
      improvements: [
        { problem: '열화상 내부 보정 시 잔상이 발생', solution: '외부 균일 기준판을 이용한 수동 보정·영상 확인 흐름을 만들고 ROS와 연동했습니다.' },
      ],
      limit: '저해상도이고 수동 정렬·보정 상태의 영향을 받습니다. 임계값 기반의 위험 관측이며 정밀 온도계나 전기적 전원 확인 장치가 아닙니다.',
      image: { id: 'software/vision-thermal', label: '열화상 화면' },
    },
    {
      key: 'person',
      name: '사람 접근 감지',
      easy: '책상 주변에 사람이 다가오는지 확인합니다.',
      tags: ['YOLO 사람 검출', 'TensorRT'],
      tech: 'COCO 사전학습 YOLO로 사람을 검출하고, 깊이 정보와 함께 외부에서 사람이 접근하는지 판단합니다.',
      improvements: [
        { problem: '사람 몸 검출이 끊기거나 팔만 보임', solution: '외부 접근은 사람 검출과 깊이로, 내부 침범은 독립적인 손 3D로 판단하도록 근거를 나눕니다.' },
      ],
      image: { id: 'software/vision-person', label: '사람 접근 감지 화면' },
    },
    {
      key: 'hand',
      name: '손 침범 감지',
      easy: '작업 공간 안으로 손이 들어왔는지, 손이 어디에 있는지를 3차원으로 확인합니다.',
      tags: ['MediaPipe Hand Landmarker', '21개 관절', '3D 역투영'],
      tech: 'MediaPipe Hand Landmarker로 손당 21개 관절(최대 두 손)을 관측해 aligned depth로 3D로 역투영합니다.',
      metrics: [{ label: '손 접촉·침범 판정 정확도', value: null }],
      limit: '탑뷰에서 손이 가려지거나 물체를 쥔 손, 책상 표면과 섞인 깊이에서는 손 3D가 불안정할 수 있습니다. 관측 불가를 접촉 없음으로 단정하지 않으며, 안전 인증 센서를 대체하지 않습니다.',
      image: { id: 'software/vision-hand', label: '손 인식 화면' },
    },
    {
      key: 'plug',
      name: '플러그 형태 구분',
      easy: '외형이 비슷한 배터리 코드와 인두기 코드를 플러그 머리 모양으로 구분하고, 헷갈리면 판단을 보류합니다.',
      tags: ['형태학적 영역 분리', 'HOG + SVM'],
      tech: '플러그 머리 모양을 비교해 분류합니다. 아래 결과는 동일하게 수집한 영상에서 한 프레임씩 빼며 검증한 교차 검증(leave-one-frame-out)이고, 부적합 프레임 4개는 제외했습니다.',
      metrics: [{ label: '교차 검증 정답 (8프레임 · 16 crop)', value: '16/16' }],
      improvements: [
        { problem: '배터리 코드와 인두기 코드의 외형이 비슷함', solution: '위치·케이블 형태 대신 플러그 머리 형태 특징으로 추가 분류하고, 모호하면 보류합니다.' },
      ],
      image: { id: 'software/vision-plug', label: '플러그 형태 구분 화면' },
    },
    {
      key: 'led',
      name: '충전 상태 판단',
      easy: 'LED의 점등·점멸을 시간에 따라 관찰해 충전 상태를 판단합니다.',
      tags: ['LED 시간 상태', 'ROI별 근거'],
      improvements: [
        { problem: 'LED 점멸의 소등 구간에서 상태가 흔들림', solution: '순간의 색 하나가 아니라 시간에 따른 상태, 보정 샘플, ROI별 근거로 판단합니다.' },
      ],
      limit: '반사·조명·ROI 변경의 영향을 받아 캘리브레이션과 시간 관측이 필요합니다.',
      image: { id: 'software/vision-led', label: '충전 상태 판단 화면' },
    },
  ],
  training: {
    note: '두 모델 모두 YOLO11n 사전학습 가중치, 입력 640×640, batch 16, 100 epochs로 학습했고, 아래는 마지막 epoch의 validation 지표입니다.',
    rows: [
      { name: '배터리·배터리 코드·인두기 코드·인두기 (4종)', images: '4,963장', split: '3,925 / 692 / 346', precision: '99.8%', recall: '98.8%', map50: '99.2%', map5095: '91.9%' },
      { name: '일반 공구', images: '1,670장', split: '1,387 / 197 / 86', precision: '97.5%', recall: '95.8%', map50: '97.0%', map5095: '87.1%' },
    ],
  },
};

export const vlm = {
  easy: '카메라 화면과 로봇이 파악한 책상 상태를 보고 무엇을 어떤 순서로 처리할지 계획을 세웁니다. 계획은 검증을 거친 뒤에만 Task Planner에 전달됩니다.',
  model: 'Qwen3-VL-4B-Instruct',
  runtime: 'AGX에서 TensorRT Edge-LLM으로 로컬 추론',
  input: [
    '최대 768×512 RGB 이미지',
    'SceneState: 객체 ID · 종류 · 상태 · 관계 · 유효성',
    '사용자 명령',
    '이전 계획과 Planner 피드백',
  ],
  output: ['작업 종류 · 대상 ID · 순서를 JSON으로 생성', '스킬 트리로 변환해 Task Planner에 전달'],
  priorityTitle: '위험 우선순위',
  priority: ['인두기 코드 분리', '충전 완료 배터리 정리', '조건을 만족하는 콘센트 처리', '일반 공구 정리'],
  priorityNote: '충전 중인 배터리는 임의로 제거하지 않으며 상태를 알 수 없는 물체 또한 임의로 정리하지 않습니다.',
  rules: [
    '인두기 분리는 유효한 ON 관측과 코드·전원 연결이 있을 때만 계획에 넣습니다.',
    '불명확한 상태는 추측하지 않고 보류합니다.',
  ],
  cases: [
    { name: '사례 1', scene: '인두기 코드 분리 → 배터리 수납 → 콘센트 끄기 → 공구 3개 수납', time: '15.217초', tokens: '8,175 / 109' },
    { name: '사례 2', scene: '배터리 수납 → 콘센트 끄기 → 공구 1개 수납', time: '10.280초', tokens: '7,057 / 69' },
    { name: '사례 3', scene: '공구 2개 수납', time: '7.221초', tokens: '7,150 / 33' },
    { name: '사례 4', scene: '공구 1개 수납', time: '5.128초', tokens: '6,777 / 17' },
  ],
};

// 모방학습 상세. 측정값이 null이면 "미측정"으로 표시된다.
export const imitation = {
  easy: '사람이 리더암으로 직접 보여 준 동작을 학습해, 코드 뽑기·스위치 끄기처럼 물체와 접촉이 많은(contact-rich) 조작을 로봇이 스스로 하게 만들었습니다.',
  model: 'ACT (Action Chunking with Transformers)',
  runtime: 'LeRobot 0.4.4 위에 로봇·학습·실행 도구를 직접 구현',
  principle: {
    title: '리더암은 데이터를 모을 때만 씁니다',
    body: '시연 데이터는 사람이 리더암을 움직이고 로봇 팔이 그대로 따라 하게 해서 모읍니다. 대회 시연에서는 리더암을 끄고, 학습한 정책만으로 로봇이 움직입니다. 시연 중 수동 조작은 없습니다.',
  },
  flow: [
    { name: '수집', body: '사람이 리더암을 움직이면 로봇 팔이 따라 움직이고, 카메라 영상과 그리퍼 자세를 30fps로 기록합니다.' },
    { name: '학습', body: '모은 에피소드로 ACT 정책을 학습합니다. 정책은 영상과 현재 자세를 보고 앞으로 1초(30스텝)의 동작을 한 번에 예측합니다.' },
    { name: '실행', body: 'Task Planner가 skill을 요청하면 해당 정책을 정해진 시간 동안 실행합니다. 동작이 끝났는지는 Vision 결과 확인으로 판단합니다.' },
  ],
  io: {
    input: ['손목 카메라 RGB 영상 1장 (RealSense, 360×640)', '그리퍼 자세: 위치 3 + 회전(6D) 6 + 그리퍼 1'],
    output: ['앞으로 30스텝(1초)의 그리퍼 자세와 개폐', '역기구학(IK)으로 관절 각도로 바꿔 전송'],
  },
  features: [
    {
      key: 'task-space',
      name: '관절 대신 그리퍼 자세로 학습',
      easy: '7개 관절 각도가 아니라 그리퍼의 위치와 방향을 학습하고, 실행할 때 역기구학으로 관절 각도를 계산합니다.',
      tags: ['End-effector pose', '6D rotation', 'Pinocchio IK'],
      tech: '관측과 동작 모두 10차원(위치 3, 회전 행렬의 두 열 6, 그리퍼 1)입니다. IK는 Pinocchio로 관절 한계를 지키는 감쇠 최소제곱(damped least squares)을 현재 자세에서 한 번 풀어, 실행 중 팔 자세가 갑자기 바뀌지 않게 했습니다.',
      improvements: [
        { problem: '정책 출력이나 IK 해가 튀면 팔이 한 번에 크게 움직일 수 있음', solution: '측정한 관절 각도에서 한 스텝에 0.1rad(30fps에서 최대 3rad/s)까지만 움직이도록 명령을 잘라 보냅니다.' },
      ],
    },
    {
      key: 'relative',
      name: '현재 자세 기준 상대 동작',
      easy: '절대 좌표 대신 "지금 그리퍼에서 얼마나 움직일지"를 학습합니다. 손목 카메라도 그리퍼 기준으로 장면을 보기 때문에, 동작도 같은 기준으로 맞췄습니다.',
      tags: ['relative action', 'state history 3'],
      tech: '예측하는 동작 청크를 현재 그리퍼 자세 기준 좌표로 바꿔 학습하고, 입력 상태도 0.1초(3스텝) 전 자세를 현재 기준으로 본 값을 씁니다. 어떤 표현으로 학습했는지 체크포인트에 기록해 두어, 실행할 때 자동으로 같은 방식으로 되돌립니다. 절대·상대·직전 스텝 기준(delta) 세 가지를 바꿔 가며 학습할 수 있습니다.',
      improvements: [
        { problem: '처음에는 에피소드 시작 자세를 고정 기준으로 학습해서, 시작 자세가 1~2cm 어긋나면 목표 위치도 그만큼 밀림', solution: 'UMI(Chi et al., RSS 2024)의 Relative 방식처럼, 예측할 때마다 그 시점의 현재 그리퍼 자세를 기준으로 바꿨습니다.' },
      ],
    },
    {
      key: 'lipo',
      name: '청크 이음새 다듬기 (LiPo)',
      easy: '1초씩 예측한 동작을 이어 붙일 때 생기는 덜컥임을 줄였습니다.',
      tags: ['ACT chunk 30', 'LiPo', 'OSQP'],
      tech: '청크마다 앞 20스텝만 실행하고 다시 예측해, 새 청크의 앞 10스텝이 이전 청크와 겹치게 합니다. 겹치는 구간을 jerk가 최소가 되도록 최적화(QP)로 잇습니다. 그리퍼 개폐는 타이밍이 중요해서 다듬지 않습니다.',
      improvements: [
        { problem: '청크가 바뀌는 순간 동작이 끊기거나 튐', solution: 'ACT의 temporal ensemble과 LiPo로 청크 경계를 평활화하고, 보정 없는 기본 방식과 같은 실행 조건에서 돌린 궤적 데이터로 경계 불연속(jerk·점프 크기)과 성공률을 정량 비교합니다.' },
      ],
    },
    {
      key: 'leader',
      name: '리더암 연결',
      easy: '리더암을 로봇 팔 자세에 먼저 맞춘 뒤에 연결해, 연결하는 순간 로봇이 튀지 않게 했습니다.',
      tags: ['중력 보상', 'Dynamixel', '팔로우 모드'],
      tech: '평소에는 중력 보상만 켜서 손으로 가볍게 움직일 수 있습니다. F 키를 누르면 리더암이 로봇 팔 자세를 따라가고, S 키는 모든 관절 차이가 0.1rad 이내일 때만 로봇 팔로 명령을 보내기 시작합니다.',
      improvements: [],
    },
    {
      key: 'record',
      name: '데이터 수집 도구',
      easy: '리더암 조작을 그대로 기록하고, 잘못된 시연은 바로 지우고 다시 찍을 수 있습니다.',
      tags: ['LeRobot dataset', '30 fps'],
      tech: '리더암 노드가 로봇 팔에 직접 명령을 보내는 구조라, LeRobot 기본 녹화 대신 관측과 명령을 함께 기록하는 녹화 루프를 따로 만들었습니다.',
      improvements: [
        { problem: '재녹화로 버린 시연의 영상 프레임이 다음 에피소드 영상 끝에 붙음 (LeRobot 0.4.4)', solution: '버릴 때 영상용 임시 이미지 폴더까지 지우도록 고치고, 합성 데이터셋으로 재현·검증했습니다.' },
      ],
    },
  ],
  trainingNote: 'ACT, batch 32, 청크 30스텝, 5,000스텝마다 체크포인트 저장. 시간은 프레임 수 ÷ 30fps입니다.',
  skills: [
    { task: '인두기 코드 뽑기', skill: 'unplug_soldering_il', episodes: 50, minutes: '6.9분', run: '14초' },
    { task: '배터리 분리', skill: 'battery_task_il', episodes: 42, minutes: '8.7분', run: '15초' },
    { task: '멀티탭 끄기', skill: 'switch_off_il', episodes: 50, minutes: '4.3분', run: '8초' },
    { task: '작업대 정리 (공구 잡기)', skill: 'grasp_il', episodes: 90, minutes: '9.7분', run: '2초' },
  ],
  skillsNote: '배터리 분리는 뽑기 → 운반 → 놓기를 정책 하나로 수행합니다.',
};

// Motion Planner 상세
export const motionPlanner = {
  easy: 'Vision이 알려 준 물체 앞 자세까지 로봇 팔을 옮깁니다. 여기까지는 계획한 경로로 움직이고, 물체를 다루는 접촉이 많은 동작은 모방학습 정책이 이어받습니다.',
  stack: 'MoveIt 2 · pick_ik',
  flow: [
    { name: 'Vision', body: '대상 물체의 조작 전 자세(pre-manipulation pose)를 SceneState로 보냅니다.' },
    { name: 'Task Planner', body: '그 자세가 최신이고 유효할 때만 Motion Planner에 이동을 요청합니다. 아니면 보내지 않고 보류합니다.' },
    { name: 'Motion Planner', body: '현재 관절 상태에서 목표 자세까지 경로를 계획하고 실행합니다.' },
    { name: '모방학습', body: '도착한 자세에서 정책이 조작을 시작합니다.' },
  ],
  settings: [
    { label: '계획 시간 · 시도', value: '5초 · 10회' },
    { label: '속도 · 가속도', value: '최대의 10%' },
    { label: '도착 허용 오차 (위치)', value: '축마다 ±5mm' },
    { label: '도착 허용 오차 (회전)', value: '축마다 ±0.01rad (약 0.57°)' },
    { label: 'IK', value: 'pick_ik (KDL과 비교 후 선택)' },
  ],
  features: [
    {
      name: '축마다 다른 도착 허용 오차',
      problem: 'MoveIt의 기본 인터페이스는 위치 세 축, 회전 세 축에 각각 하나의 허용 오차만 받음',
      solution: '목표를 위치·자세 제약(constraint)으로 직접 만들어 x, y, z와 roll, pitch, yaw마다 따로 정할 수 있게 했습니다.',
    },
    {
      name: '계획 전 관절 범위 검사',
      problem: '로봇이 관절 한계 밖에 있으면 MoveIt이 이유를 알기 어려운 오류로 계획을 거부함',
      solution: '계획 전에 현재 관절 상태를 검사해, 범위를 벗어난 관절 이름과 값, 한계를 함께 알려 줍니다.',
    },
    {
      name: '움직이지 않고 도달 가능성 확인',
      problem: '목표 자세에 실제로 갈 수 있는지 로봇을 움직여 봐야 알 수 있음',
      solution: 'check 모드에서는 정해 둔 home 자세에서 목표들까지 계획만 해 보고, 로봇은 움직이지 않습니다.',
    },
    {
      name: '취소하면 즉시 정지',
      problem: '사람이 들어오거나 작업이 취소돼도 실행 중인 경로는 끝까지 감',
      solution: 'Task Planner가 이동을 취소하면 실행 중인 경로를 바로 멈춥니다. 요청은 한 번에 하나씩 처리합니다.',
    },
  ],
};

// 문구 초안: 팀 검토 후 수정. 기간과 시행착오는 직접 채운다.
export const timeline = {
  title: '어떻게 만들었는가',
  intro: '설계부터 전체 통합까지의 과정과 그 과정에서 겪은 시행착오를 정리합니다.',
  pending: true,
  stages: [
    { key: 'design', name: '설계', period: '8/1 ~ 8/30', body: 'QDD 모터 기반 7자유도 매니퓰레이터를 설계하고, 모터 low-level 제어기를 제작했습니다.', trial: '매니퓰레이터를 편리하게 조종할 수 있는 리더암을 1:0.7의 비율로 제작하였습니다' },
    { key: 'build', name: '가공·도색·조립', period: '9/1 ~ 9/30', body: '설계한 부품을 가공하고 도색한 뒤 매니퓰레이터를 조립·배선했습니다.', trial: '공차를 너무 작게 잡아 부품이 잘 맞지 않는 문제와, 배선 과정에서 생긴 간섭이 있어 재가공을 거쳤으며 부품 구조 단순화를 통하여 가공 단가를 낮추었습니다.' },
    { key: 'data', name: '데이터 수집', period: '[기간 작성 예정]', body: '사람이 리더암을 움직여 Task별 시연 데이터를 모았습니다.', trial: 'Leader arm에 중력·마찰 보상(gravity·friction compensation)을 구현해, 데이터를 모으는 동안 조작자의 피로를 줄이고 시연 품질을 일정하게 유지했습니다.' },
    { key: 'training', name: '학습', period: '[기간 작성 예정]', body: '모은 시연 데이터로 모방학습 정책을 학습했습니다.', trial: '작업 공간(workspace) 위치만 바뀌어도 정책(policy)이 실패했습니다. image augmentation으로 fine-tuning해서 환경 변화에도 잘 동작하도록 만들었습니다.' },
    { key: 'integration', name: '통합', period: '[기간 작성 예정]', body: 'VLM, Vision, Task Planner와 동작 정책을 매니퓰레이터에 연결해 전체 시연을 맞췄습니다.', trial: '[작성 예정]' },
  ],
};

// github·linkedin에 프로필 주소를 넣으면 팀원 카드에 배지가 생긴다. 비워 두면 배지를 그리지 않는다.
export const team = {
  title: '팀 ROBIT',
  org: { name: 'Team-ROBIT', url: 'https://github.com/Team-ROBIT' },
  members: [
    { name: '김민조', position: '팀장', photo: 'team/kim-minjo', github: 'https://github.com/kmj060703', linkedin: 'https://www.linkedin.com/in/minjo-kim-a29864434/', roles: ['QDD 모터 low-level 제어기 제작', '모방학습 개발', 'Motion planner 개발'] },
    { name: '우정윤', position: '팀원', photo: 'team/woo-jeongyun', github: 'https://github.com/JeongyoonWoo7', linkedin: 'https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%9A%B0-9398923a6/', roles: ['QDD 매니퓰레이터 설계 및 가공', '매니퓰레이터 조립'] },
    { name: '박기홍', position: '팀원', photo: 'team/park-kihong', github: 'https://github.com/kinesis19', linkedin: 'https://www.linkedin.com/in/kinesis19/', roles: ['매니퓰레이터 배선', '시연 소품 제작 및 준비', '웹 페이지 제작'] },
    { name: '송수민', position: '팀원', photo: 'team/song-sumin', github: 'https://github.com/mikissm', linkedin: 'https://www.linkedin.com/in/%EB%AF%B8%ED%82%A4-undefined-211ba5436/', roles: ['VLM 개발', 'Vision'] },
  ],
};
