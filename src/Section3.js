const MainContainer = () => {
 return (
  <section className="section why-us" data-section="section2">
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
        <li><a href='#tabs-1'>Best Education</a></li>
        <li><a href='#tabs-2'>Top Management</a></li>
        <li><a href='#tabs-3'>Quality Meeting</a></li>
       </ul>

      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

const subSections = () => {
 return (
  <section className='tabs-content'>

  </section>
 );
}

const Articles = (props) => {
 return (
  <article id={props.id}>
   <div className="row">
    <div className="col-md-6">
     <img src="assets/images/choose-us-image-01.png" alt="" />
    </div>
    <div className="col-md-6">
     <h4>Best Education</h4>
     <p>Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a little donation</a> to TemplateMo. Please tell your friends about us. Thank you.</p>
    </div>
   </div>
  </article>
 )
}