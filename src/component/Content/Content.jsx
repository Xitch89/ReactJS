import React from 'react';
import classes from './css/Content.module.css';
import postData from '../../constants/postData';
import Post from './ContentPost';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateChecked: false,
      isAlphabetChecked: false,
      isLessChecked: false,
      copyPostData: [],
      numberSortPostData: [],
    };
    const copyPostData = postData.slice();
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.state.copyPostData = copyPostData;
    this.state.numberSortPostData = numberSortPostData;
  }
  // default sort

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
      while (j >= 0 && copyPostData[j].id > key.id) {
        copyPostData[j + 1] = copyPostData[j];
        j -= 1;
      }
      copyPostData[j + 1] = key;
    }
    return copyPostData;
  };

  // filters

  sortByIdAlphabet = (post) => {
    return post.slice().sort((a, b) => a.postRef.localeCompare(b.postRef));
  };

  handleCheckboxAlphabetChange = (event) => {
    const { numberSortPostData, copyPostData } = this.state; 
    const updatedNumberSortPostData = this.sortByIdAlphabet(numberSortPostData);
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
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  sortByIdDate = (post) => {
    return post.slice().sort((a, b) => b.date.localeCompare(a.date));
  };

  handleCheckboxDateChange = (event) => {
    const { numberSortPostData, copyPostData } = this.state;
    const updatedNumberSortPostData = this.sortByIdDate(numberSortPostData);
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
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  sortByLessThan10 = (post) => {
    const sortedPostData = post.slice().sort((a, b) => b.id - a.id);
    return sortedPostData.slice(0, -10);
  };

  handleCheckboxLessThan10 = (event) => {
    const { numberSortPostData, copyPostData } = this.state;
    const updatedNumberSortPostData = this.sortByLessThan10(numberSortPostData);
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
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  // Click

  handleCardClick = (e) => {
    const clickedCard = e.currentTarget;
    if (clickedCard.classList.contains('selected')) {
      clickedCard.classList.remove('selected');
      this.setState({ isSelected: false });
    } else {
      clickedCard.classList.add('selected');
      this.setState({ isSelected: true });
    }
  };

  // drag and drop

  sortPost = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  dragStartHandler(e, card) {
    this.setState({ currentCard: card });
  }

  dragEndHandler(e) {
    const eventTarget = e.target;
    eventTarget.style.background = '';
  }

  dragOverHandler(e) {
    const eventTarget = e.target;
    e.preventDefault();
    eventTarget.style.background = 'gray';
  }

  dragLeaveHandler(e) {
    const eventTarget = e.target;
    eventTarget.style.background = '';
  }

  dropHandler(e, card) {
    const { currentCard, copyPostData } = this.state;
    const eventTarget = e.target;
    eventTarget.style.background = '';
    e.preventDefault();
    const updatedCopyPostData = copyPostData.map((c) => {
      if (c.id === card.id) {
        return { ...c, order: currentCard.order };
      }
      if (c.id === currentCard.order) {
        return { ...c, order: card.order };
      }
      return c;
    });
    const updatedNumberSortPostData = updatedCopyPostData.sort(this.sortPost);
    this.setState({
      isLessChecked: false,
      isDateChecked: false,
      isAlphabetChecked: false,
      currentCard: null,
      copyPostData: updatedCopyPostData,
      numberSortPostData: updatedNumberSortPostData
    });
  }

  render() {
    const {
      isAlphabetChecked,
      isDateChecked,
      isLessChecked,
      numberSortPostData,
      isSelected
    } = this.state;
    // const cardClass = `${classes.layoutsItems} ${isSelected ? classes.selected : ''}`;

    const newPost = numberSortPostData.map((post) => (
      <button 
        type="button"
        onDragStart={(e) => this.dragStartHandler(e, post)}
        onDragLeave={(e) => this.dragLeaveHandler(e)}
        onDragEnd={(e) => this.dragEndHandler(e)}
        onDragOver={(e) => this.dragOverHandler(e)}
        onDrop={(e) => this.dropHandler(e, post)}
        onClick={() => this.handleCardClick}
        draggable
        className={`${classes.layoutsItems} ${isSelected ? classes.selected : ''}`} 
      >
        <Post
          id={post.id}
          postRef={post.postRef} 
          massage={post.massage} 
          image={post.image} 
          date={post.date}
        />
      </button>
    ));

    return (
      <div>
        <div className={classes.checkBox}>
          <label htmlFor="alphabet" className={classes.checkBoxContainer}>
            <input
              id="alphabet" 
              type="checkbox" 
              checked={isAlphabetChecked} 
              onChange={this.handleCheckboxAlphabetChange}
            />
            Filter by alphabet
            <span className={classes.checkmark} />
          </label>
          <label htmlFor="checkboxDate" className={classes.checkBoxContainer}>
            <input
              id="checkboxDate" 
              type="checkbox" 
              checked={isDateChecked} 
              onChange={this.handleCheckboxDateChange}
            />
            Filter by post date
            <span className={classes.checkmark} />
          </label> 
          <label htmlFor="lessThan10" className={classes.checkBoxContainer}>
            <input
              id="lessThan10" 
              type="checkbox" 
              checked={isLessChecked} 
              onChange={this.handleCheckboxLessThan10} 
            />
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
