import { useEffect, useState } from 'react';
import PatternDivider from '../../../images/pattern-divider-mobile.svg';

const RANDOM_ADVICE = 'https://api.adviceslip.com/advice';

export default function Card() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();
  const [roll, setRoll] = useState(false);

  function handleClick() {
    setRoll(true);

    setTimeout(() => {
      // Set rolling to false again when time over
      setRoll(false);
    }, 1000);
  }

  useEffect(() => {
    fetch(RANDOM_ADVICE)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { ...advice } = data.slip;
        setId(advice.id);
        setAdvice(advice.advice);
      });
  }, [roll]);

  return (
    <section className=' flex flex-col items-center w-full h-full p-8 justify-center'>
      <article className='bg-neutralDarkGrayish w-full h-auto p-8 rounded-xl'>
        <div className='flex flex-col items-center font-manrope-extrabold font-extrabold text-center'>
          <header className=' tracking-widest'>
            <span className='text-primaryNeonGreen uppercase tracking-widest text-md'>
              Advice #{id}
            </span>
          </header>
          <h1 className='text-primaryLightCyan text-3xl py-8'>
            &quot;{advice}&quot;
          </h1>
          <footer className='flex flex-col items-center justify-center'>
            <div className='pb-6'>
              <img src={PatternDivider} alt='Pattern divider' />
            </div>
            <div className='w-16 h-16 rounded-full bg-primaryNeonGreen flex items-center justify-center -mb-16'>
              <div className='w-auto h-auto'>
                <svg
                  onClick={handleClick}
                  className={
                    roll
                      ? 'bg-primaryNeonGreen w-full h-full cursor-pointer rotate-180 duration-200 ease-out'
                      : 'bg-primaryNeonGreen w-full h-full cursor-pointer'
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
