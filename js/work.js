const menu = document.getElementById("menu");
const button =document.getElementById("button");
button.addEventListener("click",function(){
    menu.classList.toggle("hidden");
});

const productList = [
    {
        id: 1,
        name: "Designing Dashboards",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939313/2022-06-11_4_ik29ll.png",
        time: 2020,
        content: "Dashboard",
        type: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        name: "Vibrant Portraits of 2020",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939313/2022-06-11_2_prib05.png",
        time: 2018,
        content: "Illustration",
        type: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 3,
        name: "36 Days of Malayalam type",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939312/2022-06-11_3_arifrt.png",
        time: 2018,
        content: "Typography",
        type: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 4,
        name: "Components",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939312/2022-06-11_1_offd6x.png",
        time: 2018,
        content: "Typography",
        type: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];
 
function showProducts(products){
    if(!Array.isArray(products) || products.length == 0) return false;
    let result ="";
    for(let i = 0; i< products.length; i++){
        const product = products[i];
        result +=`
        <div class="grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
          <div class="" >
             <a href="./products.html?id=${product.id}">
             <img class ="w-full md:w-[246px] hover:border-4 md:h-[200px] hover:border-blue-400 hover:rounded-xl" src="${product.img}">
             </a>
          </div>
          <div class="shadow hover:shadow-xl px-4">
            <h1><a href="./products.html?id=${product.id}" class="text-[#21243D] font-bold text-[24px] md:text-[30px]">${product.name}</a></h1>
            <div class="space-x-4 py-6">
              <span class="inline-block text-white bg-[#142850] font-bold rounded-full px-3 text-[20px]">${product.time}</span>
              <span class="text-[#D9D9D9] text-[20px]">${product.content}</span>
            </div>
            <p class="text-base">${product.type}</p>
          </div>
        </div>
        `;
    }
    return result;
}
document.getElementById("products").innerHTML = showProducts(productList);