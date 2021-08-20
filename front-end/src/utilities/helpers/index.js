export const handlerIngredients = (meal) => {
  const ingredients = Object.entries(meal).filter(
      (item) => item[1] !== "" &&
       item[1] !==null &&
       item[0].includes("strIngredient")
       )

       const measures = Object.entries(meal).filter(
        (item) => item[1] !== "" &&
         item[1] !==null &&
         item[0].includes("strMeasure")
         )

        return ingredients.map((meal,index) => {
           return (
               <li key={index} >
                 {meal[1]} : {measures[index][1]}
               </li>
           )
       })
}

