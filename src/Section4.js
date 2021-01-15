import React from 'react';

//Stateless components
const ComingSoon = () => {
 return (
  <section className="section coming-soon" data-section="section3">
   <div className="container">
    <div className="row">
     <Clock />
     <RegisterForm />
    </div>
   </div>
  </section>
 );
}
//Stateful components
class Clock extends React.Component {
 constructor(props) {
  super(props);
  this.state = { date: new Date() };
 }
 componentDidMount() {
  this.timerID = setInterval(
   () => this.tick(),
   1000
  );
 }

 componentWillUnmount() {
  clearInterval(this.timerID);
 }

 tick() {
  this.setState({
   date: new Date()
  });
 }

 render() {
  return (
   <div className="col-md-7 col-xs-12">
    <div className="continer centerIt">
     <div>
      <h4>Take <em>any online course</em> and win $326 for your next className</h4>
      <div className="counter">

       <div className="days">
        <div className="value">{this.state.date.getDay().toLocaleString()}</div>
        <span>Days</span>
       </div>

       <div className="hours">
        <div className="value">{this.state.date.getHours().toLocaleString()}</div>
        <span>Hours</span>
       </div>

       <div className="minutes">
        <div className="value">{this.state.date.getMinutes().toLocaleString()}</div>
        <span>Minutes</span>
       </div>

       <div className="seconds">
        <div className="value">{this.state.date.getSeconds().toLocaleString()}</div>
        <span>Seconds</span>
       </div>

      </div>
     </div>
    </div>
   </div>
  );
 }
}

class RegisterForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   name: '',
   email: '',
   phoneNumber: ''
  }
  this.handleInputChange = this.handleInputChange.bind(this);
 }
 mySubmitHandler = (event) => {
  event.preventDefault();
  const name = this.state.name;
  const email = this.state.email;
  const phoneNumber = this.state.phoneNumber;
  let isFormValid = true;

  if (name.length < 3) {
   isFormValid = false;
   alert("Por favor ingresa tu nombre completo");
  }
  else if (email.length < 7 && !email.includes("@") && !email.includes(".")) {
   isFormValid = false;
   alert("Por favor ingresa un email valido");
  }
  else if (!Number(phoneNumber) && phoneNumber.length < 5) {
   isFormValid = false;
   alert("Por favor ingresa un numero valido");
  }

  if (isFormValid) {
   alert("Los datos ingresados fueron: " + this.state.name + "," + this.state.email + "," + this.state.phoneNumber);
  }



 }
 handleInputChange(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;

  this.setState({ [name]: value });

 }
 render() {
  return (
   <div className="col-md-5">
    <div className="right-content">
     <div className="top-content">
      <h6>Register your free account and <em>get immediate</em> access to online courses</h6>
     </div>
     <form id="contact" onSubmit={this.mySubmitHandler}>
      <div className="row">
       <div className="col-md-12">
        <fieldset>
         <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" onChange={this.handleInputChange} />
        </fieldset>
       </div>
       <div className="col-md-12">
        <fieldset>
         <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required="" onChange={this.handleInputChange} />
        </fieldset>
       </div>
       <div className="col-md-12">
        <fieldset>
         <input name="phoneNumber" type="text" className="form-control" id="phone-number" placeholder="Your Phone Number" required="" onChange={this.handleInputChange} />
        </fieldset>
       </div>
       <div className="col-md-12">
        <fieldset>
         <button type="submit" id="form-submit" className="button">Get it now</button>
        </fieldset>
       </div>
      </div>
     </form>
    </div>
   </div>
  );
 }
}

export default ComingSoon;