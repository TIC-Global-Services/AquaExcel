import React from 'react'

const headofficemap = () => {
    return (
        <div className='pb-24'>
            {/* Global Map Iframe */}
            <div className="w-full mt-8 px-[5%] md:px-[8%]">
                <iframe
                    className="w-full h-[400px] border border-gray-300 rounded-2xl shadow-sm"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.02006353472382!2d77.0083052748863!3d11.045588538052536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8581da4b687d5%3A0x9dcaa512c0ba925a!2sAQUA%20EXCEL!5e0!3m2!1sen!2sin!4v1781334369768!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default headofficemap