// danh sách san pham 

//https://636f84cebb9cf402c81976f9.mockapi.io/api/QLSP

function SanPhamService () {

    this.layDanhSachSP = function () {

       return axios({
            method: 'get',
            url: 'https://636f84cebb9cf402c81976f9.mockapi.io/api/QLSP',
            
          })
    }
}