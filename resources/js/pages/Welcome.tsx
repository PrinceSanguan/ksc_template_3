import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import MartialArtsBackground from '@/components/welcomePage/martial-arts-background';
import Navbar from '@/components/welcomePage/Navbar';
import Hero from '@/components/welcomePage/Hero';
import About from '@/components/welcomePage/About';
import Services from '@/components/welcomePage/Services';
import Feedback from '@/components/welcomePage/Feedback';
import Communities from '@/components/welcomePage/Communities';
import Blog from '@/components/welcomePage/Blog';
import Location from '@/components/welcomePage/Location';
import Booking from '@/components/welcomePage/Booking';
import Contact from '@/components/welcomePage/Contact';
import Footer from '@/components/welcomePage/Footer';
import { initScrollAnimations } from '@/utils/animations';

export default function Welcome() {
    useEffect(() => {
        // Initialize animations when component mounts
        initScrollAnimations();
    }, []);

    return (
        <>
            <Head title="Seigler's Karate Center">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=raleway:300,400,500,600,700|playfair-display:400,500,600,700&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <MartialArtsBackground>
                <div className="flex min-h-screen flex-col text-gray-800">
                    <Navbar />
                    <Hero />
                    <About />
                    <Services />
                    <Feedback />
                    <Communities />
                    <Blog />
                    <Location />
                    <Booking />
                    <Contact />
                    <Footer />
                </div>
            </MartialArtsBackground>
        </>
    );
}