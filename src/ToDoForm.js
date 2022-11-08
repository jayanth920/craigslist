import React from "react"
function ToDoForm (props) {
    console.log(props.list);


    return (
        <form>
            <input type="text"  onChange={(e) => {props.setData({
                title: e.target.value,
                complete: false,
            })}}/>
            <input type="button" value="Save" onClick={() => {
                props.handleClick(props.data)
            }}/>
        </form>
    )
}
export default ToDoForm