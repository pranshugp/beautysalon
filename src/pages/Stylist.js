import React from 'react'
import '../styles/stylist.css'

const stylists = [
    { name: 'Ankit', bio: 'Expert in haircuts and coloring', image: 'https://media.istockphoto.com/id/2148424048/photo/a-young-businessman-from-outside-an-office-building-uses-the-phone-a-man-smiles-and-browses.jpg?s=1024x1024&w=is&k=20&c=DjR3mYLBZnDCBYNUcANyEO-TjzkBe4tMdfwdnfbpV-o=' },
    { name: 'Ranvir', bio: 'Specialist in skincare and facials', image: 'https://media.istockphoto.com/id/2148266842/photo/smiling-young-indian-businessman-using-smartphone-in-urban-setting.jpg?s=1024x1024&w=is&k=20&c=aHsr67Z8lEFKldfxJHofZGhRsB28KmviEckvGGxukfM=' },
    { name: 'Zareen ', bio: 'Expert in haircuts and hair-treatment', image: 'https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Sushil', bio: 'Specialist in facials and hair-coloring', image: 'https://media.istockphoto.com/id/1358406408/photo/depressed-african-american-businessman-looking-at-camera-close-up-portrait.jpg?s=2048x2048&w=is&k=20&c=BSBpujhchWBHW9viu8k45AhQ8_VKYXrt63z0E6mM4Qg=' },
    
  ];
  

const Stylist = () => {
  return (
    <div className='stylists'>
        <h1>Meet Our Stylists</h1>
        <div className="stylists-list">
        {stylists.map((stylist, index) => (
          <div className="stylist" key={index}>
            <img src={stylist.image} alt={stylist.name} />
            <div className='card-content'>
            <h3>{stylist.name}</h3>
            <p>{stylist.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Stylist