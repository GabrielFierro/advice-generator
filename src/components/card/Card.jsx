export default function Card() {
  return (
    <section className=' flex flex-col items-center w-full h-full p-8 justify-center'>
      <article className='bg-neutralDarkGrayish w-full h-3/5 p-8'>
        <div className='flex flex-col items-center'>
          <header>
            <span className='text-primaryNeonGreen'>Advice #117</span>
          </header>
          <h1 className='text-primaryLightCyan'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <footer></footer>
          <img src='' alt='' />
        </div>
      </article>
    </section>
  );
}
