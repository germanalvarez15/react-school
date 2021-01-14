import React from 'react';

let itemsHeader = {
 'home': {
  'text': 'Home',
  'link': '#section1'
 },
 'about': {
  'text': 'About Us',
  'link': '#section2',
  'subMenu': {
   'who': {
    'text': 'Who we are?',
    'link': '#section2',
   },
   'what': {
    'text': 'What we do?',
    'link': '#section3',
   },
   'how': {
    'text': 'How it works?',
    'link': '#section3',
   },
   'external': {
    'text': 'External URL',
    'link': 'https://templatemo.com/about',
    'rel': 'sponsored',
    'class': 'external'
   }
  }
 },
 'courses': {
  'text': 'Courses',
  'link': '#section4'
 },
 'contact': {
  'text': 'Contact',
  'link': '#section6'
 },
}

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



/*
let listItems = [];
Object.keys(itemsHeader).forEach(key => {
 let element;
 if (itemsHeader[key].subMenu) {
  element = React.createElement(
   'li',
   {},
   React.createElement(
    'a',
    { href: itemsHeader[key].link },
    itemsHeader[key].text
   )
  );
 } else {

 }

 listItems.push(

  <li><a href={itemsHeader[key].link}>{itemsHeader[key].text}</a></li>
 );
});
*/

const HeaderMenu = () => {
 let listItems = [];
 Object.keys(itemsHeader).forEach(key => {
  let element;
  if (itemsHeader[key].subMenu) {
   element = React.createElement(
    'li',
    {
     className: 'has-submenu'
    },
    [
     React.createElement(
      'a',
      { href: itemsHeader[key].link },
      itemsHeader[key].text
     ),
     <SubMenu subItems={itemsHeader[key].subMenu} />
    ]
   );
  } else {
   element = React.createElement(
    'li',
    {
    },
    React.createElement(
     'a',
     { href: itemsHeader[key].link },
     itemsHeader[key].text
    ),

   );
  }
  listItems.push(
   element
  );

 });
 return (
  <ul className="main-menu">
   {
    listItems
   }
  </ul>
 );
}

const SubMenu = (props) => {
 let subItems = [];
 Object.keys(props.subItems).forEach(key => {
  let element = React.createElement(
   'li',
   {},
   React.createElement(
    'a',
    {
     href: props.subItems[key].link,
     className: props.subItems[key].class ? props.subItems[key].class : null,
     rel: props.subItems[key].rel ? props.subItems[key].rel : null,
    },
    props.subItems[key].text
   )
  );
  subItems.push(element);
 });
 return (
  <ul className="sub-menu">
   {
    subItems
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
