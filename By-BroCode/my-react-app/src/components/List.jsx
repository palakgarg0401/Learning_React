import PropTypes from "prop-types";

function List({items = [], category = "Category"}) {

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); //Numeric
    // fruits.sort((a, b) => b.calories - a.calories); //Rverse Numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const listItems = lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id}>
    //                                         {lowCalFruit.name} : &nbsp;
    //                                         {lowCalFruit.calories}</li>);

    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    // const listItems = highCalFruits.map(highCalFruit => <li key = {highCalFruit.id}>
    //                                         {highCalFruit.name} : &nbsp;
    //                                         {highCalFruit.calories}</li>);

    const itemList = items;

    const listItems = itemList.map(item => <li key = {item.id}>
                                            {item.name} : &nbsp;
                                            {item.calories}</li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
};

List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({ id : PropTypes.number,
                                                name : PropTypes.string,
                                                calories : PropTypes.number}))
}

export default List;