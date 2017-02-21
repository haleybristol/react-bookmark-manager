import React, { Component } from 'react';
import Subject from './Subject.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.addNewResource = this.addNewResource.bind(this)

    this.state = {resources: [
      {subject: "Functional Programming Basics", resources: [
        {
          title: "Higher Order Functions Explained",
          url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
        {
          title: "Higher Order Functions Map",
          url: "https://www.youtube.com/watch?v=bCqtb-Z5YGQ&index=2&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
        {
          title: "Higher Order Functions Reduce",
          url: "https://www.youtube.com/watch?v=Wl98eZpkp-c&index=3&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
        {
          title: "Higher Order Functions Advanced Reduced",
          url: "https://www.youtube.com/watch?v=Wl98eZpkp-c&index=3&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"}
        ]
      },

      {subject: "ES6", resources: [
          {
            title: "ES6 Intro to New Features",
            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"
          },
          {
            title: "ES6 Intro to Arrow Functions",
            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"
          },
          {
            title: "ES6 let or const",
            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.7596kavhy"},
          {
            title: "ES6 Overview",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA"
          },
          {
            title: "The Best of ES6",
            url: "https://www.youtube.com/watch?v=LmL0Gh193M0"
          },
          {
            title: "ES6 Interactive Guide",
            url: "http://stack.formidable.com/es6-interactive-guide/#/"
          },
          {
            title: "Egghead Learn ES6",
            url: "https://egghead.io/courses/learn-es6-ecmascript-2015"
          },
          {
            title: "ES6 All In One Extensive Video",
            url: "https://www.youtube.com/watch?v=IEf1KAcK6A8"
          }
        ]
      },

      {subject: "Intro to React", resources: [
          {
            title: "Facebooks Create React App Boiler Plate (github)",
            url: "https://github.com/facebookincubator/create-react-app"
          },
          {
            title: "5 Things You Need to Know About React (10 min read)",
            url: "https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.lcjnx6ys0"
          },
          {
            title: "Thinking in React (React docs)",
            url: "https://facebook.github.io/react/docs/thinking-in-react.html"
          },
          {
            title: "What is React (5 min)",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"
          },
          {
            title: "Making a Single Component (10 min)",
            url: "https://www.youtube.com/watch?v=G40iHC-h0c0&index=4&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"
          },
           {
            title: "Multiple Components (6 min)",
            url: "https://www.youtube.com/watch?v=9wK4gHoOh1g&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=5"
          },
          {
            title: "Outputting Dynamic Data (3 min)",
            url: "https://www.youtube.com/watch?v=1JZEmYwRGoU&index=6&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"
          },
          {
            title: "Passing Data with Props (16 min)",
            url: "https://www.youtube.com/watch?v=GIU8ekYndKw&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=7"
          },
          {
            title: "ReactJS Components and Rendering (3 min)",
            url: "https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be"
          },
          {
            title: "Composing Multiple React.js Components (6 min)",
            url: "https://www.youtube.com/watch?v=vu_rIMPROoQ"
          },
          {
            title: "State vs. Props and Application Data (9 min)",
            url: "https://www.youtube.com/watch?v=qh3dYM6Keuw"
          },
        ]
      },
      {subject: "React: Event Handlers", resources: [
          {
            title: "Handling Events (React docs)",
            url: "https://facebook.github.io/react/docs/handling-events.html"
          },
          {
            title: "React Stateless Functional Components: Nine Wins You Might Have Overlooked (4 min read)",
            url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.z6yrmgmin"
          },
          {
            title: "#7 Events (8 min)",
            url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8"
          },
          {
            title: "#8 State of Components (5 min)",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"
          },
          {
            title: "#9 How Does ReactJS Update the DOM (5 min)",
            url: "https://www.youtube.com/watch?v=Iw2BLUjQo1E&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=10"
          },
           {
            title: "#10 Stateless Components (4 min)",
            url: "https://www.youtube.com/watch?v=SEkfzqIgvTo&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=11"
          },
          {
            title: "Understanding JavaScript's Function.prototype.bind  (13 min read)",
            url: "https://www.youtube.com/watch?v=1JZEmYwRGoU&index=6&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"
          },
          {
            title: "#5 JavaScript Events and Data Changes in React (7 min)",
            url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"
          }
        ]
      }
    ]}
  }

  //event handlers here

  addNewResource(subject, resource) {
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    this.setState(tempState)
  }
  render() {
    return(
      <div>
        {
          this.state.resources.map((resource, index) => {
            return(
              <Subject index={index} items={resource} addResource={this.addNewResource}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
