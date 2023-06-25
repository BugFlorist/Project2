import React from "react";
import HomeCarousel from "../HomeCarousel";
import Cards from "../Cards";
import Reviews from "../Reviews";
import FAQ from "../FAQ";

function Home(){

    return(

        <div>
            <HomeCarousel />
            <h2 className="text-center">Connect with the best tutors in Ottawa</h2>
            <p className="text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                                        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                                        Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                                        sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>
            
            <div className="row">
                <div className="col-md-4">
                    <Cards image={'https://cdn-icons-png.flaticon.com/512/4693/4693477.png'} title={'Get help for your homework'} content={'Post your questions in our forums'} />

                </div>
                <div className="col-md-4">
                    <Cards image={'https://cdn-icons-png.flaticon.com/512/8812/8812435.png'} title={'Join Study Groups'} content={'We have plenty of groups for each course. Join the study groups that you want'} />
                    
                </div>
                <div className="col-md-4">
                    <Cards image={'https://cdn-icons-png.flaticon.com/512/3449/3449692.png'} title={'Book an appointment'} content={'Book an appointment with a tutor.'}/>
                    
                </div>

            </div>


            <div className="container mt-5">
                <h2>Our reviews</h2>

                <div className="mt-5">

                <Reviews name={'Bella'} stars={4} content={'This website has helped me alot during my exams.'} />
                
                </div>

                <div className="mt-5">
                <Reviews name={'David'} stars={3} content={'This website has helped me alot during my exams.'} />
                
                </div>
                
                <div className="mt-5">

                <Reviews name={'Alex'} stars={5} content={'This website has helped me alot during my exams.'} />
                
                </div>
                
                
            
            
            </div>

            <div className="container mt-5">
                <h2> Frequently Asked Questions</h2>
                <FAQ title={'question 1'} content = {'answer 1'} />
                <FAQ title={'question 2'} content = {'answer 2'} />
                <FAQ title={'question 3'} content = {'answer 3'} />
                <FAQ title={'question 4'} content = {'answer 4'} />
            </div>
            
        </div>

    );

}

export default Home;