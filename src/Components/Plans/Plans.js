import React from 'react'

const Plans = () => {
    return (
        <>
            <div className='bg-[#203658]'>
                <div className='container mx-auto gap-10 px-20 grid grid-cols-4 place-items-center  text-white'>
                    <div className='flex gap-4 w-full justify-start items-center py-12 after:content-[""] after:block after:absolute after:right-0 after:w-[1px] after:h-[25px] after:bg-[#fff] relative'>
                        <div className='text-4xl font-semibold'>
                            10
                        </div>
                        <div>
                            Years of Experience
                        </div>
                    </div>
                    <div className='flex gap-4 w-full justify-start items-center py-12 after:content-[""] after:block after:absolute after:right-0 after:w-[1px] after:h-[25px] after:bg-[#fff] relative'>
                        <div className='text-4xl font-semibold'>
                            2K+
                        </div>
                        <div>
                            Best Destination
                        </div>
                    </div>
                    <div className='flex gap-4 w-full justify-start items-center py-12 after:content-[""] after:block after:absolute after:right-0 after:w-[1px] after:h-[25px] after:bg-[#fff] relative'>
                        <div className='text-4xl font-semibold'>
                            10K+
                        </div>
                        <div>
                            Happy Customers
                        </div>
                    </div>
                    <div className='flex gap-4 w-full justify-start items-center py-12 after:content-[""] after:block after:absolute after:right-0 after:w-[1px] after:h-[25px] after:bg-[#fff] relative'>
                        <div className='text-4xl font-semibold'>
                            4.8
                        </div>
                        <div>
                            Overall Rating
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans
