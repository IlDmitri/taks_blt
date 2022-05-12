import React from 'react';

interface ContentProps {
    title: string,
    desc: string,
    children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({
    title,
    desc,
    children
}) => {
    return (
        <section className='container my-lg-5 my-4'>
            <div className="row">
                <div className='pt-lg-5 col-lg-8 col-md-12'>
                    <div className='jumbotron bg-transparent p-0 text-white pt-lg-5'>
                        <h1 className='bolt__title pb-4'><strong>{title}</strong></h1>
                        <p className='bolt__desc pr-lg-5'>{desc}</p>
                    </div>
                    <div className='bolt__learn text-white text-uppercase d-none d-lg-inline-flex'>
                        <strong>Learn more</strong>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Content;