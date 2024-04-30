import reactLogo from '../assets/react.svg'
import Counter from '../components/Counter'
import viteLogo from '/vite.svg'

export default function Freestyle() {
  return (
    <>
      <header className="page-header">
        <div className="page-header__inner">header</div>
      </header>
      <main className="main-content">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 data-testid="app-title">Vite + React</h1>
        <div className="card">
          <Counter />
          <p className="test-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            praesentium ex ab velit dolor architecto magnam sit ducimus
            distinctio ad! Nesciunt rerum beatae dolorem autem consequatur in
            repellendus adipisci a? Nesciunt rerum beatae dolorem autem
            consequatur in repellendus adipisci a?
          </p>
          <div className="box1">BOX_1</div>
          <div className="box2">BOX_2</div>
        </div>

        <div className="mini-layout">
          <aside className="sidebar">sidebar</aside>
          <div className="content">content</div>
        </div>

        <div className="mini-grid">
          <div className="cell cell1">c-1</div>
          <div className="cell cell2">c-2</div>
          <div className="cell cell3">c-3</div>
          <div className="cell cell4">c-4</div>
          <div className="cell cell5">c-5</div>
          <div className="cell cell6">c-6</div>
          <div className="cell cell7">c-7</div>
          <div className="cell cell8">c-8</div>
          <div className="cell cell9">c-9</div>
          <div className="cell cell10">c-10</div>
          <div className="cell cell11">c-11</div>
          <div className="cell cell12">c-12</div>
        </div>

        <div className="mini-impl-grid">
          <header className="header">header</header>
          <div className="content">content</div>
          <aside className="sidebar">sidebar</aside>
          <footer className="footer">footer</footer>
          <div className="overlay">overlay</div>
        </div>
      </main>
    </>
  )
}
