import React, { Component } from 'react';
import Subject from './Subject.js';

class App extends Component {
  constructor() {
    super();

    this.state = {resources: [
      {subject: "Functional Programming Basics", resources: [
        {
          title: "Higher Order Functions Explained",
          url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
        {
          title: "Higher Order Functions Map",
          url: "https://www.youtube.com/watch?v=bCqtb-Z5YGQ&index=2&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
        {
          title: "Higher Order Fuunctions Reduce",
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

      {subject: "React", resources: [
          {
            title: "Facebooks Create React App Boiler Plate",
            url: "https://github.com/facebookincubator/create-react-app"},
          {
            title: "5 Things You Need to Know About React",
            url: "https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.lcjnx6ys0"},
          {
            title: ""}
        ]
      }
    ]}
  }

  //event handlers here

  render() {
    return(
      <div>
        Parent Component
        <Subject subject={this.state.resources[0].subject}/>
        <Subject subject={this.state.resources[1].subject}/>
        <Subject subject={this.state.resources[2].subject}/>

      </div>
    );
  }
}

export default App;
