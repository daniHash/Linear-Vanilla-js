let $ = document;

let createTlBtn = $.getElementById("createTlBtn");
let createTlModal = $.getElementById("createTlModal");
let title = $.getElementById("Title");
let category = $.getElementById("category");
let startDate = $.getElementById("start-date");
let endDate = $.getElementById("end-date");
let description = $.getElementById("description");
let deslenght = $.getElementById("deslenght");
let tagContainer = $.getElementById("tagcontainer");
let tagPar = $.getElementById("tagPar");
let addTagBtn = $.getElementById("add-tag-btn");
let max = description.getAttribute("maxlength");
let tagInp = document.getElementById("tagInp");

const close = (elem) => {
  elem.style.display = "none";
};
const saveTimelinToDB = () => {
  if (title.value && startDate.value && endDate.value) {
    close(createTlModal);
    renderTimeline(); // << add this
  } else {
    alert("Please Enter All Information Completely.");
  }
};
const calcutDesLenght = (e) => {
  let finalVal = max - description.value.length;

  if (finalVal < 100 && finalVal >= 50) {
    deslenght.style.color = "yellow";
  } else if (finalVal < 50 && finalVal > 0) {
    deslenght.style.color = "orange";
  } else if (finalVal === 0) {
    deslenght.style.color = "red";
  } else {
    deslenght.style.color = "#05df72";
  }
  deslenght.innerText = `${finalVal} Characters Remaining`;
};
const addTag = () => {
  tagInp.style.display = "block";
  addTagBtn.style.display = "none";
};
const finalAddTag = (e) => {
  if (e.key === "Enter") {
    if (tagContainer.children.length < 4) {
      tagContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="text-blue-500 px-1 py-1 rounded-md">#${
          document.getElementById("tagInp").value
        }</div>`,
      );
      document.getElementById("tagInp").style.display = "none";
      addTagBtn.style.display = "flex";
      tagInp.value = "";
    } else {
      alert("You cant add more 4 tags");
      document.getElementById("tagInp").style.display = "none";
      addTagBtn.style.display = "flex";
      tagInp.value = "";
    }
  }
};
addTagBtn.addEventListener("click", addTag);
createTlBtn.addEventListener("click", () => saveTimelinToDB());
description.addEventListener("keyup", () => calcutDesLenght(event));
// let timelineData = { events: [] };

// const renderTimeline = () => {
//   timelineData = {
//     title: title.value,
//     start: new Date(startDate.value),
//     end: new Date(endDate.value),
//     category: category.value,
//     description: description.value,
//     events: [],
//   };

//   const container = document.getElementById("timeline-output");
//   container.innerHTML = `
//     <div class="bg-[var(--btncol)] text-[var(--bgmcol)] w-full max-w-4xl rounded-3xl shadow-xl p-6 text-center space-y-4 animate-fadeIn">
//       <h2 class="text-3xl font-bold">${timelineData.title}</h2>
//       <p class="text-md font-semibold">📅 ${startDate.value} → ${endDate.value}</p>
//       ${timelineData.category ? `<p class="italic">📂 ${timelineData.category}</p>` : ""}
//       ${timelineData.description ? `<p class="text-sm">📝 ${timelineData.description}</p>` : ""}

//       <div class="relative w-full h-3 bg-[var(--bgmcol)] rounded-full mt-6 mb-4" id="timeline-bar"></div>
//       <div id="timeline-events" class="relative w-full h-12"></div>
//     </div>
//   `;

//   document.getElementById("event-form").style.display = "flex";
// };

// const renderEvent = (event) => {
//   const timelineLength = timelineData.end - timelineData.start;
//   const eventOffset = new Date(event.date) - timelineData.start;
//   const percent = (eventOffset / timelineLength) * 100;

//   const eventDiv = document.createElement("div");
//   eventDiv.className = "absolute -top-3 text-center";
//   eventDiv.style.left = `${percent}%`;
//   eventDiv.innerHTML = `
//     <div class="text-xs font-bold text-[var(--btncol)] transform -translate-x-1/2 bg-[var(--bgmcol)] px-2 py-1 rounded-md shadow-md">
//       ${event.title}
//       <div class="text-[10px]">${event.date}</div>
//     </div>
//   `;

//   document.getElementById("timeline-events").appendChild(eventDiv);
// };

// document.getElementById("add-event-btn").addEventListener("click", () => {
//   const eventTitle = document.getElementById("event-title").value.trim();
//   const eventDate = document.getElementById("event-date").value;

//   if (!eventTitle || !eventDate) {
//     alert("Please enter event title and date.");
//     return;
//   }

//   const eventObj = { title: eventTitle, date: eventDate };
//   timelineData.events.push(eventObj);
//   renderEvent(eventObj);

//   // Clear input
//   document.getElementById("event-title").value = "";
//   document.getElementById("event-date").value = "";
// });
let timelineData = { events: [] };

// Show timeline
const renderTimeline = () => {
  timelineData = {
    title: title.value,
    start: new Date(startDate.value),
    end: new Date(endDate.value),
    category: category.value,
    description: description.value,
    events: [],
  };

  const container = document.getElementById("timeline-output");
  const today = new Date();
  const totalLength = timelineData.end - timelineData.start;
  const progress =
    Math.min(Math.max((today - timelineData.start) / totalLength, 0), 1) * 100;

  container.innerHTML = `
    <div class="bg-[var(--btncol)] text-[var(--bgmcol)] w-full max-w-4xl rounded-3xl shadow-xl p-6 text-center space-y-4 animate-fadeIn relative">
      <h2 class="text-3xl font-bold">${timelineData.title}</h2>
      <p class="text-md font-semibold">📅 <span class="font-bold">Start:</span> ${startDate.value} → <span class="font-bold">End:</span> ${endDate.value}</p>

${timelineData.category ? `<p class="italic">📂 <span class="font-bold">Category:</span> ${timelineData.category}</p>` : ""}

${timelineData.description ? `<p class="text-sm">📝 <span class="font-bold">Description:</span> ${timelineData.description}</p>` : ""}

${
  document.getElementById("tagcontainer").children.length > 0
    ? `
  <p class="text-sm text-blue-400 font-bold">🏷️ Tags
    
  </p>
`
    : ""
}
<div class="flex flex-wrap justify-center items-center gap-2 mt-2">
  ${Array.from(document.getElementById("tagcontainer").children)
    .map(
      (tagEl) =>
        `<div class="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">#${tagEl.textContent.replace(/^#/, "")}</div>`,
    )
    .join("")}
</div>


          <div class="relative w-full h-4 bg-[var(--bgmcol)] rounded-full mt-6 mb-4 overflow-hidden">
            <div id="progress-bar" class="absolute top-0 left-0 h-full bg-green-400 rounded-full" style="width: 0%;"></div>
          </div>

      <div id="timeline-events" class="relative w-full h-12"></div>
      <div id="timeline-labels" class="relative w-full flex justify-between text-xs text-white mt-2 px-1">
        ${generateDateLabels(timelineData.start, timelineData.end)}
      </div>
    </div>
  `;
  setTimeout(() => {
    document.getElementById("progress-bar").style.transition =
      "width 1s ease-in-out";
    document.getElementById("progress-bar").style.width = `${progress}%`;
  }, 100); // Delay ensures transition kicks in

  document.getElementById("add-event-container").style.display = "flex";
};
const renderEvents = (events) => {
  const container = document.getElementById("timeline-events");
  container.innerHTML = "";

  const timelineLength = timelineData.end - timelineData.start;
  const timelineWidth = container.offsetWidth || 800; // fallback if not rendered yet
  const eventWidth = 100; // approx width of each event block in px
  const rowHeight = 60;

  const rows = []; // Array of arrays, each holding [startPixel, endPixel] ranges per row

  events.forEach((event) => {
    const eventOffset = new Date(event.date) - timelineData.start;
    const percent = eventOffset / timelineLength;
    const leftPx = percent * timelineWidth;

    let rowIndex = 0;

    // Try to find a row that doesn't conflict
    while (true) {
      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
        break;
      }

      const collision = rows[rowIndex].some(
        ([start, end]) => !(leftPx + eventWidth < start || leftPx > end),
      );

      if (!collision) break;

      rowIndex++;
    }

    // Mark this range as taken in this row
    rows[rowIndex].push([leftPx, leftPx + eventWidth]);

    // Create the event element
    const eventDiv = document.createElement("div");
    eventDiv.className = "absolute text-center group z-10";
    eventDiv.style.position = "absolute";
    eventDiv.style.zIndex = 10;

    eventDiv.style.left = `${percent * 100}%`;
    eventDiv.style.top = `${rowIndex * rowHeight}px`;

    eventDiv.innerHTML = `
      <div class="absolute bottom-full mb-2 w-56 text-xs text-white bg-black px-3 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:z-50 z-10 transition duration-300 left-1/2 transform -translate-x-1/2">
        ${event.description ? `<div class="mb-1">${event.description}</div>` : ""}
        <button class="mt-1 underline text-blue-400 hover:text-blue-200" onclick="editEvent('${event.title}', '${event.date}', \`${event.description || ""}\`)">✏️ Edit</button>
      </div>
      <div class="text-xs font-bold text-[var(--btncol)] transform -translate-x-1/2 bg-[var(--bgmcol)] px-2 py-1 rounded-md shadow-md cursor-pointer">
        ${event.title}
        <div class="text-[10px]">${event.date}</div>
      </div>
    `;

    container.appendChild(eventDiv);
  });

  container.style.height = `${(rows.length + 1) * rowHeight}px`;
};

// Buttons & form toggling
document.getElementById("show-event-form-btn").addEventListener("click", () => {
  const form = document.getElementById("event-form");
  const timeline = document.querySelector("#timeline-output > div");
  form.style.backgroundColor = getComputedStyle(timeline).backgroundColor;
  form.classList.remove("hidden");
});

document.getElementById("cancel-event").addEventListener("click", () => {
  document.getElementById("event-form").classList.add("hidden");
});

document.getElementById("submit-event").addEventListener("click", (e) => {
  const eventTitle = document.getElementById("event-title").value.trim();
  const eventDate = document.getElementById("event-date").value;

  if (!eventTitle || !eventDate) {
    alert("Please fill in both fields.");
    return;
  }

  const eventDescription = document
    .getElementById("event-description")
    .value.trim();
  const eventObj = {
    title: eventTitle,
    date: eventDate,
    description: eventDescription,
  };

  timelineData.events.push(eventObj);
  renderEvents(timelineData.events);

  // Reset and hide form
  document.getElementById("event-form").classList.add("hidden");
  document.getElementById("event-title").value = "";
  document.getElementById("event-date").value = "";
  document.getElementById("event-description").value = "";
});
const generateDateLabels = (start, end) => {
  const days = [];
  const current = new Date(start);
  while (current <= end) {
    const label = `${current.getDate().toString().padStart(2, "0")} ${current.toLocaleString("default", { month: "short" })}`;
    days.push(`<div>${label}</div>`);
    current.setDate(current.getDate() + 1);
  }
  return days.join("");
};
window.editEvent = (title, date, description) => {
  document.getElementById("event-title").value = title;
  document.getElementById("event-date").value = date;
  document.getElementById("event-description").value = description;
  document.getElementById("event-form").classList.remove("hidden");

  // Remove the original so we can replace it
  timelineData.events = timelineData.events.filter(
    (e) => !(e.title === title && e.date === date),
  );
  document.getElementById("timeline-events").innerHTML = "";
  renderEvents(timelineData.events);
};
