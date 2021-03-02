import React from "react";




class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
     return (


      <div className="contact__wrap">
        <p className="titleContact">Programme, devis et tarif sur demande</p>
        <p className="titleContact">Osez une séance découverte</p>
        <h1>Me contacter</h1>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xyybnrgz"
          method="POST"
          className="contact__form"
        >

          <input type="email" name="email" placeholder="Email" />
          <textarea  type="text" name="message" placeholder="Message" className="mess" maxLength="550" required=""/>
          {status === "SUCCESS" ? <p>Merci pour votre demande, je vous recontacte rapidement !</p> : <button className="sendbtn">Envoyer</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>

  );
}
submitForm(ev) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      this.setState({ status: "SUCCESS" });
    } else {
      this.setState({ status: "ERROR" });
    }
  };
  xhr.send(data);
}
}



export default Form;
