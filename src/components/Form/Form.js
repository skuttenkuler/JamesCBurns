import React, {Component} from 'react';

export default class Form extends Component {
   
  
  render() {
    
    return(
        <div className="formBlock">
            <form action="/webformmailer.php" method="post">
                <input type="hidden" name="subject" value="Submission" />
                <input type="hidden" name="redirect" value="thankyou.html" />
                First Name: <input type="text" name="FirstName" />
                Last Name :<input type="text" name="LastName" />
                Email: <input type="text" name="email" />
                Comments: <textarea name="comments" cols="40" rows="10">
                Type comments here.</textarea>
                <input type="submit" name="submit" value="submit"/>
                <input type="hidden" name="form_order" value="alpha"/>
                <input type="hidden" name="form_delivery" value="hourly_digest"/>
                <input type="hidden" name="form_format" value="html"/>
            </form>
        </div>
    );
  }

}
