import classes from './MealsSummary.module.css';

const MealsSummary = () => {

fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-05-06&sortBy=publishedAt&apiKey=df96d27cf6b44195805feb36d79d9dfa").then((res)=>{
  res.json()
}).then((data)=>{

console.log(data)
})

const clickedhandle=()=>{
  console.log("cliked!!")
};

  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>

      <button type="button" className="btn btn-primary" onClick={clickedhandle}>Get map</button>
    </section>
  );
};

export default MealsSummary;