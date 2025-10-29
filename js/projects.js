// first create a object to store all the project data
const projectsData = {
  sortingVisualizer: {
    name: "Sorting Visualizer",
    img: "../images/projects/sort-visualizer.png",
    desc: "Visualize the Sorting Algorithm Built in js with no lib",
    github: "CYCNO/sorting-visualiser",
    url: "https://cycno.is-a.dev/sorting-visualiser/"
  },
  laukey: {
    name: "Laukey",
    img: "https://errorly.github.io/laukey_applications/laukeypreview.png",
    desc: "A Feature Rich Password Manager with Beutiful UI with lots of features and A Good Security For Windows And Linux",
    github: "ERRORLY/Laukey",
    url: "https://errorly.github.io/Laukey"
  },
  wodo: {
    name: "WODO",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgethired.id%2Fblog%2Fwp-content%2Fuploads%2F2022%2F09%2Ftips-belajar-coding-pemula.jpg&f=1&nofb=1&ipt=6ef9b0c6e0cc6f9bc6838e0858a805131ec28c7d9bae123dd24ae4149fe6502b",
    desc: "A Simple yet Powerful Tool to manage your todos",
    github: "CYCNO/wodo",
  },
  somecode: {
    name: "SomeCode",
    img: "https://errorly.github.io/sumcodepreview.png",
    desc: "A website to generate Snippet of Code For Free, and the website is also opensource for anyone to look in the code",
    github: "ERRORLY/sumcode.site",
    url: "https://sumcode.site"
  },
  minimath: {
    name: "MiniMath",
    img: "https://github.com/CYCNO/minimath/raw/main/image/logo.png",
    desc: "A Simple math Lib purely built in python without any external lib like math",
    github: "CYCNO/minimath"
  },
  popGame: {
    name: "Population Game",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F05%2F04%2F07%2F54%2Fpopulation-1370977_640.jpg",
    desc: "This is a fun web-based game where players have to guess which country has a higher or lower population",
    github: "CYCNO/Population-Game",
    url: "https://cycno.is-a.dev/Population-Game/"
  },
  bms: {
    name: "Bulk Mail Sender",
    img: "https://camo.githubusercontent.com/2353aef9aad02a486331617a0f1bb88c3540a71479e71a3378c5d5b59628334a/68747470733a2f2f692e696d6775722e636f6d2f73417131474b4b2e706e67",
    desc: "Send Mail In Bulk In Gmail Using Python With Full Customization And No Limit",
    github:"CYCNO/bulk-mail-sender"
  }
};

const projectsContainer = document.getElementById("projects");

// it will add the box for each object value
Object.entries(projectsData).forEach(([k, v]) => {
  
  // this will only add given data, e.g. it will not add github url if it's not given  
  projectsContainer.innerHTML += `
    <div
        class="bg-[#313131] hover:bg-[#313131c3] transition duration-500 ease-in-out hover:border-[#afb3bb] w-[350px] h-[300px] rounded-md border border-[#727c90] overflow-hidden"
        >
        <img
            class="h-[50%] object-cover w-full"
            src="${v.img}"
        />
        <div class="h-[50%] w-full px-4 py-3 space-y-2">
            <h1
            class="text-white underline decoration-yellow-300 text-2xl font-poppins font-medium"
            >
                ${v.name}
            </h1>
            <p class="text-gray-300 text-sm h-[35px]">
                ${v.desc}
            </p>
            <div class="flex justify-end px-4 pt-2 space-x-2">
                ${v.github ? `<a href="https://github.com/${v.github}"><img src="images/logos/github.png" alt="" /></a>` : ""}
                ${v.url ? `<a href="${v.url}"><img height=50 widht=50 src="images/logos/website.png" alt="" /></a>` : ""}
            </div>
        </div>
    </div>
    `;
});