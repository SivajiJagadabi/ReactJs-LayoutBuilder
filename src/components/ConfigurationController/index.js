// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      return (
        <div className="control-container">
          <div className="input-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label-text">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="left-navbar" className="label-text">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="right-navbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="right-navbar" className="label-text">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
