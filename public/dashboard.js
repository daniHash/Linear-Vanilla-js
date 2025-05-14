//variables
let $ = document
let showSideBar = $.getElementById("showSideBar")
let drawerNavigation = $.getElementById("drawer-navigation")
let svgside = $.querySelectorAll(".svgside")
let showProf = $.getElementById("showprof")
let profBox = $.getElementById("profbox")
let linearSide = $.getElementById("linearside")
let head = $.getElementById("head")
let head1 = $.getElementById("head1")
let main = $.getElementById("main")
let filterButton = $.getElementById("filterButton")
let filterDropdown = $.getElementById("filterDropdown")
let filterSelect = $.getElementById("filterSelect")
let createBtn = $.getElementById("createBtn")
let isSide = false

filterButton.addEventListener("click", () => {
    filterDropdown.classList.toggle("hidden")
})
filterSelect.addEventListener("change", () => {
    if (filterSelect.value === "startDate" || filterSelect.value === "endDate") {
        dateInput.classList.remove("hidden")
    } else {
        dateInput.classList.add("hidden")
    }
})

//sidebar show
svgside.forEach(svg => {
    svg.addEventListener("click", () => {
        head.classList.toggle("headtranslate")
        drawerNavigation.classList.toggle("sidebarshow")
        svg.classList.toggle("profsvg")
        main.classList.toggle("maintranslate")
    })
})
//profsection
showProf.addEventListener("click", () => {
    setTimeout(() => {
        profBox.classList.toggle('opacity-0');
        profBox.classList.toggle('scale-95');
        profBox.classList.toggle('opacity-100');
        profBox.classList.toggle('scale-100');
    }, 100);
    profBox.classList.toggle('hidden');
    linearSide.classList.toggle("nonelin")
})

// createBtn.addEventListener("click" , () => {
//     location.href = 'http://127.0.0.1:5500/public/create'
// })