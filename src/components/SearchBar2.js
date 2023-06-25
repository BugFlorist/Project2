import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cards from './Cards';
import { useState } from 'react';

function SearchBar({courses, tutors}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourses, setSelectedCourses] = useState(courses);
    const [selectedTutors, setSelectedTutors] = useState(tutors);


    function handleSearch(searchTerm, selectedCourses){


        const newtutors = tutors.filter((tutor) => 
        
            tutor.name.includes(searchTerm) && ( selectedCourses.includes(tutor.course))
        );

        console.log(newtutors);
        return newtutors;
    };
    
    
    function handleCourseChange(event){

        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedCourses((selectedCourses) => {
            
            const updatedCourses = isChecked? [...selectedCourses, value] : selectedCourses.filter((course) => course !== value);
            const newTutors = handleSearch(searchTerm, updatedCourses);
            setSelectedTutors(newTutors);

            return updatedCourses;

            }
        );
    };
    
    
    
    function handleTermChange(event){

        setSearchTerm((searchTerm) => {

            const value = event.target.value;
            const newTutors = handleSearch(value, selectedCourses);
            
            setSelectedTutors(newTutors);

            return value;

            }
        );
    };


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search for Tutors..." onChange={handleTermChange} value={searchTerm} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">

            {courses.map((course) => <Form.Check type="checkbox" id={course} label={course} value={course} onChange={handleCourseChange} checked = {selectedCourses.includes(course)}  />)}
            
        </Form.Group>

        <div className='row'>
            
            {tutors.map((tutor) => (
                <div key = {tutor.id} className="col-md-6">
            
                    <Cards id = {tutor.id} image = {tutor.image} content={tutor.course} title={tutor.name} isVisible={selectedTutors.map((tutor) => tutor.name).includes(tutor.name)} />
                </div>
            
            ))}
            
        </div>  


        </Form>
    );
}

export default SearchBar;