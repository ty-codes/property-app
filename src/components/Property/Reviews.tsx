import styled from "styled-components";
import { useState } from "react";
import { device } from "../../constants";
import { StarFilled } from "@ant-design/icons";
import { obve1 } from "../../assets";

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
                    <Header>
                         <div>
                              <h5 className="primaryColor">Reviews</h5>
                              <h5 className="primaryColor">3.0</h5>
                         </div>

                         <div></div>
                    </Header>
                    <Review>

                         <div className="details">
                              <Avatar src={obve1} alt="avatar" />
                              <div>
                                   <Name>{placeholder?.name}</Name>
                                   <Date>{placeholder?.date}</Date>
                                   <><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></>
                              </div>

                         </div>
                         <p>{placeholder?.review}</p>
                    </Review>
                    <Review>

                         <div className="details">
                              <Avatar src={obve1} alt="avatar" />
                              <div>
                                   <Name>{placeholder?.name}</Name>
                                   <Date>{placeholder?.date}</Date>
                                   <><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></>
                              </div>

                         </div>
                         <p>{placeholder?.review}</p>
                    </Review>
                    <Review>

                         <div className="details">
                              <Avatar src={obve1} alt="avatar" />
                              <div>
                                   <Name>{placeholder?.name}</Name>
                                   <Date>{placeholder?.date}</Date>
                                   <><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></>
                              </div>

                         </div>
                         <p>{placeholder?.review}</p>
                    </Review>
                    <Review>

                         <div className="details">
                              <Avatar src={obve1} alt="avatar" />
                              <div>
                                   <Name>{placeholder?.name}</Name>
                                   <Date>{placeholder?.date}</Date>
                                   <><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></>
                              </div>

                         </div>
                         <p>{placeholder?.review}</p>
                    </Review>
               </ReviewsWrapper>
          </Wrapper>
     )
};

const Wrapper = styled.div`
     display: flex;
     justify-content: space-between;
     width: 100%;
     margin: 2em 0;

     @media ${device.isSmallDevice} {
          flex-direction: column;
     }
`

const ReviewInput = styled.div`
     width: 49%;

     h6 {
          fontsize: 0.7em;
     }

     h3 {
          margin: 0;
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

     @media ${device.isSmallDevice} {
          width: 100%;
     }

`;

const ReviewsWrapper = styled.div`
     width: 49%;
     height: 350px;
     overflow: hidden auto;

     @media ${device.isSmallDevice} {
          width: 100%;
     }
`;

const Review = styled.div`
     p {
          text-align: left;
          text-align: justify;
          font-weight: lighter;
          font-size: 12px;
          width: 100%;
          color: ${props => props.theme.fade};
          line-height: 1.7rem;
          margin: 0;
     }

     .details {
          display: flex;
          gap: 20px;
          align-items: center;

          svg {
               color: gold;
          }
          
     }
`;

const Header = styled.div`
     display: flex;
     justify-content: space-between;

     h5 {
          font-size: 15px;
          font-weight: 700;
     }
`;

const Name = styled.p`
     font-size: 13px;
     color: ${props => props.theme.primaryColor};
     font-weight: 600;
`;

const Date = styled.p`

`;

const Avatar = styled.img`
     width: 50px;
     height: 50px;
     border-radius: 50%;
     object-fit: cover;
`;
