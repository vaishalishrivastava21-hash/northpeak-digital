import { useState } from 'react'
import './App.css'
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const [isclicked, setClick]=useState(false)
  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    review:
      "NorthPeak Digital delivered a modern, responsive website that exceeded our expectations. Their team was professional, efficient, and easy to work with.",
  },
  {
    name: "Michael Brown",
    role: "Founder, Nova Solutions",
    review:
      "Our online presence improved significantly after working with NorthPeak Digital. We saw better engagement and received positive feedback from our customers.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager, Elevate Co.",
    review:
      "From design to development, every step was handled with care. We highly recommend NorthPeak Digital for businesses looking to grow online.",
  },
];
  const pricingPlans = [
  {
    title: "Starter",
    price: "£29/month",
    features: [
      "Responsive Website",
      "Up to 5 Pages",
      "Basic SEO",
      "Email Support",
    ],
  },
  {
    title: "Professional",
    price: "£79/month",
    features: [
      "Everything in Starter",
      "Custom Website Design",
      "Advanced SEO",
      "Analytics Dashboard",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Dedicated Project Manager",
      "Mobile App Development",
      "24/7 Premium Support",
      "Custom Solutions",
    ],
  },
];
  const services = [
  {
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable websites that deliver seamless user experiences across all devices.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our team creates intuitive and visually appealing interfaces that enhance usability and customer satisfaction.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and attract more organic traffic with effective SEO strategies.",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach your target audience through data-driven marketing campaigns that increase engagement and conversions.",
  },
  {
    title: "Branding",
    description:
      "Develop a strong and memorable brand identity with creative visuals, messaging, and marketing assets.",
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications for Android and iOS to support your business growth.",
  },
];
function menuHandle(){
  setClick(!isclicked);
}
  return (
    <>
      <header ><nav>NorthPeak Digital 
        <ul className='navlinks'>
        <li>Home</li>
        <li>Service</li>
        <li>Result</li>
         <li>Pricing</li>
          <li>Contact</li>
          </ul><button id='btn1' >Get Started</button><div className='vertical-menu'><button aria-label="Open navigation menu" className='menu' onClick={menuHandle}> <GiHamburgerMenu /></button>{isclicked && (
    <ul className="mobile-menu">
      <li>Home</li>
      <li>Service</li>
      <li>Result</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  )}</div></nav> 
      </header>
       <main>
        <section id='hero'> <h1>Helping Businesses Grow Through Smart Digital Solutions.</h1>

<h2>We design modern websites, build memorable brands,
and create digital experiences that drive real results.</h2>
<button>Get Started</button><button>View Services
  <br/>
</button>⭐⭐⭐⭐⭐ Trusted by 100+ businesses
</section><section id='services'>
  <div className="services-grid">
  {services.map((service, index) => (
    <div className="service-card" key={index}>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  ))}
</div>
</section><section id="results">
  <h2>What Our Clients Say</h2>
  <p>Trusted by businesses to deliver exceptional digital experiences.</p>

  <div className="testimonials-grid">
    {testimonials.map((testimonial, index) => (
      <div className="testimonial-card" key={index}>
        <p>"{testimonial.review}"</p>

        <h3>{testimonial.name}</h3>
        <span>{testimonial.role}</span>
      </div>
    ))}
  </div>
</section><section id="pricing">
  <h2>Pricing Plans</h2>
  <p>Choose the perfect plan for your business.</p>

  <div className="pricing-grid">
    {pricingPlans.map((plan, index) => (
      <div className="pricing-card" key={index}>
        <h3>{plan.title}</h3>
        <h2>{plan.price}</h2>

        <ul>
          {plan.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        <button className='planbtn'>Choose Plan</button>
      </div>
    ))}
  </div>
</section>
<section id='contact-form'>
  <form>
    <h2>Contact us</h2><label htmlFor="name">Full Name</label>
<input type="text" id="name"   placeholder="Enter your full name"  required
  minLength="3"/>

<label htmlFor="email">Email</label>
<input type="email" id="email" required />

<label htmlFor="message">Message</label>
<textarea id="message" required></textarea>

<button type="submit">Send Message</button></form>
</section>
       </main><footer>
  <p>
    Built for -  
    <a href= "https://digitalheroesco.com/">
      Digital Heroes Training Task
    </a>
  </p>
</footer>
    </>
  )
}

export default App
