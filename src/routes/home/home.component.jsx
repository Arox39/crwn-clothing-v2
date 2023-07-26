import "./home.style.scss"
import CategoryItem from "../../components/category-item/category-item.component"
import { categories } from "../../data/categories"
const Home = () => {
    return (
        <div className="home">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}


export default Home