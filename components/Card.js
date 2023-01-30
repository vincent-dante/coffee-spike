import Image from 'next/image';

export default function Card({ coffee: { name, city, weight, price, image } }) {
  return (
    <div>
      <div className="rounded-md overflow-hidden relative min-h-[300px] md:min-h-[200px] lg:min-h-[300px] w-full">
        <Image
          src={image}
          alt="HeaderImage"
          fill="true"
          className="object-cover"
        />
      </div>
      <h3 className="font-bold text-[1.5rem] mt-5">{name}</h3>
      <div className="flex justify-between text-[color:var(--gray)] font-bold">
        <span>{city}</span>
        <span>{weight}</span>
      </div>
      <p className="font-bold text-[2rem]">
        <small>₱</small>
        {price}
      </p>
      <button className="py-2 px-5 mt-5 rounded-full button-dark">
        Order Now
      </button>
    </div>
  );
}
