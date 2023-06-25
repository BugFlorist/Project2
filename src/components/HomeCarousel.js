import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1370735949/photo/teen-girl-gestures-while-explaining-something-to-female-teacher.jpg?s=612x612&w=0&k=20&c=I5K1JIPSRCNJTMuhhW0VDEmx9qiPUi7i7o_8BDKZG9g="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1428801936/photo/female-university-student-tutors-female-high-school-student.jpg?s=612x612&w=0&k=20&c=yit-c3I8XydezO2ccqfnhNbDnUtYEqf8Y-iLxk7DlOE="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1130407049/photo/tutor-working-with-middle-school-student.jpg?s=612x612&w=0&k=20&c=hDsfr_98PPCbSNP8r2YFKhsmUkj9WPi6lYCf-l0n9xs="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;