import { Link } from "react-router-dom";

const Team = () => {
  const names = [
    {
      id: 1,
      img: "./Mayar.jpg",
      name: "Mayar Mohamed",
      role: "Frontend developer",
      github: "https://github.com/Mayar103",
      linkedin: "https://www.linkedin.com/in/mayar-mohamed-362b99168/",
    },
    {
      id: 2,
      // img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      img: "https://media.licdn.com/dms/image/D4D03AQEMTfA4nZLlBQ/profile-displayphoto-shrink_400_400/0/1687726472789?e=1694044800&v=beta&t=jmc_2z-2kJeb4beGCv_PfhAYQZegk8Rb6sBf8AIj9Ek",
      // img:"https://img.freepik.com/free-photo/modern-muslim-woman-hijab-office-room_285396-11089.jpg?w=826&t=st=1687214513~exp=1687215113~hmac=37ee5fbf041cf71f7c2d69fe44070f1874dc5116f2024480383f110d8bdce1f6",
      name: "Zeinab Mohamed",
      role: "Frontend developer",
      github: "https://github.com/zenab12",
      linkedin: "https://www.linkedin.com/in/zienabmuhammad/",
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2F51724572-9081-4fb2-80e0-7726029d7c07-IMG_4774.jpeg?alt=media&token=318cb9a3-e8be-480c-b179-d143b679fc5b",
      name: "Rahma Hanafi",
      role: "Frontend developer",
      github: "https://github.com/RahmaHanafi",
      linkedin: "https://www.linkedin.com/in/rahma-hanafi/",
    },
    {
      id: 4,
      img: "./Naiem.jpg",
      name: "Mohamed Naiem",
      role: "Frontend developer",
      github: "https://github.com/mohamedNaiem2000",
      linkedin: "https://www.linkedin.com/in/mohamed-naiem-883a78227",
    },
    {
      id: 5,
      img: "./yahia.jpg",
      name: "Mohamed Yahia",
      role: "Fullstack developer",
      github: "https://github.com/0xYahia",
      linkedin: "https://www.linkedin.com/in/mohamdyahia/",
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
              <a href={name.github} target="_blank">
                <div className=" hidden btn-circle bg-white btn-md  absolute group-hover:flex group-hover:justify-center group-hover:items-center  animate-wiggle top-4 right-4">
                  <i className="fa-brands fa-github text-xl text-primary"></i>
                </div>
              </a>
              <a href={name.linkedin} target="_blank">
                <div className=" hidden btn-circle bg-white btn-md  absolute group-hover:flex group-hover:justify-center group-hover:items-center  animate-wiggle top-20 right-4">
                  <i className="fa-brands fa-linkedin text-xl text-primary"></i>
                </div>
              </a>
            </div>

            <div className="px-3 pb-5">
              <h1 className=" text-lg font text-center group-hover:text-secondary ease-in duration-200">
                {name.name}
              </h1>
              <p className="text-stone-500 text-center text-base font-normal">
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
