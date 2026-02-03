import TopMvSwiper from '../../Components/TopMvSwiper'

const base = import.meta.env.BASE_URL

const slides = [
  { pcSrc: `${base}TS020144.jpeg`, alt: 'Slide 1' },
  { pcSrc: `${base}TS021369.jpeg`, alt: 'Slide 2' },
  { pcSrc: `${base}TS022380.jpeg`, alt: 'Slide 3' },
  { pcSrc: `${base}TS022748.jpeg`, alt: 'Slide 4' },
  { pcSrc: `${base}TS022768.jpeg`, alt: 'Slide 5' },
  { pcSrc: `${base}TS022871.jpeg`, alt: 'Slide 6' },
  { pcSrc: `${base}TS022923.jpeg`, alt: 'Slide 7' },
]

const Home = () => {
  return (
    <div style={{ height: '130vh' }}>
      <div style={{ width: '100%', height: '80px' }}></div>
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
