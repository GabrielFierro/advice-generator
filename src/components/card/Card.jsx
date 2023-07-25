import { useEffect, useState } from 'react';

const RANDOM_ADVICE = 'https://api.adviceslip.com/advice';

export default function Card() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();

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
  }, []);

  return (
    <section className=' flex flex-col items-center w-full h-full p-8 justify-center'>
      <article className='bg-neutralDarkGrayish w-full h-3/5 p-8 rounded-xl'>
        <div className='flex flex-col items-center'>
          <header>
            <span className='text-primaryNeonGreen'>Advice #{id}</span>
          </header>
          <h1 className='text-primaryLightCyan font-xl'>
            &quot;{advice}&quot;
          </h1>
          <footer></footer>
          <img src='' alt='' />
        </div>
      </article>
    </section>
  );
}
