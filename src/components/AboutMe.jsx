import React from "react";
import manP from "../assets/man-png-image.avif";
function AboutMe(props) {
  return (
    <div className="bg-gray-200 h-full flex justify-center items-center" id="about">
      <div className="container mx-auto my-8 px-4">
      <div className="flex items-center justify-center gap-4">
        <div className="flex-1 border-t border-gray-500"></div>
        <h2 className="text-center text-2xl font-semibold text-gray-800 whitespace-nowrap">
          About Me
        </h2>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <div className="mt-5 flex flex-col-reverse sm:flex-row justify-around items-center gap-8 px-4">
        <p className="w-full lg:w-1/2 text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ullam
          quibusdam labore expedita sit velit porro perspiciatis laboriosam
          assumenda maxime officiis accusamus quia temporibus reiciendis
          explicabo ab rem, aliquam quasi.
          <br />
          <br />
          Qui omnis, consequuntur perferendis repellendus necessitatibus
          reiciendis eveniet sint nihil repudiandae ipsum culpa, cupiditate
          maiores, sapiente obcaecati. Labore sequi provident maiores natus et
          id hic laboriosam iure sunt perspiciatis repudiandae asperiores eos
          quo quaerat quae voluptatibus quos rerum tempora delectus animi, ad
          exercitationem, illum, ducimus recusandae.
          <br />
          <br />
          Omnis deleniti, mollitia culpa cupiditate, aliquid incidunt minus
          itaque explicabo amet corrupti accusamus optio? Voluptas fugit unde
          voluptatibus tempore facere molestias laboriosam quo ducimus?
        </p>

        <img src={manP} alt="sectionimage" className="w-64 sm:w-80 h-auto" />
      </div>
    </div>
    </div>
  );
}

export default AboutMe;
