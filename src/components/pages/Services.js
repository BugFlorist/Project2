import React from "react";

import SearchBar from "../SearchBar2";


function Services(){

    
    const tutors = [
        { name: 'John Doe', course: 'Math' },
        { name: 'Jane Smith', course: 'Science' },
        { name: 'David Johnson', course: 'English' },
        { name: 'Bella Hadid', course: 'Fashion'},
        { name: 'Pheobe Buffay', course: 'Psychology'},
        { name: 'Joseph Tribbiani', course: 'Culinary'},
        { name: 'Monica Geller', course: 'Culinary'}
        // Add more tutors with different courses
    ];
    
    const courses = ['Math', 'Science', 'English', 'Fashion', 'Psychology', 'Culinary'];
    
    
    
    return (
        <div>
        <h1>Tutor List</h1>
        <SearchBar courses={courses} tutors = {tutors} />
        {/* Render the list of tutors */}
        </div>
    );
    

}

export default Services;