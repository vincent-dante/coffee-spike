import Head from 'next/head';

import Header from '@/components/Header';
import Card from '@/components/Card';
import CoffeeBeansData from '@/utility/coffee-beans.json';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  const [coffeebeans, setCoffeeBeans] = useState([]);

  useEffect(() => {
    const coffeeBeansData = CoffeeBeansData;
    setCoffeeBeans(coffeeBeansData?.data);
  }, []);

  return (
    <>
      <Head>
        <title>CoffeeSpike</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container mx-auto py-10 px-3 lg:px-10 xl:px-20">
        <h2 className="text-[1.5rem] md:text-[2rem] font-bold">Coffee Beans</h2>
        <div className="horizontal-line bg-[color:var(--dark)]"></div>
      </div>

      <div className="container mx-auto py-10 px-3 lg:px-10 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coffeebeans.length > 0
            ? coffeebeans.map((item, index) => {
                return <Card key={index} coffee={item} />;
              })
            : 'No Records'}
        </div>
      </div>

      <div className="text-center font-bold pt-10">
        <Link href="/" className="flex justify-center items-center">
          View more coffee beans
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
        </Link>
      </div>
    </>
  );
}
