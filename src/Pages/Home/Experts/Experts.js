import React from "react";

import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.jpg";
import Expert from "../Expert/Expert";

const experts = [
  {
    id: 1,
    name: "Caleb Azumah Nelson",
    img: expert1,
    details:
      "Caleb Azumah Nelson’s debut is a tender and touching love story, beautifully told. Open Water explores the security and safety that love offers, but also its limitations when set alongside vulnerability triggered by violence, fear and loss.",
  },
  {
    id: 2,
    name: "Megan Nolan",
    img: expert2,
    details:
      "Megan Nolan’s debut novel started life as narrative nonfiction, exploring the destructive, desperate relationships she’d had in her teens and 20s. ",
  },
  {
    id: 3,
    name: "Melody Razak",
    img: expert3,
    details:
      "Melody Razak was born and brought up in west London. Her powerful and heartbreaking debut, Moth, tells the story of a liberal Brahmin family living in Delhi in the 1940s, during India’s independence and then partition.",
  },
  {
    id: 4,
    name: "Abigail Dean",
    img: expert4,
    details:
      "It was the prospect of her 30th birthday that spurred Abigail Dean to write her debut novel, Girl A. As a young girl, she was “constantly” writing stories and dreamed of becoming a novelist.",
  },
  {
    id: 5,
    name: "Ailsa McFarlane",
    img: expert5,
    details:
      "It’s a novel that’s in love with the idea of America, both contemporary in its concerns and deeply nostalgic, full of Edward Hopper diners and faded blue jeans.",
  },
  {
    id: 6,
    name: "Will Burns",
    img: expert6,
    details:
      "Will Burns is a poet whose first collection, Country Music, was published by Offord Road Books in 2019. He also recorded the album Chalk Hill Blue with the musician Hannah Peel, in which his poems were set to her music.",
  },
];

const Experts = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-primary text-center mt-5">Our Best Seller Authors</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
