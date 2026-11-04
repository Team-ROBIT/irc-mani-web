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
  youtubeId: '',
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
  intro: '위험을 판단하는 VLM부터 동작을 만드는 모방학습·플래너까지, 각 모듈의 구조와 결과를 정리합니다.',
  pending: true,
  modules: [
    { key: 'vlm', name: 'VLM', owner: '송수민', body: '카메라 화면과 책상 상태를 보고 무엇을 어떤 순서로 처리할지 계획합니다. 위험 우선순위를 따르고, 불명확하면 보류합니다.', detail: '#software-vlm' },
    { key: 'imitation', name: '모방학습', owner: '김민조', body: '리더암으로 모은 시연 데이터로 동작 정책을 학습합니다.' },
    { key: 'vision', name: 'Vision', owner: '송수민', body: 'RGB·깊이·열화상으로 책상 위 물체의 종류와 위치, 열 상태를 파악해 로봇이 쓸 수 있는 정보로 바꿉니다.', detail: '#software-vision' },
    { key: 'motion-planner', name: 'Motion Planner', owner: '김민조', body: '[작성 예정]' },
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
      name: '물체 인식',
      easy: '책상 위 공구, 배터리, 인두기, 전원 코드가 각각 무엇인지 구분합니다.',
      tags: ['YOLO11n', 'TensorRT', '추가 학습'],
      tech: 'Ultralytics YOLO11n 사전학습 가중치에서 추가 학습했습니다. 공구 1종 모델과 배터리·배터리 코드·인두기 코드·인두기 4종 모델로 나누어 학습하고, AGX에서는 TensorRT 엔진으로 실행합니다.',
      metrics: [
        { label: 'mAP@50 · 배터리·전원 4종', value: '99.2%' },
        { label: 'mAP@50 · 일반 공구', value: '97.0%' },
      ],
      image: { id: 'software/vision-detection', label: '물체 인식 결과 화면' },
    },
    {
      key: 'position',
      name: '3차원 위치 계산',
      easy: '화면 속 물체가 로봇 기준으로 어디에 있는지 계산합니다. 깊이 값을 믿을 수 없으면 위치를 쓰지 않습니다.',
      tags: ['Aligned depth', '역투영', 'TF 변환'],
      tech: '깊이 표본의 중앙값·MAD 기반 이상치 제거 → 카메라 내부 파라미터로 역투영 → TF로 로봇 기준 좌표 변환. 유효한 깊이가 없으면 pose를 무효로 처리합니다.',
      metrics: [{ label: '3D 위치 절대 오차', value: null }],
      improvements: [
        { problem: '깊이 영상의 지연과 시각 불일치가 손·물체 판정에 영향', solution: '원본 aligned depth와 필터 depth의 사용 경로를 나누고, timestamp와 최신성(freshness)을 검사합니다.' },
      ],
      limit: '검은색·반사 금속·작은 물체는 깊이 누락과 이상점이 생길 수 있습니다. 강건한 표본 처리와 유효성 검사를 적용하지만 항상 복원되지는 않습니다.',
      image: { id: 'software/vision-3d', label: '3D 위치 결과 화면' },
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
    },
    {
      key: 'tracking',
      name: '추적과 가림 후 복구',
      easy: '로봇 팔이 물건을 잠깐 가려도 바로 다른 물건으로 취급하지 않고, 다시 보인 정보가 충분할 때 같은 물건으로 연결합니다.',
      tags: ['자체 C++ Tracker', 'OCCLUDED', 'ObjectArchive', 'OcclusionRecovery'],
      tech: '3D 거리를 우선하고 필요하면 2D bbox IoU로 물체를 프레임 사이에서 연결하며, EMA 등으로 위치 변동을 줄입니다. OCCLUDED·ObjectArchive·OcclusionRecovery를 직접 구현해 가림 전후의 물체 ID를 연결합니다.',
      metrics: [{ label: '가림 후 ID 복구 성공률', value: null }],
      improvements: [
        { problem: '모델마다 검출 주기가 달라, 검출하지 않은 주기를 물체 소실로 오인', solution: '해당 모델이 실제로 실행된 결과인지 구분해 Tracker의 누락 판단에 반영합니다.' },
        { problem: '로봇 팔이 가린 뒤 같은 물체가 새 ID로 나타남', solution: '같은 클래스, 호환되는 좌표·ROI, 6cm 이내, 크기 조건을 비교해 양방향으로 유일하게 대응될 때만 기존 ID로 연결합니다. 가림 중의 과거 pose는 무효로 처리합니다.' },
      ],
      limit: '제자리 재등장이 기본입니다. 외형이 같은 여러 물체를 가린 뒤에는 실물 identity를 보장하지 않으며, 크게 이동한 물체나 사람이 작업 중 끊긴 ID는 위치만으로 연결하지 않습니다.',
      image: { id: 'software/vision-tracking', label: '가림 전·후 추적 화면' },
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
      name: '사람 접근·손 침범 감지',
      easy: '책상 주변에 사람이 다가오는지, 작업 공간 안으로 손이 들어왔는지를 따로 확인합니다.',
      tags: ['YOLO 사람 검출', 'MediaPipe Hand Landmarker', 'TensorRT'],
      tech: 'COCO 사전학습 YOLO로 사람을 검출하고, MediaPipe Hand Landmarker로 손당 21개 관절(최대 두 손)을 관측해 aligned depth로 3D로 역투영합니다.',
      metrics: [{ label: '손 접촉·침범 판정 정확도', value: null }],
      improvements: [
        { problem: '사람 몸 검출이 끊기거나 팔만 보임', solution: '외부 접근은 사람 검출과 깊이로, 내부 침범은 독립적인 손 3D로 판단하도록 근거를 나누고, 관측 불가 상태를 따로 둡니다.' },
      ],
      limit: '탑뷰에서 손이 가려지거나 물체를 쥔 손, 책상 표면과 섞인 깊이에서는 손 3D가 불안정할 수 있습니다. 관측 불가를 접촉 없음으로 단정하지 않으며, 안전 인증 센서를 대체하지 않습니다.',
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
    },
    {
      key: 'grasp',
      name: '공구 파지 위치·방향',
      easy: '공구의 어디를 어느 방향으로 잡아야 하는지 계산합니다.',
      tags: ['SAM2.1 Tiny', '형상 분석', '평면 투영'],
      tech: '사전학습 SAM2.1 Tiny로 공구 영역을 분할하고, 형상을 분석해 평면에 투영한 뒤 파지 위치와 방향을 계산합니다.',
      metrics: [
        { label: '파지점·방향 오차', value: null },
        { label: '실제 파지 성공률', value: null },
      ],
      improvements: [
        { problem: '검출 박스만으로는 공구를 잡을 위치와 방향을 알기 어려움', solution: '드라이버는 손잡이, 니퍼는 축과 헤드를 분석해 파지점과 방향을 계산합니다. 일부만 검출되면 관련 원시 박스로 분할 프롬프트를 보완합니다.' },
      ],
      limit: 'SAM2 분할이 조각나거나 공구 형태가 불명확하면 파지 방향을 보류합니다. 공구 종류 전반에 대한 범용 파지 성능은 검증하지 않았습니다.',
    },
  ],
  training: {
    note: '두 모델 모두 YOLO11n 사전학습 가중치, 입력 640×640, batch 16, 100 epochs로 학습했고, 아래는 마지막 epoch의 validation 지표입니다.',
    rows: [
      { name: '배터리·배터리 코드·인두기 코드·인두기 (4종)', images: '4,963장', split: '3,925 / 692 / 346', precision: '99.8%', recall: '98.8%', map50: '99.2%', map5095: '91.9%' },
      { name: '일반 공구', images: '1,670장', split: '1,387 / 197 / 86', precision: '97.5%', recall: '95.8%', map50: '97.0%', map5095: '87.1%' },
    ],
  },
  unmeasured: ['전체 시스템 실측 FPS · 평균/p95 지연', 'AGX에서의 YOLO 평균 추론 시간'],
};

