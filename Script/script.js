const projectContainer = document.getElementById("project-container");
const hemburger = document.getElementById("hemburger");
const menubar = document.getElementById("menubar");

// ---------------- Menu Bar ------------------
const showMenu = () => {
  menubar.classList.toggle("show");
};

hemburger.addEventListener("click", showMenu);

const projects = [
  {
    projectName: "BestBooksForYou",
    img: "projectImg/bookstore.png",
    decs: "This Project is based on HTML CSS and JAVASCRIPT ",
    link: "https://bestbooksforyou.netlify.app",
    github: "https://github.com/sonu464/Book-Ecommerce",
  },
  {
    projectName: "BiduClothes",
    img: "projectImg/biduclothes.png",
    decs: "This Project is based on Reactjs ",
    link: "https://biduclothes.netlify.app",
    github: "https://github.com/sonu464/react-cloth-ecommerce",
  },
  { 
     projectName: "Reservation Web", 
     img: "projectImg/biduclothes.png", 
     decs: "This Project is based on Reactjs", 
     link: "https://reservationweb.netlify.app", 
     github: "https://github.com/sonu464/reservation-app", 
   },


];

const createProjectBox = () => {
  projects.map((item) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");
    projectBox.innerHTML = `
    
              <div class="p-img">
                   <img src=${item.img} alt="" />
              </div>
           <div class="p-info">
             <h2>${item.projectName}</h2>
             <p>${item.decs}</p>
            <div class="projectButton">
            <button class="livebtn">
            <a href=${item.link}>Live preview</a>
            </button>
            <button class="codebtn">
            <a href=${item.github}>code</a>
            </button>
            </div>
           </div>
    `;
    projectContainer.appendChild(projectBox);
  });
};

createProjectBox();
