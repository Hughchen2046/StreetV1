import TopMvSwiper from '../../Components/TopMvSwiper'

const slides = [
  {
    id: 1,
    title: '從性別揭曉到一歲成長',
    content: '從第一顆爆破氣球到抓周時刻，把寶寶的每個重要階段都好好收藏。',
    img: '/TS020144.jpeg',
    url: '#',
  },
  {
    id: 2,
    title: '讓收涎不只是吃紅線饅頭',
    content: '在溫柔佈置與笑聲中，替寶寶留下第一場屬於他的成長儀式。',
    img: '/TS021369.jpeg',
    url: '#',
  },
  {
    id: 3,
    title: '性別派對，也可以很有質感',
    content: '不浮誇、不尷尬，用玫瑰金與柔光打造專屬你們的揭曉時刻。',
    img: '/TS022380.jpeg',
    url: '#',
  },
  {
    id: 4,
    title: '第一次辦儀式，也不怕出錯',
    content: '流程、主持、佈置一次到位，爸媽只要專心抱著寶寶感受這一刻。',
    img: '/TS022748.jpeg',
    url: '#',
  },
  {
    id: 5,
    title: '拍起來像日雜的親子派對',
    content: '自然光與溫柔色系，讓收涎、抓周、派對每一張照片都值得收藏。',
    img: '/TS022768.jpeg',
    url: '#',
  },
  {
    id: 6,
    title: '孩子開心，全家才安心',
    content: '寬敞又乾淨的包場空間，讓寶寶自在探索、長輩也能放心參與。',
    img: '/TS022871.jpeg',
    url: '#',
  },
  {
    id: 7,
    title: '不再是制式套裝的成長儀式',
    content: '從主題色系到活動節奏，都為你的家庭風格量身打造。',
    img: '/TS022923.jpeg',
    url: '#',
  },
  {
    id: 8,
    title: '把重要的第一次好好留下',
    content: '收涎、性別派對、抓周，每一場都是寶寶人生裡珍貴的起點。',
    img: '/TS022926.jpeg',
    url: '#',
  },
  {
    id: 9,
    title: '專屬你們的親子時光',
    content: '不被打擾的包場派對，讓家人與寶寶真正沉浸在溫馨裡。',
    img: '/TS022940.jpeg',
    url: '#',
  },
  {
    id: 10,
    title: '讓成長被溫柔地記住',
    content: '這不只是一場活動，而是孩子人生中被好好慶祝的每一步。',
    img: '/TS021370.jpeg',
    url: '#',
  },
]

const Home = () => {
  return (
    <div className="pt-64 pt-md-80" style={{ height: '100vh' }}>
      <TopMvSwiper slides={slides} />
      <h1 className="text-center mb-64">這是首頁</h1>
      <h2 className="text-center mb-64">進行滾動測試1...</h2>
      <h2 className="text-center mb-64">進行滾動測試2...</h2>
      <h2 className="text-center mb-64">進行滾動測試3...</h2>
      <h2 className="text-center mb-64">進行滾動測試4...</h2>
    </div>
  )
}

export default Home
