import { useEffect, useState } from 'react';
import PatternDivider from '../../../images/pattern-divider-mobile.svg';

const RANDOM_ADVICE = 'https://api.adviceslip.com/advice';

export default function Card() {
  const [advice, setAdvice] = useState(
    'Click on the die to get a random advice'
  );
  const [id, setId] = useState(0);
  const [roll, setRoll] = useState(false);

  function handleClick() {
    setRoll(true);

    setTimeout(() => {
      // Set rolling to false again when time over
      setRoll(false);
    }, 1000);
  }

  useEffect(() => {
    if (roll) {
      fetch(RANDOM_ADVICE)
        .then((res) => res.json())
        .then((data) => {
          const { ...adviceData } = data.slip;
          setId(adviceData.id);
          setAdvice(adviceData.advice);
        });
    }
  }, [roll]);

  return (
    <section className=' flex flex-col items-center w-full h-full p-8 justify-center'>
      <article className='bg-neutralDarkGrayish w-full md:w-5/12 h-auto p-8 rounded-xl'>
        <div className='flex flex-col items-center font-manrope-extrabold font-extrabold text-center'>
          <header className=' tracking-widest'>
            <span className='text-primaryNeonGreen uppercase tracking-[.35em] text-md'>
              Advice #{id}
            </span>
          </header>
          <h1 className='text-primaryLightCyan text-3xl py-8 md:px-3'>
            &quot;{advice}&quot;
          </h1>
          <footer className='flex flex-col items-center justify-center'>
            <div className='pb-6'>
              <img
                src={PatternDivider}
                width='444px'
                height='16px'
                alt='Pattern divider'
              />
            </div>
            <div className='w-16 h-16 rounded-full bg-primaryNeonGreen flex items-center justify-center -mb-16 cursor-pointer hover:shadow-[0_0px_40px_0px_rgb(77,255,166)]'>
              <div className='w-auto h-auto'>
                <svg
                  onClick={handleClick}
                  className={
                    roll
                      ? 'bg-primaryNeonGreen w-full h-full rotate-180 duration-200 ease-out'
                      : 'bg-primaryNeonGreen w-full h-full'
                  }
                  width='24'
                  height='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
                    fill='#202733'
                  />
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </section>
  );
}
