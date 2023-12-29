
import './Detail.css'
const Detail = () => {
    return (
        <div className="mt-5 p-5 bg-orange-200">
            <div className="hero max-h-max  p-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/T2fhxCP/petcare.jpg" className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">We Are Providing Pet Care Service For Years</h1>
                        <p className="py-6 detail">Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries. For decades we’ve supported research into the incredible science of human animal interaction at the Waltham Petcare Science Institute where scientists discover important advances in pet health and wellness. We are a part of Mars, Incorporated, a global, family-owned business with a focus on becoming Sustainable in a Generation. Follow us on LinkedIn and explore our open positions.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;