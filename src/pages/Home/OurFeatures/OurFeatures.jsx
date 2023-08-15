import './OurFeatures.css'

const OurFeatures = () => {
    return (
        <div className='mt-5 '>
            <div className='mx-auto h-auto  mono p-12'>
                <h1 className='font-mono text-center text-6xl '>Why Choose Us</h1>
                <p className='font-mono text-center text-3xl mt-2 p-1 mx-auto '>Enjoy Your Holiday We Can Keep Them Happy Your Pet Our Priority Happy Pets, Happy Humans We Are The Best Of This Country We Are Always Ready For Your Pet.</p>

            </div>
            <div className="flex justify-evenly flex-wrap p-4  ">
                <div className="card w-72 sm:w-auto bg-base-100 shadow-xl card-color  sm:mb-4 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/QnWF954/team.png" alt="Shoes" className="rounded-xl icon" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-slate-100">Trusted Team</h2>
                        <p className='text-slate-100'>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-72 sm:w-auto bg-base-100 shadow-xl card-color sm:mb-4 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/P16xScW/care.png" alt="Shoes" className="rounded-xl icon" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-slate-100 ">Personalized Care</h2>
                        <p  className='text-slate-100'>If a dog chews shoes whose shoes does he choose?</p>
                   
                    </div>
                </div>
                <div className="card w-72 sm:w-auto bg-base-100 shadow-xl card-color sm:mb-4 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/T1vfCr3/mind.png" alt="Shoes" className="rounded-xl icon" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-slate-100">Peace Of Mind</h2>
                        <p  className='text-slate-100'>If a dog chews shoes whose shoes does he choose?</p>
                       
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurFeatures;