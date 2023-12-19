/** @format */

const About = () => {
    return (
        <main>
            <h1 className='text-lg md:text-xl text-center text-blue-500 mt-10 mb-2 tracking-wide'>ABOUT ME</h1>
            <h2 className='text-3xl md:text-4xl text-center tracking-wide font-bold'>A little bit about me</h2>
            <p className='text-left my-10 text-sm md:text-lg tracking-wide'>
                Hi, I&apos;m Adam, a web developer passionate about crafting user-centric digital experiences. I
                specialize in creating efficient and responsive websites that merge form with function. Let&apos;s
                create something amazing together!
            </p>
            <div className='rounded-md italic p-5 bg-blue-500/20 text-sm md:text-md tracking-wide'>
                &quot;The original idea of the web was that it should be a collaborative space where you can communicate
                through sharing information. The idea was that by writing something together, and as people worked on
                it, they could iron out misunderstanding, build common ground, and work towards consensus. The web is
                read-write; it&apos;s not just people consuming. It&apos;s not just people producing. It&apos;s people
                connecting, and we&apos;re still building it.&quot; - Tim Berners-Lee
            </div>
            <p className='text-left mt-10 text-sm md:text-lg tracking-wide'>
                I thrive on collaboration and meticulous problem-solving, ensuring every project I work on delivers not
                just visually stunning designs but also top-notch functionality.
            </p>
            <hr className="h-10 w-full text-center my-16 border-none before:text-2xl before:leading-8 before:text-black  dark:before:text-gray-300 before:content-['~_~_~']"></hr>
        </main>
    );
};

export default About;
