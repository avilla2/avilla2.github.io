import React from 'react';
import MyNav from '../components/navbar'
import Intro from '../components/intro'
import About from '../components/about'
import Experience from '../components/experience'
import Links from '../components/links'
import Footer from '../components/footer'

class Home extends React.Component {
    render() {
        return (
            <div>
                <MyNav />
                <Intro />
                <About />
                <Experience />
                <Links />
                <Footer />
            </div>
        )
    }
}

export default Home;