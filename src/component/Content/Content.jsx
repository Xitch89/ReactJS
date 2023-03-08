import React, { Component } from 'react';
import classes from './css/Content.module.css';
import postData from '../../constants/postData';
import Post from './ContentPost';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateChecked: false,
      isAlphabetChecked: false,
      isLessChecked: false,
      copyPostData: [],
      numberSortPostData: []
    };
    const copyPostData = postData.slice();
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.state.copyPostData = copyPostData;
    this.state.numberSortPostData = numberSortPostData;
  }

  componentDidMount() {
    const { copyPostData } = this.state;
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.setState({ numberSortPostData });
  }

  sortByPostNumber = (post) => {
    const copyPostData = [...post];
    for (let i = 0; i < copyPostData.length; i += 1) {
      const key = copyPostData[i];
      let j = i - 1;
      while (j >= 0 && copyPostData[j].postNumber > key.postNumber) {
        copyPostData[j + 1] = copyPostData[j];
        j -= 1;
      }
      copyPostData[j + 1] = key;
    }
    return copyPostData;
  };

  render() {
    const { 
      isDateChecked, isAlphabetChecked, isLessChecked, numberSortPostData, copyPostData 
    } = this.state;

    const sortByIdAlphabet = (post) => {
      return post.slice().sort((a, b) => a.id.localeCompare(b.id));
    };

    const handleCheckboxAlphabetChange = (event) => {
      const updatedNumberSortPostData = sortByIdAlphabet(numberSortPostData);
      if (event.target.checked) {
        this.setState({
          isAlphabetChecked: true,
          isDateChecked: false,
          isLessChecked: false,
          numberSortPostData: updatedNumberSortPostData
        });
      } else {
        this.setState({
          isAlphabetChecked: false,
          isDateChecked: false,
          isLessChecked: false,
          numberSortPostData: copyPostData
        });
      }
    };

    const sortByIdDate = (post) => {
      return post.slice().sort((a, b) => b.date.localeCompare(a.date));
    };

    const handleCheckboxDateChange = (event) => {
      const updatedNumberSortPostData = sortByIdDate(numberSortPostData);
      if (event.target.checked) {
        this.setState({
          isDateChecked: true,
          isAlphabetChecked: false,
          isLessChecked: false,
          numberSortPostData: updatedNumberSortPostData
        });
      } else {
        this.setState({
          isDateChecked: false,
          isAlphabetChecked: false,
          isLessChecked: false,
          numberSortPostData: copyPostData
        });
      }
    };

    const sortByLessThan10 = (post) => {
      const sortedPostData = post.slice().sort((a, b) => b.postNumber - a.postNumber);
      return sortedPostData.slice(0, 10);
    };

    const handleCheckboxLessThan10 = (event) => {
      const updatedNumberSortPostData = sortByLessThan10(numberSortPostData);
      if (event.target.checked) {
        this.setState({
          isLessChecked: true,
          isDateChecked: false,
          isAlphabetChecked: false,
          numberSortPostData: updatedNumberSortPostData
        });
      } else {
        this.setState({
          isLessChecked: false,
          isDateChecked: false,
          isAlphabetChecked: false,
          numberSortPostData: copyPostData
        });
      }
    };

    const newPost = numberSortPostData.map((post) => (
      <Post
        key={post.id}
        id={post.id} 
        massage={post.massage} 
        image={post.image} 
        date={post.date}
      />
    ));

    return (
      <div>
        <div className={classes.checkBox}>
          <label htmlFor="alphabet" className={classes.checkBoxContainer}>
            <input id="alphabet" type="checkbox" checked={isAlphabetChecked} onChange={handleCheckboxAlphabetChange} />
            Filter by alphabet
            <span className={classes.checkmark} />
          </label>
          <label htmlFor="checkboxDate" className={classes.checkBoxContainer}>
            <input id="checkboxDate" type="checkbox" checked={isDateChecked} onChange={handleCheckboxDateChange} />
            Filter by post date
            <span className={classes.checkmark} />
          </label> 
          <label htmlFor="lessThan10" className={classes.checkBoxContainer}>
            <input id="lessThan10" type="checkbox" checked={isLessChecked} onChange={handleCheckboxLessThan10} />
            Show last ten
            <span className={classes.checkmark} />
          </label>
        </div>
        <div className={classes.exampleLayouts_container}>
          <div className={classes.exampleLayouts_wrapper}>
            {newPost}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;