export const vlm = {
  easy: '카메라 화면과 로봇이 파악한 책상 상태를 보고 무엇을 어떤 순서로 처리할지 계획을 세웁니다. 계획은 검증을 거친 뒤에만 Task Planner에 전달됩니다.',
  model: 'Qwen3-VL-4B-Instruct',
  runtime: 'AGX에서 TensorRT Edge-LLM으로 로컬 추론',
  input: [
    '최대 768×512 RGB 이미지',
    'SceneState: 객체 ID · 종류 · 상태 · 관계 · 유효성',
    '사용자 명령 (활성화된 경우)',
    '이전 계획과 Planner 피드백',
  ],
  output: ['작업 종류 · 대상 ID · 순서를 JSON으로 생성', '스킬 트리로 변환해 Task Planner에 전달'],
  priorityTitle: '위험 우선순위',
  priority: ['인두기 코드 분리', '충전 완료 배터리 정리', '조건을 만족하는 콘센트 처리', '일반 공구 정리'],
  priorityNote: '해당 정책이 활성화된 경우의 순서입니다. 충전 중인 배터리는 임의로 제거하지 않습니다.',
  rules: [
    '인두기 분리는 최신의 유효한 ON 관측과 유일한 코드·전원 연결이 있을 때만 계획에 넣습니다.',
    '불명확한 상태는 추측하지 않고 보류합니다.',
  ],
  casesNote: 'AGX에서 RGB와 Scene을 입력해 계획을 생성·검증한 단발 사례이며 평균값이 아닙니다.',
  cases: [
    { name: '사례 1', scene: '인두기 · 배터리 · 콘센트 · 공구 2개', time: '21.554초', tokens: '10,173 / 105' },
    { name: '사례 2', scene: '배터리 · 공구 2개', time: '13.944초', tokens: '8,897 / 45' },
  ],
  unmeasured: ['평균 생성 시간', '계획 정확도', '전체 작업 성공률'],
  limit: '계획 생성이 성공해도 실행 성공을 보장하지는 않습니다. 입력 상태가 오래되었거나 관계가 불명확하면 보류합니다.',
};

