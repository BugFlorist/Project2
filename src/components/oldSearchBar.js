import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SearchBar({ courses, tutors }) {
  const [searchTerm, setSearchTerm] = useState(''); //current search term
  const [selectedCourses, setSelectedCourses] = useState([]); // store the selected courses

  const handleSearch = (searchTerm, selectedCourses) => {
    // Perform search and filter based on the provided searchTerm and selectedCourses
    const filteredTutors = tutors.filter((tutor) => {
      console.log(selectedCourses);
    const courseMatch =
        selectedCourses.length === 0 || selectedCourses.includes(tutor.course);
    const nameMatch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return courseMatch && nameMatch;

    });

    // Do something with the filtered tutors
    console.log('Filtered tutors:', filteredTutors);
  };

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCourseChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCourses([...selectedCourses, value]);
    } else {
      setSelectedCourses(selectedCourses.filter((course) => course !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm, selectedCourses);
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={handleTermChange}
      />
      {courses.map((course) => (
        <Form.Check
          key={course}
          type="checkbox"
          id={course}
          label={course}
          value={course}
          checked={selectedCourses.includes(course)}
          onChange={handleCourseChange}
        />
      ))}
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
