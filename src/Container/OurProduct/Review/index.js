import React from 'react';
import { ReviewWrapper } from './styled'
function Additional(){
    return (
        <ReviewWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3 className='heading'>
                            Reviews
                        </h3>
                        <div className="content">
                            <div className="review">
                                There are no reviews yet
                            </div>
                            <h3 className='review-name__product'>
                                Be the first to review “Baby Set Hello Cutie”
                            </h3>
                            <p className='should'>
                                You must be <a href="">logged in</a> to post a review.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ReviewWrapper>
    )
}

export default Additional;
