const MainContainer = () => {
 return (
  <section className="features">
   <div className="container">
    <div className="row">
     <SchoolFeature />
    </div>
   </div>
  </section>
 );
}
const featureItems = [
 {
  title: 'All Courses',
  mobileDescription: 'Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.',
  desktopDescription: 'Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.'
 },
 {
  title: 'Virtual className',
  mobileDescription: 'Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.',
  desktopDescription: 'Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.'
 },
 {
  title: 'Real Meeting',
  mobileDescription: 'Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.',
  desktopDescription: 'Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.'
 },
];
const SchoolFeature = () => {
 return (
  featureItems.map(feature => (
   <div className="col-lg-4 col-12">
    <div className="features-post">
     <div className="features-content">
      <div className="content-show">
       <h4><i className="fa fa-pencil"></i>{feature.title}</h4>
       <div className="content-hide">
        <p>{feature.mobileDescription}</p>
        <p className="hidden-sm">{feature.desktopDescription}</p>
        <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
       </div>
      </div>
     </div>
    </div>
   </div>
  ))
 );
}

export default MainContainer;