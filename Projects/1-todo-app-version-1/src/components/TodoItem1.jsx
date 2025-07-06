function TodoItem1() {
    let todoName = 'Buy Milk';
    let todoDate = '6/7/2025'; 

    return (
        <div className="container">
            <div className="row item-row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2 text-center">
                    <button type="button" className="btn btn-danger item-button">Delete</button>
                </div>
            </div>
      </div>
    );
}

export default TodoItem1;