import React from 'react'

const MealDetailPage = ({ params }) => {
    const slug = params.mealSlug;
  return (
    <div >
      MealDetailPage - { slug }
    </div>
  )
}

export default MealDetailPage
