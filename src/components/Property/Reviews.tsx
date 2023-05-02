import styled from "styled-components";
import { useState } from "react";

export default function Reviews(): JSX.Element {
     const [textLength, setTextLength] = useState<number>(0);

     const placeholder = {
          name: "ayodele",
          // use moment library for date & time
          date: "13/12/2010",
          time: "10.00AM",
          rating: 5,
          review: `
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Aperiam incidunt, veritatis quis natus cupiditate odit! Nisi quae exercitationem nobis sed voluptate enim sint ipsam cupiditate blanditiis eaque, aliquid harum fugit!
          `
     }

     return (
          <Wrapper>
               <ReviewInput>
                    <h3>Leave a review</h3>
                    <h6>{textLength}/100</h6>
                    <textarea maxLength={100} onChange={(e) => setTextLength(e?.target?.value?.length)} />
                    <button className="button filled_btn">Leave review</button>
               </ReviewInput>
               <ReviewsWrapper>
                    {Array(5).map((review) => 
                         <p>hey</p>
                    )}
                    <Review>
                         <Header>
                              <div>
                                   <h5 className="primaryColor">Reviews</h5>
                                   <h5 className="primaryColor">3.0</h5>
                              </div>

                              <div>group of pics</div>
                         </Header>
                         <div className="details">
                              <Avatar />
                              <div>
                                   <Name></Name>
                                   <Date></Date>
                                   <>stars</>
                              </div>
                              <p></p>
                         </div>
                    </Review>
               </ReviewsWrapper>
          </Wrapper>
     )
};

const Wrapper = styled.div`
     display: flex;
     justify-content: space-between;
     width: 100%;
`

const ReviewInput = styled.div`
     width: 49%;

     h6 {
          fontsize: 0.7em;
     }

     textarea {
          height: 200px;
          background-color: #fafafa;
          width: 100%;
          border: none;
          color: #131313;
          border-radius: 4px;
     }

     textarea:focus, textarea:active {
          outline: 1px solid ${props => props.theme.secondaryColor};
     }

     button {
          text-transform: capitalize;
          display: flex;
          width: 80%;
          justify-content: center;
          align-items: center;
          margin: 1em auto;

     }

`;

const ReviewsWrapper = styled.div`
     width: 49%;
`;

const Review = styled.div`

`;

const Header = styled.div`
     display: flex;
`;

const Name = styled.p`

`;

const Date = styled.p`

`;

const Avatar = styled.img`

`
