import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}
const Aboutdata: datatype[] = [
    {
        heading: "About DailyPe",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'At DailyPe, we are passionate about creating innovative and visually stunning designs. Our team is dedicated to delivering high-quality solutions that exceed our clients\' expectations. Discover more about our journey and commitment to excellence.',
        link: 'Learn more about us'
    },
    {
        heading: "Our Services",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Explore the comprehensive range of services offered by DailyPe. From user-centric web design to cutting-edge branding solutions, we tailor our services to meet your unique needs. Learn how we can elevate your brand and online presence.',
        link: 'Discover our services'
    },
    {
        heading: "Our Works",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Take a glimpse into our portfolio and witness the magic of DailyPe\'s creative prowess. We take pride in showcasing a diverse collection of projects that highlight our skills and creativity. See for yourself the impact of our design solutions.',
        link: 'Explore our works'
    },
];

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;