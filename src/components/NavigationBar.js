import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { navigationLinks } from '../data/links'
import CustomButton from './utils/CustomButton'

const NavigationBar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        })
    }, [])


    return (
        <div className={`site__header flex justify-between transition-colors items-center font-light lg:px-5 max-w-screen-xl mx-auto h-20 ${scroll ? 'bg-assembly-white' : 'bg-assembly-purple text-assembly-white'} sticky top-0  w-full`}>
            <div className='site__header__logo'>
                <a href="#" className='h-[29px] w-[167px] hidden md:block'>
                    <svg viewBox="0 0 254 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5033 0.00170898L43.3717 43.3752H35.57L21.6868 0.00170898H29.5033ZM1.14441e-05 43.3752H7.80353L21.6868 0.00170898H13.8647L1.14441e-05 43.3752ZM76.1001 27.6569C76.1001 36.4558 71.4476 43.9999 62.899 43.9999C58.1223 43.9999 54.4764 41.1083 52.9676 36.7709H52.7822V43.3752H46.0538V0.00170898H52.7785V18.4818H52.9639C54.4727 14.1444 58.1186 11.3159 62.8953 11.3159C71.2586 11.3085 76.1001 18.8562 76.1001 27.6569ZM68.8712 27.6569C68.8712 20.9303 65.9166 16.4058 60.6988 16.4058C55.4198 16.4058 52.5283 20.9303 52.5283 27.6569C52.5283 34.3187 55.4198 38.9081 60.6988 38.9081C65.9166 38.9081 68.8712 34.3187 68.8712 27.6569ZM95.5774 11.3085C90.988 11.3085 87.7201 13.6959 86.4004 18.0962H86.2743V11.9424H79.6108V43.3752H86.469V24.5133C86.469 19.3604 88.545 16.4688 92.7563 16.4688C96.9676 16.4688 99.0417 19.1083 99.0417 24.9544V43.3752H105.9V22.9415C105.885 16.0277 102.491 11.3085 95.5774 11.3085ZM140.146 27.6514C140.146 36.137 134.302 43.9943 124.747 43.9943C115.192 43.9943 109.348 36.1463 109.348 27.6569C109.348 19.1676 115.194 11.3085 124.747 11.3085C134.3 11.3085 140.146 19.1713 140.146 27.6569V27.6514ZM132.982 27.6514C132.982 20.9248 130.028 16.4002 124.747 16.4002C119.529 16.4002 116.576 20.9248 116.576 27.6514C116.576 34.3131 119.529 38.9025 124.747 38.9025C130.028 38.9081 132.982 34.3187 132.982 27.6569V27.6514ZM198.148 11.3085C193.498 11.3085 190.293 13.6959 188.91 18.0962H188.784C187.527 13.948 184.258 11.3085 179.103 11.3085C174.578 11.3085 171.624 13.6959 170.304 18.0962H170.178V11.9424H163.505V43.3752H170.363V24.5133C170.363 19.3604 172.248 16.4688 176.523 16.4688C180.601 16.4688 182.619 19.1083 182.619 24.9544V43.3752H189.477V24.5133C189.477 19.3604 191.299 16.4688 195.574 16.4688C199.722 16.4688 201.672 19.1083 201.672 24.9544V43.3752H208.53V22.9415C208.521 16.0277 205.127 11.3085 198.148 11.3085ZM235.303 11.9368H242.028V43.3752H235.303V36.7709H235.118C233.609 41.1083 229.963 43.9999 225.186 43.9999C216.638 43.9999 211.987 36.4558 211.987 27.6569C211.987 18.8581 216.83 11.3085 225.183 11.3085C229.959 11.3085 233.605 14.137 235.114 18.4744H235.299L235.303 11.9368ZM235.551 27.6569C235.551 20.9303 232.4 16.4058 227.316 16.4058C222.232 16.4058 219.209 20.9303 219.209 27.6569C219.209 34.3187 222.287 38.9081 227.316 38.9081C232.411 38.9081 235.551 34.3187 235.551 27.6569ZM246.673 0.00170898V43.3752H253.531V0.00170898H246.673ZM143.614 43.3752H150.473V17.036H159.826V11.9442H143.614V43.3752Z" fill="currentColor" className="transition-colors"></path></svg>
                </a>
            </div>
            <nav>
                <div className='flex'>
                    {/* Map through navigation links and return list item */}
                    {navigationLinks.map((link, idx) => {
                        return (
                            <div key={`navigation-link-${idx}`}>
                                <a href={link.url} className="px-2 whitespace-nowrap transition-colors focus:text-assembly-black hover--underline ">
                                    <span>{link.text}</span>

                                </a>
                                {(navigationLinks.length - 1) > idx && <span>/</span>}
                            </div>
                        )
                    })}
                </div>
            </nav>
            <div className='site__header__search'>
                <a href="#">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 122.879 119.799"><g><path className={`${scroll ? 'fill-assembly-black' : 'fill-assembly-white'} cursor-pointer`} d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"></path></g></svg>
                </a>
            </div>
            <CustomButton text="See a Demo" bgColor="bg-assembly-black" bgColorHover="bg-assembly-white" color="text-assembly-white" colorHover="hover:text-assembly-black" />
        </div>
    )
}

export default NavigationBar