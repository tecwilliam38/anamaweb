import React from 'react'
import { useAuth } from '../../context/authContext'
import Anama from "../../assets/icon.png"
import "./styles.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cocar from "../../assets/modelo.png"

export default function HomeScreen() {
  const { logout, user } = useAuth();

  const menuItems = [
    { icon: 'bi-house-door-fill', label: 'Home' },
    { icon: 'bi-people-fill', label: 'Grupos' },
    { icon: 'bi-camera-video-fill', label: 'Vídeo' },
    { icon: 'bi-shop-window', label: 'Market' },
    { icon: 'bi-person-fill', label: 'User' },
  ];
  const menuItemsEnd = [
    { icon: 'bi-house-door-fill', label: 'Home' },
    { icon: 'bi-people-fill', label: 'Grupos' },
    { icon: 'bi-camera-video-fill', label: 'Vídeo' },
    { icon: 'bi-shop-window', label: 'Market' },
    { icon: 'bi-person-fill', label: 'User' },
  ];

  return (
    <>
      <div className='conainer-fluid align-items-center bg-nav-menu fixed-top'>
        <header className='row justify-content-between mx-3'>
          <div className="col-3 ">
            <div className="row">
              <img className="navbar-logo" src={Anama} />
              <form className="form-inline my-2 ml-1 my-lg-0">
                <input className="form-control rounded mr-sm-2" type="search" placeholder="Pesquisar na Anama" aria-label="Pesquisar" />
              </form>
            </div>
          </div>
          <div className="col-5 d-flex justify-content-around mt-2 gap-4 py-1">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="menu-item text-center text-dark text-decoration-none">
                <i className={`bi ${item.icon} icon-grande m-2 d-block mb-1`}></i>
              </a>
            ))}

          </div>
          <div className="col-3 d-flex my-2">
            {menuItemsEnd.map((item, index) => (
              <a key={index} href="#" className="menu-item text-center text-dark text-decoration-none">
                <i className={`bi ${item.icon} icon-medio m-2 d-block mb-1`}></i>
              </a>
            ))}
            <button className='btn mr-2 btn-lg-primary' onClick={logout}>Sair</button>
          </div>
        </header>

      </div>
      <section className='row d-flex margin-page justify-content-center bg-section algin-items-center text-dark'>
        <div className="col-3 d-flex justify-content-start py-3 px-4 "
          style={{ overflowY: 'auto', height: '100%', color: "#000", alignItems: "center", fontWeight: "bold", fontSize: 18 }}>
          <img className="navbar-logo" src={Anama} />
          {/* <hr/> */}

          {user.user_name}
          {/* <div style={{height:'1500vh'}}>
            Nova div</div>       */}
        </div>
        {/* centro */}
        <div className="col-6 px-4 justify-content-center"
          style={{ overflowY: 'auto', height: '100%', width: "100%" }}>
          <div className="bg-top">
            <div className="col-12 d-flex justify-content-around">
              <div className="row">
                <img className="navbar-logo" src={Anama} />
                <form className="form-inline my-2 ml-1 my-lg-0">
                  <input className="form-control  mr-sm-2"
                    type="search" style={{ width: '35vw' }}
                    placeholder="No que você está pensando?" aria-label="Pesquisar" />
                </form>
              </div>
            </div>
            <hr className='col-10' />
            <ul className="nav px-5 pb-2" style={{ height: 'auto', justifyContent: "space-around" }}>
              <li className="nav-item  text-danger fw-bold justify-content-around">
                <i className="bi bi-camera-reels-fill icon-pequeno text-danger m-2 d-block mb-1">
                  {"\t\t\t\t\t\t"} Vídeo ao vivo
                </i>

              </li>
              <li className="nav-item text-success fw-bold justify-content-around">
                <i className="bi bi-images text-success icon-pequeno text-success m-2 d-block mb-1">
                  {"\t\t\t\t\t"}Foto/vídeo
                </i>

              </li>
              <li className="nav-item text-danger fw-bold justify-content-around">
                <i className="bi bi-film icon-pequeno text-danger m-2 d-block mb-1">
                  {"\t\t\t\t\t"}Reel
                </i>

              </li>
            </ul>
          </div>
          <div className="card text-dark rounded-card mb-3">
            <div className="row justify-content-around px-2 mt-2">
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <img className="navbar-logo" src={Anama} />
                  </div>
                  <div className="col-8 mt-2">
                    <div className="row px-2 font-weight-bold">
                      {user.user_email}
                    </div>
                    <div className="row px-2">
                      {user.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row justify-content-center vh-100">
                  Final
                </div>
              </div>
              <div className="col-12">
                <p className="card-text py-3 col-12">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
            <img className="card-img-top" style={{ borderRadius: 12 }} src={Cocar} alt="Imagem de capa do card" />
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <a href="#" className="btn btn-primary">Visitar</a>
            </div>
          </div>
          <div className="card rounded-card mb-3 text-dark">
            <div className="row justify-content-around px-2 mt-2">
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <img className="navbar-logo" src={Anama} />
                  </div>
                  <div className="col-8 mt-2">
                    <div className="row px-2 font-weight-bold">
                      {user.user_email}
                    </div>
                    <div className="row px-2">
                      {user.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row justify-content-center vh-100">
                  Final
                </div>
              </div>
              <div className="col-12">
                <p className="card-text py-3 col-12">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
            <img className="card-img-top" style={{ borderRadius: 12 }} src={Cocar} alt="Imagem de capa do card" />
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              <a href="#" className="btn btn-primary">Visitar</a>
            </div>
          </div>
          <div className="card rounded-card mb-3 text-dark">
            <div className="row justify-content-around px-2 mt-2">
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <img className="navbar-logo" src={Anama} />
                  </div>
                  <div className="col-8 mt-2">
                    <div className="row px-2 font-weight-bold">
                      {user.user_email}
                    </div>
                    <div className="row px-2">
                      {user.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row justify-content-center vh-100">
                  Final
                </div>
              </div>
              <div className="col-12">
                <p className="card-text py-3 col-12">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
            <img className="card-img-top" style={{ borderRadius: 12 }} src={Cocar} alt="Imagem de capa do card" />
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              <a href="#" className="btn btn-primary">Visitar</a>
            </div>
          </div>
          <div className="card rounded-card mb-3 text-dark">
            <div className="row justify-content-around px-2 mt-2">
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <img className="navbar-logo" src={Anama} />
                  </div>
                  <div className="col-8 mt-2">
                    <div className="row px-2 font-weight-bold">
                      {user.user_email}
                    </div>
                    <div className="row px-2">
                      {user.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row justify-content-center vh-100">
                  Final
                </div>
              </div>
              <div className="col-12">
                <p className="card-text py-3 col-12">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
            <img className="card-img-top" style={{ borderRadius: 12 }} src={Cocar} alt="Imagem de capa do card" />
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              <a href="#" className="btn btn-primary">Visitar</a>
            </div>
          </div>
          <div className="card rounded-card mb-3">
            <div className="row justify-content-around px-2 mt-2">
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <img className="navbar-logo" src={Anama} />
                  </div>
                  <div className="col-8 mt-2">
                    <div className="row px-2 font-weight-bold">
                      {user.user_email}
                    </div>
                    <div className="row px-2">
                      {user.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row justify-content-center vh-100">
                  Final
                </div>
              </div>
              <div className="col-12">
                <p className="card-text py-3 col-12">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
            <img className="card-img-top" style={{ borderRadius: 12 }} src={Cocar} alt="Imagem de capa do card" />
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              <a href="#" className="btn btn-primary">Visitar</a>
            </div>
          </div>
          <div className="card rounded-card mb-3">
            <div className="row justify-content-around px-2 mt-2">
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <img className="navbar-logo" src={Anama} />
                  </div>
                  <div className="col-8 mt-2">
                    <div className="row px-2 font-weight-bold">
                      {user.user_email}
                    </div>
                    <div className="row px-2">
                      {user.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 mt-3 text-light bg-dark">Final</div>
              <div className="col-12">
                <p className="card-text py-3 col-12">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
            <img className="card-img-top" style={{ borderRadius: 12 }} src={Cocar} alt="Imagem de capa do card" />
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              <a href="#" className="btn btn-primary">Visitar</a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end py-3 px-4"
          style={{ overflowY: 'auto', height: '100%' }}>Direita</div>
      </section>
    </>
  )
}
