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

const MainHeader = () => {
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

const Navi = () => {
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

export default MainHeader;
