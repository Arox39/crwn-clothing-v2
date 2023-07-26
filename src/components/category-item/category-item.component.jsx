import "./category-item.style.scss"

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return ( 
        <div className="category-item">
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="category-item-title">
                <h1 className="title">{title}</h1>
                <h2 className="sub-title">SHOP NOW</h2>
            </div>
        </div>
     
    )
}

export default CategoryItem