


var spService = new SanPhamService();



function layDanhSachSanPham() {


spService.layDanhSachSP()
.then(function(results){
    // console.log(results.data)
    
    
    //* hien thi len table 
    hienThiTable(results.data);

    // const data = results.data;
    // const arrIphone = []
    // for(let i = 0; i < data.length; i ++) {
    //   if (data[i].type.toLowerCase() === 'iphone') {
    //     arrIphone.push(data[i])
    //   }
    // }
    // console.log(arrIphone);

})
.catch(function(erro){
    console.log("erro")

})}


layDanhSachSanPham(); 


//* hien thi len table 

function hienThiTable (mang) {
 var content = "";

 mang.map( function(sp) {
content += `  <div class="card  col-3  ">
<div>
            <div class="card__heart">
              <i class="bx bxs-heart"></i>
            </div>
            <div class="card__cart">
              <i class="bx bx-cart"></i>
            </div>
            <div class="card__img">
              <img
                src="${sp.img}"z
                alt=""
              />
            </div>
            <div class="card__mid">
              <div class="card__title">${sp.name}</div>
              <div class="card__price">${sp.price}</div>
            </div>
            <div class="card__bot">
              <div class="card__action">
                <button onclick='addCart (this)' >Add cart</button>
                <input type="number" value="0">
              </div>
            </div>
    </div>
    </div>
              
`
 })
 document.getElementById("tblDanhSachSP").innerHTML = content;
}





//** fillter

function filterIP () {
  
  spService.layDanhSachSP()
  .then(function(results){
      const data = results.data;
      const arrIphone = []
      for(let i = 0; i < data.length; i ++) {
        if (data[i].type.toLowerCase() === 'iphone') {
          arrIphone.push(data[i])
        }}
      // console.log(arrIphone)
      hienThiTable(arrIphone)
  })
  .catch(function(error){
    console.log("error")
  })
}
document.getElementById("fill-ip").onclick= filterIP;


function filterSSung () {
spService.layDanhSachSP()
.then(function(results){
  const data2 = results.data;
  const arrSamSung = [];
  for(let i=0; i < results.data.length; i++){
    if(data2[i].type==='Samsung') {
      arrSamSung.push(data2[i])
    };
    hienThiTable(arrSamSung);
  }
})
.catch(function(error){
  console.log("error")
})}

document.getElementById("fill-ss").onclick= filterSSung ;

function filterAll () {
  spService.layDanhSachSP()
  .then(function(results){ 
    hienThiTable(results.data)
  })
  .catch(function(error){
    console.log("error")
  })
  
  }

document.getElementById("fill-allBranch").onclick= filterAll ;


//* add cart
var gioHang =new Array();
function addCart (X) {
  var boxsp = X.parentElement.parentElement.parentElement.children;
  var img = boxsp[2].children[0].src;
  var name = boxsp[3].children[0].innerText;
  var price = boxsp[3].children[1].innerText;
  var amount = boxsp[4].children[0].children[1].value;
  // console.log(boxsp[4].children[0].children[1].value)
  // console.log(boxsp[2].children[0].src)
  // console.log(boxsp[3].children[0].innerText)
  // console.log(boxsp[3].children[1].innerText)
var sp = new Array(img,name,price,amount)
gioHang.push(sp)

cuontProduct ()
  };

  //* cuontProduct
  function cuontProduct () {

    document.getElementById("cuontProduct").innerHTML = gioHang.length;
  }
//* show my cart

function showMyCart () {
  var thongTinGioHang="";
  var tongTien = 0;
  for (var i=0; i<gioHang.length; i++) {

    var thanhTien = gioHang[i][2] * gioHang[i][3];
    tongTien += thanhTien
    thongTinGioHang += `
    <tr>
                <td>${i+1}</td>
                <td><img class="card__img2" src="${gioHang[i][0]}"></td>
                <td>${gioHang[i][1]}</td>
                <td>${gioHang[i][2]}</td>
                <td>${gioHang[i][3]}</td>
                <td>${thanhTien}</td>
              </tr>
    `}
    thongTinGioHang += `
    <tr>
    <th colspan="5"> Tong don hang</th>
    <th>
      <div>${tongTien}</div>
    </th>
  </tr>
    `
    document.getElementById("myCart").innerHTML = thongTinGioHang;
}


  //* ----- showcart---- 
// mac dinh 
  document.getElementById("showCart").style.display='none'

function showcart () {
  var show = document.getElementById("showCart");
  if (show.style.display == "block") {
    show.style.display = "none"
  }else{
    show.style.display = "block"
  }
  showMyCart ()
}