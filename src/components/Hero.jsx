import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-center'>
                    LOGO
                </div>

                <div className=''>
                    Share to care, Trade to aid
                </div>
            
                <div className='text-center'>
                    <button>Trade now &rarr;</button>
                </div>
            </div>
        </div>
    )
}

export default Hero