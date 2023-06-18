import { Link } from "react-router-dom";

const Team = () => {
  const names = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Mayar Mohamed",
      role: "Frontend developer",
      github: "",
      linkedin: "",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Zeinab Mohamed",
      role: "Frontend developer",
      github: "",
      linkedin: "",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      name: "Rahma Hanafi",
      role: "Frontend developer",
      github: "https://github.com/RahmaHanafi",
      linkedin: "https://www.linkedin.com/in/rahma-hanafi/",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      name: "Mohamed Naiem",
      role: "Frontend developer",
      github: "",
      linkedin: "",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Mohamed Yahia",
      role: "Fullstack developer",
      github: "",
      linkedin: "",
    },
  ];
  return (
    <div className="max-sm:mx-[1rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[12rem] py-16">
      <h2 className="capitalize text-3xl text-center text-primary ">
        Our Team
      </h2>
      <h6 className="capitalize text-center text-lg font-normal pb-8 pt-2 text-gray-500 ">
        we feel proud of our expert team members.
      </h6>

      <div className=" flex flex-wrap justify-center gap-12 max-sm:gap-5">
        {names.map((name) => (
          <div
            className="xl:w-1/4 max-sm:w-11/12  sm:w-2/5 shadow-base bg-white rounded-lg group motion-safe:animate-wiggle"
            key={name.id}
          >
            <div className="relative overflow-hidden rounded-lg m-3 ">
              <img
                src={name.img}
                alt={name.name}
                className=" scale-100 group-hover:scale-110 cursor-pointer ease-in duration-300 object-cover w-full"
                style={{ height: "15rem" }}
              />
              <Link to={name.github} target="blank">
                <div className=" hidden btn-circle bg-white btn-md  absolute group-hover:flex group-hover:justify-center group-hover:items-center  animate-wiggle top-4 right-4">
                  <i className="fa-brands fa-github text-xl text-primary"></i>
                </div>
              </Link>
              <Link to={name.linkedin} target="blank">
                <div className=" hidden btn-circle bg-white btn-md  absolute group-hover:flex group-hover:justify-center group-hover:items-center  animate-wiggle top-20 right-4">
                  <i className="fa-brands fa-linkedin text-xl text-primary"></i>
                </div>
              </Link>
            </div>

            <div className="px-3 pb-5">
              <h1 className=" text-lg font group-hover:text-secondary ease-in duration-200">
                {name.name}
              </h1>
              <p className="text-stone-500 text-base font-normal">
                {name.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className=" flex flex-wrap justify-center gap-20">
  {names.map((name) => (
    <div className="w-1/5 group" key={name.id}>
      <div className={`${name.img} w-full h-64 bg-cover rounded-xl`}>
        <div className="w-full h-full hidden group-hover:flex group-hover:justify-center group-hover:pt-2 group-hover:gap-2  group-hover:animate-wiggle group-hover:bg-black group-hover:bg-opacity-50 rounded-xl"></div>
      </div>

      <div className="w-10/12 shadow-xl relative bottom-8 mx-auto  -mb-8 bg-white p-4 rounded-xl">
        <h5 className="text-primary text-center capitalize text-base ">
          {name.name}
        </h5>
        <h6 className=" font-normal  text-center capitalize text-gray-600 text-sm">
          {name.role}
        </h6>
        <div className="flex justify-center">
          <Link to="https://github.com/RahmaHanafi" target="blank">
            <i className="fa-brands fa-github text-xl m-2 text-primary"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/rahma-hanafi/"
            target="blank"
          >
            <i className="fa-brands fa-linkedin text-xl m-2 text-primary"></i>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div> */}
    </div>
  );
};

export default Team;
