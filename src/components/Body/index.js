// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-bar">
              <h1 className="left-nav-bar-heading">Left Navbar Menu</h1>
              <ul className="nav-items">
                <li className="nav-item">Item1</li>
                <li className="nav-item">Item2</li>
                <li className="nav-item">Item3</li>
                <li className="nav-item">Item4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-nav-bar">
              <h1 className="left-nav-bar-heading">Right Navbar Menu</h1>
              <div className="cards-container">
                <div className="add-card">
                  <p className="add1">Ad 1</p>
                </div>
                <div className="add-card">
                  <p className="add1">Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
