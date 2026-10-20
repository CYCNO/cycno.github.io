// first create a object to store all the project data
const projectsData = {
  mnistFromScratch: {
    name: "Mnist Model From Scratch",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/MNIST_dataset_example.png",
    desc: "A hand written number prediction model written from scratch in python that uses mnist dataset",
    github: "CYCNO/Mnist-From-Scratch",
    tag:"ml",
    pins: true,

  },
  scheem: {
    name: "Scheem",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Two-layer_feedforward_artificial_neural_network.png",
    desc: "Scheem is a lightweight, from-scratch neural network framework built entirely in Python without using any external library",
    github: "CYCNO/Scheem",
    tag: "ml",
    pins: true,
  },
  supervisedFromScratch: {
    name: "Supervised From Scratch",
    img: "https://imgs.search.brave.com/MzFSboWHApW7V1GNlI4fUjPckcOpkdKZ_IMSqvLjGnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L25TUUk0dUk5dXh6/MkhKMGtFeVdWcXlH/a1NGYy5wbmc",
    desc: "Almost all the relevant supervise models built from scratch using math",
    github: "CYCNO/Supervise-Models-From-Scratch",
    tag:"ml",
    pins: true,
  },
  bintoo: {
    name: "Bintoo",
    img: "https://errorly.github.io/bintoo-banner.png",
    desc: "A Minecraft server manager, that can host and manage servers locally",
    github: "ERRORLY/bintoo-website",
    url: "https://bintoo.xyz",
    tag: "software",
    pins: true,
  },
  laukey: {
    name: "Laukey",
    img: "https://errorly.github.io/laukey_applications/laukeypreview.png",
    desc: "A Feature Rich Password Manager with Beutiful UI with lots of features and A Good Security For Windows And Linux",
    github: "ERRORLY/Laukey",
    url: "https://errorly.github.io/Laukey",
    tag: "software",
    pins: true,
  },
  rtiRedesign: {
    name: "RTI WebRedesign",
    img: "https://github.com/CYCNO/RTI-Web-Redesign/raw/main/github/screenshot/1.png",
    desc: "A Modern Redesign of Right to Information Website of India, Built for Hackathon",
    github: "CYCNO/RTI-Web-Redesign",
    url: "https://rti-web-redesign.vercel.app/",
    tag: "software",
  },
  wodo: {
    name: "WODO",
    img: "https://imgs.search.brave.com/J8gFNdyVFr6rE9e3-1LqY0PBa6zfNnKBfLrbBWXVBMQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/MDUzMDc5Mi92ZWN0/b3IvYnVzaW5lc3Mt/bWVldGluZy1hZ2Vu/ZGEtYW5kLXN0cmF0/ZWd5LXBsYW5uaW5n/LXRlYW13b3JrLWNv/bW11bmljYXRpb24t/d2l0aC1jaGVja2xp/c3QtYW5kLXRvLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1G/RTI3c0xkTi1raXI0/eU9sR1FWSF9nbE5P/Vlp4WDNybjJfZFVh/WjRfcWNjPQ",
    desc: "A Simple yet Powerful Tool to manage your todos in branches within cli",
    github: "CYCNO/wodo",
    tag: "utils"
  },
  sortingVisualizer: {
    name: "Sorting Visualizer",
    img: "https://github.com/CYCNO/sorting-visualiser/raw/main/images/readme/ss.png",
    desc: "Visualize the Sorting Algorithm Built in js with no lib",
    github: "CYCNO/sorting-visualiser",
    url: "https://cycno.is-a.dev/sorting-visualiser/",
    tag: "utils"
  },
  minimath: {
    name: "MiniMath",
    img: "https://github.com/CYCNO/minimath/raw/main/image/logo.png",
    desc: "A Simple math Lib purely built in python without any external lib like math",
    github: "CYCNO/minimath",
    tag: "utils",
    pins: true,
  },
  popGame: {
    name: "Population Game",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F05%2F04%2F07%2F54%2Fpopulation-1370977_640.jpg",
    desc: "This is a fun web-based game where players have to guess which country has a higher or lower population",
    github: "CYCNO/Population-Game",
    url: "https://cycno.is-a.dev/Population-Game/",
    tag: "software"
  },
  cypher: {
    name: "CyPHER",
    img: "https://camo.githubusercontent.com/ae9c80fe255a13e9bce2ceb8c3e748fcaf089a223beb319c7e824b2503375af6/68747470733a2f2f692e696d6775722e636f6d2f6a7a67563449462e706e67",
    desc: "A Terminal Based Gui where you can find lots of tools to upload files, url shortner, ChatGptFree, Temp Mail and many more",
    github: "CYCNO/CyPHER",
    tag: "utils"
  },
  bms: {
    name: "Bulk Mail Sender",
    img: "https://camo.githubusercontent.com/5b0765d852e721284a5318b21cdfd9aee0a2d5e4330b9ccfa29035485b0fe091/68747470733a2f2f692e696d6775722e636f6d2f73417131474b4b2e706e67",
    desc: "Send Mail In Bulk In Gmail Using Python With Full Customization And No Limit",
    github: "CYCNO/bulk-mail-sender",
    tag: "utils"
  },
};

const projectsContainer = document.getElementById("projects");
const navIds = ["nav-pins", "nav-all", "nav-ml", "nav-software", "nav-utils"];

function setActiveNav(activeId) {
  navIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const svg = el.querySelector("svg");
    if (id === activeId) {
      el.classList.remove("border-neutral-800");
      el.classList.add("border-yellow-300");
      if (svg) {
        svg.classList.remove("text-neutral-400");
        svg.classList.add("text-yellow-300");
      }
    } else {
      el.classList.remove("border-yellow-300");
      el.classList.add("border-neutral-800");
      if (svg) {
        svg.classList.remove("text-yellow-300");
        svg.classList.add("text-neutral-400");
      }
    }
  });
}

function refresh(tag) {
  setActiveNav(`nav-${tag}`);
  // Clear the container
  projectsContainer.innerHTML = "";

  // Filter and display projects matching currentSection
  Object.values(projectsData)
    .filter(project => {
      if (tag === "pins") return Boolean(project.pins);
      if (tag === "all") return true;
      return project.tag === tag;
    })
    .forEach(v => {
      projectsContainer.innerHTML += `
        <div
            class="bg-[#313131] hover:bg-[#313131c3] transition duration-500 ease-in-out hover:border-[#afb3bb] w-[350px] max-w-full h-[300px] rounded-md border border-[#727c90] overflow-hidden"
            >
            <a href="${v.url || `https://github.com/${v.github}`}" target="_blank">
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
            </a>
        </div>
        `;
    });
}

// Event listeners
document.getElementById("nav-pins").addEventListener("click", () => {
  refresh("pins");
});

document.getElementById("nav-all").addEventListener("click", () => {
  refresh("all");
});

document.getElementById("nav-ml").addEventListener("click", () => {
  refresh("ml");
});

document.getElementById("nav-software").addEventListener("click", () => {
  refresh("software");
});

document.getElementById("nav-utils").addEventListener("click", () => {
  refresh("utils");
});

// Initial render
refresh("pins");