import StudyGroup from '../StudyGroup';

function StudyGroups() {
    
    const groups = [
      {course: 'English', date: 'Mon-Tue', time: '10am-12pm'},
      {course: 'Math', date: 'Mon-Tue', time: '10am-12pm'},
      {course: 'Science', date: 'Mon-Tue', time: '10am-12pm'},

    ];
    

  return (

    
    
    <div>

    <h3 className='text-center'>Our Study Groups</h3>
    
    <div className='row'>
      <div className='col-md-3'>
        <h4>Course</h4>
      </div>
      <div className='col-md-3'>
        <h4>Date</h4>
      </div>
      <div className='col-md-3'>
        <h4>Time</h4>
      </div>
      <div className='col-md-3'>
        <h4>Reserve</h4>
      </div>
    </div>

    {groups.map((group) =>
        <StudyGroup course={group.course} date={group.date} time={group.time} />
    )}

    </div>
    
    

  );
}

export default StudyGroups;