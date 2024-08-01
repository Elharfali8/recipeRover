import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='py-8 lg:py-12'>
          <div className="container main-container">
              <SectionTitle title='About us' />
              <div className='pt-6 lg:pt-8 grid place-items-center'>
              <p className='text-lg md:text-xl lg:text-2xl mb-6 text-center'>
          Welcome to RecipeRover, your go-to platform for discovering, creating, and sharing delicious recipes. 
          Our mission is to bring together a community of food enthusiasts who love to explore new culinary ideas 
          and share their passion for cooking. Whether you're a seasoned chef or a beginner in the kitchen, 
          Recipe Finder offers a wide range of recipes to suit every taste and occasion.
        </p>
        <p className='text-lg md:text-xl lg:text-2xl mb-6 text-center'>
          With our user-friendly interface, you can easily search for recipes by category, ingredient, or cuisine. 
          Our platform allows you to save your favorite recipes, create custom meal plans, and even share your own 
          culinary creations with the community. Join us today and start your culinary journey with Recipe Finder!
        </p>
        <p className='text-lg md:text-xl lg:text-2xl mb-6 text-center'>
          At Recipe Finder, we believe that cooking should be a fun and rewarding experience. That's why we've 
          created a space where you can not only find amazing recipes but also connect with other food lovers. 
          From quick and easy meals to gourmet dishes, we have something for everyone. Let's make cooking enjoyable 
          and accessible for all.
        </p>
        <p className='text-lg md:text-xl lg:text-2xl'>
          Happy Cooking!
        </p>
              </div>
          </div>
    </section>
  )
}

export default About