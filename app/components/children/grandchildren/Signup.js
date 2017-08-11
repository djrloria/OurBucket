import React from 'react';
import Scripts from '../../util/scripts';

class Signup extends React.Component {
    constructor () {
        super();
        this.signUp = this.signUp.bind(this);
    }

    signUp () {
        let firstName = document.getElementById('first-name');
        let firstEmail = document.getElementById('first-email');
        let secondName = document.getElementById('second-name');
        let secondEmail = document.getElementById('second-email');
    }

    render () {
        return (
            <div className='row main-body'>  
                <div className='col-md-7'>
                    <div className='body-content'>
                        <h2></h2>
                    </div>                        
                </div>
                <div className='col-md-4 signup-body'>
                    <h1 className='flower-font signup-text-body'><strong>SIGN UP</strong></h1>
                    <h4 className='pangolin-font create-bucket-text'>Create your timeline free</h4>
                    <h4 className='pangolin-font'>Your Name and Email</h4>
                    <div className='pangolin-font'>
                            <input type='text' className='form-control input-sm' id='first-name' placeholder='First Name' />
                    </div>
                    <div className='pangolin-font'>
                            <input type='text' className='form-control input-sm' id='first-email' placeholder='Email' />
                    </div>
                    <h5 className='pangolin-font'>Your Special Someone's Name and Email (optional)</h5>
                    <div className='pangolin-font'>
                            <input type='text' className='form-control input-sm' id='second-name' placeholder='First Name' />
                    </div>
                    <div className='pangolin-font'>
                            <input type='text' className='form-control input-sm' id='second-email' placeholder='Email' />
                    </div>
                    <div className='pangolin-font'>
                        <button type='submit' className='btn right' id='signup-submit-body' onClick={this.signUp}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signup;