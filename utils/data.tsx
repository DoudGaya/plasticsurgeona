// standing image about us sections
import st from '@/public/assets/stand/st.jpg'
import st1 from '@/public/assets/stand/st1.jpg'
import st2 from '@/public/assets/stand/st2.jpg'
import st3 from '@/public/assets/stand/st3.jpg'
import st4 from '@/public/assets/stand/st4.jpg'
import st5 from '@/public/assets/stand/st5.jpg'
import st6 from '@/public/assets/stand/st6.jpg'
// testimonials

import test1 from '@/public/images/test1.png'
import test2 from '@/public/images/test2.png'
import test3 from '@/public/images/test3.png'
import test4 from '@/public/images/test4.png'
import test5 from '@/public/images/test5.png'
import test from '@/public/images/test.png'

// images of surgery
import before from '@/public/assets/before&after/bf.jpg'
import before1 from '@/public/assets/before&after/bf1.jpg'
import before2 from '@/public/assets/before&after/bf2.jpg'
import before3 from '@/public/assets/before&after/bf3.jpg'
import before5 from '@/public/assets/before&after/bf5.png'
import before6 from '@/public/assets/before&after/bf6.jpg'
import before7 from '@/public/assets/before&after/bf7.png'
import before8 from '@/public/assets/before&after/bf8.jpg'
import { LiaFacebookSquare } from 'react-icons/lia'
import { LiaTwitter } from 'react-icons/lia'
import { LiaInstagram } from 'react-icons/lia'
import {LiaLinkedinIn} from 'react-icons/lia'

export const socials = [
    {
        id: 1,
        icon: ( <LiaFacebookSquare className=' h-7 w-7 fill-primary' /> ),
        link:'https://www.facebook.com/plasticsurgeona'
    },
    {
        id: 2,
        icon: ( <LiaInstagram className=' h-7 w-7 fill-primary' />),
        link:'https://www.twitter.com//plasticsurgeona'
    },
    {
        id: 3,
        icon: ( <LiaTwitter className=' h-7 w-7 fill-primary' />),
        link:'https://www.facebook.com/'
    },    {
        id: 4,
        icon: <LiaLinkedinIn className=' h-7 w-7 fill-primary' />,
        link:'https://www.facebook.com/'
    },

]



export const standing = [
    {
        id: 6,
        alt: 'Surge',
        img: st3,
    },
     {
        id: 0,
        alt: 'Surge',
        img: st1,
    },
      {
        id: 1,
        alt: 'Surge',
        img: st2,
    },
     {
        id: 2,
        alt: 'Surge',
        img: st,
    },
     {
        id: 3,
        alt: 'Surge',
        img: st4,
    },
    {
        id: 4,
        alt: 'Surge',
        img: st5,
    },
      {
        id: 5,
        alt: 'Surge',
        img: st6,
    },
]

export const testimonies = [
    {
        id: 0,
        name: 'Nina Adams',
        img: test2,
        message: `Grateful for the welcoming team at Plastic Surgeona, my rhinoplasty was a success, and I'm more confident than ever!`

    },
    {
        id: 1,
        name: 'Meagan Mike',
        img: test,
        message: `Game-changer! Non-surgical facial rejuvenation was tailored to my needs, and I feel years younger.`
    },
   
     
      {
        id: 2,
        name: 'Amelia Watson',
        img: test3,
        message: `Unmatched expertise! My facelift transformed my appearance, thanks to Plastic Surgeona's precision and artistry`
    },
     {
        id: 3,
        name: 'Lilly Fox',
        img: test4,
        message: `Exceptional experience! My tummy tuck was life-changing, thanks to Plastic Surgeona's professionalism and care.`
    },
    {
        id: 3,
        name: 'Ismail Ahmad',
        img: test5,
        message: `Immensely grateful for reconstructive surgery, Plastic Surgeona restored my self-confidence after my accident`
    },
    {
        id: 4,
        name: 'julia Anderson',
        img: test1,
        message: `Thrilled with my breast augmentation results! Plastic Surgeona's dedication and attention to detail are impressive.`
    },
]


export const beforeNdAfter = [
    {
        id: 0, 
        surgery: 'Hair Transplant',
        image: before
    },

      {
        id: 1, 
        surgery: 'Arm Lifting',
        image: before1
    },
      
        {
        id: 2, 
        surgery: 'Blepharoplasty',
        image: before2
    },

          {
        id: 3, 
        surgery: 'Nose Lift',
        image: before3
    },

        {
        id: 5, 
        surgery: 'Breast Augmentation',
        image: before5
    },
      {
        id: 6, 
        surgery: 'Hair Transplant',
        image: before6
    },
        {
        id: 7, 
        surgery: 'Hair Transplant',
        image: before7
    },
        {
        id: 8, 
        surgery: 'Brazilian Butt Lift',
        image: before8
    },
      
]