import React from 'react';
import Header from './../components/header';
import Footer from'./../components/footer';

const MainLayout = props => {
    return (
        <div>
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    );
};

export default MainLayout;