// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-[color:var(--dark)]">
      <div className="container mx-auto py-20 px-3 lg:px-10 xl:px-20 text-white">
        <h1 className="text-[1.5rem] font-bold">@CoffeeSpike</h1>
        <div className="horizontal-line bg-white"></div>

        <div className="text-[2rem] mt-5">
          <Link href="">
            <FontAwesomeIcon icon={faSquareFacebook} className="mr-3" />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faSquareTwitter} className="mr-3" />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faSquareInstagram} className="mr-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
