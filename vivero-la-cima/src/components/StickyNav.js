import React from 'react'
import './stickyNav.css'
import { Link, navigate } from 'gatsby'

//must wrap everything except the navbar itself in a container with class nav-push

class StickyNav extends React.Component {

  state = {
    navEl: null,
  }

  componentDidMount(){
    let navEl = document.querySelector('.stickyNavbar');
    this.setState({navEl: navEl});
    window.addEventListener('scroll', this.throttle(this.scrollHandler.bind(this)));
  }


  scrollHandler(){
    if(window.scrollY > 20){
      this.state.navEl.classList.add('sticked');
    }else{
      this.state.navEl.classList.remove('sticked');
    }
  }

  clickHandler(e){
    let page = window.location.pathname;
    if(page === '/' && window.scrollTo){
      e.preventDefault();
      let navBarOffset = -44; //just experiment with this until you get it to scroll to where you want
      let target = e.target.getAttribute("href").split('#')[1];
      let elementOffset = document.querySelector(`#${target}`).offsetTop;
      window.scrollTo({top: elementOffset+navBarOffset, behavior: 'smooth'});

    }else{
      let target = e.target.getAttribute('href');
      console.log(target);
      navigate(target);
    }
    document.querySelector('.nav-push').classList.remove('slideOver');
    document.querySelector('.stickyNavbar').classList.remove('nav-items-show');
  }

  hamburgerClick(){
    let wholeShebang = document.querySelector('.nav-push');
    let navItems = document.querySelector('.stickyNavbar');
    wholeShebang.classList.toggle('slideOver');
    navItems.classList.toggle('nav-items-show');
  }

  throttle (callback, limit) {
    var wait = false;                 // Initially, we're not waiting
    return function () {              // We return a throttled function
        if (!wait) {                  // If we're not waiting
            callback.call();          // Execute users function
            wait = true;              // Prevent future invocations
            setTimeout(function () {  // After a period of time
                wait = false;         // And allow future invocations
            }, limit);
        }
    }
  }

  render () {
    return(
      <nav className="stickyNavbar">
        <Link to="/#inicio">
          <figure className="nav-brand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.8 39.2"><path d="M0 38l19.6-23.5 11.2 2.6L46 0l8.8 8.6 2.4-1.8 12.3 13.4 15.9-8.8 11 8.8 5.5-3.5 17 14.5-16.6-9.6 2 8.8-19-16.1-11 6.6 8 17.2-25-27.5-3 2.2L45.8 5 27.3 39 29.5 20l-10-2.5z"/></svg>
          </figure>
        </Link>
        <div className="nav-items">
          <Link to="/#inicio" onClick={this.clickHandler.bind(this)} className="nav-item">Inicio</Link>
          <Link to="/#seleccion" onClick={this.clickHandler.bind(this)} className="nav-item">Selección</Link>
          <Link to="/galeria" className="nav-item">Galería</Link>
          <Link to="/#contacto" onClick={this.clickHandler.bind(this)} className="nav-item">Contacto</Link>
        </div>
        <svg id="hamburger-toggle" onClick={this.hamburgerClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.630943 9.6881733"><g transform="translate(-103.51822 -70.023682)"><rect id="hamburger-top-bar" ry=".12750432" rx="0" y="70.023682" x="103.51822" height="1.1450591" width="16.630943"/><rect id="hamburger-bottom-bar" width="16.630943" height="1.1450591" x="103.51822" y="78.566795" rx="0" ry=".12750432"/><rect id="hamburger-middle-bar" ry=".12750432" rx="0" y="74.295242" x="106.0742" height="1.1450591" width="14.074958"/></g></svg>
      </nav>
    )
  }
}

export default StickyNav;
