const menu = document.getElementById("menu");
const button = document.getElementById("button");
button.addEventListener("click",function(){
    menu.classList.toggle("hidden");
});
const productList = [
    {
        id: 1,
        name: "Designing Dashboards",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939313/2022-06-11_4_ik29ll.png",
        time: 2020,
        type: "Dashboard",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        name: "Vibrant Portraits of 2020",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939313/2022-06-11_2_prib05.png",
        time: 2018,
        type: "Illustration",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 3,
        name: "36 Days of Malayalam type",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654939312/2022-06-11_3_arifrt.png",
        time: 2018,
        type: "Typography",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = ` <div>
    <h1 class="text-[30px] md:text-[34px] font-bold mt-4 w-[350px] md:w-[480px]">${product.name}</h1>
    <div class="mt-6">
      <span class="bg-red-400 rounded-xl text-white px-2 mt-5">${product.time}</span>
      <span class="mt-5 text-[18px]">${product.type}</span>
    </div>
    <p class="mt-5">${product.content}</p>
        </div>`;
    return result;
}

document.getElementById("detail").innerHTML = showProduct(productList);
