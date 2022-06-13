const menu = document.getElementById("menu");
const button = document.getElementById("button");
button.addEventListener("click", function(){
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
];

function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div class="grid md:grid-cols-[246px,auto] gap-8 leading-[30px] space-y-8 py-3 border-b py-7  ">
        <div class="product-img" >
            <a  href="./products.html?id=${product.id}">
                <img class="w-full hover:border-4 hover:rounded-xl hover:border-blue-500 md:h-[200px] md:w-[246px]" src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content  inline-block w-full column shadow transition space-y-2 hover:shadow-xl h-35 px-2">
            <h3><a class="text-[30px] font-bold " href="./products.html?id=${product.id}">${product.name}</a></h3>
               <div>
               <span class="font-bold bg-[#142850] rounded-full text-white mt-10 px-3 py-1" > ${product.time}</span>
               <span class="font-bold text-[#D9D9D9] mt-10" > ${product.content}</span>
               </div>
               <div class=""><a class=" text-[14px] py-3" >
               ${product.type}
               </a>
               </div>
            
        </div>
    </div>
        `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);