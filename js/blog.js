const menu = document.getElementById("menu");
const button = document.getElementById("button");
button.addEventListener("click",function(){
    menu.classList.toggle("hidden");
});


const productList = [
    {
        id: 1,
        name: "UI Interactions of the week ",
        time: "12 Feb 2019",
        contact: "|",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        name: "UI Interactions of the week ",
        time: "12 Feb 2019",
        contact: "|",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 3,
        name: "UI Interactions of the week ",
        time: "12 Feb 2019",
        contact: "|",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 4,
        name: "UI Interactions of the week ",
        time: "12 Feb 2019",
        contact: "|",
        type: "Express, Handlebars",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

function showProducts(products) {
     if(!Array.isArray(products) || products.length == 0) return false;
     let result = "";
     for(let i = 0;i< products.length; i++){
          const product = products[i];
          result +=`
        <div class=" mt-10 border-b pb-7 shadow hover:shadow-xl px-3">
            <a href="" class="text-[26px] md:text-[30px] font-bold ">${product.name}</a>
            <div class="space-x-4">
                <span class="mt-2">${product.time}</span>
                <span>${product.contact}</span>
                <span class="text-[#8695A4] ">${product.type}</span>
            </div>
            <p class="mt-2">${product.content}</p>
        </div>
          `
     }
     return result;
};
document.getElementById("products").innerHTML = showProducts(productList);