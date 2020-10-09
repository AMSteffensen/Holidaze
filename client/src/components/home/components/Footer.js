import React from 'react'

export default () => {
    return (
        <div>
            <div className="bg-gray-900 w-full flex flex-col py-16 px-8 text-white">
                <h4 className="font-bold my-2 text-center">Home</h4>
                <h4 className="font-bold my-2 text-center">Contact</h4>
                <h4 className="font-bold my-2 text-center">login</h4>
                <div id="social" className="flex text-6xl justify-around items-stretch my-16">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-snapchat"></i>
                </div>
                <p className="text-center">Copyright 2020</p>
            </div>
        </div>
    )
}
