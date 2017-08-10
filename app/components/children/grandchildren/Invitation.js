import React from 'react';

class Invitation extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className='row'>
                <div className='form-group col-md-8 col-md-offset-2'>
                    <div className='pangolin-font'>
                        <h4 className='text-center'><strong>Did your family or friend give you a link? Enter it here.</strong></h4>
                        <div className='input-group'>                            
                            <span className='input-group-addon profile-link'>Link</span>
                            <input type='text' className='form-control' id='invitation-link' placeholder='' />
                            <span className='input-group-btn'>
                                <button className='btn btn-secondary' type='button'>Submit</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Invitation;