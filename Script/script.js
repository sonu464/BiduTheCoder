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
    github: "https://github.com/sonu464/E-Commerce",
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
             <h2>BestBookForYou</h2>
             <p>${item.decs}</p>
             <button class="livebtn">
               <a href=${item.link}>Live preview</a>
             </button>
             <button class="codebtn">
               <a href=${item.github}>code</a>
             </button>
           </div>
    `;
    projectContainer.appendChild(projectBox);
  });
};

createProjectBox();
