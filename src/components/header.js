import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'gatsby-link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Menu from '../components/menu'

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}
class Header extends React.Component {
  state = { left: false }

  toggleDrawer = () => {
    this.setState({ left: !this.state.left })
  }
  render() {
    return (
      <div style={{ background: '#FFFFFF', marginBottom: '1.45rem' }}>
        <AppBar
          position="static"
          style={{
            margin: '0 auto',
            padding: '1.45rem 1.0875rem',
            backgroundColor: 'white'
          }}
        >
          <Toolbar variant="dense">
            <IconButton color="primary" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer} />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer}>
              <div
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                <Menu />
              </div>
            </Drawer>
            <Typography style={{ marginLeft: '20px' }}>
              <Link to="/" style={{ color: 'primary', textDecoration: 'none' }}>
                WalkStevensFit
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
