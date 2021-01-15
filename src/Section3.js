import React from 'react';
//Stateful components
class MainContainer extends React.Component {
 constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = { activeArticle: 1 };
 }
 handleClick(value) {
  this.setState({ activeArticle: value });
  changeActiveArticle(value);
 }
 render() {
  return (
   <section id="section2" className="section why-us" data-section="section2" >
    <div className="container">
     <div className="row">
      <div className="col-md-12">
       <div className="section-heading">
        <h2>Why choose Grad School?</h2>
       </div>
      </div>

      <div className="col-md-12">
       <div id='tabs'>
        <ul>
         <li className={
          this.state.activeArticle === 1 ? 'ui-tabs-active ui-state-active' : ''
         }><a href="#" onClick={(e) => {
          e.preventDefault();
          this.handleClick(1)
         }} >Best Education</a></li>
         <li className={
          this.state.activeArticle === 2 ? 'ui-tabs-active ui-state-active' : ''
         }><a href="#" onClick={(e) => {
          e.preventDefault();
          this.handleClick(2)
         }} >Top Management</a></li>
         <li className={
          this.state.activeArticle === 3 ? 'ui-tabs-active ui-state-active' : ''
         }><a href="#" onClick={(e) => {
          e.preventDefault();
          this.handleClick(3)
         }}>Quality Meeting</a></li>
        </ul>
        <SubSections />
       </div>
      </div>
     </div>
    </div>
   </section >
  )
 };
}
//Stateless components
const SubSections = () => {
 return (
  <section className='tabs-content'>
   {articlesItems.map(article => (
    article.isActive ? <Article article={article} /> : null
   ))}
  </section>
 );
}
const Article = (props) => {
 return (
  <article id={props.article.id}>
   <div className="row">
    <div className="col-md-6">
     <img src={props.article.imgSrc} alt="" />
    </div>
    <div className="col-md-6">
     <h4>{props.article.title}</h4>
     <p dangerouslySetInnerHTML={{ __html: props.article.description }} />
     {props.article.description2 ? <p dangerouslySetInnerHTML={{ __html: props.article.description2 }} /> : null}
    </div>
   </div>
  </article>
 )
}
//Methods and others
let articlesItems = [
 {
  id: 'tabs-1',
  idNumber: 1,
  isActive: true,
  imgSrc: 'assets/images/choose-us-image-01.png',
  title: 'Best Education',
  description: 'Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a little donation</a> to TemplateMo. Please tell your friends about us. Thank you.'
 },
 {
  id: 'tabs-2',
  idNumber: 2,
  isActive: false,
  imgSrc: 'assets/images/choose-us-image-02.png',
  title: 'Top Level',
  description: 'You can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages.',
  description2: 'Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.'
 },
 {
  id: 'tabs-3',
  idNumber: 3,
  isActive: false,
  imgSrc: 'assets/images/choose-us-image-03.png',
  title: 'Quality Meeting',
  description: 'You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. For more information, you shall <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> now.',
 }
];
function changeActiveArticle(value) {
 articlesItems.forEach(article => {
  if (article.idNumber === value) {
   article.isActive = true;
  } else {
   article.isActive = false;
  }
 });
}

export default MainContainer;