// 문구 초안: 팀 검토 후 수정. 기간과 시행착오는 직접 채운다.
export const timeline = {
  title: '어떻게 만들었는가',
  intro: '설계부터 전체 통합까지의 과정과 그 과정에서 겪은 시행착오를 정리합니다.',
  pending: true,
  stages: [
    { key: 'design', name: '설계', period: '[기간 작성 예정]', body: 'QDD 모터 기반 7자유도 매니퓰레이터를 설계하고, 모터 low-level 제어기를 제작했습니다.', trial: '[작성 예정]' },
    { key: 'build', name: '가공·조립', period: '[기간 작성 예정]', body: '설계한 부품을 가공하고 매니퓰레이터를 조립·배선했습니다.', trial: '[작성 예정]' },
    { key: 'data', name: '데이터 수집', period: '[기간 작성 예정]', body: '사람이 리더암을 움직여 Task별 시연 데이터를 모았습니다.', trial: '[작성 예정]' },
    { key: 'training', name: '학습', period: '[기간 작성 예정]', body: '모은 시연 데이터로 모방학습 정책을 학습했습니다.', trial: '[작성 예정]' },
    { key: 'integration', name: '통합', period: '[기간 작성 예정]', body: 'VLM, Vision, Task Planner와 동작 정책을 매니퓰레이터에 연결해 전체 시연을 맞췄습니다.', trial: '[작성 예정]' },
  ],
};

export const team = {
  title: '팀 ROBIT',
  members: [
    { name: '김민조', position: '팀장', photo: 'team/kim-minjo', roles: ['QDD 모터 low-level 제어기 제작', '모방학습 개발', 'Task planner 개발'] },
    { name: '우정윤', position: '팀원', photo: 'team/woo-jeongyun', roles: ['QDD 매니퓰레이터 설계 및 가공', '매니퓰레이터 조립'] },
    { name: '박기홍', position: '팀원', photo: 'team/park-kihong', roles: ['매니퓰레이터 배선', '시연 소품 제작 및 준비', '웹 페이지 제작'] },
    { name: '송수민', position: '팀원', photo: 'team/song-sumin', roles: ['VLM 개발', 'Vision'] },
  ],
};
