import React, { Component } from 'react';
import '../styles/CourseItems.css';

//blob that has a name and class code
class CourseItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }

  render() {
    const selectedCourses = this.props.entries;
    const listOfCourses = selectedCourses.map(this.createTasks);

    return (<ul className="theList">{listOfCourses}</ul>
    );
  }
}

export default CourseItems;
