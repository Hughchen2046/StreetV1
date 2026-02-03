import { Link, Outlet } from 'react-router-dom'
import { Menu, Search, Cake, Balloon, CircleQuestionMark } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { Offcanvas } from 'bootstrap'
import LogoF from '/Logo-flat.svg'
import LogoVf2 from '/Logo-vflat.svg'

const FrontLayout = () => {
  const navMenu = useRef(null)
  const navToggle = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoVfVisible, setIsLogoVfVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
        setIsLogoVfVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavToggle = () => {
    navMenu.current = new Offcanvas(navToggle.current, {
      backdrop: false,
      keyboard: false,
      scroll: true,
    })
    navMenu.current.toggle()
  }

  return (
    <div>
      <nav className="navbar p-0 position-fixed w-100">
        <div className="container-fluid position-relative">
          <Link
            className={`navbar-brand text-primary-700 position-absolute top-0 start-0 z-2 ${
              isLogoVfVisible ? 'd-none' : 'd-block'
            }`}
            to="/"
            style={{
              transition: 'transform 0.5s ease-in-out, opacity 0.3s',
              transform: isScrolled
                ? 'translateY(0%) translateX(0%)'
                : 'translateY(20%) translateX(30%)',
              opacity: isScrolled && !isLogoVfVisible ? 0.8 : 1,
            }}
            onTransitionEnd={(e) => {
              if (e.propertyName === 'transform' && isScrolled) setIsLogoVfVisible(true)
            }}
          >
            <img className="w-100" src={LogoF} alt="Logo" />
          </Link>
          <Link className="navbar-brand py-0 text-primary-700" to="/">
            <img
              className="w-100"
              src={LogoVf2}
              alt="Logo"
              style={{
                height: '80px',
                opacity: isLogoVfVisible ? 1 : 0,
                visibility: isLogoVfVisible ? 'visible' : 'hidden',
                transition: isLogoVfVisible ? 'opacity 0.3s ease-in-out' : 'none',
              }}
            />
          </Link>
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li className="d-none d-md-block">
              <Link
                className="bg-primary-700 p-4 px-auto py-auto border-start-md nav-top text-white border-0 d-flex flex-column align-items-center justify-content-center gap-8 gap-lg-12  text-decoration-none"
                to="/about"
                style={{ width: '80px', height: '80px' }}
              >
                <Search className="iconHover" /> <span className="fs-10 fs-14-md">關於我</span>
              </Link>
            </li>
            <li className="d-none d-md-block">
              <Link
                className="bg-primary-700 p-4 px-auto py-auto border-start-md nav-top text-white border-0 d-flex flex-column align-items-center justify-content-center gap-8 gap-lg-12  text-decoration-none"
                to="/about"
                style={{ width: '80px', height: '80px' }}
              >
                <Cake className="iconHover" /> <span className="fs-10 fs-14-md">線上預訂</span>
              </Link>
            </li>
            <li className="d-none d-md-block">
              <Link
                className="bg-primary-700 p-4 px-auto py-auto border-start-md nav-top text-white border-0 d-flex flex-column align-items-center justify-content-center gap-8 gap-lg-12  text-decoration-none"
                to="/about"
                style={{ width: '80px', height: '80px' }}
              >
                <Balloon className="iconHover" /> <span className="fs-10 fs-14-md">派對時光</span>
              </Link>
            </li>
            <li>
              <Link
                className="bg-primary-700 p-4 px-auto py-auto border-start-md nav-top text-white border-0 d-flex flex-column align-items-center justify-content-center gap-8 gap-lg-12  text-decoration-none"
                to="/about"
                style={{ width: '80px', height: '80px' }}
              >
                <CircleQuestionMark className="iconHover" />{' '}
                <span className="fs-10 fs-14-md">常見問題</span>
              </Link>
            </li>
            <button
              className="navbar-toggler p-4 px-md-12 py-md-8 border-0 d-flex flex-column align-items-center justify-content-center gap-4 gap-lg-8 border-start-md"
              type="button"
              style={{ width: '80px', height: '80px' }}
              onClick={handleNavToggle}
            >
              <Menu />
              <span className="fs-10 fs-14-md">MENU</span>
            </button>
          </ul>

          <div class="offcanvas offcanvas-start" ref={navToggle}>
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>I will not close if you click outside of me.</div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default FrontLayout
