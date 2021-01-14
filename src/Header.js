import React from 'react';
/*To practice array rendering I create and then map an
array of items
*/
let itemsHeader = [
 {
  text: 'Home',
  link: '#section1'
 },
 {
  text: 'About Us',
  link: '#section2',
  subMenu: [
   {
    text: 'Who we are?',
    link: '#section2',
   },
   {
    text: 'What we do?',
    link: '#section3',
   },
   {
    text: 'How it works?',
    link: '#section3',
   },
   {
    text: 'External URL',
    link: 'https://templatemo.com/about',
    rel: 'sponsored',
    class: 'external'
   }
  ]
 },
 {
  text: 'Courses',
  link: '#section4'
 },
 {
  text: 'Contact',
  link: '#section6'
 },
];

const MainHeader = (props) => {
 return (
  <header className="main-header clearfix" role="header">
   <div className="logo">
    <a href="#"><em>Grad</em> School</a>
   </div>
   <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
   <Navi />
  </header>
 );
}

const Navi = (props) => {
 return (
  <nav id="menu" className="main-nav" role="navigation">
   <ul className="main-menu">
    <HeaderMenu />
   </ul>
  </nav>
 );
}

const HeaderMenu = () => {
 return (
  itemsHeader.map(item => (
   item.subMenu ?
    React.createElement(
     'li',
     {
      className: 'has-submenu'
     },
     [
      React.createElement(
       'a',
       { href: item.link },
       item.text
      ),
      <SubMenu subItems={item.subMenu} />
     ]
    )
    :
    React.createElement(
     'li',
     {
     },
     React.createElement(
      'a',
      { href: item.link },
      item.text
     ),
    )
  ))
 );
}

const SubMenu = (props) => {
 return (
  <ul className="sub-menu">
   {
    props.subItems.map(subItem => (
     React.createElement(
      'li',
      {},
      React.createElement(
       'a',
       {
        href: subItem.link,
        className: subItem.class ? subItem.class : null,
        rel: subItem.rel ? subItem.rel : null,
       },
       subItem.text
      )
     )
    ))
   }
  </ul>
 );
}
/*
const listContainer = (props) => {
 return (
  <div>
   <li><a href="#section1">Home</a></li>
   <li class="has-submenu">
    <a href="#section2">About Us</a>
    <ul class="sub-menu">
     <li><a href="#section2">Who we are?</a></li>
     <li><a href="#section3">What we do?</a></li>
     <li><a href="#section3">How it works?</a></li>
     <li><a href="https://templatemo.com/about" rel="sponsored" class="external">External URL</a></li>
    </ul>
   </li>
   <li><a href="#section3">Courses</a></li>
   <li><a href="#section4">Contact</a></li>
   <li><a href="https://templatemo.com" class="external">External</a></li>
  </div>
 );
}
*/
export default MainHeader;
