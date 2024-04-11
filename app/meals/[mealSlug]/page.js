import React from 'react'
import classes from "./page.module.css";
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

// export const metadata = {
//   title: 'All meals',
//   description: 'Delicious meals, shared by a food-loving community.',
// };

export async function generateMetaData({ params }){
  const slug = params.mealSlug;
  const meal = getMeal(slug);

return {
  title: meal.title,
  decsription: meal.summary
}
}

const MealDetailPage = ({ params }) => {
    const slug = params.mealSlug;
    const meal = getMeal(slug);
    

    if(!meal){
        notFound()
    }
    meal.instructions =  meal.instructions.replace(/\n/g,'<br/>')
  return (
      <>
      <div style={{display:'flex',alignItems:'center'}} >
      <header className={classes.header} >
           <div className={classes.image}>
            <Image  src={meal.image} alt={meal.title} fill />
           </div>
      </header>
      <div className={classes.headerText} >
        <h1>{meal.title}</h1>  
        <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
      </div>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}} >

        </p>
      </main>
      </>
  )
}

export default MealDetailPage
