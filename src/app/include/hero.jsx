import React from 'react';

export default 
class Banner extends React.Component{
    render(){
        return(
        <section id="hero">
          <div className="hero-container">
            <h1>Welcome to Siimple</h1>
            <h2>Please, fill out the for below to be notified for the latest updates!</h2>
      
            <form onSubmit={(e)=>e.preventDefault()} method="post" className="php-email-form">
              <div className="row no-gutters">
                <div className="col-md-6 form-group pr-md-1">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group pl-md-1">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
      
              <div className="mb-1">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your notification request was sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Notify me!</button></div>
            </form>
          </div>
        </section>
        )
    }

    notify(e){
      alert("You will bo notified soon");
      e.preventDefault();
    }
}