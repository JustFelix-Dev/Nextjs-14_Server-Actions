import React from 'react'
import classes from "./page.module.css";
import Image from 'next/image';

const MealDetailPage = ({ params }) => {
    const slug = params.mealSlug;
  return (
      <>
      <header className={classes.header} >
           <div className={classes.image}>
            <Image fill />
           </div>
      </header>
      <main></main>
      </>
  )
}

export default MealDetailPage
