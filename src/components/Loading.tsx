import { Spinner } from 'react-bootstrap';

const Loading = (): JSX.Element => {
    return (
        <div>
            <div className="loading_wrap">
                <div  className='loader'>
                  <Spinner animation="grow" role="status">
                    <span className='visually-hidden'>Loading...</span>

                </Spinner>  
                </div>
                
            </div>
        </div>

    )
};

export default Loading;