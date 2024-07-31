import {Suspense} from 'react';

export const Loadable = (Component) => (props) => {

    return (
        <Suspense fallback={<></>}>
            <Component {...props} />
        </Suspense>
    );
};
