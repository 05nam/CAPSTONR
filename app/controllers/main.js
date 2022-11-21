


var spService = new SanPhamService();


function layDanhSachSanPham() {


spService.layDanhSachSP()
.then(function(results){
    // console.log(results.data)

    //* hien thi len table 
    hienThiTable(results.data);
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
              <div class="card__price">$${sp.price}</div>
            </div>
            <div class="card__bot">
              <div class="card__action">
                <button>Add cart</button>
              </div>
            </div>
    </div>
    </div>
              
`
 })
 document.getElementById("tblDanhSachSP").innerHTML = content;
}

