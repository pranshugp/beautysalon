import React from 'react'
import '../styles/services.css'





const services = [
    { name: 'Haircut', price: '70', image: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Facial', price: '50', image: 'https://media.istockphoto.com/id/1590247969/photo/beautiful-woman-enjoying-receiving-a-facial-treatment-at-the-spa.jpg?s=2048x2048&w=is&k=20&c=NmPUQ2X4XZvL8XG6HSInhV7yXn9frY6GBvdbSZpR3sA=' },
    {name : 'Hair-Coloring', price: '50' , image : 'https://as1.ftcdn.net/v2/jpg/04/29/56/32/1000_F_429563255_AnI9crCdDBFmLB5TcWH4f5cKVDaJIZNJ.jpg'},
    {name : 'Hair-Treatment', price : '70', image : 'https://as2.ftcdn.net/v2/jpg/05/02/39/09/1000_F_502390974_zLUY2XwM99oeXiJrGfUW44OgP7BVes9Z.jpg'}
  ];
const Services = () => {
  return (
    <div className='services'>
        <h1>Our Services</h1>
        <div className='services-list'>
        {services.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.image} alt={service.name} />
            <div className='card-content'>
            <h3>{service.name}</h3>
            <p>Rs.{service.price}</p>
            </div>
          </div>
        ))}
            
        </div>
    </div>
  )
}

export default Services