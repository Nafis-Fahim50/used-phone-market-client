import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-2xl font-bold text-center my-5 text-purple-600'>Some Interview Questions with Answer</h1>
            <div>
                <h1 className='mt-5 text-xl font-bold'>Q1. What are the different ways to manage a state in a React application?</h1>
                <p className='mt-2'>There are four main types of state to manage in React application. </p>
                <ul>
                    <li>1. Local state</li>
                    <li>2. Global state</li>
                    <li>3. Server state</li>
                    <li>4. URL state </li>
                </ul>
                <p className='mt-2'>Local (UI) state – Local state is data we manage in one or another component.</p>
                <p>Global (UI) state – Global state is data we manage across multiple components.</p>
                <p>Server state – Data that comes from an external server that must be integrated with our UI state.</p>
                <p>URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div>
                <h1 className='mt-5 text-xl font-bold'>Q2. How does prototypical inheritance work?</h1>
                <p className='mt-2'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object </p>
            </div>
            <div>
                <h1 className='mt-5 text-xl font-bold'>Q3. What is a unit test? Why should we write unit tests?</h1>
                <p className='mt-2'>Unit Testing: Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. </p>
                <p className='mt-5'>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
            </div>
            <div>
                <h1 className='mt-5 text-xl font-bold'>Q4. React vs. Angular vs. Vue? </h1>
                <p> React: Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solution for applications called React-Native. </p>
                <p className='mt-2'> Angular: AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular. 
                Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p>
                <p className='mt-2'> Vue: Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.</p>
            </div>
        </div>
    );
};

export default Blog;