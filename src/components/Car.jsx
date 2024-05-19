import React from "react";

const Car = () => {
  return (
    <>
      <div>
        <div className="w-96 mx-auto">
          <h1>Audi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam,
            earum, suscipit laudantium quae ab consequuntur perferendis rem
            aperiam unde maxime a porro alias temporibus. Voluptas corporis, a
            dolore et odio labore deleniti reiciendis voluptatem blanditiis
            accusamus, assumenda nemo ad aliquid obcaecati praesentium velit.
            Nobis!
          </p>
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="640"
            height="426"
            alt="image de voiture"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Car;
